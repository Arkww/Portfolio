import React, { useState } from 'react';
import { useStore } from '../store';
import { TRACK, PORTRAIT, RESUME } from '../content';
import SocialRow from './SocialRow';
import PdfViewer from './PdfViewer';

const TrackSection: React.FC = () => {
  const { t, pick, setModal } = useStore();
  const [pdf, setPdf] = useState<{ src: string; title: string } | null>(null);

  return (
    <>
    <section
      id="track"
      style={{
        background: 'var(--bg-soft)',
        borderTop: '1px solid var(--border-soft)',
        borderBottom: '1px solid var(--border-soft)',
      }}
    >
      <div className="track-grid" style={{
        maxWidth: 1140, margin: '0 auto', padding: '90px 28px',
        display: 'grid', gridTemplateColumns: '330px 1fr', gap: 32, alignItems: 'start',
      }}>
        {/* Profile card */}
        <div className="profile-card" style={{
          background: 'var(--card)', border: '1px solid var(--border-soft)', borderRadius: 20,
          overflow: 'hidden', boxShadow: 'var(--shadow)', position: 'sticky', top: 86,
        }}>
          <img
            src={PORTRAIT}
            alt="Mathieu Jay"
            style={{ width: '100%', height: 280, objectFit: 'cover', display: 'block' }}
          />
          <div style={{ padding: '24px 26px 26px' }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: 'var(--text)' }}>Mathieu Jay</div>
            <p style={{ margin: '10px 0 0', fontSize: 13.5, lineHeight: 1.65, color: 'var(--sub)' }}>
              {t.profileBio}
            </p>
            <div style={{ marginTop: 18, display: 'flex', gap: 8, alignItems: 'center' }}>
              <SocialRow size={34} instagram />
              <button
                className="resume-pill"
                onClick={() => setPdf({ src: RESUME, title: t.resume })}
                style={{
                  marginLeft: 'auto', fontFamily: 'inherit', fontSize: 13, fontWeight: 600,
                  padding: '9px 18px', background: 'var(--accent)', color: '#fff',
                  border: 'none', borderRadius: 99, cursor: 'pointer', display: 'inline-block',
                }}
              >
                {t.resume}
              </button>
            </div>
          </div>
        </div>

        {/* Track list */}
        <div>
          <h2 style={{
            margin: '0 0 26px', fontSize: 30, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)',
          }}>
            {t.trackTitle}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {TRACK.map((tr) => (
              <div
                key={tr.id}
                className="lift2"
                onClick={() => setModal({ kind: 'track', id: tr.id })}
                style={{
                  background: 'var(--card)', border: '1px solid var(--border-soft)', borderRadius: 16,
                  boxShadow: 'var(--shadow)', display: 'grid', gridTemplateColumns: '52px 1fr auto',
                  gap: 18, alignItems: 'center', padding: '18px 22px', cursor: 'pointer',
                }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 12, background: 'var(--bg-soft)',
                  border: '1px solid var(--border-soft)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
                }}>
                  <img src={tr.logo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 6 }} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>{pick(tr.title)}</div>
                  <div style={{ marginTop: 2, fontSize: 13, fontWeight: 600, color: 'var(--accent)' }}>{pick(tr.role)}</div>
                  <div style={{ marginTop: 2, fontSize: 12.5, color: 'var(--muted)' }}>
                    {pick(tr.period)} · {pick(tr.location)}
                  </div>
                </div>
                <div style={{ fontSize: 18, color: 'var(--muted)' }}>›</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    {pdf && <PdfViewer src={pdf.src} title={pdf.title} onClose={() => setPdf(null)} />}
    </>
  );
};

export default TrackSection;
