import type { Metadata } from 'next';
import { CASES } from '@/data/results';
import { CLINIC } from '@/data/clinic';
import { CaseCard } from '@/components/results/CaseCard';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Eyebrow } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { SchemaMarkup, getBreadcrumbSchema, getWebPageSchema } from '@/components/seo/SchemaMarkup';
import { clampSeoDescription, clampSeoTitle, getSocialMetadata } from '@/lib/seo';

// TODO(keyword map): confirm primary keyword for the results hub.
const TITLE = 'ผลลัพธ์การดูแลจากแพทย์ Refinehaus';
const DESCRIPTION =
  'ตัวอย่างเคสการดูแลยกกระชับ ดูแลผิว และรักษาสิวหลุมสิว วางแผนเฉพาะบุคคลโดยแพทย์ Refinehaus Clinic โคราช ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล';
const PATH = '/results';

export const metadata: Metadata = {
  title: clampSeoTitle(TITLE),
  description: clampSeoDescription(DESCRIPTION),
  alternates: { canonical: PATH },
  ...getSocialMetadata({ title: `${TITLE} | ${CLINIC.name}`, description: DESCRIPTION, path: PATH }),
};

export default function ResultsPage() {
  const url = `${CLINIC.website}${PATH}`;

  return (
    <>
      <SchemaMarkup
        schema={[
          getWebPageSchema({ name: TITLE, description: DESCRIPTION, url }),
          getBreadcrumbSchema([
            { name: 'หน้าแรก', url: CLINIC.website },
            { name: 'ผลลัพธ์', url },
          ]),
        ]}
      />

      <section className="bg-cream pt-[124px] lg:pt-[150px] pb-20 lg:pb-28">
        <div className="wrap">
          <Breadcrumb items={[{ name: 'หน้าแรก', href: '/' }, { name: 'ผลลัพธ์' }]} />

          <Reveal className="mb-12 lg:mb-16 max-w-2xl">
            <Eyebrow className="mb-4">Results</Eyebrow>
            <h1 className="font-display font-medium text-charcoal text-[2.4rem] sm:text-[2.9rem] lg:text-[3.4rem] leading-[1.08] mb-4">
              Real Patients. Real Care.
            </h1>
            <p className="font-thai text-muted text-[1.05rem] leading-relaxed">
              ผลลัพธ์การดูแลที่เราอยากให้ยังดูเป็นคุณ วางแผนเฉพาะบุคคลโดยแพทย์ทุกเคส
            </p>
          </Reveal>

          <h2 className="sr-only">เคสทั้งหมด</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {CASES.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 90}><CaseCard c={c} /></Reveal>
            ))}
          </div>

          <p className="font-thai text-muted/80 text-[0.82rem] leading-relaxed mt-14 max-w-2xl">
            * ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล ภาพและข้อมูลเผยแพร่โดยได้รับความยินยอมจากคนไข้ การรักษาทุกครั้งต้องผ่านการประเมินโดยแพทย์
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
