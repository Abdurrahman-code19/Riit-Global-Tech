import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Navbar } from "./Navbar";
import { MobileDock } from "./MobileDock";
import { Footer } from "./Footer";
import { site } from "@/data/site";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
      if (ref.current) ref.current.style.transform = `scaleX(${progress})`;
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-primary"
      style={{ transform: "scaleX(0)" }}
      aria-hidden="true"
    />
  );
}

function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-primary focus:px-4 focus:py-3 focus:font-display focus:text-xs focus:font-semibold focus:uppercase focus:tracking-[0.16em] focus:text-primary-foreground"
    >
      Skip to content
    </a>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={site.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with RIIT Global Tech on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-[#07130A] shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105 focus-visible:outline-offset-4 sm:bottom-6 sm:right-6 sm:flex"
    >
      <MessageCircle className="h-6 w-6" aria-hidden="true" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap border border-border bg-[#0E0F10] px-3 py-2 font-sans text-[10px] uppercase tracking-[0.14em] text-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100 lg:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SkipLink />
      <ScrollProgress />
      <Navbar />
      <MobileDock />
      <main id="main-content">{children}</main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}
