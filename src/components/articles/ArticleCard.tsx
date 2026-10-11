import Link from '@/components/ui/SmartLink';
import type { ArticleMeta } from '@/data/articles';
import { Reveal } from '@/components/ui/Reveal';
import { Ph } from '@/components/ui/Ph';
import { ArrowRight } from '@/components/ui/icons';

export function ArticleCard({ a, i }: { a: ArticleMeta; i: number }) {
  return (
    <Reveal as="article" delay={i * 90} className="group">
      <Link href={`/articles/${a.slug}`} className="block">
        <div className="img-hover mb-5">
          <Ph label={a.shot} ratio="16 / 11" />
        </div>
        <p className="eyebrow text-walnut mb-2">{a.cat}</p>
        <h3 className="font-display text-[1.35rem] text-charcoal leading-snug mb-3">{a.title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-[0.82rem] text-muted">อ่าน {a.time}</span>
          <span className="arrow-cta text-olive text-[0.86rem] font-semibold">Read Article <ArrowRight width="14" height="14" /></span>
        </div>
      </Link>
    </Reveal>
  );
}
