import Link from '@/components/ui/SmartLink';
import { CASES } from '@/data/results';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CaseCard } from '@/components/results/CaseCard';

const HOME_CASE_COUNT = 3;

export function ResultsSection() {
  const cases = CASES.slice(0, HOME_CASE_COUNT);

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
          {cases.map((c, i) => <Reveal key={c.slug} delay={i * 90}><CaseCard c={c} /></Reveal>)}
        </div>
        <div className="lg:hidden snap-row -mx-[22px] px-[22px]">
          {cases.map((c) => <CaseCard key={c.slug} c={c} />)}
        </div>

        <Reveal className="mt-12 lg:mt-14 text-center">
          <Link href="/results" className="btn btn-outline tap">View More Results</Link>
        </Reveal>
      </div>
    </section>
  );
}
