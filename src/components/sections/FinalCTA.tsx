import { Reveal } from '@/components/ui/Reveal';
import { LineIcon } from '@/components/ui/icons';

export function FinalCTA() {
  return (
    <section className="bg-walnutDeep py-24 lg:py-32">
      <div className="wrap text-center max-w-2xl mx-auto">
        <Reveal>
          <h2 className="font-display font-medium text-cream text-[2.3rem] sm:text-[2.9rem] lg:text-[3.4rem] leading-[1.08] uppercase mb-6">
            Not sure<br />where to start?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="font-thai text-cream/80 text-[1.05rem] leading-loose mb-3">ยังไม่แน่ใจว่าควรเริ่มจากอะไร?</p>
          <p className="font-thai text-cream/70 text-[0.98rem] leading-relaxed max-w-lg mx-auto mb-10">
            เริ่มจากพูดคุยกับคุณหมอก่อนได้ เพื่อประเมินว่าอะไรเหมาะกับคุณ และอะไรอาจยังไม่จำเป็นสำหรับคุณในตอนนี้
          </p>
        </Reveal>
        <Reveal delay={180} className="flex flex-wrap justify-center gap-3.5">
          <a href="#contact" className="btn btn-primary tap">นัดปรึกษาคุณหมอ</a>
          <a href="#contact" className="btn btn-cream-outline tap"><LineIcon /> LINE Refinehaus</a>
        </Reveal>
      </div>
    </section>
  );
}
