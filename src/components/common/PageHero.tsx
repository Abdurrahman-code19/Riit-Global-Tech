import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  crumbs: Crumb[];
  index?: string;
  children?: ReactNode;
  aside?: ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  index = "RIIT",
  children,
  aside,
  className,
}: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden border-b border-border bg-background", className)}>
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-32 top-0 h-[34rem] w-[34rem] rounded-full glow-red"
        aria-hidden="true"
      />
      <div className="container-wide relative z-10 pb-16 pt-32 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
        <Breadcrumbs items={crumbs} className="mb-10" />
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <p className="eyebrow mb-6">{eyebrow}</p>
              <h1 className="display-1 max-w-4xl">{title}</h1>
              <p className="lead mt-7 max-w-2xl">{description}</p>
            </Reveal>
            {children && <Reveal delay={0.12} className="mt-9 flex flex-wrap gap-3">{children}</Reveal>}
          </div>
          <div className="hidden lg:col-span-4 lg:block">
            {aside ?? (
              <div className="flex justify-end">
                <div className="relative flex h-56 w-56 items-center justify-center border border-border">
                  <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-primary" aria-hidden="true" />
                  <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-primary" aria-hidden="true" />
                  <span
                    aria-hidden="true"
                    className="font-display text-[4.5rem] font-semibold leading-none tracking-tighter text-white/[0.06]"
                  >
                    {index}
                  </span>
                  <span className="absolute bottom-5 left-5 font-sans text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
                    RIIT / Lagos
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
