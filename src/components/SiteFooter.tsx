import React from 'react';
import { useStore } from '../store';
import { SOCIAL } from '../content';
import SocialRow from './SocialRow';

const SiteFooter: React.FC = () => {
  const { t } = useStore();

  return (
    <footer style={{ borderTop: '1px solid var(--border-soft)' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '60px 28px 30px' }}>
        <div className="footer-grid" style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 40,
        }}>
          {/* Col 1 */}
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--accent)' }}>Mathieu Jay</div>
            <div style={{ marginTop: 8, fontSize: 13, color: 'var(--sub)' }}>{t.footerTag}</div>
            <div style={{ marginTop: 16 }}>
              <SocialRow size={32} instagram />
            </div>
          </div>

          {/* Col 2 */}
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

          {/* Col 3 */}
          <div>
            <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.12em', color: 'var(--muted)' }}>
              {t.footerContact}
            </div>
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 9 }}>
              <a href={`mailto:${SOCIAL.email}`} className="foot-link" style={{ fontSize: 13.5 }}>{SOCIAL.email}</a>
              <span style={{ fontSize: 13.5, color: 'var(--sub)' }}>Paris, France</span>
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
  );
};

export default SiteFooter;
