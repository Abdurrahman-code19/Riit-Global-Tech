import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Tag({
  children,
  className,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  tone?: "default" | "red" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center border px-2.5 py-1 font-sans text-[9px] font-medium uppercase tracking-[0.14em]",
        tone === "default" && "border-border bg-white/[0.02] text-muted-foreground",
        tone === "red" && "border-primary/40 bg-primary/[0.12] text-[#FF9EA1]",
        tone === "light" && "border-[#D8D3CA] bg-white/60 text-[#5C5852]",
        className,
      )}
    >
      {children}
    </span>
  );
}
