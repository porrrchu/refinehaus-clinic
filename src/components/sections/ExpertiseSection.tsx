import { EXPERTISE } from '@/data/home';
import { Reveal } from '@/components/ui/Reveal';
import { Ph } from '@/components/ui/Ph';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowRight } from '@/components/ui/icons';

type Expertise = (typeof EXPERTISE)[number];

function ExpertiseCard({ e, i }: { e: Expertise; i: number }) {
  return (
    <Reveal delay={i * 90} className="group card-lift bg-cream rounded-[24px] overflow-hidden border border-charcoal/8">
      <div className="img-hover">
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
        <a href="#contact" className="arrow-cta text-olive text-[0.92rem] font-semibold">
          {e.cta} <ArrowRight width="16" height="16" />
        </a>
      </div>
    </Reveal>
  );
}

export function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-cream py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="mb-12 lg:mb-14">
          <SectionHeading
            eyebrow="Our Expertise"
            titleEn="Our Expertise"
            titleTh="การดูแลที่เริ่มจากปัญหา ก่อนเลือกวิธีรักษา"
          />
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {EXPERTISE.map((e, i) => <ExpertiseCard key={e.key} e={e} i={i} />)}
        </div>
      </div>
    </section>
  );
}
