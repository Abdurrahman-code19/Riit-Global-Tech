import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OrbitVisual } from "@/components/common/OrbitVisual";
import { site } from "@/data/site";

const proof = [
  "Cisco Networking Academy training",
  "JAMB · WAEC · NECO-ready CBT centres",
  "Genuine UK-sourced equipment",
];

const lines = [
  { text: "Technology", className: "" },
  { text: "that ", accent: "moves", className: "" },
  { text: "your business", className: "" },
  { text: "forward.", className: "text-foreground/40" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-[34rem] w-[34rem] rounded-full glow-red"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full glow-burgundy"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10 flex min-h-[92svh] flex-col justify-center pb-16 pt-32 sm:pt-36 lg:pb-20 lg:pt-40">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-7 hero-fade" style={{ animationDelay: "0.08s" }}>
              Your reliable IT partner — since 2010
            </p>

            <h1 className="display-1 max-w-[11ch] text-foreground">
              {lines.map((line, index) => (
                <span key={line.text} className="block overflow-hidden pb-1">
                  <span
                    className={`hero-line block ${line.className}`}
                    style={{ animationDelay: `${0.12 + index * 0.09}s` }}
                  >
                    {line.text}
                    {line.accent && <span className="text-gradient-red">{line.accent}</span>}
                  </span>
                </span>
              ))}
            </h1>

            <p className="lead mt-8 max-w-xl">
              {site.description} From network infrastructure and CBT/CBE centres to websites,
              UK-sourced equipment and practical training.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 hero-fade" style={{ animationDelay: "0.42s" }}>
              <Button asChild size="lg">
                <Link to="/services">
                  Explore services
                  <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/academy">
                  Start learning
                  <Sparkles />
                </Link>
              </Button>
            </div>

            <ul
              className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 hero-fade"
              style={{ animationDelay: "0.5s" }}
            >
              {proof.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs leading-relaxed text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 hero-visual" style={{ animationDelay: "0.2s" }}>
            <OrbitVisual />
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-border pt-6 lg:mt-20">
          <p className="font-sans text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
            Ikotun, Lagos · Serving Nigeria
          </p>
          <a
            href="#company"
            className="group flex items-center gap-3 font-sans text-[9px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-primary"
          >
            Scroll to explore
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors group-hover:border-primary">
              <ArrowDown className="h-3.5 w-3.5 motion-safe:animate-scroll-cue" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
