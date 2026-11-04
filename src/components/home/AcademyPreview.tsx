import { Link } from "react-router-dom";
import { ArrowUpRight, Award } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/site";

export function AcademyPreview() {
  return (
    <section className="section section-light">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="03 — RIIT Academy"
              title={
                <>
                  Skills you can use{" "}
                  <span className="text-gradient-red">on Monday morning.</span>
                </>
              }
              description="Advance your career with industry-recognised training under the Cisco Networking Academy. Programmes are designed for both beginners and professionals."
            />

            <Reveal delay={0.08} className="mt-8 flex items-start gap-4 border border-[#D8D3CA] bg-white/60 p-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#B5121B]/20 bg-[#B5121B]/10">
                <Award className="h-5 w-5 text-[#B5121B]" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-[#171819]">
                  Cisco Networking Academy
                </p>
                <p className="mt-1 text-xs leading-relaxed text-[#5C5852]">
                  Authorized Training Partner. Current schedules, fees and certification details are
                  confirmed on enquiry.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.14} className="mt-8">
              <Button asChild size="lg">
                <Link to="/academy">
                  Explore the Academy
                  <ArrowUpRight />
                </Link>
              </Button>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center justify-between border-b border-[#D8D3CA] pb-4">
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#6B665E]">
                  Programmes
                </p>
                <Link
                  to="/academy"
                  className="font-sans text-[10px] uppercase tracking-[0.16em] text-[#B5121B] transition-colors hover:text-[#171819]"
                >
                  All 8
                </Link>
              </div>
            </Reveal>

            <div>
              {courses.slice(0, 5).map((course, index) => (
                <Reveal key={course.slug} delay={index * 0.04}>
                  <Link
                    to={`/academy/${course.slug}`}
                    className="group flex items-center gap-5 border-b border-[#D8D3CA] py-5 transition-colors hover:border-[#B5121B]/50"
                  >
                    <span className="w-7 shrink-0 font-sans text-[10px] tracking-[0.16em] text-[#6F6A62]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-lg font-medium tracking-tight text-[#171819] transition-colors group-hover:text-[#B5121B]">
                        {course.name}
                      </span>
                      <span className="mt-1 block text-sm text-[#5C5852]">{course.description}</span>
                    </span>
                    <span className="hidden shrink-0 border border-[#D8D3CA] px-2 py-1 font-sans text-[9px] uppercase tracking-[0.12em] text-[#6B665E] sm:block">
                      {course.durationLabel}
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#B5121B] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
