import { STEPS } from '@/data/home';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ApproachTimeline() {
  return (
    <section className="bg-cream2 py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="mb-14 lg:mb-16">
          <SectionHeading
            eyebrow="Our Process"
            titleEn="The Refinehaus Approach"
            titleTh="การดูแลที่ออกแบบอย่างเป็นขั้นตอน เพื่อให้คุณมั่นใจกับทุกการตัดสินใจ"
            align="center"
          />
        </Reveal>

        {/* desktop horizontal */}
        <div className="hidden lg:block relative">
          <div className="absolute top-[13px] left-0 right-0 h-[1px] timeline-line"></div>
          <ol className="grid grid-cols-5 gap-6">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 90} className="relative pt-0">
                <div className="w-[27px] h-[27px] rounded-full bg-cream2 border border-walnut flex items-center justify-center relative z-10 mb-6">
                  <span className="w-2 h-2 rounded-full bg-walnut"></span>
                </div>
                <p className="eyebrow text-walnut mb-1">{s.n}</p>
                <p className="font-display text-[1.3rem] text-oliveDark tracking-wide mb-2">{s.key}</p>
                <p className="font-thai text-muted text-[0.9rem] leading-relaxed">{s.th}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* mobile vertical */}
        <div className="lg:hidden relative pl-8">
          <div className="absolute top-1 bottom-1 left-[7px] w-[1px] timeline-line-v"></div>
          <ol className="flex flex-col gap-10">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 70} className="relative">
                <span className="absolute -left-8 top-1 w-[15px] h-[15px] rounded-full bg-cream2 border border-walnut"></span>
                <p className="eyebrow text-walnut mb-1">{s.n}</p>
                <p className="font-display text-[1.25rem] text-oliveDark tracking-wide mb-1.5">{s.key}</p>
                <p className="font-thai text-muted text-[0.92rem] leading-relaxed">{s.th}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
