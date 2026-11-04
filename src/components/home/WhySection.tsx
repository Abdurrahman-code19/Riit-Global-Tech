import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";
import { getIcon } from "@/lib/icons";
import { products, whyRiit } from "@/data/site";

export function WhySection() {
  return (
    <section className="section section-light">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="05 — Why RIIT"
              title={
                <>
                  The RIIT{" "}
                  <span className="text-gradient-red">advantage.</span>
                </>
              }
              description="What sets us apart is not a single product. It is the combination of genuine equipment, certified people and support that stays with you."
            />
            <Reveal delay={0.1} className="mt-8">
              <Link
                to="/about"
                className="link-underline font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B5121B]"
              >
                How we work
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-px border border-[#D8D3CA] bg-[#D8D3CA] sm:grid-cols-2 lg:col-span-7">
            {whyRiit.map((reason, index) => {
              const Icon = getIcon(reason.icon);
              return (
                <Reveal key={reason.title} delay={index * 0.05} className="bg-[#FAF8F4] p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center border border-[#D8D3CA] bg-white text-[#B5121B]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-[10px] tracking-[0.18em] text-[#6F6A62]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-semibold tracking-tight text-[#171819]">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C5852]">{reason.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.08} className="mt-16 border-t border-[#D8D3CA] pt-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#6B665E]">
                Also available
              </p>
              <p className="mt-2 font-display text-xl font-medium tracking-tight text-[#171819]">
                UK-imported equipment, ready for work.
              </p>
            </div>
            <div className="flex max-w-3xl flex-wrap gap-x-5 gap-y-2">
              {products.map((product) => (
                <span key={product.name} className="flex items-center gap-2 text-xs text-[#5C5852]">
                  <span className="h-1 w-1 bg-[#B5121B]" aria-hidden="true" />
                  {product.name}
                </span>
              ))}
            </div>
            <Link
              to="/services#products"
              className="inline-flex min-h-6 shrink-0 items-center gap-2 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B5121B]"
            >
              View products
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
