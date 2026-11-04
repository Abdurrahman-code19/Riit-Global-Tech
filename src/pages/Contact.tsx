import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CTASection } from "@/components/common/CTASection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { usePageMeta, breadcrumbSchema } from "@/hooks/usePageMeta";
import { site } from "@/data/site";

const contactSchema = [
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]),
  {
    "@type": "ContactPage",
    name: "Contact RIIT Global Tech",
    description:
      "Contact RIIT Global Tech in Ikotun, Lagos by phone, email or WhatsApp, or send an enquiry about services, equipment or Academy enrolment.",
    mainEntity: { "@id": `${site.url}/#organization` },
  },
];

const interests = [
  "General enquiry",
  "Networking",
  "CBT/CBE centre setup",
  "Website or software",
  "Equipment or repairs",
  "Academy enrolment",
];

const channelCopy = [
  {
    icon: Phone,
    label: "Call us",
    lines: site.phones.map((phone) => ({ text: phone.display, href: `tel:${phone.tel}` })),
  },
  {
    icon: Mail,
    label: "Email",
    lines: [{ text: site.email, href: `mailto:${site.email}` }],
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    lines: [{ text: site.whatsapp.display, href: site.whatsapp.href, external: true }],
  },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  usePageMeta({
    title: "Contact",
    description:
      "Contact RIIT Global Tech at 25, Ijegun Road, Oropo Bus Stop, Ikotun, Alimosho, Lagos. Call 0802 396 2693, email riitic51@gmail.com or send an enquiry.",
    path: "/contact",
    jsonLd: contactSchema,
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("bot-field")) {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("submitting");

    try {
      const body = Object.fromEntries(data.entries());

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) throw new Error(`Request failed with ${response.status}`);

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact RIIT"
        title={
          <>
            Start with a{" "}
            <span className="text-gradient-red">conversation.</span>
          </>
        }
        description="Tell us what you are trying to build, fix or learn. We will respond with the right next step — whether that is a site visit, a quote or advice on where to start."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        index="05"
      >
        <Button asChild size="lg">
          <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">
            <MessageCircle />
            Chat on WhatsApp
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href={`tel:${site.phones[0].tel}`}>
            <Phone />
            {site.phones[0].display}
          </a>
        </Button>
      </PageHero>

      <section className="section bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Send an enquiry"
                title={
                  <>
                    A few details{" "}
                    <span className="text-gradient-red">is enough to start.</span>
                  </>
                }
                description="Required fields are marked. We use your details only to respond to this enquiry."
              />

              <Reveal delay={0.08} className="mt-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <p className="hidden" aria-hidden="true">
                    <label>
                      Do not fill this out if you are human
                      <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Name <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-primary">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="0800 000 0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organisation">Organisation</Label>
                      <Input
                        id="organisation"
                        name="organisation"
                        type="text"
                        autoComplete="organization"
                        placeholder="School, business or team"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest">What is this about?</Label>
                    <select
                      id="interest"
                      name="interest"
                      defaultValue="General enquiry"
                      className="flex h-12 w-full rounded-[2px] border border-border bg-white/[0.03] px-4 text-sm text-foreground transition-colors focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
                    >
                      {interests.map((interest) => (
                        <option key={interest} value={interest} className="bg-[#0E0F10]">
                          {interest}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Message <span className="text-primary">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us what you need, the environment and any deadlines."
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 shrink-0 accent-[#ED5156]"
                    />
                    <Label htmlFor="consent" className="normal-case leading-relaxed tracking-normal text-muted-foreground">
                      I agree that RIIT Global Tech may use these details to respond to my enquiry.
                    </Label>
                  </div>

                  <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <Button type="submit" size="lg" disabled={status === "submitting"}>
                      {status === "submitting" ? "Sending…" : "Send enquiry"}
                      {status !== "submitting" && <ArrowUpRight />}
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Prefer email?{" "}
                      <a href={`mailto:${site.email}`} className="break-all text-primary hover:underline">
                        {site.email}
                      </a>
                    </p>
                  </div>

                  <div aria-live="polite" className="min-h-[1.5rem]">
                    {status === "success" && (
                      <p className="flex items-start gap-3 border border-[#25D366]/30 bg-[#25D366]/10 p-4 text-sm text-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" aria-hidden="true" />
                        Thank you — your enquiry has been sent. We will get back to you as soon as
                        possible. If it is urgent, call or message us on WhatsApp.
                      </p>
                    )}
                    {status === "error" && (
                      <p className="border border-primary/40 bg-primary/10 p-4 text-sm text-foreground">
                        The form could not be sent from your browser. Please email{" "}
                        <a href={`mailto:${site.email}`} className="break-all text-primary underline">
                          {site.email}
                        </a>{" "}
                        or message us on WhatsApp at {site.whatsapp.display}.
                      </p>
                    )}
                  </div>
                </form>
              </Reveal>
            </div>

            <aside className="lg:col-span-5">
              <div className="space-y-4">
                {channelCopy.map((channel, index) => {
                  const Icon = channel.icon;
                  return (
                    <Reveal key={channel.label} delay={index * 0.05} className="border border-border bg-card/40 p-6">
                      <div className="flex items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-white/[0.03] text-primary">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                            {channel.label}
                          </p>
                          <div className="mt-2 space-y-1">
                            {channel.lines.map((line) => (
                              <a
                                key={line.text}
                                href={line.href}
                                {...("external" in line && line.external
                                  ? { target: "_blank", rel: "noopener noreferrer" }
                                  : {})}
                                className="block break-words font-display text-lg font-medium tracking-tight text-foreground transition-colors hover:text-primary"
                              >
                                {line.text}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}

                <Reveal delay={0.15} className="border border-border bg-card/40 p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-white/[0.03] text-primary">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        Visit
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground">
                        {site.address.street}
                        <br />
                        {site.address.city}, {site.address.region}
                        <br />
                        {site.address.country}
                      </p>
                      <a
                        href={site.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex min-h-6 items-center gap-2 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-primary hover:underline"
                      >
                        Open in Google Maps
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.2} className="flex items-start gap-3 border border-border bg-card/30 p-5">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    Opening hours are not published online. Please call ahead before visiting so we
                    can confirm someone is available to help.
                  </p>
                </Reveal>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[#0B0C0D]">
        <div className="container-wide py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Find us — 25, Ijegun Road, Oropo Bus Stop, Ikotun, Lagos
            </p>
            <a
              href={site.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-6 items-center gap-2 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-primary"
            >
              Get directions
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
          <div className="relative mt-4 h-[22rem] w-full overflow-hidden border border-border bg-[#0B0C0D]">
            <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 p-7 sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center border border-border bg-white/[0.03] text-primary">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  RIIT Global Tech
                </p>
                <p className="mt-3 max-w-sm font-display text-xl font-medium leading-snug tracking-tight text-foreground">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region}
                </p>
              </div>
              <a
                href={site.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-4 py-2.5 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary/20"
              >
                Open in Google Maps
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
                The interactive map loads from Google. If it does not appear, use the link above
                for directions.
              </p>
            </div>
            <iframe
              title="Map showing RIIT Global Tech at 25 Ijegun Road, Oropo Bus Stop, Ikotun, Lagos"
              src={site.mapEmbed}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="relative z-10 h-full w-full border-0 contrast-[1.02]"
            />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Before you call"
        title="Have the basics ready, and we can move faster."
        description="A short description of the environment, what needs to work and your timeline is usually enough for us to advise on the next step."
      />
    </>
  );
}
