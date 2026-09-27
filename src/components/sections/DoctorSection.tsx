import { DOCTORS } from '@/data/home';
import { Reveal } from '@/components/ui/Reveal';
import { Ph } from '@/components/ui/Ph';
import { Eyebrow, SectionHeading } from '@/components/ui/SectionHeading';

type Doctor = (typeof DOCTORS)[number];

function DoctorRow({ d, reverse, i }: { d: Doctor; reverse: boolean; i: number }) {
  return (
    <Reveal delay={i * 100} className={`grid lg:grid-cols-2 gap-9 lg:gap-16 items-center ${i > 0 ? 'mt-16 lg:mt-24' : ''}`}>
      <div className={`img-hover ${reverse ? 'lg:order-2' : ''}`}>
        <Ph label={d.shot} ratio="4 / 5" className="lg:aspect-[5/6]" />
      </div>
      <div className={reverse ? 'lg:order-1' : ''}>
        <Eyebrow className="mb-4 text-walnut">{d.focus}</Eyebrow>
        <h3 className="font-display text-[2rem] lg:text-[2.3rem] text-charcoal mb-1">{d.name}</h3>
        {d.license && <p className="text-muted/80 text-[0.82rem] tracking-wide mb-3">{d.license}</p>}
        <p className="font-thai text-muted text-[0.95rem] mb-0.5">{d.role}</p>
        <p className="text-muted/75 text-[0.85rem] tracking-wide mb-7">{d.roleEn}</p>
        <p className="font-display italic text-[1.4rem] lg:text-[1.6rem] text-oliveDark leading-snug mb-2 font-medium" aria-hidden="true">
          &ldquo;
        </p>
        <blockquote className="font-thai text-charcoal/90 text-[1.05rem] leading-loose mb-8">{d.quote}</blockquote>
        <a href="#doctors" className="btn btn-outline tap">Meet Our Doctors</a>
      </div>
    </Reveal>
  );
}

export function DoctorSection() {
  return (
    <section id="doctors" className="bg-cream py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="mb-14 lg:mb-16">
          <SectionHeading
            eyebrow="Doctors"
            titleEn="Meet Your Doctors"
            titleTh="ดูแลและให้คำปรึกษาโดยแพทย์ เพื่อวางแผนการรักษาให้เหมาะกับแต่ละคน"
            align="center"
          />
        </Reveal>
        {DOCTORS.map((d, i) => (
          <DoctorRow key={d.slug} d={d} reverse={i % 2 === 1} i={i} />
        ))}
      </div>
    </section>
  );
}
