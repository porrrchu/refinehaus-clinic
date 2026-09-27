import { LineIcon } from '@/components/ui/icons';

export function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta lg:hidden fixed bottom-0 inset-x-0 z-30" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
      <div className="flex gap-2.5 px-3.5 py-3">
        <a href="#contact" className="btn btn-outline flex-1 tap !py-3">
          <LineIcon /> LINE
        </a>
        <a href="#contact" className="btn btn-primary flex-[1.4] tap !py-3">นัดปรึกษาคุณหมอ</a>
      </div>
    </div>
  );
}
