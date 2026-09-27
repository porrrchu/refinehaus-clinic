import { Reveal } from '@/components/ui/Reveal';
import { Ph } from '@/components/ui/Ph';
import { Eyebrow } from '@/components/ui/SectionHeading';

export function Hero() {
  return (
    <section id="top" className="relative pt-[92px] lg:pt-[80px]">
      <div className="wrap grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-10 lg:py-20">

        {/* image first on mobile */}
        <div className="order-1 lg:order-2 img-hover">
          <Ph
            label="Thai female doctor in natural consultation with patient, warm cream & olive clinic interior"
            ratio="4 / 5"
            className="lg:aspect-[3/4]"
            sizes="(min-width: 1200px) 50vw, 100vw"
            priority
          />
        </div>

        <div className="order-2 lg:order-1">
          <Reveal>
            <Eyebrow className="mb-5 text-walnut">REFINEHAUS CLINIC · KORAT</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display font-medium text-[2.6rem] sm:text-[3.2rem] lg:text-[3.9rem] leading-[1.05] text-charcoal mb-5">
              Beauty,<br />thoughtfully refined.
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="font-thai text-[1.2rem] lg:text-[1.32rem] text-oliveDark leading-relaxed mb-5">
              ดูแลความงามอย่างพอดี<br />ด้วยแผนการรักษาที่เหมาะกับคุณ
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-thai text-[0.98rem] text-muted leading-relaxed max-w-md mb-9">
              คลินิกเวชกรรมความงามและการดูแลสุขภาพในโคราช
              ให้คำปรึกษาและวางแผนการรักษาโดยแพทย์ทุกเคส
              ในบรรยากาศสบาย ๆ เพื่อผลลัพธ์ที่พอดี เป็นธรรมชาติ และยังคงเป็นคุณในเวอร์ชันที่ดีขึ้น
            </p>
          </Reveal>
          <Reveal delay={260} className="flex flex-wrap gap-3.5">
            <a href="#contact" className="btn btn-primary tap">ปรึกษาคุณหมอ</a>
            <a href="#expertise" className="btn btn-outline tap">ดูบริการของเรา</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
