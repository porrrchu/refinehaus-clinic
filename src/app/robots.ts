import type { MetadataRoute } from 'next';
import { CLINIC } from '@/data/clinic';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Keep crawlers off internal/no-value routes to save crawl budget.
      disallow: ['/api/'],
    },
    // Canonical sitemap served at a non-reserved filename. The reserved
    // /sitemap.xml path gets RSC headers injected by Next.js that Search
    // Console's sitemap fetcher rejects, so we point to /main-sitemap.xml.
    sitemap: `${CLINIC.website}/main-sitemap.xml`,
  };
}
