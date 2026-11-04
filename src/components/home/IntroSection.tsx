import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StatStrip } from "@/components/common/StatStrip";
import { site, trustPoints } from "@/data/site";

export function IntroSection() {
  return (
    <section id="company" className="section section-light">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow">01 — Who we are</p>
              <div className="mt-9 border-l border-[#D8D3CA] pl-6">
                <p className="font-display text-5xl font-semibold tracking-tighter text-[#171819] sm:text-6xl">
                  {site.founded}
                </p>
                <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.2em] text-[#6B665E]">
                  The year we started
                </p>
                <div className="mt-7 space-y-3 text-sm text-[#5C5852]">
                  <p>Ikotun, Alimosho, Lagos</p>
                  <p>Individuals · Schools · Businesses</p>
                  <p>Technology · Training · Support</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <SectionHeading
              eyebrow="A practical technology partner"
              title={
                <>
                  One partner for technology and the{" "}
                  <span className="text-gradient-red">skills to use it.</span>
                </>
              }
              description={site.longDescription}
            />

            <Reveal delay={0.08} className="mt-7 max-w-2xl space-y-5 text-base leading-relaxed text-[#5C5852]">
              <p>{site.equipmentStatement}</p>
              <p>
                That means a single team for the infrastructure behind your organisation, the
                software in front of your customers, and the training that helps people use both
                with confidence.
              </p>
            </Reveal>

            <Reveal delay={0.14} className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-3 border-t border-[#D8D3CA] pt-3">
                  <span className="h-1.5 w-1.5 rotate-45 bg-[#B5121B]" aria-hidden="true" />
                  <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-[#3E3B37]">
                    {point}
                  </span>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.18} className="mt-9">
              <Link
                to="/about"
                className="link-underline font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B5121B]"
              >
                More about RIIT
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          <StatStrip variant="light" />
        </div>
      </div>
    </section>
  );
}
