import { useEffect, useRef, useState } from "react";

type Callback = () => void;

const callbacks = new WeakMap<Element, Callback>();
let sharedObserver: IntersectionObserver | null = null;

function getObserver() {
  if (typeof IntersectionObserver === "undefined") return null;

  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const callback = callbacks.get(entry.target);
          if (callback) {
            callbacks.delete(entry.target);
            sharedObserver?.unobserve(entry.target);
            callback();
          }
        }
      },
      { rootMargin: "0px 0px 12% 0px", threshold: 0 },
    );
  }

  return sharedObserver;
}

/**
 * Fires once when the element first scrolls into view.
 * Uses one shared IntersectionObserver for the whole page.
 * Falls back to visible when IntersectionObserver is unavailable.
 */
export function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = getObserver();
    if (!observer) {
      setInView(true);
      return;
    }

    callbacks.set(element, () => setInView(true));
    observer.observe(element);

    return () => {
      callbacks.delete(element);
      observer.unobserve(element);
    };
  }, []);

  return { ref, inView };
}
