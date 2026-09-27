import { CLINIC } from '@/data/clinic';
import { FOOTER_LINKS } from '@/data/home';
import { Logo } from '@/components/ui/Logo';

const FOLLOW_LINKS = [
  { label: 'Facebook', href: CLINIC.facebook },
  { label: 'Instagram', href: CLINIC.instagram },
  { label: 'TikTok', href: CLINIC.tiktok },
  { label: 'LINE', href: CLINIC.lineUrl },
];

export function Footer() {
  return (
    <footer className="bg-oliveDark pt-16 pb-8 lg:pt-20">
      <div className="wrap">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 pb-12">
          <div className="max-w-xs">
            <Logo tone="cream" className="h-10 w-auto mb-4" />
            <p className="font-thai text-cream/60 text-[0.88rem] leading-relaxed">
              คลินิกเวชกรรมความงามโคราช นำโดยแพทย์ วางแผนการดูแลเฉพาะบุคคล
            </p>
          </div>

          <div className="flex flex-wrap gap-x-14 gap-y-8">
            <div>
              <p className="eyebrow text-taupe mb-4">Clinic</p>
              <ul className="flex flex-col gap-2.5">
                {FOOTER_LINKS.map((l) => (
                  <li key={l.href}><a href={l.href} className="text-cream/70 hover:text-cream text-[0.9rem] transition-colors">{l.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow text-taupe mb-4">Follow</p>
              <ul className="flex flex-col gap-2.5">
                {FOLLOW_LINKS.map((l) => (
                  <li key={l.label}>
                    <a href={l.href || '#'} className="text-cream/70 hover:text-cream text-[0.9rem] transition-colors" {...(l.href ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="divider-light mb-8"></div>

        <div className="flex flex-col gap-2 text-cream/45 text-[0.76rem] leading-relaxed mb-8">
          <p>เลขที่ใบอนุญาตสถานพยาบาล: {CLINIC.licenseNumber || '[ระบุเลขที่ใบอนุญาต]'}</p>
          <p>ข้อมูลผู้ดำเนินการสถานพยาบาล: {CLINIC.operatorName || '[ระบุชื่อผู้ดำเนินการสถานพยาบาล]'}</p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-cream/50 text-[0.8rem]">
          <p>© {new Date().getFullYear()} Refinehaus Clinic. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
