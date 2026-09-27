import type { MetadataRoute } from 'next';
import { STATIC_PAGES } from '@/data/staticPages';
import { CLINIC } from '@/data/clinic';

function parseUpdatedAt(value: string) {
  return new Date(`${value}T00:00:00+07:00`);
}

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function formatLastModified(value: string | Date) {
  return value instanceof Date ? value.toISOString() : new Date(value).toISOString();
}

export function getSitemapEntries(): MetadataRoute.Sitemap {
  const base = CLINIC.website;

  return [
    ...STATIC_PAGES.map((p) => ({
      url: p.path === '/' ? base : `${base}${p.path}`,
      lastModified: parseUpdatedAt(p.updatedAt),
    })),
    // Add treatments / doctors / articles here as those pages are built.
  ];
}

export function serializeSitemap(entries: MetadataRoute.Sitemap) {
  const body = entries
    .map((entry) => {
      const parts = ['<url>', `<loc>${escapeXml(entry.url)}</loc>`];

      if (entry.lastModified) {
        parts.push(`<lastmod>${formatLastModified(entry.lastModified)}</lastmod>`);
      }

      parts.push('</url>');

      return parts.join('');
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`;
}
