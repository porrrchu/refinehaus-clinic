import { PROMOTIONS } from '@/data/home';
import { Reveal } from '@/components/ui/Reveal';
import { Ph } from '@/components/ui/Ph';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowRight } from '@/components/ui/icons';

type Promotion = (typeof PROMOTIONS)[number];

function PromotionCard({ p }: { p: Promotion }) {
  return (
    <div className="group snap-item shrink-0 w-[82%] sm:w-[52%] lg:w-auto h-full bg-cream rounded-[24px] overflow-hidden card-lift">
      <div className="img-hover rounded-none">
        <Ph label={p.shot} ratio="4 / 3" className="rounded-none" />
      </div>
      <div className="p-7">
        <p className="eyebrow text-walnut mb-2">{p.key}</p>
        <h3 className="font-thai text-charcoal text-[1.15rem] leading-snug mb-2">{p.title}</h3>
        <p className="font-thai text-muted text-[0.92rem] leading-relaxed mb-1">{p.detail}</p>
        <p className="font-thai text-muted/80 text-[0.82rem] mb-6">ถึง {p.until}</p>
        <a href="#contact" className="arrow-cta text-olive text-[0.9rem] font-semibold">
          สอบถามโปรโมชั่น <ArrowRight width="15" height="15" />
        </a>
      </div>
    </div>
  );
}

export function PromotionsSection() {
  return (
    <section id="promotions" className="bg-olive py-20 lg:py-28">
      <div className="wrap">
        <Reveal className="mb-12 lg:mb-14">
          <SectionHeading
            eyebrow="Promotions"
            titleEn="Current Offers"
            titleTh="โปรโมชั่นประจำเดือน เริ่มต้นจากการปรึกษาแพทย์ทุกเคส"
            tone="cream"
          />
        </Reveal>

        <div className="hidden lg:grid grid-cols-3 gap-8">
          {PROMOTIONS.map((p, i) => <Reveal key={p.key} delay={i * 90}><PromotionCard p={p} /></Reveal>)}
        </div>
        <div className="lg:hidden snap-row -mx-[22px] px-[22px]">
          {PROMOTIONS.map((p) => <PromotionCard key={p.key} p={p} />)}
        </div>

        <p className="font-thai text-cream/55 text-[0.8rem] mt-10">
          * ผลลัพธ์ขึ้นอยู่กับแต่ละบุคคล การรักษาทุกครั้งต้องผ่านการประเมินโดยแพทย์
        </p>
      </div>
    </section>
  );
}
