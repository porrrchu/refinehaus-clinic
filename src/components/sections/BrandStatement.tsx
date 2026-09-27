import { Reveal } from '@/components/ui/Reveal';

export function BrandStatement() {
  return (
    <section id="about" className="bg-walnutDeep py-24 lg:py-36">
      <div className="wrap text-center max-w-3xl mx-auto">
        <Reveal>
          <h2 className="font-display font-medium text-cream text-[1.9rem] sm:text-[2.4rem] lg:text-[2.8rem] leading-[1.2] tracking-[0.01em] uppercase mb-8">
            Good aesthetic care<br className="hidden sm:block" /> starts with understanding.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="font-thai text-cream/80 text-[1.05rem] lg:text-[1.15rem] leading-loose">
            เริ่มต้นจากสิ่งที่กังวล เราพร้อมเข้าใจคุณ<br className="hidden sm:block" />
            เพื่อเลือกวิธีที่เหมาะสำหรับคุณไปด้วยกัน
          </p>
        </Reveal>
      </div>
    </section>
  );
}
