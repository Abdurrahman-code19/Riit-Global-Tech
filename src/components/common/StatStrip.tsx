import { cn } from "@/lib/utils";
import { CountUp } from "./CountUp";
import { stats } from "@/data/site";

export function StatStrip({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const light = variant === "light";

  return (
    <div
      className={cn(
        "grid grid-cols-2 border-y lg:grid-cols-4",
        light ? "border-[#D8D3CA]" : "border-border",
      )}
    >
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={cn(
            "relative px-5 py-7 sm:px-7 sm:py-9",
            index % 2 === 1 && (light ? "border-l border-[#D8D3CA]" : "border-l border-border"),
            index >= 2 && (light ? "border-t border-[#D8D3CA] lg:border-t-0" : "border-t border-border lg:border-t-0"),
            index > 0 && "lg:border-l",
          )}
        >
          <p
            className={cn(
              "font-display text-3xl font-semibold tracking-tight sm:text-4xl",
              light ? "text-[#171819]" : "text-foreground",
            )}
          >
            <CountUp value={stat.value} />
          </p>
          <p
            className={cn(
              "mt-2 font-sans text-[10px] uppercase tracking-[0.18em]",
              light ? "text-[#5C5852]" : "text-muted-foreground",
            )}
          >
            {stat.label}
          </p>
          <p className={cn("mt-2 text-xs", light ? "text-[#6B665E]" : "text-muted-foreground")}>
            {stat.note}
          </p>
        </div>
      ))}
    </div>
  );
}
