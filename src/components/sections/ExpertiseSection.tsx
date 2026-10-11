import Link from '@/components/ui/SmartLink';
import { EXPERTISE } from '@/data/home';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TreatmentCard } from '@/components/treatments/TreatmentCard';

export function ExpertiseSection() {
  return (
    <section id="treatments" className="bg-cream py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="mb-12 lg:mb-14">
          <SectionHeading
            eyebrow="Our Expertise"
            titleEn="Our Expertise"
            titleTh="การดูแลที่เริ่มจากปัญหา ก่อนเลือกวิธีรักษา"
          />
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {EXPERTISE.map((e, i) => <TreatmentCard key={e.slug} e={e} i={i} />)}
        </div>

        <Reveal className="mt-12 lg:mt-14 text-center">
          <Link href="/treatments" className="btn btn-outline tap">View All Treatments</Link>
        </Reveal>
      </div>
    </section>
  );
}
