import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CTASection } from "@/components/common/CTASection";
import { Tag } from "@/components/common/Tag";
import { Button } from "@/components/ui/button";
import { usePageMeta, breadcrumbSchema } from "@/hooks/usePageMeta";
import { capabilityAreas, cbtCentres, site } from "@/data/site";
import { pageSeo } from "@/data/seo";

const projectsSchema = [
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ]),
  {
    "@type": "CollectionPage",
    name: "RIIT Global Tech deployments",
    description:
      "CBT/CBE centres and capability areas delivered by RIIT Global Tech across Lagos.",
    mainEntity: { "@id": `${site.url}/#organization` },
  },
];

const environments = [
  {
    title: "Examination centres",
    body: "Workstations, networking and configuration for computer-based testing environments.",
  },
  {
    title: "Schools",
    body: "Portals, websites, ICT training and the equipment that supports teaching and administration.",
  },
  {
    title: "Offices & businesses",
    body: "Network infrastructure, servers, websites and ongoing technical support.",
  },
  {
    title: "Individuals",
    body: "Equipment, repairs, configuration and training for personal and professional use.",
  },
];

export default function Projects() {
  usePageMeta({
    ...pageSeo("/projects"),
    jsonLd: projectsSchema,
  });

  return (
    <>
      <PageHero
        eyebrow="Projects & deployments"
        title={
          <>
            Built for real{" "}
            <span className="text-gradient-red">environments.</span>
          </>
        }
        description="Our work is grounded in the places where technology has to keep working: examination centres, schools, offices and growing businesses. Here is the verified picture of where we operate."
        crumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]}
        index="04"
      >
        <Button asChild size="lg">
          <Link to="/contact">
            Discuss a deployment
            <ArrowUpRight />
          </Link>
        </Button>
      </PageHero>

      <section className="section bg-background">
        <div className="container-wide">
          <SectionHeading
            eyebrow="CBT/CBE centres"
            title={
              <>
                Examination environments{" "}
                <span className="text-gradient-red">in active use.</span>
              </>
            }
            description="RIIT supports CBT/CBE centres used for computer-based examinations. These are the centres named in our existing service information."
          />

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {cbtCentres.map((centre, index) => (
              <Reveal key={centre.name} delay={index * 0.06}>
                <div className="group relative flex h-full flex-col border border-border bg-card/40 p-6 transition-colors hover:border-primary/50 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <Tag tone="red">CBT/CBE centre</Tag>
                    <span className="font-display text-[11px] tracking-[0.18em] text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-xl font-medium tracking-tight text-foreground">
                    {centre.name}
                  </h3>
                  <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                    {centre.location}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    An active examination centre supported by RIIT's CBT/CBE centre setup service.
                  </p>
                  <div className="mt-auto pt-6">
                    <Tag>JAMB · WAEC · NECO</Tag>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Capability areas"
                title={
                  <>
                    The work behind{" "}
                    <span className="text-gradient-red">the centre.</span>
                  </>
                }
                description="A CBT centre is never just a room of computers. It depends on networking, configuration, software and support. The same capabilities apply across our other deployments."
              />
              <Reveal delay={0.1} className="mt-8 border-l border-[#D8D3CA] pl-6">
                <p className="text-sm leading-relaxed text-[#5C5852]">
                  Rather than publish case studies we cannot substantiate, this page lists the
                  verified centres and the capability areas those deployments draw on.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-px border border-[#D8D3CA] bg-[#D8D3CA] sm:grid-cols-2">
                {capabilityAreas.map((area, index) => (
                  <Reveal key={area.title} delay={index * 0.04} className="bg-[#FAF8F4] p-6">
                    <div className="flex items-start justify-between gap-3">
                      <Tag tone="light">{area.tag}</Tag>
                      <span className="font-display text-[10px] tracking-[0.18em] text-[#6F6A62]">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-[#171819]">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5C5852]">{area.description}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#141011]">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Where we work"
            title={
              <>
                Different environments,{" "}
                <span className="text-gradient-red">the same standard.</span>
              </>
            }
            description="The setting changes the details, not the approach: understand the requirement, build it properly, then support it."
          />

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {environments.map((environment, index) => (
              <Reveal key={environment.title} delay={index * 0.05}>
                <div className="h-full border border-border bg-card/40 p-6 sm:p-7">
                  <span className="font-display text-[11px] tracking-[0.2em] text-primary">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-medium tracking-tight text-foreground">
                    {environment.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {environment.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-12 grid grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-3">
            <div>
              <p className="font-display text-3xl font-semibold tracking-tight text-foreground">
                Ikotun
              </p>
              <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Base of operations
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-semibold tracking-tight text-foreground">
                Lagos
              </p>
              <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Primary service area
              </p>
            </div>
            <div>
              <p className="font-display text-3xl font-semibold tracking-tight text-foreground">
                3
              </p>
              <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Named CBT/CBE centres
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Your project"
        title="Tell us what needs to work."
        description="Whether it is a single centre, a school network or a website, the conversation starts the same way: what does success look like?"
      />
    </>
  );
}
