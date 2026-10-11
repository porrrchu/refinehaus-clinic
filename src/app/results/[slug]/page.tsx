import type { Metadata } from 'next';
import Link from '@/components/ui/SmartLink';
import { notFound } from 'next/navigation';
import { CASES, getCase } from '@/data/results';
import { getDoctor } from '@/data/home';
import { CLINIC } from '@/data/clinic';
import { BeforeAfter, CaseCard } from '@/components/results/CaseCard';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Eyebrow } from '@/components/ui/SectionHeading';
import { SchemaMarkup, getBreadcrumbSchema, getWebPageSchema } from '@/components/seo/SchemaMarkup';
import { clampSeoDescription, clampSeoTitle, getSocialMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

function caseTitle(c: { n: string; key: string; concern: string }) {
  return `${c.key} ${c.n} — ${c.concern.split(' / ')[0]}`;
}

export async function generateMetadata({ params }: PageProps<'/results/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) return {};

  const path = `/results/${slug}`;
  const description = `เคส${c.concern} วางแผนการดูแลเฉพาะบุคคลโดยแพทย์ Refinehaus Clinic โคราช ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล`;
  return {
    title: clampSeoTitle(caseTitle(c)),
    description: clampSeoDescription(description),
    alternates: { canonical: path },
    ...getSocialMetadata({ title: caseTitle(c), description, path }),
  };
}

export default async function CasePage({ params }: PageProps<'/results/[slug]'>) {
  const { slug } = await params;
  const c = getCase(slug);
  if (!c) notFound();

  const doctor = getDoctor(c.doctorSlug);
  const url = `${CLINIC.website}/results/${slug}`;
  const others = CASES.filter((x) => x.slug !== slug).slice(0, 3);

  const facts = [
    { label: 'ปัญหาที่กังวล', value: c.concern },
    { label: 'จำนวนครั้ง', value: c.sessions },
    { label: 'ติดตามผล', value: c.followUp },
    { label: 'แพทย์ผู้ดูแล', value: doctor?.name ?? '' },
  ];

  return (
    <>
      <SchemaMarkup
        schema={[
          getWebPageSchema({ name: caseTitle(c), description: c.summary, url }),
          getBreadcrumbSchema([
            { name: 'หน้าแรก', url: CLINIC.website },
            { name: 'ผลลัพธ์', url: `${CLINIC.website}/results` },
            { name: `${c.n} ${c.key}`, url },
          ]),
        ]}
      />

      <article>
        <header className="bg-cream pt-[124px] lg:pt-[150px] pb-10">
          <div className="wrap">
            <Breadcrumb items={[{ name: 'หน้าแรก', href: '/' }, { name: 'ผลลัพธ์', href: '/results' }, { name: `${c.n} ${c.key}` }]} />
            <Eyebrow className="mb-3">{c.n}</Eyebrow>
            <h1 className="font-display font-medium text-charcoal text-[2.4rem] sm:text-[2.9rem] lg:text-[3.4rem] leading-[1.08] mb-3">{c.key}</h1>
            <p className="font-thai text-muted text-[1.08rem]">{c.concern}</p>
          </div>
        </header>

        <div className="wrap grid lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-16 pb-20 lg:pb-28">
          {/* Before / After */}
          <div>
            <BeforeAfter />
            <p className="font-thai text-muted/80 text-[0.8rem] mt-3">
              [ระบุช่วงเวลาที่ถ่ายภาพ เช่น ก่อนทำ / หลังทำ 3 เดือน] · ภาพไม่ผ่านการตกแต่ง
            </p>
          </div>

          {/* Case info */}
          <div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-y border-charcoal/10 py-6 mb-9">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="eyebrow text-walnut mb-1">{f.label}</dt>
                  <dd className="font-thai text-charcoal text-[0.98rem]">{f.value}</dd>
                </div>
              ))}
            </dl>

            <h2 className="font-thai font-semibold text-charcoal text-[1.2rem] mb-2">สรุปเคส</h2>
            <p className="font-thai text-muted text-[0.98rem] leading-relaxed mb-7">{c.summary}</p>

            <h2 className="font-thai font-semibold text-charcoal text-[1.2rem] mb-2">การประเมินของแพทย์</h2>
            <p className="font-thai text-muted text-[0.98rem] leading-relaxed mb-7">{c.assessment}</p>

            <h2 className="font-thai font-semibold text-charcoal text-[1.2rem] mb-3">แผนการดูแล</h2>
            <p className="text-muted/80 text-[0.8rem] tracking-wide mb-3">{c.approach}</p>
            <ol className="font-thai list-decimal pl-5 space-y-2 text-muted text-[0.98rem] mb-8 marker:text-walnut">
              {c.plan.map((p) => <li key={p}>{p}</li>)}
            </ol>

            <blockquote className="border-l-2 border-walnut pl-5 mb-9">
              <p className="font-thai italic text-oliveDark text-[1.02rem] leading-relaxed">{c.patientNote}</p>
            </blockquote>

            <div className="flex flex-wrap gap-3.5">
              <Link href="/#contact" className="btn btn-primary tap">ปรึกษาคุณหมอ</Link>
              <Link href="/results" className="btn btn-outline tap">ดูเคสอื่น</Link>
            </div>

            <p className="font-thai text-muted/80 text-[0.8rem] leading-relaxed mt-8">
              * ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล เผยแพร่โดยได้รับความยินยอมจากคนไข้ การรักษาทุกครั้งต้องผ่านการประเมินโดยแพทย์
            </p>
          </div>
        </div>
      </article>

      {others.length > 0 && (
        <section className="bg-cream2 py-20 lg:py-24" aria-labelledby="more-cases">
          <div className="wrap">
            <div className="flex items-end justify-between gap-6 mb-10">
              <h2 id="more-cases" className="font-display font-medium text-charcoal text-[2rem] lg:text-[2.4rem] leading-tight">More Results</h2>
              <Link href="/results" className="arrow-cta text-olive text-[0.92rem] font-semibold shrink-0">ดูทั้งหมด →</Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {others.map((x) => <CaseCard key={x.slug} c={x} />)}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </>
  );
}
