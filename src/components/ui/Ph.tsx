import Image from 'next/image';
import { CameraIcon } from './icons';

interface PhProps {
  label: string;
  ratio?: string;
  className?: string;
  img?: string;
  alt?: string;
  sizes?: string;
  priority?: boolean;
}

// Image frame. Renders the real photo via next/image when `img` is set,
// otherwise a labeled placeholder describing the photo to shoot.
export function Ph({ label, ratio = '4 / 5', className = '', img, alt, sizes = '(min-width: 1200px) 33vw, 80vw', priority }: PhProps) {
  if (img) {
    return (
      <div className={`ph ${className}`} style={{ aspectRatio: ratio }}>
        <Image src={img} alt={alt ?? label} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
    );
  }

  return (
    <div className={`ph ${className}`} style={{ aspectRatio: ratio }} role="img" aria-label={label}>
      <span className="ph-tag"><CameraIcon /> {label}</span>
    </div>
  );
}
