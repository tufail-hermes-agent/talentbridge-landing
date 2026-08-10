# Frontend Starter — Next.js

The agency's production-ready **frontend** starter, based on the Protech Software Solutions agency site (software.protechacademy.in). Includes a polished agency landing page, SEO infrastructure, and a quotation tool.

## ⚠️ When to use this template

Use this starter **ONLY** for frontend projects:

- Landing pages
- Marketing websites
- Static / content websites
- Portfolio and brochure sites
- SEO-focused public pages

**Do NOT use this starter for full-stack work.** It has no database, no Prisma, no authentication, and no backend. For dashboards, admin panels, CRMs, SaaS apps, or anything needing PostgreSQL/auth/business logic, use the agency's **full-stack starter** instead. Forcing a database into a project that does not need one is a violation of agency engineering standards.

| Project type | Template |
|---|---|
| Landing page / marketing site / static / portfolio | **This starter** |
| Dashboard / admin / CRM / SaaS / full-stack app | full-stack-starter-nextjs |

## Included

- Bun package manager and lockfile
- Next.js 16.3, React, TypeScript, App Router
- Tailwind CSS v4
- ESLint 9 + Next config
- Prettier + Tailwind plugin
- Lucide React icons
- Production-grade SEO: metadata API, sitemap, robots, Open Graph, JSON-LD structured data
- Reusable landing sections (Hero, Services, Portfolio, Testimonials, FAQ, CTA, Footer)
- Quotation tool (client-side, no backend required)

## Setup

```bash
bun install
bun run dev
```

## Quality checks

```bash
bun run format:check
bun run lint
bun run typecheck
bun run build
```

## Project structure

```text
src/app/            App Router pages, sitemap, robots, metadata
src/components/     Reusable landing sections and UI
src/lib/            Site config, services, FAQ data, utilities
public/             Static assets and images
reference/          Design references
```

## Customizing for a customer

1. Update `src/lib/site.ts` — name, phone, address, socials, maps URLs (single source of truth for NAP + SEO)
2. Update `src/lib/services.ts` and `src/lib/faqs.ts` — services and FAQ content
3. Replace `public/logo.png`, `public/logo-icon.png`, `public/image.png` with customer branding
4. Update the metadata in `src/app/layout.tsx` for the customer's title/description
5. Build, verify, push to GitHub, deploy to Vercel

## Agency workflow

1. Create a GitHub repository under the agency organization
2. Clone this starter into the project workspace
3. Customize branding and content per customer
4. Run lint, typecheck, build
5. Push to GitHub and deploy to Vercel
6. Verify the deployment and return the URL

No database, no environment secrets, no migrations needed for pure frontend projects.

## Source

Derived from the Protech Software Solutions agency website. This repository is the agency's reusable frontend baseline.

## License

See [LICENSE](./LICENSE).
