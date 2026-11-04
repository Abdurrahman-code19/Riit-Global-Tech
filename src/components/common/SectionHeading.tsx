import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  action?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  action,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      {eyebrow && <p className={cn("eyebrow mb-5", centered && "justify-center")}>{eyebrow}</p>}
      <h2 className="display-2">{title}</h2>
      {description && <div className={cn("lead mt-6", centered && "mx-auto")}>{description}</div>}
      {action && <div className={cn("mt-8", centered && "flex justify-center")}>{action}</div>}
    </Reveal>
  );
}
