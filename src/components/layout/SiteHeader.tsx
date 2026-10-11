'use client';

import Link from '@/components/ui/SmartLink';
import { LineLink } from '@/components/ui/LineLink';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/data/home';
import { Logo } from '@/components/ui/Logo';
import { CloseIcon, LineIcon, MenuIcon } from '@/components/ui/icons';

// Homepage sections the nav can point at, in page order.
const SECTION_IDS = NAV_LINKS.filter((l) => l.href.startsWith('/#')).map((l) => l.href.slice(2));

// Inner pages highlight the nav item for their homepage section.
const PAGE_TO_NAV: [string, string][] = [
  ['/treatments', '/#treatments'],
  ['/results', '/#results'],
  ['/articles', '/#articles'],
];

// Which nav href is "current": by page on inner pages, by scroll position
// (the section crossing 35% of the viewport) on the homepage.
function useActiveHref() {
  const pathname = usePathname();
  const [spy, setSpy] = useState('/');

  useEffect(() => {
    if (pathname !== '/') return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.35;
      let current = '/';
      let best = -Infinity;
      for (const id of SECTION_IDS) {
        const top = document.getElementById(id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= line && top > best) {
          best = top;
          current = `/#${id}`;
        }
      }
      setSpy(current);
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(update); };
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [pathname]);

  if (pathname === '/') return spy;
  const match = PAGE_TO_NAV.find(([prefix]) => pathname === prefix || pathname.startsWith(`${prefix}/`));
  return match ? match[1] : null;
}

function Header({ onOpenMenu, activeHref }: { onOpenMenu: () => void; activeHref: string | null }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header fixed top-0 inset-x-0 z-40 transition-shadow duration-300 ${scrolled ? 'shadow-[0_4px_24px_rgba(0,0,0,0.18)]' : ''}`}>
      <div className="wrap flex items-center justify-between h-[68px] lg:h-[80px]">
        <Link href="/" className="flex items-center">
          <Logo tone="cream" priority className="h-9 lg:h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.labelTh}
              href={l.href}
              aria-current={l.href === activeHref ? 'location' : undefined}
              className={`font-nav text-[0.95rem] hover:text-taupe transition-colors duration-300 ${l.href === activeHref ? 'text-taupe' : 'text-cream/75'}`}
            >
              {l.labelTh}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/#contact" className="hidden sm:inline-flex btn btn-cream tap !py-2.5 !px-5 text-[0.86rem] lg:!py-3.5 lg:!px-[26px] lg:text-[0.92rem]">
            นัดปรึกษาคุณหมอ
          </Link>

          <button
            onClick={onOpenMenu}
            className="lg:hidden w-11 h-11 flex items-center justify-center text-cream tap"
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ open, onClose, activeHref }: { open: boolean; onClose: () => void; activeHref: string | null }) {
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => { document.documentElement.style.overflow = ''; };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-50 h-[100dvh] overflow-y-auto overscroll-contain bg-oliveDark transition-opacity duration-400 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      role="dialog" aria-modal="true" aria-label="Mobile navigation" aria-hidden={!open}
    >
      <div className="wrap flex items-center justify-between h-[68px]">
        <Logo tone="cream" className="h-9 w-auto" />
        <button onClick={onClose} className="w-11 h-11 flex items-center justify-center text-cream tap" aria-label="Close menu" tabIndex={open ? 0 : -1}>
          <CloseIcon />
        </button>
      </div>
      <nav className="wrap flex flex-col mt-6 gap-0.5" aria-label="Mobile navigation">
        {NAV_LINKS.map((l, i) => (
          <Link
            key={l.labelTh}
            href={l.href}
            onClick={onClose}
            tabIndex={open ? 0 : -1}
            aria-current={l.href === activeHref ? 'location' : undefined}
            className={`font-nav font-medium text-[1.5rem] py-2.5 border-b border-cream/10 ${l.href === activeHref ? 'text-taupe' : 'text-cream/95'}`}
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            {l.labelTh}
          </Link>
        ))}
      </nav>
      {/* Both CTAs on one row so LINE is always visible without scrolling */}
      <div className="wrap mt-8 grid grid-cols-2 gap-3 pb-[calc(24px+env(safe-area-inset-bottom))]">
        <Link href="/#contact" onClick={onClose} tabIndex={open ? 0 : -1} className="btn btn-cream tap !px-3">นัดปรึกษาคุณหมอ</Link>
        <LineLink onClick={onClose} tabIndex={open ? 0 : -1} className="btn btn-cream-outline tap !px-3">
          <LineIcon /> LINE
        </LineLink>
      </div>
    </div>
  );
}

// Header + mobile menu share open state, so they live in one client island.
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeHref = useActiveHref();
  return (
    <>
      <Header onOpenMenu={() => setMenuOpen(true)} activeHref={activeHref} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} activeHref={activeHref} />
    </>
  );
}
