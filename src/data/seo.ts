import { courses, services, site } from "./site";

export type PageSeo = {
  /** Title as passed to `usePageMeta` — the brand suffix is added by `fullTitle`. */
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
};

/**
 * The single source of truth for route metadata.
 *
 * `usePageMeta` uses it at runtime and the build-time prerenderer in
 * `vite.config.ts` uses it to write static HTML shells, so a crawler that does
 * not execute JavaScript still sees the right title, description and canonical.
 */
const staticPages: Record<string, Omit<PageSeo, "path">> = {
  "/": {
    title: "RIIT Global Tech | Your Reliable IT Partner",
    description:
      "RIIT Global Tech delivers networking, CBT/CBE centre setup, websites, UK-sourced equipment and Cisco Networking Academy training for individuals, schools and businesses in Lagos.",
  },
  "/about": {
    title: "About RIIT Global Tech",
    description:
      "Since 2010, RIIT Global Tech has delivered ICT solutions and practical digital skills to individuals, schools and businesses in Lagos, Nigeria. Learn about our story and values.",
  },
  "/services": {
    title: "Services",
    description:
      "Explore RIIT Global Tech services: networking, CBT/CBE centre setup, website and e-commerce development, ICT training, equipment sales, repairs and IT consulting in Lagos.",
  },
  "/academy": {
    title: "RIIT Academy",
    description:
      "Advance your career with practical ICT training under the Cisco Networking Academy: computer hardware, networking, cybersecurity, data analysis, frontend development, WordPress and graphic design.",
  },
  "/projects": {
    title: "Projects & Deployments",
    description:
      "See where RIIT Global Tech works: CBT/CBE examination centres in Lagos, plus capability areas spanning networking, school portals, e-commerce, equipment supply and ICT training.",
  },
  "/contact": {
    title: "Contact",
    description:
      "Contact RIIT Global Tech at 25, Ijegun Road, Oropo Bus Stop, Ikotun, Alimosho, Lagos. Call 0802 396 2693, email riitic51@gmail.com or send an enquiry.",
  },
  "/privacy": {
    title: "Privacy Policy",
    description:
      "How RIIT Global Tech handles personal information submitted through this website, including enquiry form data, retention, your choices and embedded Google Maps content.",
  },
  "/terms": {
    title: "Terms of Use",
    description:
      "The terms that apply to using the RIIT Global Tech website, including information accuracy, enquiries, intellectual property, third-party links and governing law.",
  },
  "/404": {
    title: "Page not found",
    description:
      "The page you were looking for could not be found. Explore RIIT Global Tech services, Academy programmes, projects or contact us directly.",
    noindex: true,
  },
};

export function fullTitle(seo: Pick<PageSeo, "title">): string {
  return seo.title.includes("RIIT Global Tech") ? seo.title : `${seo.title} | RIIT Global Tech`;
}

export function pageSeo(path: string): PageSeo {
  const direct = staticPages[path];
  if (direct) return { ...direct, path };

  const service = services.find((item) => path === `/services/${item.slug}`);
  if (service) {
    return {
      title: service.title,
      description: `${service.description} RIIT Global Tech delivers ${service.title.toLowerCase()} for ${service.audiences.toLowerCase()} in Lagos, Nigeria.`,
      path,
    };
  }

  const course = courses.find((item) => path === `/academy/${item.slug}`);
  if (course) {
    return {
      title: `${course.name} Course`,
      description: `${course.description} Study ${course.name.toLowerCase()} with RIIT Academy in Ikotun, Lagos. Enquire about schedules, fees and entry requirements.`,
      path,
    };
  }

  return { ...staticPages["/404"], path, noindex: true };
}

/** Every indexable route, plus the noindex 404 shell. */
export function allPageSeo(): PageSeo[] {
  return [
    "/",
    "/about",
    "/services",
    "/academy",
    "/projects",
    "/contact",
    "/privacy",
    "/terms",
    ...services.map((service) => `/services/${service.slug}`),
    ...courses.map((course) => `/academy/${course.slug}`),
    "/404",
  ].map(pageSeo);
}

export function canonicalFor(seo: Pick<PageSeo, "path">): string {
  return `${site.url}${seo.path === "/" ? "/" : seo.path}`;
}
