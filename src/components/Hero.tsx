import React from 'react';
import { useStore } from '../store';
import { HERO, CURRENT_WORK, HERO_LINKS } from '../content';
import Highlight from './Highlight';
import LinkIcon from './LinkIcon';

const eyebrow: React.CSSProperties = {
  fontSize: 11.5, fontWeight: 700, letterSpacing: '.12em',
  color: 'var(--accent)', textTransform: 'uppercase',
};

const TAGS = ['NLP', 'AI', 'ML', 'Data Science'];

const Hero: React.FC = () => {
  const { t, lang, pick } = useStore();
  const hero = HERO[lang];

  return (
    <section
      id="top"
      style={{
        background:
          'radial-gradient(700px 480px at 88% -10%, var(--accent-soft), transparent),' +
          'radial-gradient(500px 400px at -10% 110%, var(--accent-softer), transparent)',
      }}
    >
      <div className="hero-wrap fade-up" style={{
        maxWidth: 1140, margin: '0 auto', padding: '110px 28px 120px',
        display: 'flex', gap: 64, alignItems: 'center',
      }}>
        {/* Left column */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 12.5, fontWeight: 700, letterSpacing: '.14em',
            color: 'var(--accent)', transition: 'opacity .2s',
          }}>
            {hero.eyebrow}
          </div>
          <h1 style={{
            margin: '18px 0 0', fontSize: 56, lineHeight: 1.08, fontWeight: 800,
            letterSpacing: '-0.025em', color: 'var(--text)',
          }}>
            {hero.hello}{' '}
            <span style={{ color: 'var(--accent)', transition: 'color .3s' }}>Mathieu Jay</span>
          </h1>
          <p style={{
            margin: '22px 0 0', fontSize: 16.5, lineHeight: 1.65,
            color: 'var(--sub)', maxWidth: 520, transition: 'opacity .2s',
          }}>
            <Highlight text={hero.bio} />
          </p>
          <div style={{ marginTop: 22, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {TAGS.map((tag) => (
              <span key={tag} style={{
                fontSize: 12, fontWeight: 600, padding: '5px 13px',
                border: '1px solid var(--border)', borderRadius: 99,
                color: 'var(--sub)', background: 'var(--card)',
              }}>
                {tag}
              </span>
            ))}
          </div>
          <div style={{ marginTop: 34, display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#projects" className="cta-primary" style={{
              fontSize: 14, fontWeight: 600, padding: '13px 26px', background: 'var(--accent)',
              color: '#fff', borderRadius: 12, textDecoration: 'none', boxShadow: 'var(--shadow)',
              display: 'inline-block',
            }}>
              {t.explore} ↓
            </a>
            <a href="#languages" className="cta-secondary" style={{
              fontSize: 14, fontWeight: 600, padding: '13px 22px', color: 'var(--text)',
              textDecoration: 'none', border: '1px solid var(--border)', borderRadius: 12,
              background: 'var(--card)', display: 'inline-block',
            }}>
              {t.navLanguages}
            </a>
          </div>
        </div>

        {/* Right column — "currently working on" + links */}
        <div className="hero-cards" style={{
          flex: 'none', display: 'flex', flexDirection: 'column', gap: 16, width: 440, maxWidth: '100%',
        }}>
          {/* Currently working on (wide, short) */}
          <div className="lift" style={{
            boxSizing: 'border-box', background: 'var(--card)', border: '1px solid var(--border-soft)',
            borderRadius: 18, padding: '16px 22px', boxShadow: 'var(--shadow)',
            display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            <div style={{ ...eyebrow, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%', background: '#22c55e',
                boxShadow: '0 0 0 3px color-mix(in oklab, #22c55e 25%, transparent)',
              }} />
              {t.currentlyWorking}
            </div>
            <div style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--sub)' }}>{pick(CURRENT_WORK)}</div>
          </div>

          {/* Links (icon + actual URL) */}
          <div className="lift" style={{
            boxSizing: 'border-box', background: 'var(--card)', border: '1px solid var(--border-soft)',
            borderRadius: 18, padding: '20px 22px', boxShadow: 'var(--shadow)',
            display: 'flex', flexDirection: 'column', gap: 14,
          }}>
            <div style={eyebrow}>{t.links}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {HERO_LINKS.map((l) => (
                <a
                  key={l.platform}
                  href={l.href}
                  target={l.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="hero-link"
                  style={{
                    fontSize: 14, fontWeight: 500, color: 'var(--sub)', textDecoration: 'none',
                    display: 'flex', alignItems: 'center', gap: 12, minWidth: 0,
                  }}
                >
                  <span style={{ flex: 'none', display: 'flex', color: 'var(--text)' }}>
                    <LinkIcon platform={l.platform} />
                  </span>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {l.display}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
