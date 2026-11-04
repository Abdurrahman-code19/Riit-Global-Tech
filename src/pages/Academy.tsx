import { Link } from "react-router-dom";
import { ArrowUpRight, Award, CheckCircle2, Users } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CourseCard } from "@/components/common/CourseCard";
import { StaggerGroup, StaggerItem } from "@/components/common/Stagger";
import { FaqAccordion } from "@/components/common/FaqAccordion";
import { CTASection } from "@/components/common/CTASection";
import { Button } from "@/components/ui/button";
import { usePageMeta, breadcrumbSchema } from "@/hooks/usePageMeta";
import { courses, faqs, site } from "@/data/site";
import { pageSeo } from "@/data/seo";

const academySchema = [
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Academy", path: "/academy" },
  ]),
  {
    "@type": "ItemList",
    name: "RIIT Academy programmes",
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: course.name,
        description: course.description,
        url: `${site.url}/academy/${course.slug}`,
        provider: { "@id": `${site.url}/#organization` },
      },
    })),
  },
];

const learningPoints = [
  "Practical, hands-on delivery",
  "Beginner and professional tracks",
  "Cisco Networking Academy programme",
  "Career-focused ICT skills",
];

export default function Academy() {
  usePageMeta({
    ...pageSeo("/academy"),
    jsonLd: academySchema,
  });

  return (
    <>
      <PageHero
        eyebrow="RIIT Academy"
        title={
          <>
            Skills you can use{" "}
            <span className="text-gradient-red">on Monday morning.</span>
          </>
        }
        description="Advance your career with industry-recognised training under the Cisco Networking Academy. Programmes are designed for both beginners and professionals."
        crumbs={[{ label: "Home", href: "/" }, { label: "Academy" }]}
        index="03"
      >
        <Button asChild size="lg">
          <Link to="/contact">
            Enquire about enrolment
            <ArrowUpRight />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="#programmes">View programmes</a>
        </Button>
      </PageHero>

      <section className="border-b border-border bg-[#0B0C0D]">
        <div className="container-wide grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {learningPoints.map((point) => (
            <div key={point} className="flex items-center gap-3 bg-[#0B0C0D] px-5 py-5">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {point}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="programmes" className="section section-light">
        <div className="container-wide">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Programmes"
              title={
                <>
                  Eight paths into{" "}
                  <span className="text-gradient-red">practical technology.</span>
                </>
              }
              description="Each programme focuses on skills you can apply directly — in a job, a business or the next stage of your career."
            />
            <Reveal delay={0.08} className="shrink-0">
              <div className="flex items-start gap-4 border border-[#D8D3CA] bg-white/60 p-4">
                <Award className="mt-0.5 h-5 w-5 shrink-0 text-[#B5121B]" aria-hidden="true" />
                <p className="max-w-[16rem] text-xs leading-relaxed text-[#5C5852]">
                  Training delivered under the Cisco Networking Academy. Current schedules and
                  certification details are confirmed on enquiry.
                </p>
              </div>
            </Reveal>
          </div>

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <StaggerItem key={course.slug} className="h-full">
                <CourseCard course={course} />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-background">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
        <div className="container-wide relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The Academy approach"
              title={
                <>
                  Learn the tool.{" "}
                  <span className="text-gradient-red">Understand the job.</span>
                </>
              }
              description="Training is built around the tasks people actually do at work, not abstract theory. You leave with working knowledge you can apply immediately."
            />
            <Reveal delay={0.1} className="mt-8 space-y-4">
              <div className="flex items-start gap-4 border-t border-border pt-4">
                <Users className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  For beginners starting a career and professionals adding a new capability.
                </p>
              </div>
              <div className="flex items-start gap-4 border-t border-border pt-4">
                <Award className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Delivered under the Cisco Networking Academy programme, as stated in our existing
                  service information.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <div className="border border-border bg-card/40 p-7 sm:p-9">
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Enrolment
                </p>
                <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-foreground">
                  Three steps to a place.
                </h3>
                <ol className="mt-7 space-y-6">
                  {[
                    {
                      title: "Tell us your starting point",
                      body: "Share your experience level and what you want to be able to do.",
                    },
                    {
                      title: "Choose the right programme",
                      body: "We will help you identify the course that fits your goal, not just the most popular one.",
                    },
                    {
                      title: "Confirm schedule and fees",
                      body: "Current schedules, fees and payment options are confirmed directly with you on enquiry.",
                    },
                  ].map((step, index) => (
                    <li key={step.title} className="flex gap-5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-primary/30 bg-primary/10 font-display text-[11px] font-semibold text-primary">
                        0{index + 1}
                      </span>
                      <div>
                        <p className="font-display text-base font-medium tracking-tight text-foreground">
                          {step.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {step.body}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
                <Button asChild size="lg" className="mt-8 w-full sm:w-auto">
                  <Link to="/contact">
                    Start an enrolment enquiry
                    <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-wide grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Questions"
              title={
                <>
                  Before you{" "}
                  <span className="text-gradient-red">enrol.</span>
                </>
              }
              description="The things people ask most often before joining a programme."
            />
          </div>
          <div className="lg:col-span-7">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="RIIT Academy"
        title="Ready to build a skill that lasts?"
        description="Tell us where you are starting from and what you want to be able to do. We will point you to the right programme."
      />
    </>
  );
}
