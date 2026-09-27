import type { Metadata } from 'next';
import { CLINIC } from '@/data/clinic';

export const SEO_TITLE_LIMIT = 60;
export const SEO_DESCRIPTION_LIMIT = 155;

export function normalizeSeoText(value: string): string {
  return value.replace(/\s+/g, ' ').trim();
}

export function clampSeoTitle(title: string, limit = SEO_TITLE_LIMIT): string {
  const normalized = normalizeSeoText(title);
  if (normalized.length <= limit) return normalized;

  return `${normalized.slice(0, limit - 1).replace(/[|,;:\-\s]+$/u, '').trim()}…`;
}

export function clampSeoDescription(description: string, limit = SEO_DESCRIPTION_LIMIT): string {
  const normalized = normalizeSeoText(description);
  if (normalized.length <= limit) return normalized;

  return `${normalized.slice(0, limit - 1).replace(/[|,;:\-\s]+$/u, '').trim()}…`;
}

export function toAbsoluteUrl(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }

  return `${CLINIC.website}${url}`;
}

interface SocialMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

export function getSocialMetadata({
  title,
  description,
  path,
  image = CLINIC.ogImage,
  imageAlt,
  type = 'website',
  publishedTime,
  modifiedTime,
}: SocialMetadataOptions): Pick<Metadata, 'openGraph' | 'twitter'> {
  const normalizedTitle = clampSeoTitle(title, 90);
  const normalizedDescription = clampSeoDescription(description, 200);
  const imageUrl = toAbsoluteUrl(image);
  const pageUrl = toAbsoluteUrl(path);

  return {
    openGraph: {
      title: normalizedTitle,
      description: normalizedDescription,
      url: pageUrl,
      type,
      locale: 'th_TH',
      siteName: CLINIC.name,
      images: [
        {
          url: imageUrl,
          alt: imageAlt || normalizedTitle,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: normalizedTitle,
      description: normalizedDescription,
      images: [imageUrl],
    },
  };
}
