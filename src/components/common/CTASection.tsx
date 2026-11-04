import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

type CTASectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function CTASection({
  eyebrow = "Start a conversation",
  title = "Tell us what you are trying to build, fix or learn.",
  description = "Whether you need a network, a CBT centre, a website or practical training, the next step is a short conversation about what you need.",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-brand-burgundy text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(237,81,86,0.28),transparent_45%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" aria-hidden="true" />
      <div className="container-wide relative z-10 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6 text-[#FFB3B5]">{eyebrow}</p>
            <h2 className="display-2 max-w-3xl text-white">{title}</h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">{description}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">
                  Contact RIIT
                  <ArrowUpRight />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border border-white/25 bg-transparent text-white hover:border-white hover:text-white"
              >
                <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">
                  <MessageCircle />
                  WhatsApp us
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-10">
            <div className="border border-white/15 bg-black/15 p-7 backdrop-blur-sm">
              <p className="font-sans text-[10px] uppercase tracking-[0.24em] text-white/70">Direct lines</p>
              <div className="mt-6 space-y-5">
                <a
                  href={`tel:${site.phones[0].tel}`}
                  className="group flex items-start gap-4 text-white transition-colors hover:text-[#FFB3B5]"
                >
                  <Phone className="mt-0.5 h-4 w-4 text-[#ED5156]" aria-hidden="true" />
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.18em] text-white/70">Call</span>
                    <span className="mt-1 block font-display text-lg">{site.phones[0].display}</span>
                  </span>
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-start gap-4 text-white transition-colors hover:text-[#FFB3B5]"
                >
                  <Mail className="mt-0.5 h-4 w-4 text-[#ED5156]" aria-hidden="true" />
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.18em] text-white/70">Email</span>
                    <span className="mt-1 block break-all font-display text-base">{site.email}</span>
                  </span>
                </a>
                <div className="flex items-start gap-4 text-white">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#ED5156]" aria-hidden="true" />
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.18em] text-white/70">Visit</span>
                    <span className="mt-1 block text-sm leading-relaxed text-white/80">{site.address.full}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
