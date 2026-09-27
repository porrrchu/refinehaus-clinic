import { CASES } from '@/data/home';
import { Reveal } from '@/components/ui/Reveal';
import { Ph } from '@/components/ui/Ph';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowRight } from '@/components/ui/icons';

type Case = (typeof CASES)[number];

// NOTE: before/after photos of medical procedures are regulated by สบส.
// Confirm advertising approval before replacing these placeholders.
function CaseCard({ c }: { c: Case }) {
  return (
    <div className="snap-item shrink-0 w-[84%] sm:w-[56%] lg:w-auto">
      <div className="ba-split grid grid-cols-2">
        <div className="ba-half"><Ph label="Before" ratio="4 / 5" className="rounded-none" /><span className="ba-label left-3">BEFORE</span></div>
        <div className="ba-half"><Ph label="After" ratio="4 / 5" className="rounded-none" /><span className="ba-label right-3">AFTER</span></div>
      </div>
      <div className="pt-5">
        <p className="eyebrow text-walnut mb-1.5">{c.n}</p>
        <h3 className="font-display text-[1.4rem] text-charcoal mb-1.5">{c.key}</h3>
        <p className="font-thai text-muted text-[0.9rem] mb-1.5">{c.concern}</p>
        <p className="text-muted/80 text-[0.8rem] tracking-wide mb-4">{c.approach}</p>
        <a href="#knowledge" className="arrow-cta text-olive text-[0.9rem] font-semibold">
          Case Details <ArrowRight width="15" height="15" />
        </a>
      </div>
    </div>
  );
}

export function ResultsSection() {
  return (
    <section id="results" className="bg-cream py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="mb-12 lg:mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="Results"
            titleEn={<>Real Patients.<br />Real Care.</>}
            titleTh="ผลลัพธ์ที่เราอยากให้ยังดูเป็นคุณ"
          />
        </Reveal>

        <div className="hidden lg:grid grid-cols-3 gap-8">
          {CASES.map((c, i) => <Reveal key={c.n} delay={i * 90}><CaseCard c={c} /></Reveal>)}
        </div>
        <div className="lg:hidden snap-row -mx-[22px] px-[22px]">
          {CASES.map((c) => <CaseCard key={c.n} c={c} />)}
        </div>

        <Reveal className="mt-12 lg:mt-14 text-center">
          <a href="#knowledge" className="btn btn-outline tap">View More Results</a>
        </Reveal>
      </div>
    </section>
  );
}
