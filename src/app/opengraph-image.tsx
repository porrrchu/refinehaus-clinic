import { ImageResponse } from 'next/og';

// Default share image (LINE / Facebook). Replace with a real clinic photo later.
export const alt = 'Refinehaus Clinic — Beauty, thoughtfully refined.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: '#39463B',
          color: '#FAF8F3',
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, color: '#C8B6A4' }}>REFINEHAUS CLINIC · KORAT</div>
        <div style={{ fontSize: 84, marginTop: 24, lineHeight: 1.05 }}>Beauty,</div>
        <div style={{ fontSize: 84, lineHeight: 1.05 }}>thoughtfully refined.</div>
      </div>
    ),
    size
  );
}
