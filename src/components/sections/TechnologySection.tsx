import { TECH } from '@/data/home';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function TechnologySection() {
  return (
    <section className="bg-cream2 py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="mb-10 lg:mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="Technology"
            titleEn={<>Technology, <br className="hidden lg:block" />selected with purpose.</>}
          />
          <p className="font-thai text-muted text-[0.95rem] leading-relaxed max-w-sm">
            เราไม่ได้เลือกการรักษาจากชื่อเครื่อง แต่เลือกจากปัญหา โครงสร้าง และสิ่งที่เหมาะกับแต่ละคน
          </p>
        </Reveal>

        <div className="snap-row lg:grid lg:grid-cols-4 lg:gap-5 -mx-[22px] px-[22px] lg:mx-0 lg:px-0">
          {TECH.map((t) => (
            <div key={t.primary} className="snap-item shrink-0 w-[78%] sm:w-[52%] lg:w-auto bg-cream border border-charcoal/8 rounded-[18px] p-6 card-lift">
              <span className="block w-8 h-[1.5px] bg-walnut mb-5"></span>
              <h3 className="font-display text-[1.25rem] text-oliveDark leading-tight">{t.primary}</h3>
              <p className="font-display text-[1.25rem] text-oliveDark leading-tight mb-3">{t.secondary}</p>
              <p className="font-thai text-muted text-[0.85rem] leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
