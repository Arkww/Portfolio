import React, { useEffect, useState } from 'react';
import { useStore } from '../store';
import { TRACK, TRACK_DETAILS, PROJECTS, DETAILS } from '../content';
import Lightbox from './Lightbox';
import PdfViewer from './PdfViewer';

const heading: React.CSSProperties = { fontSize: 16, fontWeight: 700, color: 'var(--text)' };
const modalLink: React.CSSProperties = {
  fontFamily: 'inherit', fontSize: 13.5, fontWeight: 600, color: 'var(--accent)',
  background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'none',
};

const Bullet: React.FC<{ text: string }> = ({ text }) => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'baseline' }}>
    <span style={{
      flex: 'none', width: 5, height: 5, borderRadius: '50%',
      background: 'var(--sub)', position: 'relative', top: -3,
    }} />
    <span style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--sub)' }}>{text}</span>
  </div>
);

const Gallery: React.FC<{
  photos: { src: string; desc: string }[];
  height: number;
  onOpen: (src: string, alt: string) => void;
}> = ({ photos, height, onOpen }) => (
  <div style={{
    marginTop: 14, display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20,
  }}>
    {photos.map((ph, i) => (
      <div key={i}>
        <img
          src={ph.src}
          alt={ph.desc}
          onClick={() => onOpen(ph.src, ph.desc)}
          className="gallery-img"
          style={{ height, width: '100%', objectFit: 'cover', borderRadius: 8, border: '1px solid var(--border-soft)', display: 'block', cursor: 'zoom-in' }}
        />
        <div style={{ marginTop: 10, fontSize: 12.5, lineHeight: 1.55, color: 'var(--sub)', textAlign: 'center' }}>
          {ph.desc}
        </div>
      </div>
    ))}
  </div>
);

