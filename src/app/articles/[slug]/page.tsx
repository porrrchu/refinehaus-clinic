import type { Metadata } from 'next';
import Link from '@/components/ui/SmartLink';
import { notFound } from 'next/navigation';
import { ARTICLES, getArticle } from '@/data/articles';
import { getDoctor } from '@/data/home';
import { CLINIC } from '@/data/clinic';
import { ArticleCard } from '@/components/articles/ArticleCard';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Ph } from '@/components/ui/Ph';
import { Eyebrow } from '@/components/ui/SectionHeading';
import {
  SchemaMarkup,
  getArticleSchema,
  getBreadcrumbSchema,
  getFAQSchema,
  getPhysicianSchema,
} from '@/components/seo/SchemaMarkup';
import { clampSeoDescription, clampSeoTitle, getSocialMetadata } from '@/lib/seo';

type FAQ = { question: string; answer: string };

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<'/articles/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const path = `/articles/${slug}`;
  return {
    title: clampSeoTitle(article.title),
    description: clampSeoDescription(article.excerpt),
    alternates: { canonical: path },
    ...getSocialMetadata({
      title: article.title,
      description: article.excerpt,
      path,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    }),
  };
}

function formatThaiDate(value: string) {
  return new Date(`${value}T00:00:00+07:00`).toLocaleDateString('th-TH', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default async function ArticlePage({ params }: PageProps<'/articles/[slug]'>) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const { default: Body, faqs = [] } = (await import(`@/content/articles/${slug}.mdx`)) as {
    default: React.ComponentType;
    faqs?: FAQ[];
  };
  const doctor = getDoctor(article.authorSlug);
  const url = `${CLINIC.website}/articles/${slug}`;
  const related = ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <SchemaMarkup
        schema={[
          getArticleSchema({
            title: article.title,
            description: article.excerpt,
            url,
            datePublished: article.publishedAt,
            dateModified: article.updatedAt,
            image: '/opengraph-image',
            authorSlug: article.authorSlug,
          }),
          ...(doctor
            ? [getPhysicianSchema({ slug: doctor.slug, name: doctor.name, jobTitle: doctor.role, specialty: doctor.roleEn, image: doctor.img })]
            : []),
          getBreadcrumbSchema([
            { name: 'หน้าแรก', url: CLINIC.website },
            { name: 'บทความ', url: `${CLINIC.website}/articles` },
            { name: article.title, url },
          ]),
          ...(faqs.length ? [getFAQSchema(faqs)] : []),
        ]}
      />

      <article>
        {/* Header */}
        <header className="bg-cream2 pt-[124px] lg:pt-[150px] pb-12 lg:pb-16">
          <div className="wrap max-w-[860px]">
            <Breadcrumb items={[{ name: 'หน้าแรก', href: '/' }, { name: 'บทความ', href: '/articles' }, { name: article.title }]} />
            <Eyebrow className="mb-4">{article.cat}</Eyebrow>
            <h1 className="font-thai font-semibold text-charcoal text-[1.9rem] sm:text-[2.3rem] lg:text-[2.7rem] leading-[1.3] mb-5">
              {article.title}
            </h1>
            <p className="font-thai text-muted text-[1.05rem] leading-relaxed mb-7">{article.excerpt}</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.85rem] text-muted">
              {doctor && (
                <span className="font-thai">
                  เขียนและตรวจทานโดย <span className="text-charcoal font-semibold">{doctor.name}</span>
                </span>
              )}
              <span aria-hidden="true">·</span>
              <time dateTime={article.updatedAt} className="font-thai">อัปเดต {formatThaiDate(article.updatedAt)}</time>
              <span aria-hidden="true">·</span>
              <span className="font-thai">อ่าน {article.time}</span>
            </div>
          </div>
        </header>

        <div className="wrap max-w-[1000px] -mt-1 pt-10 lg:pt-14">
          <Ph label={article.shot} ratio="16 / 9" sizes="(min-width: 1000px) 1000px, 100vw" priority />
        </div>

        {/* Body */}
        <div className="wrap max-w-[760px] py-12 lg:py-16">
          <Body />

          {faqs.length > 0 && (
            <section className="mt-14" aria-labelledby="faq-heading">
              <h2 id="faq-heading" className="font-thai font-semibold text-charcoal text-[1.45rem] lg:text-[1.6rem] mb-6">คำถามที่พบบ่อย</h2>
              <div className="divide-y divide-charcoal/10 border-y border-charcoal/10">
                {faqs.map((f) => (
                  <details key={f.question} className="group py-5">
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-thai font-semibold text-charcoal text-[1.02rem]">
                      {f.question}
                      <span className="text-walnut text-[1.4rem] leading-none transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
                    </summary>
                    <p className="font-thai text-muted text-[0.98rem] leading-relaxed mt-3">{f.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Author box */}
          {doctor && (
            <aside className="mt-14 flex gap-5 items-start bg-cream2 rounded-[20px] p-6 lg:p-7">
              <div className="w-20 shrink-0">
                <Ph label="Doctor portrait" ratio="1 / 1" className="!rounded-full [&_.ph-tag]:hidden" img={doctor.img} alt={doctor.name} imgPosition="center 22%" sizes="112px" />
              </div>
              <div>
                <p className="eyebrow text-walnut mb-1.5">Written by</p>
                <p className="font-display text-[1.3rem] text-charcoal leading-tight">{doctor.name}</p>
                <p className="font-thai text-muted text-[0.9rem] mb-2">{doctor.role}{doctor.license ? ` · ${doctor.license}` : ''}</p>
                <Link href="/#doctors" className="arrow-cta text-olive text-[0.88rem] font-semibold">ดูข้อมูลแพทย์ →</Link>
              </div>
            </aside>
          )}

          <p className="font-thai text-muted/80 text-[0.82rem] leading-relaxed mt-10">
            * บทความนี้ให้ข้อมูลทั่วไป ไม่ใช่คำแนะนำทางการแพทย์เฉพาะบุคคล การรักษาทุกครั้งควรผ่านการประเมินโดยแพทย์
          </p>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-cream2 py-20 lg:py-24" aria-labelledby="related-heading">
          <div className="wrap">
            <div className="flex items-end justify-between gap-6 mb-10">
              <h2 id="related-heading" className="font-display font-medium text-charcoal text-[2rem] lg:text-[2.4rem] leading-tight">Related Articles</h2>
              <Link href="/articles" className="arrow-cta text-olive text-[0.92rem] font-semibold shrink-0">ดูทั้งหมด →</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              {related.map((a, i) => <ArticleCard key={a.slug} a={a} i={i} />)}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </>
  );
}
