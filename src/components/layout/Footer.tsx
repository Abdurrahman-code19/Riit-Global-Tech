import { Link } from "react-router-dom";
import { ArrowUp, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { courses, navLinks, services, site } from "@/data/site";
import { Reveal } from "@/components/common/Reveal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border bg-[#0B0C0D]">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
      <div className="container-wide relative z-10 pb-28 pt-16 md:pb-32 md:pt-20 lg:pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Link to="/" className="inline-flex" aria-label="RIIT Global Tech home">
              <Logo className="h-14 sm:h-16" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              World-class ICT solutions for individuals, schools and businesses. Genuine UK-sourced
              equipment, practical training and technology that works.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#25D366]/30 bg-[#25D366]/10 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-[#25D366] transition-colors hover:bg-[#25D366]/20"
              >
                <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 border border-border px-3 py-2 text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                Email
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.05} className="lg:col-span-2">
            <h2 className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground">
              Explore
            </h2>
            <ul className="mt-5 space-y-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="inline-flex min-h-6 items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <h2 className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground">
              Services
            </h2>
            <ul className="mt-5 space-y-1.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex min-h-6 items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="inline-flex min-h-6 items-center text-sm text-primary transition-colors hover:text-foreground">
                  All services
                </Link>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2">
            <h2 className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground">
              Academy
            </h2>
            <ul className="mt-5 space-y-1.5">
              {courses.slice(0, 5).map((course) => (
                <li key={course.slug}>
                  <Link
                    to={`/academy/${course.slug}`}
                    className="inline-flex min-h-6 items-center text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {course.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/academy" className="inline-flex min-h-6 items-center text-sm text-primary transition-colors hover:text-foreground">
                  All programmes
                </Link>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-2">
            <h2 className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground">
              Contact
            </h2>
            <div className="mt-5 space-y-4 text-sm text-muted-foreground">
              <a href={`tel:${site.phones[0].tel}`} className="flex min-h-6 items-start gap-3 py-1 transition-colors hover:text-primary">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  {site.phones[0].display}
                  <br />
                  {site.phones[1].display}
                </span>
              </a>
              <a href={`mailto:${site.email}`} className="flex min-h-6 items-start gap-3 break-all py-1 transition-colors hover:text-primary">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {site.email}
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region}
                </span>
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {year} RIIT Global Tech. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            <Link to="/privacy" className="inline-flex min-h-6 items-center transition-colors hover:text-primary">
              Privacy
            </Link>
            <Link to="/terms" className="inline-flex min-h-6 items-center transition-colors hover:text-primary">
              Terms
            </Link>
            <span className="hidden h-3 w-px bg-border sm:block" aria-hidden="true" />
            <span>Lagos, Nigeria</span>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
