import Image from 'next/image';

// Wordmark extracted from the mockup's base64 data URIs (1147×660 PNG).
export function Logo({ tone = 'cream', className = '', priority }: { tone?: 'cream' | 'olive'; className?: string; priority?: boolean }) {
  return (
    <Image
      src={tone === 'cream' ? '/images/logo-cream.png' : '/images/logo-olive.png'}
      alt="Refinehaus Clinic"
      width={1147}
      height={660}
      priority={priority}
      className={className}
    />
  );
}
