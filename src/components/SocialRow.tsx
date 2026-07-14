import React from 'react';
import { SOCIAL, LOGOS } from '../content';

// A row of circular social buttons — all rendered as a white glyph on a blue circle.
//
// github/linkedin/instagram are blue-disk PNGs with a transparent glyph cutout. We sit them
// on a white circle so the cutout reads white, and scale the disk up inside an overflow-hidden
// circle so the disk always covers the rim (no white edge can show through).
//
// mail.png is a solid blue envelope, so we use it as a mask over white to paint just the
// envelope white on top of a blue circle.
const SocialRow: React.FC<{ size?: number; instagram?: boolean; gap?: number }> = ({
  size = 34,
  instagram = false,
  gap = 8,
}) => {
  const Badge: React.FC<{ src: string; alt: string; href: string }> = ({ src, alt, href }) => (
    <a className="social-badge" href={href} target="_blank" rel="noreferrer" aria-label={alt}>
      <span style={{
        display: 'block', width: size, height: size, borderRadius: '50%',
        overflow: 'hidden', background: '#fff',
      }}>
        <img
          src={src}
          alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: 'scale(1.06)' }}
        />
      </span>
    </a>
  );

  return (
    <div style={{ display: 'flex', gap, alignItems: 'center' }}>
      <Badge src={LOGOS.github} alt="GitHub" href={SOCIAL.github} />
      <Badge src={LOGOS.linkedin} alt="LinkedIn" href={SOCIAL.linkedin} />
      {instagram && <Badge src={LOGOS.instagram} alt="Instagram" href={SOCIAL.instagram} />}

      <a className="social-badge" href={`mailto:${SOCIAL.email}`} aria-label="Email"
        style={{
          width: size, height: size, borderRadius: '50%', background: '#4562d9',
          display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none',
        }}>
        <span style={{
          width: size, height: size, background: '#fff',
          WebkitMaskImage: `url(${LOGOS.mail})`, maskImage: `url(${LOGOS.mail})`,
          WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
          WebkitMaskPosition: 'center', maskPosition: 'center',
          WebkitMaskSize: `${Math.round(size * 0.56)}px auto`, maskSize: `${Math.round(size * 0.56)}px auto`,
        }} />
      </a>
    </div>
  );
};

export default SocialRow;
