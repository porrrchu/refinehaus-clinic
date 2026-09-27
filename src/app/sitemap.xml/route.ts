import { getSitemapEntries, serializeSitemap } from '@/lib/sitemap';

// Serve /sitemap.xml from a plain Route Handler instead of the Next.js
// metadata convention (app/sitemap.ts). The metadata route emits RSC
// content-negotiation headers (`Vary: rsc, next-router-state-tree, ...`)
// that Google Search Console's sitemap fetcher can choke on — which is why
// the old custom /main-sitemap.xml route was readable by GSC while the
// built-in /sitemap.xml was reported as "Couldn't fetch". This returns a
// clean application/xml response with no RSC headers.
export const dynamic = 'force-static';

export function GET() {
  const xml = serializeSitemap(getSitemapEntries());

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=86400, must-revalidate',
    },
  });
}
