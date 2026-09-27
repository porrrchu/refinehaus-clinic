'use client';

import { useEffect, useState } from 'react';
import { NAV_LINKS } from '@/data/home';
import { Logo } from '@/components/ui/Logo';
import { CloseIcon, LineIcon, MenuIcon } from '@/components/ui/icons';

function Header({ onOpenMenu }: { onOpenMenu: () => void }) {
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
        <a href="#top" className="flex items-center">
          <Logo tone="cream" priority className="h-9 lg:h-10 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="font-nav text-[0.95rem] text-cream/75 hover:text-taupe transition-colors duration-300">
              {l.labelTh}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex btn btn-cream tap !py-2.5 !px-5 text-[0.86rem] lg:!py-3.5 lg:!px-[26px] lg:text-[0.92rem]">
            นัดปรึกษาคุณหมอ
          </a>

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

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => { document.documentElement.style.overflow = ''; };
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-oliveDark transition-opacity duration-400 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      role="dialog" aria-modal="true" aria-label="Mobile navigation" aria-hidden={!open}
    >
      <div className="wrap flex items-center justify-between h-[68px]">
        <Logo tone="cream" className="h-9 w-auto" />
        <button onClick={onClose} className="w-11 h-11 flex items-center justify-center text-cream tap" aria-label="Close menu" tabIndex={open ? 0 : -1}>
          <CloseIcon />
        </button>
      </div>
      <nav className="wrap flex flex-col mt-10 gap-1" aria-label="Mobile navigation">
        {NAV_LINKS.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={onClose}
            tabIndex={open ? 0 : -1}
            className="font-nav font-medium text-[1.9rem] text-cream/95 py-3 border-b border-cream/10"
            style={{ transitionDelay: `${i * 40}ms` }}
          >
            {l.labelTh}
          </a>
        ))}
      </nav>
      <div className="wrap mt-10 flex flex-col gap-3">
        <a href="#contact" onClick={onClose} tabIndex={open ? 0 : -1} className="btn btn-cream w-full tap">นัดปรึกษาคุณหมอ</a>
        <a href="#contact" onClick={onClose} tabIndex={open ? 0 : -1} className="btn btn-cream-outline w-full tap">
          <LineIcon /> LINE Refinehaus
        </a>
      </div>
    </div>
  );
}

// Header + mobile menu share open state, so they live in one client island.
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
