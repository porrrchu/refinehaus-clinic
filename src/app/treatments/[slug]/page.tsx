import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EXPERTISE, getDoctor } from '@/data/home';
import { TREATMENTS, getTreatment } from '@/data/treatments';
import { ARTICLES } from '@/data/articles';
import { CASES } from '@/data/results';
import { CLINIC } from '@/data/clinic';
import { ArticleCard } from '@/components/articles/ArticleCard';
import { CaseCard } from '@/components/results/CaseCard';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { LineLink } from '@/components/ui/LineLink';
import { Ph } from '@/components/ui/Ph';
import { Reveal } from '@/components/ui/Reveal';
import { Eyebrow } from '@/components/ui/SectionHeading';
import { LineIcon } from '@/components/ui/icons';
import {
  SchemaMarkup,
  getBreadcrumbSchema,
  getFAQSchema,
  getMedicalProcedureSchema,
  getWebPageSchema,
} from '@/components/seo/SchemaMarkup';
import { clampSeoDescription, clampSeoTitle, getSocialMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return TREATMENTS.map((t) => ({ slug: t.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<'/treatments/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const t = getTreatment(slug);
  if (!t) return {};

  const path = `/treatments/${slug}`;
  return {
    title: clampSeoTitle(t.metaTitle),
    description: clampSeoDescription(t.metaDescription),
    alternates: { canonical: path },
    ...getSocialMetadata({ title: t.metaTitle, description: t.metaDescription, path }),
  };
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <Eyebrow className="mb-3">{eyebrow}</Eyebrow>
      <h2 className="font-thai font-semibold text-charcoal text-[1.5rem] lg:text-[1.75rem] leading-snug">{title}</h2>
    </div>
  );
}

export default async function TreatmentPage({ params }: PageProps<'/treatments/[slug]'>) {
  const { slug } = await params;
  const t = getTreatment(slug);
  const card = EXPERTISE.find((e) => e.slug === slug);
  if (!t || !card) notFound();

  const doctor = getDoctor(t.doctorSlug);
  const url = `${CLINIC.website}/treatments/${slug}`;
  const articles = ARTICLES.filter((a) => t.articleSlugs.includes(a.slug));
  const cases = CASES.filter((c) => t.caseSlugs.includes(c.slug));
  const others = EXPERTISE.filter((e) => e.slug !== slug);

  return (
    <>
      <SchemaMarkup
        schema={[
          getWebPageSchema({ name: t.h1, description: t.metaDescription, url }),
          getMedicalProcedureSchema({ name: t.h1, description: t.intro, url }),
          getBreadcrumbSchema([
            { name: 'หน้าแรก', url: CLINIC.website },
            { name: 'บริการ', url: `${CLINIC.website}/treatments` },
            { name: t.h1, url },
          ]),
          ...(t.faqs.length ? [getFAQSchema(t.faqs)] : []),
        ]}
      />

      {/* Hero */}
      <section className="bg-cream2 pt-[124px] lg:pt-[150px] pb-16 lg:pb-24">
        <div className="wrap">
          <Breadcrumb items={[{ name: 'หน้าแรก', href: '/' }, { name: 'บริการ', href: '/treatments' }, { name: card.key }]} />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-walnut font-display text-[1.6rem] leading-none">{card.num}</span>
                <span className="eyebrow text-walnut">{card.key}</span>
              </div>
              <h1 className="font-thai font-semibold text-charcoal text-[1.9rem] sm:text-[2.3rem] lg:text-[2.6rem] leading-[1.3] mb-5">{t.h1}</h1>
              <p className="font-thai text-muted text-[1.03rem] leading-relaxed mb-8 max-w-xl">{t.intro}</p>
              <div className="flex flex-wrap gap-3.5">
                <Link href="/#contact" className="btn btn-primary tap">นัดปรึกษาคุณหมอ</Link>
                <LineLink className="btn btn-outline tap"><LineIcon /> สอบถามทาง LINE</LineLink>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Ph label={card.shot} ratio="4 / 3" sizes="(min-width: 1200px) 50vw, 100vw" priority />
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <p className="font-thai text-[0.82rem] text-walnut bg-taupe/20 rounded-[12px] px-4 py-3 mt-10">
          Mock up — เนื้อหาตัวอย่างสำหรับวางโครงหน้า ต้องให้แพทย์ตรวจทานก่อนเผยแพร่จริง
        </p>
      </div>

      {/* Concerns + who for */}
      <section className="py-16 lg:py-20">
        <div className="wrap grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <SectionTitle eyebrow="Concerns" title="ปัญหาที่ดูแล" />
            <ul className="flex flex-wrap gap-2.5">
              {t.concerns.map((c) => (
                <li key={c} className="font-thai text-[0.95rem] text-oliveDark bg-cream2 border border-charcoal/8 rounded-full px-4 py-2">{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTitle eyebrow="Who it's for" title="เหมาะกับใคร" />
            <ul className="font-thai space-y-3 text-charcoal/90 text-[1rem]">
              {t.whoFor.map((w) => (
                <li key={w} className="flex gap-3"><span className="mt-[0.6em] w-1.5 h-1.5 rounded-full bg-walnut shrink-0" />{w}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="bg-cream2 py-16 lg:py-20">
        <div className="wrap">
          <SectionTitle eyebrow="Assessment" title="เริ่มจากการประเมินโดยแพทย์" />
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.assessment.map((a, i) => (
              <Reveal as="li" key={a.title} delay={i * 70} className="bg-cream border border-charcoal/8 rounded-[18px] p-6">
                <p className="eyebrow text-walnut mb-3">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-thai font-semibold text-charcoal text-[1.05rem] mb-2">{a.title}</h3>
                <p className="font-thai text-muted text-[0.9rem] leading-relaxed">{a.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Options */}
      <section className="py-16 lg:py-20">
        <div className="wrap">
          <SectionTitle eyebrow="Treatment Options" title="ทางเลือกการดูแล" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.options.map((o) => (
              <div key={o.name} className="bg-cream2 border border-charcoal/8 rounded-[18px] p-6">
                <span className="block w-8 h-[1.5px] bg-walnut mb-5"></span>
                <h3 className="font-display text-[1.3rem] text-oliveDark leading-tight">{o.name}</h3>
                <p className="font-display text-[1.05rem] text-oliveDark/80 leading-tight mb-3">{o.type}</p>
                <p className="font-thai text-muted text-[0.88rem] leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
          <p className="font-thai text-muted/80 text-[0.85rem] mt-6">
            * แพทย์จะเลือกวิธีที่เหมาะสมหลังการประเมิน ไม่จำเป็นต้องใช้ทุกวิธี
          </p>
        </div>
      </section>

      {/* Doctor */}
      {doctor && (
        <section className="pb-16 lg:pb-20">
          <div className="wrap">
            <div className="flex flex-col sm:flex-row gap-6 sm:items-center bg-cream2 rounded-[24px] p-6 lg:p-8">
              <div className="w-28 shrink-0">
                <Ph label="Doctor portrait" ratio="1 / 1" className="!rounded-full [&_.ph-tag]:hidden" img={doctor.img} alt={doctor.name} imgPosition="center 22%" sizes="112px" />
              </div>
              <div className="flex-1">
                <p className="eyebrow text-walnut mb-1.5">Your Doctor</p>
                <p className="font-display text-[1.5rem] text-charcoal leading-tight">{doctor.name}</p>
                <p className="font-thai text-muted text-[0.92rem]">{doctor.role}{doctor.license ? ` · ${doctor.license}` : ''}</p>
              </div>
              <Link href="/#doctors" className="btn btn-outline tap self-start sm:self-center">ดูข้อมูลแพทย์</Link>
            </div>
          </div>
        </section>
      )}

      {/* Results */}
      {cases.length > 0 && (
        <section className="bg-cream2 py-16 lg:py-20">
          <div className="wrap">
            <div className="flex items-end justify-between gap-6">
              <SectionTitle eyebrow="Results" title="ตัวอย่างเคส" />
              <Link href="/results" className="arrow-cta text-olive text-[0.92rem] font-semibold shrink-0 mb-8">ดูทั้งหมด →</Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cases.map((c) => <CaseCard key={c.slug} c={c} />)}
            </div>
          </div>
        </section>
      )}

      {/* Articles */}
      {articles.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="wrap">
            <div className="flex items-end justify-between gap-6">
              <SectionTitle eyebrow="Knowledge" title="บทความที่เกี่ยวข้อง" />
              <Link href="/articles" className="arrow-cta text-olive text-[0.92rem] font-semibold shrink-0 mb-8">ดูทั้งหมด →</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {articles.map((a, i) => <ArticleCard key={a.slug} a={a} i={i} />)}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {t.faqs.length > 0 && (
        <section className="bg-cream2 py-16 lg:py-20">
          <div className="wrap max-w-[860px]">
            <SectionTitle eyebrow="FAQ" title="คำถามที่พบบ่อย" />
            <div className="divide-y divide-charcoal/10 border-y border-charcoal/10">
              {t.faqs.map((f) => (
                <details key={f.question} className="group py-5">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-thai font-semibold text-charcoal text-[1.02rem]">
                    {f.question}
                    <span className="text-walnut text-[1.4rem] leading-none transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="font-thai text-muted text-[0.98rem] leading-relaxed mt-3">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other treatments */}
      <section className="py-16 lg:py-20">
        <div className="wrap">
          <SectionTitle eyebrow="Other Treatments" title="บริการอื่นของเรา" />
          <div className="grid sm:grid-cols-3 gap-5">
            {others.map((e) => (
              <Link key={e.slug} href={`/treatments/${e.slug}`} className="group bg-cream2 border border-charcoal/8 rounded-[18px] p-6 card-lift">
                <p className="eyebrow text-walnut mb-2">{e.num} · {e.key}</p>
                <p className="font-thai text-charcoal text-[0.98rem] leading-relaxed mb-4">{e.titleTh}</p>
                <span className="arrow-cta text-olive text-[0.88rem] font-semibold">ดูรายละเอียด →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
