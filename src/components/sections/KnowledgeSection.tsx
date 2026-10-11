import Link from '@/components/ui/SmartLink';
import { ARTICLES } from '@/data/articles';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArticleCard } from '@/components/articles/ArticleCard';

const HOME_ARTICLE_COUNT = 3;

export function KnowledgeSection() {
  return (
    <section id="articles" className="bg-cream2 py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="mb-12 lg:mb-14">
          <SectionHeading
            eyebrow="Knowledge"
            titleEn="Knowledge by Refinehaus Doctors"
            titleTh="เรื่องความงามและสุขภาพ อธิบายให้เข้าใจง่ายโดยแพทย์"
          />
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {ARTICLES.slice(0, HOME_ARTICLE_COUNT).map((a, i) => <ArticleCard key={a.slug} a={a} i={i} />)}
        </div>

        <Reveal className="mt-12 lg:mt-14 text-center">
          <Link href="/articles" className="btn btn-outline tap">See More Articles</Link>
        </Reveal>
      </div>
    </section>
  );
}
