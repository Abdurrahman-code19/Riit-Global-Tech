#!/usr/bin/env node
/**
 * Submit every URL in public/sitemap.xml to IndexNow.
 *
 * IndexNow shares the submission with Bing, Yandex, Seznam, Naver and other
 * participating engines. It does not notify Google — use Google Search Console
 * for that.
 *
 * Usage:
 *   npm run indexnow             # submit to https://api.indexnow.org/indexnow
 *   npm run indexnow -- --dry-run  # print the payload without sending it
 *   SITE_URL=https://preview.example.com npm run indexnow
 *
 * The key is read from public/<key>.txt, which must contain exactly the key.
 */

import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const SITEMAP_FILE = path.join(PUBLIC_DIR, "sitemap.xml");
const ENDPOINT = "https://api.indexnow.org/indexnow";
const DEFAULT_SITE = "https://riit-global-tech.vercel.app";

const dryRun = process.argv.includes("--dry-run");
const site = (process.env.SITE_URL || DEFAULT_SITE).replace(/\/+$/, "");

function fail(message) {
  console.error(`\n✖ ${message}\n`);
  process.exit(1);
}

async function readIndexNowKey() {
  const files = await readdir(PUBLIC_DIR);
  const candidates = files.filter((file) => /^[a-f0-9]{8,128}\.txt$/i.test(file));

  for (const file of candidates) {
    const key = (await readFile(path.join(PUBLIC_DIR, file), "utf8")).trim();
    if (key.toLowerCase() === path.basename(file, ".txt").toLowerCase()) {
      return { key, fileName: file };
    }
  }

  return null;
}

async function readSitemapUrls() {
  const xml = await readFile(SITEMAP_FILE, "utf8");
  const urls = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((match) => match[1]);
  return [...new Set(urls)];
}

const keyInfo = await readIndexNowKey();
if (!keyInfo) {
  fail(
    "No IndexNow key file found in public/. Add a <key>.txt file whose contents match its file name.",
  );
}

const sitemapUrls = await readSitemapUrls();
if (sitemapUrls.length === 0) {
  fail("No <loc> entries found in public/sitemap.xml.");
}

const origin = new URL(site).origin;
const host = new URL(site).host;
// Keep the paths from the sitemap but target the requested host, so the same
// script can verify a preview deployment before production.
const urlList = sitemapUrls.map((url) => `${origin}${new URL(url).pathname}`);

const payload = {
  host,
  key: keyInfo.key,
  keyLocation: `${origin}/${keyInfo.fileName}`,
  urlList,
};

console.log(`\nIndexNow submission`);
console.log(`  host:     ${host}`);
console.log(`  key file: ${payload.keyLocation}`);
console.log(`  urls:     ${urlList.length}`);

if (dryRun) {
  console.log("\nDry run — payload:\n");
  console.log(JSON.stringify(payload, null, 2));
  console.log("\nNothing was sent.\n");
  process.exit(0);
}

let response;
try {
  response = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(20000),
  });
} catch (error) {
  fail(`Request failed: ${error instanceof Error ? error.message : String(error)}`);
}

const body = (await response.text()).trim();
const detail = body ? ` — ${body.slice(0, 300)}` : "";

if (response.status === 200 || response.status === 202) {
  console.log(`\n✔ Accepted (HTTP ${response.status}). IndexNow will share the URLs with Bing, Yandex, Seznam and Naver.\n`);
  process.exit(0);
}

const hints = {
  400: "Bad request — check the payload format.",
  403: "Key not valid — confirm the key file is deployed and publicly reachable.",
  422: "URLs do not belong to the host, or the key does not match.",
  429: "Too many requests — wait before submitting again.",
};

fail(
  `HTTP ${response.status}${detail}\n${hints[response.status] ?? "Unexpected response from IndexNow."}`,
);
