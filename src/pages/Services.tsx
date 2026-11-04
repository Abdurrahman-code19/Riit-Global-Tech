import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/common/ServiceCard";
import { StaggerGroup, StaggerItem } from "@/components/common/Stagger";
import { CTASection } from "@/components/common/CTASection";
import { Tag } from "@/components/common/Tag";
import { Button } from "@/components/ui/button";
import { getIcon } from "@/lib/icons";
import { usePageMeta, breadcrumbSchema } from "@/hooks/usePageMeta";
import { products, serviceCategories, services, site } from "@/data/site";
import { pageSeo } from "@/data/seo";

const servicesSchema = [
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]),
  {
    "@type": "ItemList",
    name: "RIIT Global Tech services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        url: `${site.url}/services/${service.slug}`,
        provider: { "@id": `${site.url}/#organization` },
      },
    })),
  },
];

const process = [
  {
    step: "01",
    title: "Understand",
    body: "We start with the requirement: the environment, the people, the constraints and what success looks like.",
  },
  {
    step: "02",
    title: "Scope",
    body: "You get a clear picture of the work, the equipment and the sequence before anything is installed or built.",
  },
  {
    step: "03",
    title: "Deliver",
    body: "We handle installation, configuration, development or training with as little disruption as possible.",
  },
  {
    step: "04",
    title: "Support",
    body: "Handover includes the support and maintenance needed to keep the solution useful over time.",
  },
];

const categoryCopy: Record<string, string> = {
  Infrastructure: "The physical and network foundations your organisation runs on.",
  Digital: "Websites, stores and portals that represent your organisation online.",
  Training: "Practical, career-focused ICT skills under the Cisco Networking Academy.",
  Support: "Equipment, repairs, consulting and the ongoing help that ties it together.",
};

export default function Services() {
  usePageMeta({
    ...pageSeo("/services"),
    jsonLd: servicesSchema,
  });

  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={
          <>
            From the cabling in the wall to the{" "}
            <span className="text-gradient-red">site in the browser.</span>
          </>
        }
        description="Nine services covering infrastructure, digital products, ICT training and ongoing support. Most engagements combine more than one."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        index="02"
      >
        <Button asChild size="lg">
          <Link to="/contact">
            Discuss a requirement
            <ArrowUpRight />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href="#products">Browse equipment</a>
        </Button>
      </PageHero>

      <div className="border-b border-border bg-[#0B0C0D]">
        <div className="container-wide flex flex-wrap gap-x-8 gap-y-3 py-4">
          {serviceCategories.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase()}`}
              className="font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              {category}
            </a>
          ))}
          <a
            href="#products"
            className="font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
          >
            Products
          </a>
        </div>
      </div>

      {serviceCategories.map((category, categoryIndex) => {
        const grouped = services.filter((service) => service.category === category);
        return (
          <section
            key={category}
            id={category.toLowerCase()}
            className={categoryIndex % 2 === 0 ? "section bg-background" : "section section-light"}
          >
            <div className="container-wide">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-8">
                  <SectionHeading
                    eyebrow={`${String(categoryIndex + 1).padStart(2, "0")} — ${category}`}
                    title={
                      <>
                        {category === "Infrastructure" && (
                          <>
                            Networks and centres that{" "}
                            <span className="text-gradient-red">keep working.</span>
                          </>
                        )}
                        {category === "Digital" && (
                          <>
                            Digital products with a{" "}
                            <span className="text-gradient-red">clear purpose.</span>
                          </>
                        )}
                        {category === "Training" && (
                          <>
                            Skills that change what you can{" "}
                            <span className="text-gradient-red">do next.</span>
                          </>
                        )}
                        {category === "Support" && (
                          <>
                            Equipment, repairs and{" "}
                            <span className="text-gradient-red">steady support.</span>
                          </>
                        )}
                      </>
                    }
                    description={categoryCopy[category]}
                  />
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <span className="font-display text-[11px] tracking-[0.18em] text-muted-foreground">
                    {grouped.length} {grouped.length === 1 ? "service" : "services"}
                  </span>
                </div>
              </div>

              <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {grouped.map((service) => (
                  <StaggerItem key={service.slug} className="h-full">
                    <ServiceCard service={service} />
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </section>
        );
      })}

      <section id="products" className="section relative overflow-hidden bg-[#141011]">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Equipment & products"
                title={
                  <>
                    Genuine equipment,{" "}
                    <span className="text-gradient-red">sourced from the UK.</span>
                  </>
                }
                description="We supply laptops, desktops, servers, networking hardware and IT accessories, alongside the configuration and repair work that keeps them in service."
              />
              <Reveal delay={0.08} className="mt-8 space-y-4">
                <p className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  Genuine, high-quality equipment imported from the United Kingdom.
                </p>
                <p className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  Professional repair, data recovery and configuration available.
                </p>
                <p className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  Availability and pricing confirmed on enquiry.
                </p>
              </Reveal>
              <Reveal delay={0.14} className="mt-8">
                <Button asChild size="lg">
                  <Link to="/contact">
                    Ask about availability
                    <ArrowUpRight />
                  </Link>
                </Button>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
                {products.map((product, index) => {
                  const Icon = getIcon(product.icon);
                  return (
                    <Reveal
                      key={product.name}
                      delay={index * 0.03}
                      className="bg-[#141011] p-5 transition-colors hover:bg-[#181314] sm:p-6"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-border bg-white/[0.03] text-primary">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <div>
                          <h3 className="font-display text-base font-medium tracking-tight text-foreground">
                            {product.name}
                          </h3>
                          <p className="mt-1 text-xs text-muted-foreground">{product.description}</p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
              <Reveal delay={0.1} className="mt-4 flex flex-wrap gap-2">
                <Tag tone="red">Sales</Tag>
                <Tag tone="red">Repairs</Tag>
                <Tag tone="red">Configurations</Tag>
                <Tag tone="red">Data recovery</Tag>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-wide">
          <SectionHeading
            eyebrow="How an engagement runs"
            title={
              <>
                A clear process,{" "}
                <span className="text-gradient-red">start to support.</span>
              </>
            }
            description="The exact steps depend on the service, but every project follows the same four-stage logic."
          />

          <div className="mt-12 grid grid-cols-1 gap-px border border-[#D8D3CA] bg-[#D8D3CA] sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <Reveal key={item.step} delay={index * 0.05} className="bg-[#FAF8F4] p-6 sm:p-7">
                <span className="font-display text-[11px] tracking-[0.2em] text-[#B5121B]">
                  {item.step}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-[#171819]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5C5852]">{item.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-12 flex flex-col gap-5 border-t border-[#D8D3CA] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-xl font-medium tracking-tight text-[#171819]">
                Not sure which service you need?
              </p>
              <p className="mt-1 text-sm text-[#5C5852]">
                Describe the problem and we will point you to the right starting point.
              </p>
            </div>
            <Button asChild size="lg">
              <Link to="/contact">
                Ask RIIT
                <ArrowUpRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
