import { CLINIC_SHOTS } from '@/data/home';
import { Reveal } from '@/components/ui/Reveal';
import { Ph } from '@/components/ui/Ph';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ClinicExperience() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="mb-12 lg:mb-14">
          <SectionHeading
            eyebrow="Clinic Experience"
            titleEn="Welcome to Refinehaus."
            titleTh="A clinic designed to feel comfortable."
            subtitle="เราอยากให้ทุกการมาคลินิกเริ่มต้นด้วยความสบายใจ ในบรรยากาศที่อบอุ่น เป็นส่วนตัว และพร้อมสำหรับการดูแลอย่างพอดี"
          />
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 auto-rows-[1fr]">
          {CLINIC_SHOTS.map((s, i) => (
            // Single cells set the row height (4:5); spanning tiles fill their area.
            // On mobile every tile is a single 4:5 cell, so spans are lg-only.
            <Reveal key={s.label} delay={(i % 4) * 60} className={`img-hover relative aspect-[4/5] ${s.span ? `lg:aspect-auto ${s.span}` : ''}`}>
              <Ph label={s.label} ratio="" className="absolute inset-0" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
