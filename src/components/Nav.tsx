import React from 'react';
import { useStore } from '../store';
import type { Lang } from '../content';

const LANG_OPTS: [Lang, string][] = [['en', 'EN'], ['fr', 'FR'], ['zh', '中文']];

const Nav: React.FC = () => {
  const { t, lang, setLang, dark, toggleDark } = useStore();

  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'color-mix(in srgb, var(--bg) 80%, transparent)',
      backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
      borderBottom: '1px solid var(--border-soft)',
    }}>
      <div style={{
        maxWidth: 1140, margin: '0 auto', padding: '0 28px', height: 62,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#top" style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--text)', textDecoration: 'none' }}>
          Mathieu Jay
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
          <a href="#track" className="nav-link hide-mobile" style={{ fontSize: 13.5 }}>{t.navTrack}</a>
          <a href="#projects" className="nav-link hide-mobile" style={{ fontSize: 13.5 }}>{t.navProjects}</a>
          <a href="#languages" className="nav-link hide-mobile" style={{ fontSize: 13.5 }}>{t.navLanguages}</a>

          <div style={{
            display: 'flex', gap: 2, background: 'var(--bg-soft)',
            border: '1px solid var(--border-soft)', borderRadius: 99, padding: 3,
          }}>
            {LANG_OPTS.map(([code, label]) => {
              const active = lang === code;
              return (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  style={{
                    fontFamily: 'inherit', fontSize: 11.5, fontWeight: 600,
                    padding: '5px 11px', border: 'none', borderRadius: 99, cursor: 'pointer',
                    background: active ? 'var(--card)' : 'transparent',
                    color: active ? 'var(--text)' : 'var(--muted)',
                    boxShadow: active ? 'var(--shadow)' : 'none',
                    transition: 'all .25s ease',
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>

          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="dark-toggle"
            style={{
              width: 32, height: 32, borderRadius: '50%', border: '1px solid var(--border)',
              background: 'var(--card)', color: 'var(--sub)', fontSize: 14, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            {dark ? '☀' : '☾'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
