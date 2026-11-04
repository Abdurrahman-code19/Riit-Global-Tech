# RIIT Global Tech — Corporate Website

Official website for **RIIT Global Tech**, an ICT services, equipment and training company based in Lagos, Nigeria. The site presents the company's services, academy courses and projects, and gives prospective clients a direct way to get in touch.

**Live site:** https://riit-global-tech.vercel.app
**Repository:** https://github.com/Abdurrahman-code19/Riit-Global-Tech

## Overview

RIIT Global Tech has been delivering technology solutions since 2010. This site is the company's digital front door: a fast, responsive marketing site with structured service and course information, a project showcase, and a working contact form.

Key features:

- Responsive marketing pages for home, about, services, academy, projects and contact
- Service detail pages generated from a single content source
- Academy course pages with individual course details
- Contact form delivered by a Vercel serverless function (Resend API), with a mailto/WhatsApp fallback if email is not configured
- Per-page titles, descriptions, canonical URLs and social metadata
- Self-hosted fonts and brand assets
- Security headers and a Content Security Policy configured in `vercel.json`
- Accessible navigation, focus states, reduced-motion support and a mobile navigation dock

## Tech stack

- **React 18** with **TypeScript**
- **Vite 5** for development and production builds
- **Tailwind CSS 3** with Radix UI primitives
- **React Router 6** for client-side routing
- **Lucide React** icons
- **Vercel** for hosting, static delivery and the serverless contact endpoint
- **Resend** for transactional email

## Getting started

Requirements: **Node.js 20+** and npm.

```sh
git clone https://github.com/Abdurrahman-code19/Riit-Global-Tech.git
cd Riit-Global-Tech
npm ci
npm run dev
```

The development server runs on Vite's default port (usually `http://localhost:5173`).

### Production build

```sh
npm run build
npm run preview
```

## Available scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Build the production site into `dist/` |
| `npm run build:dev` | Build using development mode |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | Run the TypeScript type checker |
| `npm run lint` | Run ESLint |
| `npm run indexnow` | Submit the sitemap URLs to IndexNow (Bing, Yandex, Seznam, Naver) |

## Environment variables

The contact form posts to `/api/contact`, which sends email through Resend. Configure these in the Vercel project (Settings → Environment Variables):

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes | API key from [Resend](https://resend.com/api-keys) |
| `CONTACT_TO` | No | Inbox that receives enquiries. Defaults to `riitic51@gmail.com` |
| `CONTACT_FROM` | No | Verified sender, e.g. `RIIT Website <hello@riitglobaltech.com>` |
| `GOOGLE_SITE_VERIFICATION` | No | Google Search Console HTML-tag token. Injects `<meta name="google-site-verification">` at build time |
| `BING_SITE_VERIFICATION` | No | Bing Webmaster Tools token (`msvalidate.01`) |
| `YANDEX_VERIFICATION` | No | Yandex Webmaster token (`yandex-verification`) |

If `RESEND_API_KEY` is missing, the endpoint returns `503` and the website automatically shows its mailto/WhatsApp fallback so enquiries are not lost.

Verification tags are injected by the `riit-search-verification` plugin in `vite.config.ts`, so changing a verification token only requires a redeploy — no code edit.

## Project structure

```text
api/
  contact.js          Vercel serverless function for the contact form
public/
  brand/              Logo and wordmark assets
  fonts/              Self-hosted font files
  sitemap.xml         Indexable routes (keep in sync with the router)
  robots.txt          Crawl rules and sitemap location
scripts/
  indexnow.mjs        Submits sitemap URLs to IndexNow
src/
  components/
    brand/            Logo component
    common/           Shared UI (cards, headings, reveals, etc.)
    home/             Home page sections
    layout/           Navbar, footer, mobile dock, page layout
    ui/               Base UI primitives
  data/
    site.ts           Services, courses, projects and site content
  hooks/              Reusable hooks (page metadata, in-view observers)
  lib/                Icons and utilities
  pages/              Route-level pages
  App.tsx             Router and page shell
  main.tsx            Application entry point
  index.css           Tailwind layers and global styles
```

## Deployment

The site is deployed on **Vercel** and rebuilds automatically on every push to `master`.

- Framework: Vite
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`
- SPA rewrites and response headers: `vercel.json`
- Contact endpoint: `api/contact.js`

## Search visibility

### Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console) and add a **URL-prefix** property for `https://riit-global-tech.vercel.app/` (a Domain property cannot be used because `vercel.app` has no DNS record you control).
2. Choose **HTML tag**, copy only the `content="…"` token, and add it in Vercel as `GOOGLE_SITE_VERIFICATION`.
3. Redeploy, return to Search Console and click **Verify**.
4. Open **Sitemaps** and submit `https://riit-global-tech.vercel.app/sitemap.xml`.
5. Use **URL Inspection → Request indexing** for the home page and the main service pages.

### Bing, Yandex, Seznam and Naver

After a production deploy, submit every sitemap URL through IndexNow:

```sh
npm run indexnow
```

Run `npm run indexnow -- --dry-run` first to inspect the payload. The key is hosted at `https://riit-global-tech.vercel.app/8504a34b2c08b943f51b5d8f43aa8db7.txt`. IndexNow does not notify Google.

### Crawlability checks

```sh
curl -I https://riit-global-tech.vercel.app/robots.txt
curl -I https://riit-global-tech.vercel.app/sitemap.xml
```

`robots.txt` allows all crawlers and points to the sitemap. Verification and sitemap submission make the site eligible for indexing; they do not guarantee rankings.

## Contact

RIIT Global Tech
25, Ijegun Road, Oropo Bus Stop, Ikotun, Alimosho, Lagos, Nigeria
Email: riitic51@gmail.com
Phone: 0802 396 2693
