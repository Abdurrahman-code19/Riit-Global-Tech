import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/common/ServiceCard";
import { CTASection } from "@/components/common/CTASection";
import { Tag } from "@/components/common/Tag";
import { Button } from "@/components/ui/button";
import { getIcon } from "@/lib/icons";
import { usePageMeta, breadcrumbSchema } from "@/hooks/usePageMeta";
import { services, site } from "@/data/site";
import NotFound from "./NotFound";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((item) => item.slug === slug);
  const related = service
    ? services.filter((item) => service.related.includes(item.slug))
    : [];

  const schema = service
    ? [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]),
        {
          "@type": "Service",
          name: service.title,
          description: service.description,
          serviceType: service.category,
          url: `${site.url}/services/${service.slug}`,
          provider: { "@id": `${site.url}/#organization` },
          areaServed: { "@type": "City", name: "Lagos" },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${service.title} inclusions`,
            itemListElement: service.includes.map((item) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: item.title, description: item.body },
            })),
          },
        },
      ]
    : undefined;

  usePageMeta({
    title: service ? `${service.title}` : "Service not found",
    description: service
      ? `${service.description} RIIT Global Tech delivers ${service.title.toLowerCase()} for ${service.audiences.toLowerCase()} in Lagos, Nigeria.`
      : "The requested service could not be found.",
    path: service ? `/services/${service.slug}` : "/services",
    jsonLd: schema,
    noindex: !service,
  });

  if (!service) return <NotFound />;

  const Icon = getIcon(service.icon);

  return (
    <>
      <PageHero
        eyebrow={`Service ${service.number} — ${service.category}`}
        title={service.title}
        description={service.intro}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        index={service.number}
        aside={
          <div className="flex justify-end">
            <div className="relative flex h-56 w-56 items-center justify-center border border-border">
              <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-primary" aria-hidden="true" />
              <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-primary" aria-hidden="true" />
              <Icon className="h-16 w-16 text-primary/80" aria-hidden="true" />
              <span className="absolute bottom-5 left-5 font-sans text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
                {service.category}
              </span>
            </div>
          </div>
        }
      >
        <Button asChild size="lg">
          <Link to="/contact">
            Enquire about this service
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
                eyebrow="What this covers"
                title={
                  <>
                    The detail behind{" "}
                    <span className="text-gradient-red">{service.shortTitle.toLowerCase()}.</span>
                  </>
                }
                description={service.description}
              />

              <div className="mt-10 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
                {service.includes.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.05} className="bg-card/50 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-lg font-medium tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <span className="font-display text-[10px] tracking-[0.18em] text-muted-foreground">
                        0{index + 1}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.08} className="mt-10 border border-border bg-card/30 p-6 sm:p-7">
                <h2 className="font-display text-xl font-medium tracking-tight text-foreground">
                  Who it is for
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.audiences}. If your situation is different, tell us about it — the scope
                  can be adapted to the environment.
                </p>
              </Reveal>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-28 space-y-4">
                <Reveal className="border border-border bg-card/40 p-6">
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    At a glance
                  </p>
                  <ul className="mt-5 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-t border-border pt-5">
                    <Tag tone="red">{service.category}</Tag>
                  </div>
                </Reveal>

                <Reveal delay={0.06} className="border border-primary/25 bg-primary/[0.06] p-6">
                  <p className="font-display text-lg font-medium tracking-tight text-foreground">
                    Need this scoped?
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Send a short description of the environment and what you need it to do.
                  </p>
                  <Button asChild size="sm" className="mt-5 w-full">
                    <Link to="/contact">
                      Contact RIIT
                      <ArrowUpRight />
                    </Link>
                  </Button>
                </Reveal>

                <Reveal delay={0.1} className="border border-border bg-card/40 p-6">
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Direct
                  </p>
                  <div className="mt-4 space-y-2 text-sm">
                    <a
                      href={`tel:${site.phones[0].tel}`}
                      className="block text-foreground transition-colors hover:text-primary"
                    >
                      {site.phones[0].display}
                    </a>
                    <a
                      href={`mailto:${site.email}`}
                      className="block break-all text-foreground transition-colors hover:text-primary"
                    >
                      {site.email}
                    </a>
                  </div>
                </Reveal>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section section-light">
          <div className="container-wide">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Related services"
                title={
                  <>
                    Often delivered{" "}
                    <span className="text-gradient-red">together.</span>
                  </>
                }
              />
              <Reveal delay={0.08} className="shrink-0">
                <Link
                  to="/services"
                  className="link-underline font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B5121B]"
                >
                  All services
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ServiceCard key={item.slug} service={item} className="bg-white/70" />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
