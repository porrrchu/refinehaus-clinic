# Refinehaus Clinic — Website

Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + MDX website for Refinehaus Clinic (Nakhon Ratchasima), a doctor-led aesthetic clinic. The original single-file prototype is kept in [`mockup/index.html`](mockup/index.html) for reference.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages static)
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` once the domain is known.

## Where things live

- `src/data/clinic.ts`: clinic facts (address, phone, LINE, license, social). Empty fields are placeholders and are left out of schema.org.
- `src/data/home.ts`: homepage copy (concerns, expertise, tech, doctors, steps, cases, articles, clinic photos).
- `src/components/sections/*`: one component per homepage section.
- `src/components/ui/*`: `Reveal` (scroll fade-in), `Ph` (image / placeholder via `next/image`), `SectionHeading`, `Logo`, icons.
- `src/app/globals.css`: brand tokens (`@theme`) and custom classes ported from the mockup.

## SEO (patterns ported from the NinetyNine project)

- `src/lib/seo.ts`: title/description length clamps and OpenGraph/Twitter helpers.
- `src/components/seo/SchemaMarkup.tsx`: JSON-LD (`MedicalClinic`, `Physician`, `WebSite`, `Organization`, `BreadcrumbList`, `FAQPage`, `MedicalProcedure`, `MedicalWebPage`).
- `src/app/robots.ts` plus `/main-sitemap.xml` (the sitemap to submit to Search Console) and `/sitemap.xml`, both built from `src/lib/sitemap.ts`.
- `src/app/opengraph-image.tsx`: default share image.
- `DeferredGoogleAnalytics`: loads GA4 after page load when `NEXT_PUBLIC_GA_ID` is set.

## Brand colors

| Name | Hex |
|---|---|
| Cream (primary bg) | `#FAF8F3` |
| Cream 2 (alt bg) | `#F3EFE7` |
| Olive (primary) | `#465447` |
| Olive Dark | `#39463B` |
| Walnut / Dark / Deep | `#6B5545` / `#553F30` / `#452F21` |
| Sage | `#A9AEA6` |
| Taupe | `#C8B6A4` |
| Charcoal (text) | `#353631` |
| Muted | `#6F7069` |

## Still placeholder

Photography, clinic address, phone, LINE, social links, license number and operator name (`src/data/clinic.ts`), and the production domain.
