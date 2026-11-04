import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { CTASection } from "@/components/common/CTASection";
import { usePageMeta, breadcrumbSchema } from "@/hooks/usePageMeta";
import { site } from "@/data/site";
import { pageSeo } from "@/data/seo";

const termsSchema = [
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Terms", path: "/terms" },
  ]),
];

const sections = [
  {
    id: "using-the-site",
    title: "1. Using this website",
    body: [
      "This website is operated by RIIT Global Tech. By using it, you agree to use it lawfully and not to interfere with its operation, security or availability.",
      "You must not attempt to gain unauthorised access to any part of the site, its hosting environment or any connected system.",
    ],
  },
  {
    id: "information",
    title: "2. Information on the site",
    body: [
      "We aim to keep the information on this website accurate and current. Service descriptions, product lists, programme names and capability areas are provided as a general guide.",
      "Equipment availability, technical specifications, course schedules, fees and certification details can change and are confirmed directly with you before you commit to anything.",
      "Nothing on this website is a binding quotation or a guarantee of a particular outcome. A project or training engagement is governed by the terms agreed for that engagement.",
    ],
  },
  {
    id: "enquiries",
    title: "3. Enquiries and submissions",
    body: [
      "When you submit an enquiry, you confirm that the information you provide is accurate to the best of your knowledge and that you are entitled to share it.",
      "Do not submit confidential documents, passwords or sensitive personal information through the enquiry form unless we have agreed a secure route for that material.",
      "Submitting an enquiry does not create a contract. It starts a conversation.",
    ],
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual property",
    body: [
      "The RIIT Global Tech name, logo, site design, copy and other original content on this website belong to RIIT Global Tech or are used with permission.",
      "You may view and share links to the site for personal or internal business reference. You may not copy, republish or use the branding or content commercially without written permission.",
      "Third-party names, products and platforms mentioned on the site remain the property of their respective owners.",
    ],
  },
  {
    id: "third-party",
    title: "5. Third-party links and content",
    body: [
      "The site may link to third-party services, including WhatsApp, Google Maps and email providers. Those services are governed by their own terms and privacy policies, and we are not responsible for their content or availability.",
    ],
  },
  {
    id: "availability",
    title: "6. Availability",
    body: [
      "We aim to keep the website available, but we do not guarantee uninterrupted access. The site may be unavailable during maintenance, hosting incidents or circumstances outside our control.",
    ],
  },
  {
    id: "liability",
    title: "7. Liability",
    body: [
      "To the extent permitted by applicable law, RIIT Global Tech is not liable for indirect or consequential loss arising from use of this website or reliance on its general information.",
      "Nothing in these terms excludes liability that cannot lawfully be excluded, including liability for fraud or for death or personal injury caused by negligence.",
    ],
  },
  {
    id: "privacy",
    title: "8. Privacy",
    body: [
      "How we handle personal information submitted through the site is described in our privacy policy. Please read it alongside these terms.",
    ],
  },
  {
    id: "governing-law",
    title: "9. Governing law",
    body: [
      "These terms are governed by the laws of the Federal Republic of Nigeria. Any dispute relating to the use of this website is subject to the jurisdiction of the Nigerian courts.",
    ],
  },
  {
    id: "contact",
    title: "10. Contact",
    body: [
      `Questions about these terms can be sent to ${site.email}, or raised by phone on ${site.phones[0].display}. Our address is ${site.address.full}.`,
    ],
  },
];

const updated = "3 November 2026";

export default function Terms() {
  usePageMeta({
    ...pageSeo("/terms"),
    jsonLd: termsSchema,
  });

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={<>Terms of use</>}
        description="The terms that apply when you use this website, send an enquiry or rely on the general information published here."
        crumbs={[{ label: "Home", href: "/" }, { label: "Terms" }]}
        index="TO"
      />

      <section className="section bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <aside className="lg:col-span-4">
              <div className="sticky top-28">
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  On this page
                </p>
                <nav aria-label="Terms of use sections" className="mt-5">
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
                  These terms are a general website terms of use. They do not replace a signed
                  service agreement, quotation or enrolment agreement for a specific engagement.
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
                    <Link to="/privacy" className="text-primary hover:underline">
                      privacy policy
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
        title="Need clarity on a term?"
        description="Ask before you rely on something. We are happy to confirm how a specific engagement would be handled."
      />
    </>
  );
}
