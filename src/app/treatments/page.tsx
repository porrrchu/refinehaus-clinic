import type { Metadata } from 'next';
import { EXPERTISE } from '@/data/home';
import { CLINIC } from '@/data/clinic';
import { TreatmentCard } from '@/components/treatments/TreatmentCard';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Eyebrow } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { SchemaMarkup, getBreadcrumbSchema, getItemListSchema, getWebPageSchema } from '@/components/seo/SchemaMarkup';
import { clampSeoDescription, clampSeoTitle, getSocialMetadata } from '@/lib/seo';

// TODO(keyword map): confirm primary keyword for the treatments hub.
const TITLE = 'บริการคลินิกความงามโคราช ดูแลโดยแพทย์';
const DESCRIPTION =
  'บริการของ Refinehaus Clinic โคราช ยกกระชับและกรอบหน้า ดูแลคุณภาพผิว รักษาสิวและหลุมสิว และโปรแกรมดูแลน้ำหนักโดยแพทย์ วางแผนเฉพาะบุคคลทุกเคส';
const PATH = '/treatments';

export const metadata: Metadata = {
  title: clampSeoTitle(TITLE),
  description: clampSeoDescription(DESCRIPTION),
  alternates: { canonical: PATH },
  ...getSocialMetadata({ title: `${TITLE} | ${CLINIC.name}`, description: DESCRIPTION, path: PATH }),
};

export default function TreatmentsPage() {
  const url = `${CLINIC.website}${PATH}`;

  return (
    <>
      <SchemaMarkup
        schema={[
          getWebPageSchema({ name: TITLE, description: DESCRIPTION, url }),
          getBreadcrumbSchema([
            { name: 'หน้าแรก', url: CLINIC.website },
            { name: 'บริการ', url },
          ]),
          getItemListSchema(EXPERTISE.map((e) => ({ name: e.titleTh, url: `${url}/${e.slug}` }))),
        ]}
      />

      <section className="bg-cream2 pt-[124px] lg:pt-[150px] pb-20 lg:pb-28">
        <div className="wrap">
          <Breadcrumb items={[{ name: 'หน้าแรก', href: '/' }, { name: 'บริการ' }]} />

          <Reveal className="mb-12 lg:mb-16 max-w-2xl">
            <Eyebrow className="mb-4">Our Expertise</Eyebrow>
            <h1 className="font-display font-medium text-charcoal text-[2.4rem] sm:text-[2.9rem] lg:text-[3.4rem] leading-[1.08] mb-4">
              Our Expertise
            </h1>
            <p className="font-thai text-muted text-[1.05rem] leading-relaxed">
              การดูแลที่เริ่มจากปัญหา ก่อนเลือกวิธีรักษา ออกแบบแผนเฉพาะบุคคลโดยแพทย์ทุกเคส
            </p>
          </Reveal>

          <h2 className="sr-only">บริการทั้งหมด</h2>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {EXPERTISE.map((e, i) => <TreatmentCard key={e.slug} e={e} i={i % 2} />)}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
