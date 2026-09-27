import { ARTICLES } from '@/data/home';
import { Reveal } from '@/components/ui/Reveal';
import { Ph } from '@/components/ui/Ph';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowRight } from '@/components/ui/icons';

type Article = (typeof ARTICLES)[number];

function ArticleCard({ a, i }: { a: Article; i: number }) {
  return (
    <Reveal as="article" delay={i * 90} className="group">
      <a href="#knowledge" className="block">
        <div className="img-hover mb-5">
          <Ph label={a.shot} ratio="16 / 11" />
        </div>
        <p className="eyebrow text-walnut mb-2">{a.cat}</p>
        <h3 className="font-display text-[1.35rem] text-charcoal leading-snug mb-3">{a.title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-[0.82rem] text-muted">อ่าน {a.time}</span>
          <span className="arrow-cta text-olive text-[0.86rem] font-semibold">Read Article <ArrowRight width="14" height="14" /></span>
        </div>
      </a>
    </Reveal>
  );
}

export function KnowledgeSection() {
  return (
    <section id="knowledge" className="bg-cream2 py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="mb-12 lg:mb-14">
          <SectionHeading
            eyebrow="Knowledge"
            titleEn="Knowledge by Refinehaus Doctors"
            titleTh="เรื่องความงามและสุขภาพ อธิบายให้เข้าใจง่ายโดยแพทย์"
          />
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {ARTICLES.map((a, i) => <ArticleCard key={a.title} a={a} i={i} />)}
        </div>
      </div>
    </section>
  );
}
