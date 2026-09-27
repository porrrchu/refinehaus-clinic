// SVG icons from the mockup. Server-safe (no hooks).
import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export function CameraIcon(props: IconProps) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M4 8h3l2-2.5h6L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>
      <circle cx="12" cy="13.5" r="3.4"/>
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function LineIcon(props: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 3C6.5 3 2 6.6 2 11c0 3.9 3.5 7.2 8.3 7.9.3.06.7.2.8.46.1.24.06.6.03.85l-.13.9c-.04.24-.2.95.83.52 1.03-.44 5.5-3.24 7.5-5.55C20.9 14.1 22 12.6 22 11c0-4.4-4.5-8-10-8Z"/>
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M6.5 3h3l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5L17 13l4 1.5v3c0 1.1-.9 2-2 2-8.3 0-14.5-6.2-14.5-14.5 0-1.1.9-2 2-2Z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function FbIcon(props: IconProps) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M14 9h3V5h-3c-2.2 0-4 1.8-4 4v2H7v4h3v7h4v-7h3l1-4h-4V9c0-.6.4-1 1-1Z"/></svg>
  );
}

export function IgIcon(props: IconProps) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>
  );
}

export function TtIcon(props: IconProps) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M15 3c.4 2.2 1.9 3.6 4.2 3.8v3c-1.5 0-2.9-.4-4.2-1.2v6.6c0 3.3-2.6 5.8-5.8 5.8S3.4 18.5 3.4 15.2c0-3.2 2.5-5.7 5.7-5.8v3.1a2.7 2.7 0 1 0 2.7 2.7V3H15Z"/></svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}><path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.4"/></svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}><path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round"/></svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}><path d="M6 6l12 12M18 6 6 18" strokeLinecap="round"/></svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round"/></svg>
  );
}

export function CarIcon(props: IconProps) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}><path d="M4 16v-3.5L6 8h12l2 4.5V16" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 16h16v2.5a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1V17H7.5v1.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V16Z"/><circle cx="7.5" cy="16" r="1.3"/><circle cx="16.5" cy="16" r="1.3"/></svg>
  );
}
