# Insightive Software — insightive.io

Marketing and thought-leadership site for Insightive Software (Insightive LLC-FZ, Dubai). Positioning: fit-built software engineered for how you work and handed over with full ownership. "We sell no software. Either we advise, or we build." Priority markets: Pakistan, the UAE and Saudi Arabia.

## Stack

- **Astro 5** (static output) with **React islands** for interactive forms only.
- `@astrojs/sitemap` for the sitemap; no other build-time integrations.
- Serverless form handlers in `/api` (Vercel Node functions, Resend REST API).
- Deployed on **Vercel** via the GitHub integration (static build plus `/api` functions).

## Getting started

```bash
npm install
npm run dev        # local dev at http://localhost:4321
npm run build      # static build to dist/  (+ /api functions deploy on Vercel)
npm run preview    # preview the production build
```

Node 18+ required (the form functions use the global `fetch`).

## Project structure

```
public/            Static assets: fonts (TSSAFAA woff2), brand SVGs, favicons,
                   og-image.png, robots.txt, llms.txt
src/
  components/      Header, Footer, SEO, ContactForm.tsx, CareersForm.tsx
  layouts/         Base.astro (head, SEO, header/footer, scroll-reveal script),
                   Legal.astro
  pages/           index, thesis, services/{index,advisory,build}, industries/*,
                   insights/*, work, careers, contact, legal x3, 404
  content/         Content collections (see below)
  styles/          tokens.css (design tokens), global.css (base + components)
  content.config.ts
api/               contact.js, careers.js, _lib.js  (Vercel serverless, Resend)
vercel.json        301 redirects
```

## Content collections

Defined in `src/content.config.ts`. Each loads markdown via a glob loader (swappable for an API loader later without touching pages).

- **insights** — essays. Frontmatter: `title, dek, category, author, bylined, publishDate, updatedDate?, readingTime?, draft, takeaways[]`. Categories: Ownership Economics, Process Fit, Decision Frameworks, Field Notes, Industry Deep Dives.
- **industries** — `name, dek, order, misfits[], builds[], faq[{q,a}]`. The FAQ renders on-page and as FAQPage JSON-LD.
- **work** — anonymized outcome cards: `industry, scale, title, misfit, outcome, order`.

### Adding an essay

1. Create `src/content/insights/<slug>.md` with the frontmatter above and `draft: true`.
2. Add `takeaways` (answer-first; rendered as the Key takeaways block and good for GEO).
3. Add a per-slug **header motif** in `bySlug` inside `src/pages/insights/[slug].astro` (small square SVG; falls back to a per-category motif if omitted).
4. Add one or more **in-body explainer figures** directly in the markdown at the logical spot (before the conclusion) as `<figure class="essay-figure"><div class="essay-figure-art">…SVG…</div><figcaption>…</figcaption></figure>`. Styling lives in `global.css`.
5. Flip `draft: false` to publish. Drafts render in `dev` only and are excluded from the production build.

## Design system

- **Palette:** Royal `#0066CC` (primary), Cyan `#00FFFF` (the "verb": emphasis only, never a fill), Deep Navy `#13141E` (dark surfaces), Paper `#FAFAFA` / `#F5F4EF`. Amber `#BA7517` is used only inside article graphics to flag a cost/error moment.
- **Type:** TSSAFAA (self-hosted, primary sans), Instrument Serif (italic emphasis, system fallback for now), JetBrains Mono (eyebrow/labels, system fallback for now). Tokens in `tokens.css`.
- **Motion budget:** one quiet entrance. `.fade-up`, the cyan `.tick` reveal and the eyebrow rule are driven by a single IntersectionObserver in `Base.astro`, JS-gated via `html.js`, and degrade to static for `prefers-reduced-motion` and no-JS.
- **Hero motif:** CSS blocks that assemble into a perfect tile on the right of the homepage hero.

## Forms (Resend)

`/api/contact.js` and `/api/careers.js` are Vercel serverless functions calling the Resend REST API (no SDK). The careers form posts the CV as a base64 attachment. Set these env vars in Vercel:

- `RESEND_API_KEY` (required) — the insightive.io domain must be verified in Resend.
- `RESEND_FROM` (default `Insightive Website <noreply@insightive.io>`)
- `CONTACT_TO` (default `inquiry@insightive.io`)
- `CAREERS_TO` (default `careers@insightive.io`)

## Analytics

GA4 and the Meta pixel are wired in `Base.astro` and load only when their IDs are set (env-gated, so dev and preview stay clean):

- `PUBLIC_GA4_ID` — GA4 Measurement ID (e.g. `G-XXXXXXXXXX`).
- `PUBLIC_META_PIXEL_ID` — Meta pixel ID.

With neither set, no analytics scripts render. For EU/UK traffic, consider a consent mechanism (or Google Consent Mode) before these fire; the privacy policy names both.

## SEO / GEO / AEO

- Per-page title, meta description, absolute canonical, Open Graph (with `og-image.png`, 1200x630) and Twitter card, via `src/components/SEO.astro`.
- JSON-LD: Organization on every page; Article on essays and the thesis; FAQPage on industry and service pages.
- `public/robots.txt` allows all crawlers and explicitly welcomes AI/answer engines (GPTBot, ClaudeBot, PerplexityBot, Google-Extended and others); references the sitemap.
- `public/llms.txt` summarizes the site and key pages for LLM discovery.
- Sitemap generated at build (`sitemap-index.xml`).

## Deployment (Vercel)

- Framework preset: Astro (static). Output in `dist/`. The root `/api` directory deploys as serverless functions alongside the static build.
- `vercel.json` holds 301 redirects: `/commerce` → `/services/advisory`, `/industries/logistics-distribution` → `/industries`.
- Set the Resend env vars (above) before forms will send.

## Content punctuation rules (house style)

Applies to all copy on the site:

- Do not use the dash ("—" or " - ") as a punctuation device where a period, colon, semicolon, parentheses or the word "and" works.
- Never place a comma before "and". Write "a, b and c", not "a, b, and c".

## DocMan workflow

External-system syncs (Notion, GitHub, Vercel) are not run from the build session. Task files are queued in `../_docman/` for Insightive DocMan to execute. The build session never pushes directly.

## Fast-follows

- Self-host Instrument Serif and JetBrains Mono (currently system fallbacks).
- Remaining Insights essays and the Industry Deep Dive case studies (HR, Education, Healthcare, Retail) are drafted and published on a weekly cadence.
