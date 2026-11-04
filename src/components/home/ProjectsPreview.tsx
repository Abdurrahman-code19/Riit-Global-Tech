import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Tag } from "@/components/common/Tag";
import { capabilityAreas, cbtCentres } from "@/data/site";

export function ProjectsPreview() {
  return (
    <section className="section relative overflow-hidden bg-[#141011]">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full glow-red" aria-hidden="true" />
      <div className="container-wide relative z-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="04 — Deployments"
            title={
              <>
                Built for real{" "}
                <span className="text-gradient-red">environments.</span>
              </>
            }
            description="Our work is grounded in the places where technology has to keep working: examination centres, schools, offices and growing businesses."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Link
              to="/projects"
              className="link-underline font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-primary"
            >
              See deployments
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

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
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-4">
          <div className="border border-border bg-card/30 p-6 sm:p-7">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="font-display text-lg font-medium tracking-tight text-foreground">
                  Beyond the centre: the digital and infrastructure work behind it.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  The same team handles the network, the software and the equipment.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {capabilityAreas.slice(0, 5).map((area) => (
                  <Tag key={area.title}>{area.title}</Tag>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
