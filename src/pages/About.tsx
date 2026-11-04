import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, ShieldCheck, Sparkles, Target } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StatStrip } from "@/components/common/StatStrip";
import { CTASection } from "@/components/common/CTASection";
import { Tag } from "@/components/common/Tag";
import { Button } from "@/components/ui/button";
import { getIcon } from "@/lib/icons";
import { usePageMeta, breadcrumbSchema } from "@/hooks/usePageMeta";
import { capabilityAreas, site, values, whyRiit } from "@/data/site";
import { pageSeo } from "@/data/seo";

const aboutSchema = [
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]),
  {
    "@type": "AboutPage",
    name: "About RIIT Global Tech",
    description:
      "RIIT Global Tech is an ICT company in Ikotun, Lagos, delivering technology solutions and practical digital skills since 2010.",
    mainEntity: { "@id": `${site.url}/#organization` },
  },
];

const principles = [
  {
    icon: Target,
    title: "Start with the real requirement",
    body: "Every engagement begins with understanding what the organisation actually needs, not with a preset package.",
  },
  {
    icon: ShieldCheck,
    title: "Build on dependable foundations",
    body: "Genuine equipment, sound network design and clean configuration come before anything else.",
  },
  {
    icon: Sparkles,
    title: "Leave people able to use it",
    body: "Training and support are part of the delivery, so the technology is useful long after handover.",
  },
];

export default function About() {
  usePageMeta({
    ...pageSeo("/about"),
    jsonLd: aboutSchema,
  });

  return (
    <>
      <PageHero
        eyebrow="About RIIT"
        title={
          <>
            Technology and skills,{" "}
            <span className="text-gradient-red">under one roof.</span>
          </>
        }
        description="RIIT Global Tech is an ICT solutions and training company based in Ikotun, Lagos. Since 2010 we have helped individuals, schools and businesses adopt technology that is reliable, genuine and actually usable."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        index="01"
      >
        <Button asChild size="lg">
          <Link to="/contact">
            Talk to us
            <ArrowUpRight />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link to="/services">Explore services</Link>
        </Button>
      </PageHero>

      <section className="section section-light">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow">Our story</p>
                <p className="mt-9 font-display text-6xl font-semibold tracking-tighter text-[#171819] sm:text-7xl">
                  {site.founded}
                </p>
                <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.2em] text-[#6B665E]">
                  The year we started
                </p>
                <div className="mt-8 space-y-4 border-l border-[#D8D3CA] pl-6 text-sm leading-relaxed text-[#5C5852]">
                  <p>
                    From our base at {site.address.street}, {site.address.city},{" "}
                    {site.address.region}, we serve clients across Lagos and beyond.
                  </p>
                  <p className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#B5121B]" aria-hidden="true" />
                    {site.address.full}
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Who we are"
                title={
                  <>
                    A practical partner for a{" "}
                    <span className="text-gradient-red">fast-moving digital world.</span>
                  </>
                }
                description={site.longDescription}
              />
              <Reveal delay={0.08} className="mt-8 space-y-5 text-base leading-relaxed text-[#5C5852]">
                <p>{site.equipmentStatement}</p>
                <p>
                  Our work spans the infrastructure behind an organisation, the software in front
                  of its customers, and the training that helps people use both with confidence.
                  That combination is deliberate: technology only earns its place when the people
                  around it know how to run it.
                </p>
              </Reveal>
              <Reveal delay={0.14} className="mt-8 flex flex-wrap gap-2">
                {site.audiences.map((audience) => (
                  <Tag key={audience} tone="light">
                    {audience}
                  </Tag>
                ))}
              </Reveal>
            </div>
          </div>

          <div className="mt-16 lg:mt-20">
            <StatStrip variant="light" />
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <SectionHeading
            eyebrow="What we stand for"
            title={
              <>
                Values that survive{" "}
                <span className="text-gradient-red">contact with real work.</span>
              </>
            }
            description="Four commitments shape how we scope, deliver and support every engagement."
          />

          <div className="mt-12 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.05} className="bg-card/50 p-7 sm:p-9">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-medium tracking-tight text-foreground">
                    {value.title}
                  </h3>
                  <span className="font-display text-[10px] tracking-[0.18em] text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="How we work"
                title={
                  <>
                    Three habits,{" "}
                    <span className="text-gradient-red">every time.</span>
                  </>
                }
                description="No two projects are identical, but the way we approach them does not change."
              />
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-px border border-[#D8D3CA] bg-[#D8D3CA]">
                {principles.map((principle, index) => {
                  const Icon = principle.icon;
                  return (
                    <Reveal key={principle.title} delay={index * 0.06} className="bg-[#FAF8F4] p-6 sm:p-8">
                      <div className="flex items-start gap-5">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#D8D3CA] bg-white text-[#B5121B]">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-semibold tracking-tight text-[#171819]">
                            {principle.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-[#5C5852]">
                            {principle.body}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#141011]">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Why RIIT"
            title={
              <>
                The case for one{" "}
                <span className="text-gradient-red">accountable team.</span>
              </>
            }
            description="Equipment, infrastructure, software and training are connected. Working with one team keeps them that way."
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {whyRiit.map((reason, index) => {
              const Icon = getIcon(reason.icon);
              return (
                <Reveal key={reason.title} delay={index * 0.05}>
                  <div className="flex h-full gap-5 border border-border bg-card/40 p-6 sm:p-7">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-border bg-white/[0.03] text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-medium tracking-tight text-foreground">
                        {reason.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-wide">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="What we cover"
              title={
                <>
                  A broad base,{" "}
                  <span className="text-gradient-red">one point of contact.</span>
                </>
              }
              description="Our capability areas overlap by design. A single project often draws on several of them."
            />
            <Reveal delay={0.08} className="shrink-0">
              <Link
                to="/services"
                className="link-underline font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B5121B]"
              >
                View all services
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilityAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 0.04}>
                <div className="h-full border border-[#D8D3CA] bg-white/60 p-6">
                  <Tag tone="light">{area.tag}</Tag>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-[#171819]">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C5852]">{area.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Work with RIIT"
        title="Let's build something that keeps working."
        description="Tell us what you are trying to achieve. We will tell you honestly what it takes, what it costs to scope, and where to start."
      />
    </>
  );
}
