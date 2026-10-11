import Image from 'next/image';
import { CameraIcon } from './icons';

interface PhProps {
  label: string;
  /** CSS aspect-ratio; pass '' to let the parent size the frame. */
  ratio?: string;
  className?: string;
  img?: string;
  alt?: string;
  sizes?: string;
  priority?: boolean;
  /** CSS object-position for the photo, e.g. 'center 20%' to keep a face in frame. */
  imgPosition?: string;
}

// Image frame. Renders the real photo via next/image when `img` is set,
// otherwise a labeled placeholder describing the photo to shoot.
export function Ph({ label, ratio = '4 / 5', className = '', img, alt, sizes = '(min-width: 1200px) 33vw, 80vw', priority, imgPosition }: PhProps) {
  if (img) {
    return (
      <div className={`ph ${className}`} style={ratio ? { aspectRatio: ratio } : undefined}>
        <Image src={img} alt={alt ?? label} fill sizes={sizes} priority={priority} className="object-cover" style={imgPosition ? { objectPosition: imgPosition } : undefined} />
      </div>
    );
  }

  return (
    <div className={`ph ${className}`} style={ratio ? { aspectRatio: ratio } : undefined} role="img" aria-label={label}>
      <span className="ph-tag"><CameraIcon /> {label}</span>
    </div>
  );
}
