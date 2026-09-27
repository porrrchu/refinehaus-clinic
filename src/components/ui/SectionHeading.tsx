import type { ReactNode } from 'react';

export function Eyebrow({ children, tone = 'olive', className = '' }: { children: ReactNode; tone?: 'olive' | 'cream'; className?: string }) {
  const toneClass = tone === 'cream' ? 'text-taupe' : 'text-walnut';
  return <p className={`eyebrow ${toneClass} ${className}`}>{children}</p>;
}

interface SectionHeadingProps {
  eyebrow?: string;
  titleEn?: ReactNode;
  titleTh?: string;
  align?: 'left' | 'center';
  tone?: 'dark' | 'cream';
  subtitle?: string;
}

export function SectionHeading({ eyebrow, titleEn, titleTh, align = 'left', tone = 'dark', subtitle }: SectionHeadingProps) {
  const isCenter = align === 'center';
  const textTone = tone === 'cream' ? 'text-cream' : 'text-charcoal';
  const subTone = tone === 'cream' ? 'text-cream/75' : 'text-muted';
  return (
    <div className={isCenter ? 'text-center mx-auto max-w-2xl' : 'max-w-xl'}>
      {eyebrow && <Eyebrow tone={tone === 'cream' ? 'cream' : 'olive'} className="mb-4">{eyebrow}</Eyebrow>}
      {titleEn && <h2 className={`font-display font-medium ${textTone} text-[2.1rem] sm:text-[2.5rem] lg:text-[3rem] leading-[1.08] mb-3`}>{titleEn}</h2>}
      {titleTh && <p className={`font-thai ${subTone} text-[1.02rem] sm:text-[1.08rem] leading-relaxed`}>{titleTh}</p>}
      {subtitle && <p className={`font-thai ${subTone} text-[1.02rem] leading-relaxed mt-2`}>{subtitle}</p>}
    </div>
  );
}
