// Single source of truth for clinic facts (NAP, links, legal) — used by the
// header/footer, metadata and schema.org. Empty strings are placeholders the
// clinic still needs to supply; schema helpers skip them so Google never sees
// fake data.

export const CLINIC = {
  name: 'Refinehaus Clinic',
  nameThai: 'รีไฟน์เฮาส์ คลินิก',
  tagline: 'Beauty, thoughtfully refined.',
  description:
    'คลินิกเวชกรรมความงามและการดูแลสุขภาพในโคราช ให้คำปรึกษาและวางแผนการรักษาโดยแพทย์ทุกเคส เพื่อผลลัพธ์ที่พอดีและเป็นธรรมชาติ',

  website: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.example.com').replace(/\/$/, ''),
  logo: '/images/logo-olive.png',
  ogImage: '/opengraph-image',

  // Contact — TODO: fill in real data
  phone: '',
  phoneIntl: '',
  lineId: '',
  lineUrl: '',
  googleMapsUrl: '',
  facebook: '',
  instagram: '',
  tiktok: '',

  // Address — TODO: fill in real data
  streetAddress: '',
  district: 'เมืองนครราชสีมา',
  province: 'นครราชสีมา',
  postalCode: '',
  geo: null as { latitude: number; longitude: number } | null,

  openingHoursText: 'เปิดให้บริการช่วงเย็น ตามนัดหมาย',

  // Legal (สบส.) — TODO: fill in real data
  licenseNumber: '',
  operatorName: '',

  gaId: process.env.NEXT_PUBLIC_GA_ID || '',
  searchConsoleId: process.env.NEXT_PUBLIC_GSC_VERIFICATION || '',
};

export function getSocialLinks() {
  return [CLINIC.facebook, CLINIC.instagram, CLINIC.tiktok, CLINIC.lineUrl].filter(Boolean);
}
