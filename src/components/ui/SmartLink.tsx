'use client';

import NextLink from 'next/link';
import type { ComponentProps, MouseEvent } from 'react';

type SmartLinkProps = ComponentProps<typeof NextLink>;

// next/link ignores clicks whose URL equals the current one, so clicking a
// nav item for the page/section you're already on did nothing after you'd
// scrolled away. When the target is on the current page, scroll ourselves:
// to the section for "/#doctors", or back to the top for "/treatments".
export default function SmartLink({ href, onClick, ...rest }: SmartLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || typeof href !== 'string') return;
    // Let the browser handle new-tab / modified clicks
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    const [path, hash] = href.split('#');
    const samePage = !path || path === window.location.pathname;
    if (!samePage) return;

    const behavior: ScrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior, block: 'start' });
      if (window.location.hash !== `#${hash}`) window.history.pushState(null, '', `#${hash}`);
      return;
    }

    // Same page, no section: go back to the top and drop any old #hash
    e.preventDefault();
    window.scrollTo({ top: 0, behavior });
    if (window.location.hash) window.history.pushState(null, '', window.location.pathname + window.location.search);
  };

  return <NextLink href={href} onClick={handleClick} {...rest} />;
}
