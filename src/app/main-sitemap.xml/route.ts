import { getSitemapEntries, serializeSitemap } from '@/lib/sitemap';

// Canonical sitemap served at a NON-reserved filename. Next.js/Vercel treats
// the reserved path `/sitemap.xml` as a metadata route and injects RSC
// content-negotiation headers (`Vary: rsc, ...` + `content-disposition`) even
// when served via a Route Handler — Google Search Console's sitemap fetcher
// rejects that response ("Couldn't fetch"). A plain filename like this one is
// served as a clean application/xml response, which GSC reads fine.
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
