import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

function DesktopLink({ href, label }: { href: string; label: string }) {
  return (
    <NavLink
      to={href}
      end={href === "/"}
      className={({ isActive }) =>
        cn(
          "relative py-2 font-sans text-[11px] font-medium uppercase tracking-[0.18em] transition-colors",
          isActive ? "text-primary" : "text-foreground/70 hover:text-foreground",
        )
      }
    >
      {({ isActive }) => (
        <>
          {label}
          <span
            className={cn(
              "absolute -bottom-0.5 left-0 h-px bg-primary transition-all duration-300",
              isActive ? "w-full" : "w-0",
            )}
            aria-hidden="true"
          />
        </>
      )}
    </NavLink>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;

    const previous = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    const first = panel?.querySelector<HTMLElement>("a, button");
    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
      if (event.key === "Tab" && panel) {
        const focusable = Array.from(
          panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'),
        );
        if (focusable.length === 0) return;
        const firstEl = focusable[0];
        const lastEl = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === firstEl) {
          event.preventDefault();
          lastEl.focus();
        } else if (!event.shiftKey && document.activeElement === lastEl) {
          event.preventDefault();
          firstEl.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
      previous?.focus?.();
    };
  }, [open]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid ? "border-b border-border bg-[#0E0F10]/95 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "hidden border-b border-white/10 transition-all duration-300 lg:block",
          scrolled && "lg:hidden",
        )}
      >
        <div className="container-wide flex h-9 items-center justify-between text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          <div className="flex items-center gap-6">
            <a href={`tel:${site.phones[0].tel}`} className="flex items-center gap-2 transition-colors hover:text-primary">
              <Phone className="h-3 w-3" aria-hidden="true" />
              {site.phones[0].display}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors hover:text-primary">
              <Mail className="h-3 w-3" aria-hidden="true" />
              {site.email}
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              Ikotun, Lagos
            </span>
          </div>
          <span>Your reliable IT partner since 2010</span>
        </div>
      </div>

      <div className="container-wide flex h-[4.5rem] items-center justify-between gap-6 sm:h-20">
        <Link
          to="/"
          className="group flex items-center transition-transform duration-300 hover:scale-[1.02]"
          aria-label="RIIT Global Tech home"
        >
          <Logo className="h-10 sm:h-12" priority />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <DesktopLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild size="sm">
            <Link to="/contact">
              Start a project
              <ArrowUpRight />
            </Link>
          </Button>
        </div>

        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {open &&
        createPortal(
          <div
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="menu-panel fixed inset-0 top-[4.5rem] z-40 overflow-y-auto border-t border-border bg-[#0E0F10] pb-10 sm:top-20 lg:hidden"
          >
            <div className="container-wide flex min-h-full flex-col pt-8">
                  <nav aria-label="Mobile" className="flex flex-col">
                    {navLinks.map((link, index) => (
                      <NavLink
                        key={link.href}
                        to={link.href}
                        end={link.href === "/"}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          cn(
                            "flex items-center justify-between border-b border-border py-4 font-display text-2xl font-medium tracking-tight transition-colors",
                            isActive ? "text-primary" : "text-foreground hover:text-primary",
                          )
                        }
                      >
                        <span>{link.label}</span>
                        <span className="font-sans text-[10px] tracking-[0.18em] text-muted-foreground">
                          0{index + 1}
                        </span>
                      </NavLink>
                    ))}
                  </nav>

                  <div className="mt-8 grid gap-3">
                    <Button asChild size="lg" className="w-full">
                      <Link to="/contact" onClick={() => setOpen(false)}>
                        Start a project
                        <ArrowUpRight />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      className="w-full border border-border bg-transparent text-foreground hover:border-primary hover:text-primary"
                    >
                      <a href={site.whatsapp.href} target="_blank" rel="noopener noreferrer">
                        <MessageCircle />
                        WhatsApp us
                      </a>
                    </Button>
                  </div>

                  <div className="mt-10 space-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
                    <a href={`tel:${site.phones[0].tel}`} className="flex items-center gap-3 hover:text-primary">
                      <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                      {site.phones[0].display}
                    </a>
                    <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all hover:text-primary">
                      <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      {site.email}
                    </a>
                    <p className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      {site.address.full}
                    </p>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </header>
  );
}
