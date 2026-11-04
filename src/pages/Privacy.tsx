import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { CTASection } from "@/components/common/CTASection";
import { usePageMeta, breadcrumbSchema } from "@/hooks/usePageMeta";
import { site } from "@/data/site";

const privacySchema = [
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Privacy", path: "/privacy" },
  ]),
];

const sections = [
  {
    id: "what-we-collect",
    title: "1. Information we collect",
    body: [
      "When you submit the enquiry form on this website, we collect the details you provide: your name, email address, phone number, organisation (optional), the subject of your enquiry and your message.",
      "We also receive the confirmation that you consented to us using those details to respond. We do not ask for payment details through this website.",
      "Our hosting provider may record standard technical information such as the pages requested and the time of the request in server logs. This is used to keep the site available and secure.",
    ],
  },
  {
    id: "how-we-use-it",
    title: "2. How we use your information",
    body: [
      "We use enquiry details only to respond to your message, discuss the service or training you asked about, and keep a record of the conversation where needed to follow up.",
      "We do not sell your personal information. We do not add you to a marketing list without a separate, clear request from you.",
    ],
  },
  {
    id: "legal-basis",
    title: "3. Why we are allowed to use it",
    body: [
      "Where you submit an enquiry, we rely on your consent and on our legitimate interest in responding to a business or training request you initiated.",
      "Where we hold information because it forms part of a service record, we keep it only for as long as needed for that purpose or as required by applicable law.",
    ],
  },
  {
    id: "sharing",
    title: "4. Who may process it",
    body: [
      "This website is hosted on Netlify, which processes form submissions on our behalf so that enquiries reach us. Netlify may process technical data in the course of providing hosting.",
      "If you choose to open the embedded Google Map or follow a link to Google Maps, Google may process data under its own privacy policy. The map is loaded from Google's servers.",
      "We may share information with professional advisers or authorities where we are required to do so by law, or where necessary to establish or defend a legal claim.",
    ],
  },
  {
    id: "retention",
    title: "5. How long we keep it",
    body: [
      "Enquiry messages are kept for as long as needed to respond and to maintain a reasonable record of the enquiry. If an enquiry becomes a project or enrolment, relevant records may be kept for the duration of that relationship and for any period required by law.",
      "You can ask us to delete an enquiry you have sent, subject to any legal or contractual obligation to retain it.",
    ],
  },
  {
    id: "your-rights",
    title: "6. Your choices and rights",
    body: [
      "You can ask what personal information we hold about you, request a correction, or ask us to delete it. You can also withdraw consent to further contact about your enquiry.",
      `To make a request, email ${site.email} or call ${site.phones[0].display}. We may need to confirm your identity before acting on a request.`,
    ],
  },
  {
    id: "cookies",
    title: "7. Cookies and embedded content",
    body: [
      "This website does not set advertising or analytics cookies of its own. The contact page includes a Google Map embed; Google may set cookies or similar technologies when that embedded content loads.",
      "You can block third-party content in your browser settings. The rest of the site will continue to work, and the full address is shown in text next to the map.",
    ],
  },
  {
    id: "security",
    title: "8. Security",
    body: [
      "We take reasonable technical and organisational steps to protect information submitted through this site. No method of transmission over the internet is completely secure, so please avoid sending sensitive documents through the enquiry form unless we have agreed a safer route.",
    ],
  },
  {
    id: "changes",
    title: "9. Changes to this policy",
    body: [
      "If this policy changes, the updated version will be published on this page. The date at the top of the page shows when it was last revised.",
    ],
  },
  {
    id: "contact",
    title: "10. Contact",
    body: [
      `Questions about this policy can be sent to ${site.email}, or raised by phone on ${site.phones[0].display}. Our postal address is ${site.address.full}.`,
    ],
  },
];

const updated = "3 November 2026";

export default function Privacy() {
  usePageMeta({
    title: "Privacy Policy",
    description:
      "How RIIT Global Tech handles personal information submitted through this website, including enquiry form data, retention, your choices and embedded Google Maps content.",
    path: "/privacy",
    jsonLd: privacySchema,
  });

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Privacy policy</>}
        description="How RIIT Global Tech handles personal information submitted through this website, and the choices available to you."
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]}
        index="PP"
      />

      <section className="section bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <aside className="lg:col-span-4">
              <div className="sticky top-28">
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  On this page
                </p>
                <nav aria-label="Privacy policy sections" className="mt-5">
                  <ul className="space-y-2.5">
                    {sections.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <p className="mt-8 border-t border-border pt-5 text-xs text-muted-foreground">
                  Last updated: {updated}
                </p>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <Reveal className="border-l border-primary/40 pl-6">
                <p className="text-base leading-relaxed text-muted-foreground">
                  This policy describes how we handle information submitted through this website.
                  It does not replace any separate agreement you may have with RIIT Global Tech for
                  a service or training programme.
                </p>
              </Reveal>

              <div className="mt-10 space-y-10">
                {sections.map((section, index) => (
                  <Reveal key={section.id} delay={index * 0.02}>
                    <section id={section.id} className="scroll-mt-28">
                      <h2 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                        {section.title}
                      </h2>
                      <div className="mt-4 space-y-4">
                        {section.body.map((paragraph) => (
                          <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </section>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.05} className="mt-12 border-t border-border pt-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-muted-foreground">
                    See also our{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      terms of use
                    </Link>
                    .
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-primary"
                  >
                    Contact us
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Questions?"
        title="If anything here is unclear, ask us."
        description="We would rather answer a question directly than have you guess what happens to your information."
      />
    </>
  );
}
