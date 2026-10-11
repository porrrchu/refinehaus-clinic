import type { Metadata } from 'next';
import Link from '@/components/ui/SmartLink';
import { ARTICLES } from '@/data/articles';
import { CLINIC } from '@/data/clinic';
import { ArticleCard } from '@/components/articles/ArticleCard';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Eyebrow } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { SchemaMarkup, getBreadcrumbSchema, getWebPageSchema } from '@/components/seo/SchemaMarkup';
import { clampSeoDescription, clampSeoTitle, getSocialMetadata } from '@/lib/seo';

// TODO(keyword map): confirm primary keyword for the articles hub.
const TITLE = 'บทความความงามและสุขภาพโดยแพทย์';
const DESCRIPTION =
  'รวมบทความความรู้เรื่องยกกระชับ ดูแลผิว สิวและหลุมสิว และการดูแลน้ำหนัก อธิบายให้เข้าใจง่ายโดยแพทย์ Refinehaus Clinic โคราช';
const PATH = '/articles';

export const metadata: Metadata = {
  title: clampSeoTitle(TITLE),
  description: clampSeoDescription(DESCRIPTION),
  alternates: { canonical: PATH },
  ...getSocialMetadata({ title: `${TITLE} | ${CLINIC.name}`, description: DESCRIPTION, path: PATH }),
};

export default function ArticlesPage() {
  const url = `${CLINIC.website}${PATH}`;

  return (
    <>
      <SchemaMarkup
        schema={[
          getWebPageSchema({ name: TITLE, description: DESCRIPTION, url }),
          getBreadcrumbSchema([
            { name: 'หน้าแรก', url: CLINIC.website },
            { name: 'บทความ', url },
          ]),
        ]}
      />

      <section className="bg-cream2 pt-[124px] lg:pt-[150px] pb-20 lg:pb-28">
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="mb-8 text-[0.82rem] text-muted">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-olive transition-colors">หน้าแรก</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-charcoal">บทความ</li>
            </ol>
          </nav>

          <Reveal className="mb-12 lg:mb-16 max-w-2xl">
            <Eyebrow className="mb-4">Knowledge</Eyebrow>
            <h1 className="font-display font-medium text-charcoal text-[2.4rem] sm:text-[2.9rem] lg:text-[3.4rem] leading-[1.08] mb-4">
              Knowledge by Refinehaus Doctors
            </h1>
            <p className="font-thai text-muted text-[1.05rem] leading-relaxed">
              บทความความงามและสุขภาพ อธิบายให้เข้าใจง่ายโดยแพทย์
            </p>
          </Reveal>

          <h2 className="sr-only">บทความทั้งหมด</h2>
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-14 lg:gap-x-10">
            {ARTICLES.map((a, i) => <ArticleCard key={a.slug} a={a} i={i % 3} />)}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
