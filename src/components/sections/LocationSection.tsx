import { CLINIC } from '@/data/clinic';
import { Reveal } from '@/components/ui/Reveal';
import { Ph } from '@/components/ui/Ph';
import { Eyebrow } from '@/components/ui/SectionHeading';
import { CarIcon, ClockIcon, FbIcon, IgIcon, LineIcon, PhoneIcon, PinIcon, TtIcon } from '@/components/ui/icons';

const external = (href: string) => (href ? { href, target: '_blank', rel: 'noopener noreferrer' } : { href: '#' });

export function LocationSection() {
  const address = [CLINIC.streetAddress, CLINIC.district, CLINIC.province, CLINIC.postalCode].filter(Boolean).join(' ');

  return (
    <section id="contact" className="bg-cream2 py-20 lg:py-28">
      <div className="wrap grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <Reveal>
          <Ph label="Map — Refinehaus Clinic, Nakhon Ratchasima (Korat)" ratio="4 / 5" className="lg:aspect-[1/1]" />
        </Reveal>

        <Reveal delay={80}>
          <Eyebrow className="mb-4 text-walnut">REFINEHAUS CLINIC</Eyebrow>
          <h2 className="font-display font-medium text-charcoal text-[2.1rem] lg:text-[2.6rem] leading-[1.1] mb-2">Visit Refinehaus</h2>
          <p className="text-muted text-[1rem] mb-8">Nakhon Ratchasima, Thailand</p>

          <div className="flex flex-col gap-5 mb-9">
            <div className="flex gap-4">
              <ClockIcon className="text-olive mt-0.5 shrink-0" />
              <div>
                <p className="text-charcoal font-semibold text-[0.95rem] mb-0.5">Opening Hours</p>
                <p className="font-thai text-muted text-[0.92rem]">{CLINIC.openingHoursText}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CarIcon className="text-olive mt-0.5 shrink-0" />
              <div>
                <p className="text-charcoal font-semibold text-[0.95rem] mb-0.5">Parking</p>
                <p className="font-thai text-muted text-[0.92rem]">มีที่จอดรถ</p>
              </div>
            </div>
            <div className="flex gap-4">
              <PinIcon className="text-olive mt-0.5 shrink-0" />
              <div>
                <p className="text-charcoal font-semibold text-[0.95rem] mb-0.5">Address</p>
                <address className="font-thai not-italic text-muted text-[0.92rem]">
                  {CLINIC.streetAddress ? address : '[ที่อยู่คลินิก Refinehaus, อ.เมือง นครราชสีมา]'}
                </address>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3.5 mb-8">
            <a {...external(CLINIC.googleMapsUrl)} className="btn btn-outline tap">เปิดแผนที่</a>
            <a {...external(CLINIC.lineUrl)} className="btn btn-primary tap"><LineIcon /> LINE Refinehaus</a>
            <a href={CLINIC.phone ? `tel:${CLINIC.phoneIntl || CLINIC.phone}` : '#'} className="btn btn-outline tap"><PhoneIcon /> โทรหาเรา</a>
          </div>

          <div className="flex items-center gap-4 text-oliveDark">
            <a {...external(CLINIC.facebook)} aria-label="Facebook" className="hover:text-olive transition-colors"><FbIcon /></a>
            <a {...external(CLINIC.instagram)} aria-label="Instagram" className="hover:text-olive transition-colors"><IgIcon /></a>
            <a {...external(CLINIC.tiktok)} aria-label="TikTok" className="hover:text-olive transition-colors"><TtIcon /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
