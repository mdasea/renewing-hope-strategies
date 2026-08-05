# Renewing Hope Strategies — Website Rebuild

A faster, more accessible rebuild of [renewinghopestrategies.org](https://www.renewinghopestrategies.org),
a 501(c)(3) nonprofit mental-health and wellness organization serving Hemet, Murrieta, and Riverside, CA.

## Stack
- **Astro** — static, SEO-first
- **Tailwind CSS** — accessible responsive design
- **Decap CMS** — git-based editing for staff (at `/admin`)
- **Netlify** — hosting + Identity + Git Gateway + forms + redirects
- **Givebutter** — tax-deductible donations with receipting
- **Formspree** — contact + newsletter forms

## Quick start
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to /dist
npm run preview
```

## Configuration
All site-wide contact info, brand strings, and integrations live in `src/config/site.ts`.
Form IDs and the Givebutter slug are wired through `src/config/site.ts` (defaults in
`.env.example` for production). Update one place and it propagates everywhere.

## Editing content (staff)
1. After first deploy, enable Netlify Identity + Git Gateway.
2. Visit `https://yoursite.netlify.app/admin` and log in.
3. Edit Events, Board bios, etc. Changes commit to git and trigger a deploy.

## Project structure
```
src/
  config/site.ts            # canonical contact info, brand, integrations
  data/services.ts          # counseling specialties content
  data/content.ts           # team, events, stats
  layouts/Layout.astro      # head, schema, crisis bar, header, footer
  components/               # reusable UI
  pages/
    index.astro             # home
    services/
      index.astro           # services hub
      [service]/
        index.astro         # service page
        [area].astro         # city x service SEO landing
    locations/
      index.astro
      [location].astro
    about/index.astro, board.astro
    sliding-scale.astro
    events.astro
    donate.astro
    get-involved.astro
    contact.astro
    privacy.astro
    404.astro
public/
  favicon.svg, robots.txt
  admin/                    # Decap CMS
  files/                    # sliding-scale PDF applications (EN/ES)
netlify.toml                # build + redirects + security headers
astro.config.mjs            # sitemap + old-URL redirects

## Things to fill in before deploy
- Replace placeholder board bios/photos (`src/data/content.ts`).
- Replace placeholder PDFs in `public/files/` with the real EN/ES applications
  (paths: `sliding-fee-application-english.pdf`, `sliding-fee-application-spanish.pdf`).
- Set the canonical phone number in `src/config/site.ts` if it differs from `(951) 465-3665`.
- Set Formspree form IDs and the Givebutter campaign slug.
- Confirm EIN in `src/config/site.ts`.