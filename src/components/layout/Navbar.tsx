import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
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
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome;

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
      </div>
    </header>
  );
}
