import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const ctrlBtn: React.CSSProperties = {
  height: 36, padding: '0 14px', borderRadius: 99, border: '1px solid rgba(255,255,255,.25)',
  background: 'rgba(20,22,30,.6)', color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer',
  display: 'inline-flex', alignItems: 'center', gap: 6, textDecoration: 'none', backdropFilter: 'blur(6px)',
};

// Full-screen in-app PDF viewer (renders the file in an <iframe>).
const PdfViewer: React.FC<{ src: string; title?: string; onClose: () => void }> = ({ src, title, onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return createPortal(
    <div
      onClick={(e) => { e.stopPropagation(); onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(6,8,14,.92)',
        backdropFilter: 'blur(4px)', display: 'flex', flexDirection: 'column',
        padding: '20px 20px 24px', gap: 14, animation: 'fadeUp .2s ease both',
      }}
    >
      {/* Toolbar */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}
      >
        <span style={{ color: '#fff', fontSize: 14, fontWeight: 700, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {title}
        </span>
        <div style={{ display: 'flex', gap: 10, flex: 'none' }}>
          <a style={ctrlBtn} href={src} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>↗ Open</a>
          <a style={ctrlBtn} href={src} download onClick={(e) => e.stopPropagation()}>↓ Download</a>
          <button style={{ ...ctrlBtn, width: 36, padding: 0, justifyContent: 'center', fontSize: 20 }}
            onClick={(e) => { e.stopPropagation(); onClose(); }} aria-label="Close" title="Close (Esc)">×</button>
        </div>
      </div>

      {/* Document */}
      <iframe
        title={title || 'PDF'}
        src={src}
        onClick={(e) => e.stopPropagation()}
        style={{ flex: 1, width: '100%', border: 'none', borderRadius: 8, background: '#fff', boxShadow: '0 20px 60px -10px rgba(0,0,0,.7)' }}
      />
    </div>,
    document.body,
  );
};

export default PdfViewer;
