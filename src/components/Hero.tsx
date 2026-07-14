import React from 'react';
import { useStore } from '../store';
import { HERO, LANGS, type Lang } from '../content';
import Highlight from './Highlight';

const TAGS = ['NLP', 'AI', 'ML', 'Data Science'];

// The three codes that are full app languages (Spanish & Japanese are hero-only previews).
const SWITCHABLE = new Set<string>(['en', 'fr', 'zh']);

const Hero: React.FC = () => {
  const { t, lang, setLang, pick, hovered, setHovered } = useStore();

  // Whole-hero language preview: hovering a card temporarily switches the left column.
  const heroLang = hovered >= 0 ? LANGS[hovered].code : lang;
  const hero = HERO[heroLang];

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

        {/* Right column — language cards */}
        <div className="hero-cards" style={{ flex: 'none' }}>
          <div style={{
            fontSize: 11.5, fontWeight: 700, letterSpacing: '.12em',
            color: 'var(--accent)', textAlign: 'center', marginBottom: 16,
          }}>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(2, 150px)', gap: 14, justifyItems: 'stretch',
          }}>
            {LANGS.map((l, i) => {
              const isHover = hovered === i;
              const switchable = SWITCHABLE.has(l.code);
              const isActive = switchable && l.code === lang;
              return (
                <div
                  key={l.code}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(-1)}
                  onClick={() => switchable && setLang(l.code as Lang)}
                  role={switchable ? 'button' : undefined}
                  aria-label={switchable ? `Switch language to ${pick(l.name)}` : undefined}
                  style={{
                    gridColumn: i === 4 ? '1 / -1' : 'auto',
                    justifySelf: 'center', width: 150, boxSizing: 'border-box',
                    background: 'var(--card)',
                    border: `1px solid ${isHover || isActive ? 'var(--accent)' : 'var(--border-soft)'}`,
                    borderRadius: 16, padding: '20px 14px', textAlign: 'center',
                    cursor: switchable ? 'pointer' : 'default',
                    boxShadow: isHover ? 'var(--shadow-lift)' : 'var(--shadow)',
                    transform: isHover ? 'translateY(-4px)' : 'none',
                    transition: 'all .3s cubic-bezier(.2,.7,.3,1.2)',
                  }}
                >
                  <div style={{ fontSize: 26, lineHeight: 1 }}>{l.flag}</div>
                  <div style={{ marginTop: 10, fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>
                    {isHover ? l.greeting : pick(l.name)}
                  </div>
                  <div style={{
                    marginTop: 3, fontSize: 11.5, fontWeight: 500,
                    color: isHover ? 'var(--accent)' : 'var(--muted)', transition: 'color .25s',
                  }}>
                    {isHover ? pick(l.name) : pick(l.level)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
