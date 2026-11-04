import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  priority?: boolean;
  alt?: string;
  /** "wordmark" is the full official lockup; "emblem" is the red mark on its own. */
  variant?: "wordmark" | "emblem";
  /** Tone of the surface the logo sits on. Only affects the wordmark. */
  tone?: "dark" | "light";
};

const sources = {
  "wordmark-dark": {
    src: "/brand/riit-wordmark-on-dark.webp",
    width: 528,
    height: 164,
  },
  "wordmark-light": {
    src: "/brand/riit-wordmark-on-light.webp",
    width: 527,
    height: 164,
  },
  emblem: {
    src: "/brand/riit-emblem.webp",
    width: 264,
    height: 215,
  },
} as const;

export function Logo({
  className,
  priority = false,
  alt = "",
  variant = "wordmark",
  tone = "dark",
}: LogoProps) {
  const source =
    variant === "emblem"
      ? sources.emblem
      : tone === "light"
        ? sources["wordmark-light"]
        : sources["wordmark-dark"];

  return (
    <img
      src={source.src}
      width={source.width}
      height={source.height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={cn("w-auto max-w-none object-contain", className)}
    />
  );
}
