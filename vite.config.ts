import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

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
    plugins: [react(), searchVerification(env)],
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
