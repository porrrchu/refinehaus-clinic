// JSON-LD helpers, ported from the NinetyNine (99int) project and adapted for a
// medical clinic: LocalBusiness → MedicalClinic, founder Person → Physician.
import { CLINIC, getSocialLinks } from '@/data/clinic';
import { toAbsoluteUrl } from '@/lib/seo';

const ORG_ID = `${CLINIC.website}/#organization`;
const CLINIC_ID = `${CLINIC.website}/#clinic`;
const WEBSITE_ID = `${CLINIC.website}/#website`;

type Json = Record<string, unknown>;

// Drop empty strings/arrays/null so placeholder data never reaches Google.
function compact<T extends Json>(obj: T): T {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) =>
      v !== '' && v !== null && v !== undefined && !(Array.isArray(v) && v.length === 0)
    )
  ) as T;
}

interface SchemaMarkupProps {
  schema: Json | Json[];
}

export function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
    />
  );
}

function getPostalAddress() {
  return compact({
    '@type': 'PostalAddress',
    streetAddress: CLINIC.streetAddress,
    addressLocality: CLINIC.district,
    addressRegion: CLINIC.province,
    postalCode: CLINIC.postalCode,
    addressCountry: 'TH',
  });
}

export function getMedicalClinicSchema(options?: { specialties?: string[]; physicianIds?: string[] }) {
  return compact({
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    '@id': CLINIC_ID,
    name: CLINIC.name,
    alternateName: CLINIC.nameThai,
    description: CLINIC.description,
    url: CLINIC.website,
    telephone: CLINIC.phoneIntl,
    image: toAbsoluteUrl(CLINIC.ogImage),
    logo: toAbsoluteUrl(CLINIC.logo),
    hasMap: CLINIC.googleMapsUrl,
    address: getPostalAddress(),
    geo: CLINIC.geo ? { '@type': 'GeoCoordinates', ...CLINIC.geo } : null,
    areaServed: [
      { '@type': 'City', name: 'นครราชสีมา' },
      { '@type': 'City', name: 'Nakhon Ratchasima' },
    ],
    medicalSpecialty: options?.specialties ?? ['Dermatology', 'Endocrine'],
    employee: (options?.physicianIds ?? []).map((id) => ({ '@id': id })),
    parentOrganization: { '@id': ORG_ID },
    sameAs: getSocialLinks(),
  });
}

export function getOrganizationSchema() {
  return compact({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: CLINIC.name,
    alternateName: CLINIC.nameThai,
    url: CLINIC.website,
    logo: toAbsoluteUrl(CLINIC.logo),
    telephone: CLINIC.phoneIntl,
    address: getPostalAddress(),
    sameAs: getSocialLinks(),
  });
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: CLINIC.name,
    alternateName: CLINIC.nameThai,
    url: CLINIC.website,
    inLanguage: 'th-TH',
    publisher: { '@id': ORG_ID },
  };
}

interface PhysicianSchemaInput {
  slug: string;
  name: string;
  jobTitle: string;
  specialty: string;
  description?: string;
  image?: string;
  url?: string;
}

export function getPhysicianId(slug: string) {
  return `${CLINIC.website}/#physician-${slug}`;
}

export function getPhysicianSchema({ slug, name, jobTitle, specialty, description, image, url }: PhysicianSchemaInput) {
  return compact({
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': getPhysicianId(slug),
    name,
    jobTitle,
    medicalSpecialty: specialty,
    description,
    image: image ? toAbsoluteUrl(image) : '',
    url: url ?? CLINIC.website,
    worksFor: { '@id': CLINIC_ID },
  });
}

export function getWebPageSchema({ name, description, url }: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: 'th-TH',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': CLINIC_ID },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getItemListSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function getMedicalProcedureSchema({ name, description, url }: { name: string; description: string; url: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    '@id': `${url}#procedure`,
    name,
    description,
    url,
    inLanguage: 'th-TH',
    provider: { '@id': CLINIC_ID },
  };
}

interface ArticleSchemaOptions {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image: string;
  authorSlug: string;
}

// Medical articles should be attributed to the reviewing physician (E-E-A-T).
export function getArticleSchema({ title, description, url, datePublished, dateModified, image, authorSlug }: ArticleSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': `${url}#article`,
    headline: title,
    description,
    url,
    inLanguage: 'th-TH',
    datePublished,
    dateModified,
    image: toAbsoluteUrl(image),
    author: { '@id': getPhysicianId(authorSlug) },
    reviewedBy: { '@id': getPhysicianId(authorSlug) },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };
}
