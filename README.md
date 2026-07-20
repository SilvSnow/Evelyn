# Evelyn · Handmade Pottery

A personal pottery gallery + journal, built with [Astro](https://astro.build) and
deployed on [Cloudflare Pages](https://pages.cloudflare.com).

## Local development

```bash
npm install
npm run dev      # start dev server at http://localhost:4321
npm run build    # build static site to ./dist
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  assets/pottery/     # source photos — Astro optimizes these at build time
  components/Nav.astro
  layouts/BaseLayout.astro
  pages/
    index.astro       # gallery (auto-loads every photo in assets/pottery)
    about.astro
    blog/             # the Journal
  content/blog/*.md   # blog posts (Markdown with frontmatter)
  content.config.ts   # blog collection schema
```

### Adding photos
Drop image files into `src/assets/pottery/`. They appear in the gallery
automatically on the next build — no code changes needed.

### Adding a journal post
Create a new `.md` file in `src/content/blog/` with frontmatter:

```markdown
---
title: "My new post"
date: 2026-07-20
description: "Optional one-line summary."
---

Write your post here.
```

## Deploying to Cloudflare Pages

### One-time setup (git-connected, auto-deploys on every push)

1. Push this repo to GitHub (already connected to `SilvSnow/Evelyn`).
2. Go to the [Cloudflare dashboard](https://dash.cloudflare.com) →
   **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the `Evelyn` repository.
4. Set the build settings:
   - **Framework preset:** `Astro`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**.

Cloudflare builds the site and publishes it at `https://<project>.pages.dev`.
Every `git push` to the main branch triggers a new deploy automatically.

### Custom domain (optional, later)
In the Pages project → **Custom domains** → add your domain and follow the DNS
steps. Update `site` in `astro.config.mjs` to match.

### Deploy from the CLI instead (optional)

```bash
npm run build
npx wrangler pages deploy dist --project-name evelyn-pottery
```

## Roadmap

- **Selling pottery online** — the site is static today, but sales can be added
  without changing hosts. Options, easiest first:
  - **Stripe Payment Links / Buy Buttons** — no backend; paste a link/button per piece.
  - **Snipcart** — a drop-in `<button>` cart that works on static sites; ~2% fee.
  - **Shopify Buy Button** — embed Shopify products/checkout into these pages.
  - **Cloudflare Workers + Stripe** — fully custom checkout, still on Cloudflare.

  See the note in `src/pages/about.astro` / a future `/shop` page when ready.
