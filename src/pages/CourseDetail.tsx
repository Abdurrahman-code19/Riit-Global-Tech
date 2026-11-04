import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Award, Check, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CourseCard } from "@/components/common/CourseCard";
import { CTASection } from "@/components/common/CTASection";
import { Button } from "@/components/ui/button";
import { getIcon } from "@/lib/icons";
import { usePageMeta, breadcrumbSchema } from "@/hooks/usePageMeta";
import { courses, site } from "@/data/site";
import { pageSeo } from "@/data/seo";
import NotFound from "./NotFound";

const enrolmentNotes = [
  "Current schedules are confirmed on enquiry.",
  "Fees and payment options are shared directly.",
  "Entry requirements depend on the programme.",
  "Training is delivered under the Cisco Networking Academy programme.",
];

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const course = courses.find((item) => item.slug === slug);
  const related = course ? courses.filter((item) => item.slug !== course.slug).slice(0, 3) : [];

  const schema = course
    ? [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Academy", path: "/academy" },
          { name: course.name, path: `/academy/${course.slug}` },
        ]),
        {
          "@type": "Course",
          name: course.name,
          description: course.description,
          url: `${site.url}/academy/${course.slug}`,
          provider: { "@id": `${site.url}/#organization` },
          teaches: course.skills,
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "onsite",
            location: {
              "@type": "Place",
              name: site.name,
              address: {
                "@type": "PostalAddress",
                streetAddress: site.address.street,
                addressLocality: site.address.city,
                addressRegion: site.address.region,
                addressCountry: "NG",
              },
            },
          },
        },
      ]
    : undefined;

  usePageMeta(
    course
      ? { ...pageSeo(`/academy/${course.slug}`), jsonLd: schema }
      : {
          title: "Course not found",
          description: "The requested course could not be found.",
          path: "/academy",
          jsonLd: schema,
          noindex: true,
        },
  );

  if (!course) return <NotFound />;

  const Icon = getIcon(course.icon);

  return (
    <>
      <PageHero
        eyebrow={`RIIT Academy — ${course.durationLabel}`}
        title={course.name}
        description={course.intro}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Academy", href: "/academy" },
          { label: course.name },
        ]}
        index="AC"
        aside={
          <div className="flex justify-end">
            <div className="relative flex h-56 w-56 items-center justify-center border border-border">
              <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-primary" aria-hidden="true" />
              <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-primary" aria-hidden="true" />
              <Icon className="h-16 w-16 text-primary/80" aria-hidden="true" />
              <span className="absolute bottom-5 left-5 font-sans text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
                Programme
              </span>
            </div>
          </div>
        }
      >
        <Button asChild size="lg">
          <Link to="/contact">
            Enquire about this course
            <ArrowUpRight />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">
            <MessageCircle />
            WhatsApp
          </a>
        </Button>
      </PageHero>

      <section className="section bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-8">
              <SectionHeading
                eyebrow="What you will work on"
                title={
                  <>
                    Practical skills,{" "}
                    <span className="text-gradient-red">clearly defined.</span>
                  </>
                }
                description={course.description}
              />

              <div className="mt-10 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
                {course.skills.map((skill, index) => (
                  <Reveal key={skill} delay={index * 0.05} className="bg-card/50 p-6">
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-primary/25 bg-primary/10 font-display text-[10px] font-semibold text-primary">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-base font-medium tracking-tight text-foreground">
                          {skill}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          Covered within the {course.name} programme.
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.08} className="mt-10 border border-border bg-card/30 p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <h2 className="font-display text-xl font-medium tracking-tight text-foreground">
                      Cisco Networking Academy
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Our ICT training is offered under the Cisco Networking Academy programme, as
                      stated in our existing service information. Contact us for current course
                      availability and certification details.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-4">
                <Reveal className="border border-border bg-card/40 p-6">
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Programme facts
                  </p>
                  <dl className="mt-5 space-y-4">
                    <div>
                      <dt className="font-sans text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                        Format
                      </dt>
                      <dd className="mt-1 font-display text-base text-foreground">
                        {course.durationLabel}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-sans text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                        Provider
                      </dt>
                      <dd className="mt-1 font-display text-base text-foreground">
                        RIIT Academy
                      </dd>
                    </div>
                    <div>
                      <dt className="font-sans text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                        Location
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {site.address.city}, {site.address.region}
                      </dd>
                    </div>
                  </dl>
                </Reveal>

                <Reveal delay={0.06} className="border border-border bg-card/40 p-6">
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Good to know
                  </p>
                  <ul className="mt-5 space-y-3">
                    {enrolmentNotes.map((note) => (
                      <li key={note} className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={0.1} className="border border-primary/25 bg-primary/[0.06] p-6">
                  <p className="font-display text-lg font-medium tracking-tight text-foreground">
                    Ready to enrol?
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Send an enquiry and we will confirm the next available schedule.
                  </p>
                  <Button asChild size="sm" className="mt-5 w-full">
                    <Link to="/contact">
                      Contact the Academy
                      <ArrowUpRight />
                    </Link>
                  </Button>
                </Reveal>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-wide">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Other programmes"
              title={
                <>
                  Keep{" "}
                  <span className="text-gradient-red">building.</span>
                </>
              }
            />
            <Reveal delay={0.08} className="shrink-0">
              <Link
                to="/academy"
                className="link-underline font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B5121B]"
              >
                All 8 programmes
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <CourseCard key={item.slug} course={item} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="RIIT Academy"
        title="One conversation can set the direction."
        description="Tell us what you want to learn and where you are starting from. We will help you choose a programme that fits."
      />
    </>
  );
}