const Modal: React.FC = () => {
  const { t, pick, pickArr, modal, setModal } = useStore();
  const [zoomed, setZoomed] = useState<{ src: string; alt: string } | null>(null);
  const [pdf, setPdf] = useState<{ src: string; title: string } | null>(null);

  const close = React.useCallback(() => setModal(null), [setModal]);

  // Reset overlays whenever the modal changes/closes.
  useEffect(() => { setZoomed(null); setPdf(null); }, [modal]);

  useEffect(() => {
    if (!modal) return;
    // While an overlay is open, let it own Escape (close the overlay, not the modal).
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && !zoomed && !pdf) close(); };
    window.addEventListener('keydown', onKey);
    // Lock body scroll while the modal is open.
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [modal, close, zoomed, pdf]);

  if (!modal) return null;

  const isTrack = modal.kind === 'track';
  const tr = isTrack ? TRACK.find((x) => x.id === modal.id) : undefined;
  const trD = tr ? TRACK_DETAILS[tr.id] : undefined;
  const p = !isTrack ? PROJECTS.find((x) => x.title === modal.id) : undefined;
  const pD = p ? DETAILS[p.title] : undefined;

  if (isTrack && !tr) return null;
  if (!isTrack && !p) return null;

  const title = isTrack ? pick(tr!.title) : p!.title;
  const width = isTrack ? 1100 : 760;
  const photoH = isTrack ? 210 : 160;
  const desc = isTrack ? (trD ? pick(trD.recap) : '') : (pD ? pick(pD.recap) : pick(p!.blurb));
  const skills = isTrack ? (trD ? pickArr(trD.skills) : []) : (pD ? pickArr(pD.skills) : []);
  const photos = isTrack
    ? (trD ? trD.photos.map((ph) => ({ src: ph.src, desc: pick(ph.desc) })) : [])
    : (pD ? pD.photos.map((ph) => ({ src: ph.src, desc: pick(ph.desc) })) : []);

  return (
    <div
      onClick={close}
      className="fade-in"
      style={{
        position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(10,12,20,.5)',
        backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', display: 'flex',
        alignItems: 'center', justifyContent: 'center', padding: 32,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--card)', border: '1px solid var(--border-soft)', borderRadius: 20,
          boxShadow: 'var(--shadow-lift)', maxWidth: width, width: '100%', maxHeight: '88vh',
          overflow: 'auto', position: 'relative',
        }}
      >
        <div style={{ padding: '36px 44px 28px' }}>
          <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>
            {title}
          </div>
          {isTrack && (
            <div style={{ marginTop: 8, fontSize: 14, color: 'var(--sub)' }}>
              {pick(tr!.period)} • {pick(tr!.location)}
            </div>
          )}

          {isTrack ? (
            <div className="modal-track-grid" style={{
              marginTop: 26, display: 'grid', gridTemplateColumns: '1.9fr 1fr', gap: 44, alignItems: 'start',
            }}>
              <div>
                <div style={heading}>{t.descTitle}</div>
                <p style={{ margin: '14px 0 0', fontSize: 14.5, lineHeight: 1.8, color: 'var(--sub)', whiteSpace: 'pre-line' }}>{desc}</p>
              </div>
              <div>
                <div style={heading}>{t.skillsGained}</div>
                <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {skills.map((sk, i) => <Bullet key={i} text={sk} />)}
                </div>
              </div>
            </div>
          ) : (
            <>
              <p style={{ margin: '14px 0 0', fontSize: 14.5, lineHeight: 1.75, color: 'var(--sub)', whiteSpace: 'pre-line' }}>{desc}</p>
              <div style={{ ...heading, marginTop: 26 }}>{t.skillsGained}</div>
              <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {skills.map((sk, i) => <Bullet key={i} text={sk} />)}
              </div>
              {p!.techs.length > 0 && (
                <>
                  <div style={{ ...heading, marginTop: 26 }}>{t.techUsed}</div>
                  <div style={{ marginTop: 14, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {p!.techs.map((tech) => (
                      <span key={tech} style={{
                        fontSize: 12.5, fontWeight: 600, padding: '6px 15px', borderRadius: 99,
                        background: 'var(--accent)', color: '#fff',
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </>
          )}

          {/* Links (above the gallery so they stay visible). Each renders only if present. */}
          {isTrack && (tr!.report || tr!.reference || tr!.github || tr!.tryMe) && (
            <div style={{ marginTop: 24, display: 'flex', gap: 22, flexWrap: 'wrap' }}>
              {tr!.report && (
                <button className="link-underline" style={modalLink}
                  onClick={() => setPdf({ src: tr!.report!, title: `${title} · ${t.report}` })}>
                  {t.report}
                </button>
              )}
              {tr!.reference && (
                <button className="link-underline" style={modalLink}
                  onClick={() => setPdf({ src: tr!.reference!, title: `${title} · ${t.reference}` })}>
                  {t.reference}
                </button>
              )}
              {tr!.github && (
                <a href={tr!.github} target="_blank" rel="noreferrer" className="link-underline" style={modalLink}>
                  GitHub
                </a>
              )}
              {tr!.tryMe && (
                <a href={tr!.tryMe} target="_blank" rel="noreferrer" className="link-underline" style={modalLink}>
                  {t.tryLive}
                </a>
              )}
            </div>
          )}

          {!isTrack && (p!.github || p!.tryMe) && (
            <div style={{ marginTop: 24, display: 'flex', gap: 22, flexWrap: 'wrap' }}>
              {p!.github && (
                <a href={p!.github} target="_blank" rel="noreferrer" className="link-underline" style={modalLink}>
                  GitHub
                </a>
              )}
              {p!.tryMe && (
                <a href={p!.tryMe} target="_blank" rel="noreferrer" className="link-underline" style={modalLink}>
                  {t.tryLive}
                </a>
              )}
            </div>
          )}

          {photos.length > 0 && (
            <>
              <div style={{ ...heading, marginTop: 28 }}>{t.gallery}</div>
              <Gallery photos={photos} height={photoH} onOpen={(src, alt) => setZoomed({ src, alt })} />
            </>
          )}

          <div style={{ marginTop: 26, display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={close}
              className="close-btn"
              style={{
                fontFamily: 'inherit', fontSize: 14.5, fontWeight: 600, padding: '12px 28px',
                border: 'none', borderRadius: 10, color: '#fff', cursor: 'pointer',
              }}
            >
              {t.close}
            </button>
          </div>
        </div>
      </div>

      {zoomed && <Lightbox src={zoomed.src} alt={zoomed.alt} onClose={() => setZoomed(null)} />}
      {pdf && <PdfViewer src={pdf.src} title={pdf.title} onClose={() => setPdf(null)} />}
    </div>
  );
};

export default Modal;
