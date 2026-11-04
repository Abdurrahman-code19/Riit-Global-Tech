import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/common/Reveal";
import { usePageMeta } from "@/hooks/usePageMeta";
import { navLinks } from "@/data/site";

export default function NotFound() {
  usePageMeta({
    title: "Page not found",
    description:
      "The page you were looking for could not be found. Explore RIIT Global Tech services, Academy programmes, projects or contact us directly.",
    path: "/404",
    noindex: true,
  });

  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden border-b border-border bg-background">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full glow-red"
        aria-hidden="true"
      />
      <div className="container-wide relative z-10 py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-6">Error 404</p>
              <p
                aria-hidden="true"
                className="font-display text-[7rem] font-semibold leading-none tracking-tighter text-white/[0.08] sm:text-[10rem]"
              >
                404
              </p>
              <h1 className="display-2 -mt-6">This page took a different route.</h1>
              <p className="lead mt-6 max-w-xl">
                The page you were looking for does not exist, has moved, or the link was typed
                incorrectly. Everything below still works.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/">
                    <ArrowLeft />
                    Back to home
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    Contact RIIT
                    <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1} className="border border-border bg-card/40 p-6 sm:p-7">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <Compass className="h-4 w-4 text-primary" aria-hidden="true" />
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Try one of these
                </p>
              </div>
              <ul className="mt-2">
                {navLinks.map((link, index) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="flex items-center justify-between border-b border-border py-3.5 text-sm text-foreground transition-colors last:border-b-0 hover:text-primary"
                    >
                      {link.label}
                      <span className="font-display text-[10px] tracking-[0.18em] text-muted-foreground">
                        0{index + 1}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
