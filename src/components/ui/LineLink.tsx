import Link from 'next/link';
import type { ComponentProps } from 'react';
import { CLINIC } from '@/data/clinic';

type LineLinkProps = Omit<ComponentProps<'a'>, 'href'>;

// "LINE" buttons open the clinic's LINE OA. Until the LINE URL is filled in
// (src/data/clinic.ts), they fall back to the contact section.
export function LineLink(props: LineLinkProps) {
  if (CLINIC.lineUrl) {
    return <a href={CLINIC.lineUrl} target="_blank" rel="noopener noreferrer" {...props} />;
  }
  return <Link href="/#contact" {...props} />;
}
