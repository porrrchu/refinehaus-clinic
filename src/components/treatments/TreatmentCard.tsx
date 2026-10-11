import Link from '@/components/ui/SmartLink';
import { EXPERTISE } from '@/data/home';
import { Reveal } from '@/components/ui/Reveal';
import { Ph } from '@/components/ui/Ph';
import { ArrowRight } from '@/components/ui/icons';

export type Expertise = (typeof EXPERTISE)[number];

export function TreatmentCard({ e, i }: { e: Expertise; i: number }) {
  return (
    <Reveal id={e.slug} delay={i * 90} className="scroll-mt-28 group card-lift bg-cream rounded-[24px] overflow-hidden border border-charcoal/8">
      <Link href={`/treatments/${e.slug}`} className="block">
        <div className="img-hover rounded-none">
          <Ph label={e.shot} ratio="16 / 10" className="rounded-none" />
        </div>
        <div className="p-7 lg:p-9">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-walnut font-display text-[1.6rem] leading-none">{e.num}</span>
            <span className="eyebrow text-walnut">{e.key}</span>
          </div>
          <h3 className="font-thai text-charcoal text-[1.08rem] leading-relaxed mb-3">{e.titleTh}</h3>
          <p className="font-thai text-muted text-[0.92rem] leading-relaxed mb-5">{e.body}</p>
          <p className="text-[0.78rem] text-muted/90 tracking-wide mb-6">{e.list}</p>
          <span className="arrow-cta text-olive text-[0.92rem] font-semibold">
            {e.cta} <ArrowRight width="16" height="16" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
