import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { values } from "@/data/site";

export function StorySection() {
  return (
    <section className="section relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 top-10 h-96 w-96 rounded-full glow-red" aria-hidden="true" />
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="06 — Our story"
              title={
                <>
                  Excellence, innovation and{" "}
                  <span className="text-gradient-red">reliability.</span>
                </>
              }
              description="Since 2010, RIIT Global Tech has been helping individuals, schools and businesses stay ahead in a fast-moving digital world. The tools change. The standard does not."
            />
            <Reveal delay={0.1} className="mt-8">
              <Link
                to="/about"
                className="link-underline font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-primary"
              >
                Read our story
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <blockquote className="border-l border-primary/50 pl-6 sm:pl-8">
                <p className="font-display text-2xl leading-snug tracking-tight text-foreground sm:text-3xl">
                  “We deliver world-class ICT solutions designed to help individuals, schools and
                  businesses stay ahead in a fast-moving digital world.”
                </p>
                <footer className="mt-5 font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  RIIT Global Tech — About us
                </footer>
              </blockquote>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
              {values.map((value, index) => (
                <Reveal key={value.title} delay={index * 0.05} className="bg-card/60 p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-lg font-medium tracking-tight text-foreground">
                      {value.title}
                    </h3>
                    <span className="font-display text-[10px] tracking-[0.18em] text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
