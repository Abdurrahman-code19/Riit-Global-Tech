import { useEffect, useState } from "react";
import { useInViewOnce } from "@/hooks/useInViewOnce";

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function CountUp({ value, className }: { value: string; className?: string }) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!inView) return;

    const match = value.match(/^([\d,]+)(.*)$/);
    if (!match || prefersReducedMotion()) {
      setDisplay(value);
      return;
    }

    const target = Number.parseInt(match[1].replace(/,/g, ""), 10);
    const suffix = match[2];
    const duration = 1500;
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(`${Math.round(target * eased).toLocaleString("en-US")}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    setDisplay(`0${suffix}`);
    const start = performance.now();
    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
