import { useEffect } from "react";
import { site } from "@/data/site";
import { canonicalFor, fullTitle as brandTitle } from "@/data/seo";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
};

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function usePageMeta({
  title,
  description,
  path,
  image = "/og-image.jpg",
  type = "website",
  jsonLd,
  noindex = false,
}: PageMeta) {
  useEffect(() => {
    const fullTitle = brandTitle({ title });
    const canonical = canonicalFor({ path });
    const imageUrl = image.startsWith("http") ? image : `${site.url}${image}`;

    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large");
    setLink("canonical", canonical);

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:type", type);
    setMeta("property", "og:image", imageUrl);
    setMeta("property", "og:image:alt", fullTitle);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", imageUrl);

    const existing = document.getElementById("page-jsonld");
    if (existing) existing.remove();

    if (jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "page-jsonld";
      script.textContent = JSON.stringify(
        Array.isArray(jsonLd) ? { "@context": "https://schema.org", "@graph": jsonLd } : jsonLd,
      );
      document.head.appendChild(script);
    }
  }, [title, description, path, image, type, jsonLd, noindex]);
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path === "/" ? "/" : item.path}`,
    })),
  };
}
