import { CONCERNS } from '@/data/home';
import { Reveal } from '@/components/ui/Reveal';
import { Ph } from '@/components/ui/Ph';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowRight } from '@/components/ui/icons';

type Concern = (typeof CONCERNS)[number];

function ConcernCard({ c }: { c: Concern }) {
  return (
    <a href="#expertise" className="group snap-item shrink-0 w-[78%] sm:w-[46%] lg:w-auto block">
      <div className="img-hover mb-4">
        <Ph label={c.shot} ratio="4 / 5" img={c.img} alt={`${c.title} ${c.sub}`} sizes="(min-width: 1200px) 30vw, (min-width: 480px) 46vw, 78vw" />
      </div>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-[1.35rem] text-charcoal leading-tight">{c.title}</h3>
          {c.sub && <p className="font-thai text-muted text-[0.92rem] mt-0.5">{c.sub}</p>}
        </div>
        <span className="inline-flex items-center gap-1.5 text-olive text-[0.85rem] font-semibold shrink-0 mt-1">
          ดูเพิ่มเติม
          <ArrowRight width="14" height="14" className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </a>
  );
}

export function ConcernCards() {
  return (
    <section id="concerns" className="bg-cream2 py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="mb-12 lg:mb-14">
          <SectionHeading
            eyebrow="Concerns"
            titleEn="What would you like to improve?"
            titleTh="เริ่มต้นจากสิ่งที่คุณกังวล"
          />
        </Reveal>

        <div className="hidden lg:grid grid-cols-3 gap-x-8 gap-y-12">
          {CONCERNS.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}><ConcernCard c={c} /></Reveal>
          ))}
        </div>

        <div className="lg:hidden snap-row -mx-[22px] px-[22px]">
          {CONCERNS.map((c) => (
            <ConcernCard key={c.title} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
