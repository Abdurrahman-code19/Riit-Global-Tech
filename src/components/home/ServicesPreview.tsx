import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/common/ServiceCard";
import { StaggerGroup, StaggerItem } from "@/components/common/Stagger";
import { Reveal } from "@/components/common/Reveal";
import { services } from "@/data/site";

export function ServicesPreview() {
  return (
    <section className="section relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-20 h-96 w-96 rounded-full glow-red" aria-hidden="true" />
      <div className="container-wide relative z-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="02 — What we do"
            title={
              <>
                Capabilities that cover the{" "}
                <span className="text-gradient-red">whole stack.</span>
              </>
            }
            description="From the cabling in the wall to the website in your customer's browser, RIIT delivers the infrastructure, software and skills that keep organisations moving."
          />
          <Reveal delay={0.1} className="shrink-0">
            <Link
              to="/services"
              className="link-underline font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-primary"
            >
              View all 9 services
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <StaggerItem key={service.slug} className="h-full">
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1} className="mt-4">
          <div className="flex flex-col gap-5 border border-border bg-card/30 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <p className="font-display text-lg font-medium tracking-tight text-foreground">
                Three more services, one point of contact.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Sales and repairs, professional training, and consulting and support.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex min-h-6 shrink-0 items-center gap-2 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-primary"
            >
              Explore the full list
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
