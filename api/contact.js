// Vercel Serverless Function — POST /api/contact
//
// Sends contact enquiries through Resend's REST API. Configure these
// environment variables in the Vercel project before using the form:
//
//   RESEND_API_KEY  (required)  API key from https://resend.com/api-keys
//   CONTACT_TO      (optional)  inbox that receives enquiries
//   CONTACT_FROM    (optional)  verified sender, e.g. "RIIT Website <hello@riitglobaltech.com>"
//
// Without RESEND_API_KEY the endpoint returns 503 and the website shows its
// mailto / WhatsApp fallback, so enquiries are never silently lost.

const DEFAULT_TO = "riitic51@gmail.com";
const DEFAULT_FROM = "RIIT Global Tech <onboarding@resend.dev>";

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function clean(value, max) {
  return String(value ?? "").replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max);
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method_not_allowed" });
  }

  let payload = req.body;
  if (typeof payload === "string") {
    try {
      payload = JSON.parse(payload);
    } catch {
      payload = Object.fromEntries(new URLSearchParams(payload));
    }
  }
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return res.status(400).json({ error: "invalid_body" });
  }

  // Honeypot filled by a bot: accept silently so it does not retry.
  if (clean(payload["bot-field"], 200)) {
    return res.status(200).json({ ok: true });
  }

  const name = clean(payload.name, 120);
  const email = clean(payload.email, 200);
  const phone = clean(payload.phone, 60);
  const organisation = clean(payload.organisation, 160);
  const interest = clean(payload.interest, 80) || "General enquiry";
  const message = clean(payload.message, 5000);
  const consent = payload.consent === true || payload.consent === "on" || payload.consent === "true";

  if (!name || !email || !message) {
    return res.status(400).json({ error: "missing_fields" });
  }
  if (!isEmail(email)) {
    return res.status(400).json({ error: "invalid_email" });
  }
  if (message.length < 10) {
    return res.status(400).json({ error: "message_too_short" });
  }
  if (!consent) {
    return res.status(400).json({ error: "consent_required" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("contact: RESEND_API_KEY is not configured");
    return res.status(503).json({ error: "email_not_configured" });
  }

  const to = process.env.CONTACT_TO || DEFAULT_TO;
  const from = process.env.CONTACT_FROM || DEFAULT_FROM;

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Organisation", organisation || "—"],
    ["Enquiry type", interest],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 16px 6px 0;color:#6b6b6b;font:13px/1.5 Arial,sans-serif;vertical-align:top">${label}</td><td style="padding:6px 0;color:#171819;font:13px/1.5 Arial,sans-serif">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  const html = `<!doctype html><html><body style="margin:0;padding:24px;background:#f4f1ea">
    <table role="presentation" style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e2ded5">
      <tr><td style="padding:24px 24px 8px">
        <p style="margin:0 0 4px;color:#b5121b;font:600 11px/1.4 Arial,sans-serif;letter-spacing:.18em;text-transform:uppercase">Website enquiry</p>
        <h1 style="margin:0 0 20px;color:#171819;font:600 22px/1.3 Georgia,serif">New message from ${escapeHtml(name)}</h1>
        <table role="presentation">${rows}</table>
      </td></tr>
      <tr><td style="padding:8px 24px 24px">
        <p style="margin:0 0 6px;color:#6b6b6b;font:600 11px/1.4 Arial,sans-serif;letter-spacing:.18em;text-transform:uppercase">Message</p>
        <div style="padding:16px;background:#f4f1ea;border-left:3px solid #ed5156;color:#171819;font:14px/1.7 Arial,sans-serif;white-space:pre-wrap">${escapeHtml(message)}</div>
      </td></tr>
      <tr><td style="padding:0 24px 24px">
        <p style="margin:0;color:#8a857c;font:12px/1.6 Arial,sans-serif">Sent from the contact form at riitglobaltech.com. Reply directly to this email to answer ${escapeHtml(name)}.</p>
      </td></tr>
    </table>
  </body></html>`;

  const text = [
    `New website enquiry — ${interest}`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || "—"}`,
    `Organisation: ${organisation || "—"}`,
    "",
    message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Website enquiry — ${interest} — ${name}`,
        html,
        text,
      }),
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("contact: Resend rejected the message", response.status, detail.slice(0, 500));
      return res.status(502).json({ error: "send_failed" });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("contact: sending failed", error);
    return res.status(502).json({ error: "send_failed" });
  }
}
