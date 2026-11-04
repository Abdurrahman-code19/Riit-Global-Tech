import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

const labels = [
  { text: "Networks", position: "left-0 top-[18%]" },
  { text: "Software", position: "right-0 top-[34%]" },
  { text: "Academy", position: "bottom-[18%] right-[6%]" },
  { text: "Support", position: "bottom-[30%] left-0" },
];

export function OrbitVisual({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-[35rem]", className)}>
      <div className="absolute inset-[12%] rounded-full glow-red" aria-hidden="true" />

      <svg
        viewBox="0 0 560 560"
        className="absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="orbit-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ED5156" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#ED5156" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="orbit-line" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#ED5156" stopOpacity="0.75" />
            <stop offset="1" stopColor="#B5121B" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        <circle cx="280" cy="280" r="250" fill="url(#orbit-core)" />
        <circle cx="280" cy="280" r="248" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />
        <circle cx="280" cy="280" r="204" stroke="rgba(237,81,86,0.28)" strokeWidth="1" strokeDasharray="2 8" />
        <circle cx="280" cy="280" r="150" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />

        <path
          d="M 280 32 A 248 248 0 0 1 528 280"
          stroke="#ED5156"
          strokeOpacity="0.45"
          strokeWidth="1"
        />
        <path
          d="M 280 528 A 248 248 0 0 1 32 280"
          stroke="#ED5156"
          strokeOpacity="0.25"
          strokeWidth="1"
        />
      </svg>

      {/*
        The orbital plane lives on its own layer so the slow rotation is a compositor
        transform instead of a per-frame SVG re-raster.
      */}
      <div
        className="absolute inset-0 motion-safe:animate-orbit-spin will-change-transform"
        aria-hidden="true"
      >
        <svg viewBox="0 0 560 560" className="h-full w-full" fill="none">
          <defs>
            <linearGradient id="orbit-line-motion" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#ED5156" stopOpacity="0.75" />
              <stop offset="1" stopColor="#B5121B" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <ellipse
            cx="280"
            cy="280"
            rx="248"
            ry="108"
            stroke="url(#orbit-line-motion)"
            strokeWidth="1.5"
            transform="rotate(-28 280 280)"
          />
          <ellipse
            cx="280"
            cy="280"
            rx="248"
            ry="108"
            stroke="url(#orbit-line-motion)"
            strokeWidth="1.5"
            transform="rotate(42 280 280)"
          />
          <circle cx="503" cy="204" r="4" fill="#ED5156" />
          <circle cx="84" cy="372" r="3" fill="#ED5156" fillOpacity="0.7" />
          <circle cx="342" cy="519" r="3" fill="#ED5156" fillOpacity="0.5" />
        </svg>
      </div>

      <div className="absolute inset-0 grid place-items-center">
        <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/10 bg-[#111213]/90 shadow-[0_0_80px_rgba(237,81,86,0.18)] backdrop-blur-sm sm:h-36 sm:w-36">
          <span className="absolute -inset-3 rounded-full border border-primary/20" aria-hidden="true" />
          <span className="absolute -inset-6 rounded-full border border-white/[0.04]" aria-hidden="true" />
          <Logo variant="emblem" className="h-14 sm:h-16" priority />
        </div>
      </div>

      {labels.map((label) => (
        <span
          key={label.text}
          className={cn(
            "absolute hidden items-center gap-2 font-sans text-[9px] uppercase tracking-[0.26em] text-muted-foreground sm:flex",
            label.position,
          )}
        >
          <span className="h-1 w-1 bg-primary" aria-hidden="true" />
          {label.text}
        </span>
      ))}

      <div className="absolute bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-2 font-sans text-[9px] uppercase tracking-[0.26em] text-muted-foreground">
        <span className="h-1 w-1 animate-pulse-soft bg-primary" aria-hidden="true" />
        Systems online
      </div>
    </div>
  );
}
