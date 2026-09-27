import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ไม่พบหน้าที่คุณต้องการ',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="wrap pt-[140px] pb-24 min-h-[60vh] flex flex-col items-center justify-center text-center">
      <p className="font-display text-[5rem] leading-none text-olive/20 mb-2">404</p>
      <h1 className="font-thai text-[1.6rem] text-charcoal mb-4">ไม่พบหน้าที่คุณต้องการ</h1>
      <p className="font-thai text-muted max-w-md mb-8">หน้านี้อาจถูกย้ายหรือลบไปแล้ว ลองกลับไปหน้าหลัก</p>
      <Link href="/" className="btn btn-primary tap">กลับหน้าหลัก</Link>
    </section>
  );
}
