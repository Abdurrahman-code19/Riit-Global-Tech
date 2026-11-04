import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";
import type { Service } from "@/data/site";

export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  const Icon = getIcon(service.icon);

  return (
    <Link
      to={`/services/${service.slug}`}
      className={cn(
        "group relative flex h-full flex-col border border-border bg-card/40 p-6 transition-colors duration-300 hover:border-primary/50 sm:p-7",
        className,
      )}
    >
      <span
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center border border-border bg-white/[0.03] text-primary transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="font-display text-[11px] tracking-[0.18em] text-muted-foreground">
          {service.number}
        </span>
      </div>

      <h3 className="mt-6 font-display text-xl font-medium tracking-tight text-foreground sm:text-[1.35rem]">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {service.features.slice(0, 3).map((feature) => (
          <span
            key={feature}
            className="border border-border px-2 py-1 font-sans text-[9px] uppercase tracking-[0.12em] text-muted-foreground"
          >
            {feature}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between pt-7">
        <span className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
          Explore service
        </span>
        <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
      </div>
    </Link>
  );
}
