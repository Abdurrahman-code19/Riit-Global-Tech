import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "path";
import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import { allPageSeo, canonicalFor, fullTitle, type PageSeo } from "./src/data/seo";

/**
 * Search-engine ownership verification tags.
 *
 * The token is supplied per environment (Vercel → Project → Settings →
 * Environment Variables) so verification can be completed without another
 * code change or redeploy.
 */
const VERIFICATION_META: Record<string, string> = {
  GOOGLE_SITE_VERIFICATION: "google-site-verification",
  BING_SITE_VERIFICATION: "msvalidate.01",
  YANDEX_VERIFICATION: "yandex-verification",
};

function searchVerification(env: Record<string, string | undefined>): Plugin {
  return {
    name: "riit-search-verification",
    transformIndexHtml() {
      return Object.entries(VERIFICATION_META).flatMap(([envKey, name]) => {
        const content = env[envKey]?.trim();
        if (!content) return [];
        return [
          {
            tag: "meta",
            attrs: { name, content },
            injectTo: "head" as const,
          },
        ];
      });
    },
  };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * The client app updates metadata with `usePageMeta`, but crawlers should not
 * have to execute JavaScript to tell the 25 routes apart. This writes a static
 * HTML shell per route with the correct title, description, canonical and
 * social tags. `vercel.json` rewrites each route to its own shell.
 */
function renderRouteHtml(template: string, seo: PageSeo): string {
  const title = escapeHtml(fullTitle(seo));
  const description = escapeHtml(seo.description);
  const canonical = canonicalFor(seo);
  const robots = seo.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large";

  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta[^>]*name="description"[^>]*>/,
      `<meta name="description" content="${description}" />`,
    )
    .replace(/<link[^>]*rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta[^>]*name="robots"[^>]*>/, `<meta name="robots" content="${robots}" />`)
    .replace(
      /<meta[^>]*property="og:title"[^>]*>/,
      `<meta property="og:title" content="${title}" />`,
    )
    .replace(
      /<meta[^>]*property="og:description"[^>]*>/,
      `<meta property="og:description" content="${description}" />`,
    )
    .replace(/<meta[^>]*property="og:url"[^>]*>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(
      /<meta[^>]*property="og:image:alt"[^>]*>/,
      `<meta property="og:image:alt" content="${title}" />`,
    )
    .replace(
      /<meta[^>]*name="twitter:title"[^>]*>/,
      `<meta name="twitter:title" content="${title}" />`,
    )
    .replace(
      /<meta[^>]*name="twitter:description"[^>]*>/,
      `<meta name="twitter:description" content="${description}" />`,
    );
}

function prerenderRoutes(): Plugin {
  let outDir = "dist";

  return {
    name: "riit-prerender-routes",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      const entry = path.join(outDir, "index.html");
      const template = await readFile(entry, "utf8");

      for (const seo of allPageSeo()) {
        const target =
          seo.path === "/" ? entry : path.join(outDir, seo.path.slice(1), "index.html");
        await mkdir(path.dirname(target), { recursive: true });
        await writeFile(target, renderRouteHtml(template, seo));
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // `loadEnv` reads .env files; `process.env` supplies Vercel's build-time
  // variables. Merge both so verification works in either setup.
  const env: Record<string, string | undefined> = {
    ...loadEnv(mode, process.cwd(), ""),
    ...process.env,
  };

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), searchVerification(env), prerenderRoutes()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      target: "es2020",
      cssMinify: true,
    },
  };
});
