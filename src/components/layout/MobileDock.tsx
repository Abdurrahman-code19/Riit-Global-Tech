import { NavLink } from "react-router-dom";
import {
  Briefcase,
  Building2,
  GraduationCap,
  House,
  LayoutGrid,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  "/": House,
  "/about": Building2,
  "/services": LayoutGrid,
  "/academy": GraduationCap,
  "/projects": Briefcase,
  "/contact": Mail,
};

/**
 * Floating mobile navigation dock.
 *
 * Replaces the hamburger drawer on screens below `lg`: every primary
 * destination stays visible as an icon with a small label, inside a
 * translucent glass pill pinned above the bottom safe area.
 */
export function MobileDock() {
  return (
    <nav
      aria-label="Primary"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] print:hidden min-[360px]:px-3 sm:px-4 lg:hidden"
    >
      <div className="dock-panel pointer-events-auto w-full max-w-[24rem] rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(24,25,26,0.92),rgba(11,12,13,0.88))] p-2 shadow-[0_24px_60px_-18px_rgba(0,0,0,0.95),0_1px_0_0_rgba(255,255,255,0.08)_inset] backdrop-blur-3xl backdrop-saturate-150">
        <ul className="flex items-stretch gap-0.5">
          {navLinks.map((link) => {
            const Icon = icons[link.href] ?? House;

            return (
              <li key={link.href} className="min-w-0 flex-1">
                <NavLink
                  to={link.href}
                  end={link.href === "/"}
                  className={({ isActive }) =>
                    cn(
                      "group relative flex min-h-[3rem] flex-col items-center justify-center gap-1 rounded-full px-0.5 py-1.5 text-[10px] font-medium leading-none transition-colors duration-300",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E0F10]",
                      isActive ? "text-[#FF8A8E]" : "text-foreground/70 hover:text-foreground",
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        aria-hidden="true"
                        className={cn(
                          "relative flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300",
                          isActive
                            ? "bg-primary/15 ring-1 ring-inset ring-primary/35"
                            : "group-hover:bg-white/[0.06]",
                        )}
                      >
                        <Icon
                          aria-hidden="true"
                          strokeWidth={isActive ? 2.1 : 1.75}
                          className="h-[18px] w-[18px] transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transform-none"
                        />
                      </span>
                      <span className="relative max-w-full truncate">{link.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
