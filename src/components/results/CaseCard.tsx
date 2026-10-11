import Link from 'next/link';
import type { CaseStudy } from '@/data/results';
import { Ph } from '@/components/ui/Ph';
import { ArrowRight } from '@/components/ui/icons';

export function BeforeAfter({ className = '' }: { className?: string }) {
  return (
    <div className={`ba-split grid grid-cols-2 ${className}`}>
      <div className="ba-half"><Ph label="Before" ratio="4 / 5" className="rounded-none" /><span className="ba-label left-3">BEFORE</span></div>
      <div className="ba-half"><Ph label="After" ratio="4 / 5" className="rounded-none" /><span className="ba-label right-3">AFTER</span></div>
    </div>
  );
}

// NOTE: before/after photos of medical procedures are regulated by สบส.
// Confirm advertising approval before replacing these placeholders.
export function CaseCard({ c }: { c: CaseStudy }) {
  return (
    <div className="snap-item shrink-0 w-[84%] sm:w-[56%] lg:w-auto">
      <BeforeAfter />
      <div className="pt-5">
        <p className="eyebrow text-walnut mb-1.5">{c.n}</p>
        <h3 className="font-display text-[1.4rem] text-charcoal mb-1.5">{c.key}</h3>
        <p className="font-thai text-muted text-[0.9rem] mb-1.5">{c.concern}</p>
        <p className="text-muted/80 text-[0.8rem] tracking-wide mb-4">{c.approach}</p>
        <Link href={`/results/${c.slug}`} className="arrow-cta text-olive text-[0.9rem] font-semibold">
          Case Details <ArrowRight width="15" height="15" />
        </Link>
      </div>
    </div>
  );
}
