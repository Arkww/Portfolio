import React, { useState } from 'react';
import { useStore } from '../store';
import { SOCIAL, HERO_LINKS, resumeFor } from '../content';
import PdfViewer from './PdfViewer';
import LinkIcon from './LinkIcon';

const rowStyle: React.CSSProperties = {
  fontSize: 13.5, display: 'flex', alignItems: 'center', gap: 10, minWidth: 0,
};

const SiteFooter: React.FC = () => {
  const { t, lang } = useStore();
  const [pdf, setPdf] = useState<{ src: string; title: string } | null>(null);

  const profileLinks = HERO_LINKS.filter((l) => l.platform !== 'email');

  return (
    <>
    <footer style={{ borderTop: '1px solid var(--border-soft)' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '60px 28px 30px' }}>
        <div className="footer-grid" style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 40,
        }}>
          {/* Col 1 — brand + links (icon + URL, same as the hero) */}
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--accent)' }}>Mathieu Jay</div>
            <div style={{ marginTop: 8, fontSize: 13, color: 'var(--sub)' }}>{t.footerTag}</div>
            <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {profileLinks.map((l) => (
                <a key={l.platform} href={l.href} target="_blank" rel="noreferrer" className="foot-link" style={rowStyle}>
                  <span style={{ flex: 'none', display: 'flex' }}><LinkIcon platform={l.platform} size={16} /></span>
                  <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l.display}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — navigation */}
          <div>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.12em', color: 'var(--muted)' }}>
              {t.footerNav}
            </div>
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 9 }}>
              <a href="#track" className="foot-link" style={{ fontSize: 13.5 }}>{t.navTrack}</a>
              <a href="#projects" className="foot-link" style={{ fontSize: 13.5 }}>{t.navProjects}</a>
              <a href="#languages" className="foot-link" style={{ fontSize: 13.5 }}>{t.navLanguages}</a>
            </div>
          </div>

          {/* Col 3 — contact (email + resume + location) */}
          <div>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.12em', color: 'var(--muted)' }}>
              {t.footerContact}
            </div>
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href={`mailto:${SOCIAL.email}`} className="foot-link" style={rowStyle}>
                <span style={{ flex: 'none', display: 'flex' }}><LinkIcon platform="email" size={16} /></span>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{SOCIAL.email}</span>
              </a>
              <button
                onClick={() => setPdf({ src: resumeFor(lang), title: t.resume })}
                className="foot-link"
                style={{ ...rowStyle, fontFamily: 'inherit', background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
              >
                <span style={{ flex: 'none', display: 'flex' }}><LinkIcon platform="document" size={16} /></span>
                <span>{t.resume}</span>
              </button>
              <span style={{ fontSize: 13.5, color: 'var(--sub)' }}>Beijing, China</span>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: 44, paddingTop: 20, borderTop: '1px solid var(--border-soft)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>© 2026 Mathieu Jay. {t.rights}</span>
          <a href="#top" className="foot-link" style={{ fontSize: 12, color: 'var(--muted)' }}>{t.backTop} ↑</a>
        </div>
      </div>
    </footer>
    {pdf && <PdfViewer src={pdf.src} title={pdf.title} onClose={() => setPdf(null)} />}
    </>
  );
};

export default SiteFooter;
