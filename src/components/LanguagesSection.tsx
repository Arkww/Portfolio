import React from 'react';
import { useStore } from '../store';
import { LANGS } from '../content';
import Highlight from './Highlight';

const LanguagesSection: React.FC = () => {
  const { t, pick } = useStore();

  return (
    <section
      id="languages"
      style={{ background: 'var(--bg-soft)', borderTop: '1px solid var(--border-soft)' }}
    >
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '90px 28px 100px' }}>
        <h2 style={{ margin: 0, fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>
          {t.languagesTitle}
        </h2>
        <p style={{ margin: '20px 0 0', fontSize: 15, lineHeight: 1.7, color: 'var(--sub)', maxWidth: 680 }}>
          <Highlight text={t.langIntro1} />
        </p>
        <p style={{ margin: '12px 0 0', fontSize: 15, lineHeight: 1.7, color: 'var(--sub)', maxWidth: 680 }}>
          <Highlight text={t.langIntro2} />
        </p>

        <div className="langs-grid" style={{
          marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16,
        }}>
          {LANGS.map((l) => (
            <div
              key={l.code}
              className="lift"
              style={{
                background: 'var(--card)', border: '1px solid var(--border-soft)', borderRadius: 18,
                padding: '28px 18px', textAlign: 'center', boxShadow: 'var(--shadow)',
              }}
            >
              <div style={{ fontSize: 34, lineHeight: 1 }}>{l.flag}</div>
              <div style={{ marginTop: 14, fontSize: 15, fontWeight: 700, color: 'var(--text)' }}>{pick(l.name)}</div>
              <div style={{ marginTop: 6, fontSize: 13, fontWeight: 700, color: 'var(--accent)' }}>{pick(l.level)}</div>
              <div style={{ marginTop: 4, fontSize: 11.5, lineHeight: 1.45, color: 'var(--muted)' }}>{pick(l.prof)}</div>
              {l.cert && (
                <a
                  href={l.cert}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline"
                  style={{
                    display: 'block', marginTop: 12, fontSize: 12, fontWeight: 600,
                    color: 'var(--accent)', borderTop: '1px solid var(--border-soft)', paddingTop: 12,
                  }}
                >
                  {t.certificate} ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;
