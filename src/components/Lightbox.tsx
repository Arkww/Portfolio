import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';

const MIN = 1;
const MAX = 6;
const STEP = 0.35;

const ctrlBtn: React.CSSProperties = {
  width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,.25)',
  background: 'rgba(20,22,30,.6)', color: '#fff', fontSize: 20, lineHeight: 1, cursor: 'pointer',
  display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(6px)',
};

const Lightbox: React.FC<{ src: string; alt?: string; onClose: () => void }> = ({ src, alt, onClose }) => {
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const origin = useRef({ x: 0, y: 0, px: 0, py: 0 });

  const clamp = (s: number) => Math.min(MAX, Math.max(MIN, s));
  const zoom = useCallback((delta: number) => {
    setScale((s) => {
      const ns = clamp(Math.round((s + delta) * 100) / 100);
      if (ns === 1) setPos({ x: 0, y: 0 });
      return ns;
    });
  }, []);
  const reset = useCallback(() => { setScale(1); setPos({ x: 0, y: 0 }); }, []);

  useEffect(() => { reset(); }, [src, reset]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === '+' || e.key === '=') zoom(STEP);
      else if (e.key === '-' || e.key === '_') zoom(-STEP);
      else if (e.key === '0') reset();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, zoom, reset]);

  const onWheel = (e: React.WheelEvent) => { zoom(e.deltaY < 0 ? STEP : -STEP); };

  const onMouseDown = (e: React.MouseEvent) => {
    if (scale === 1) return;
    dragging.current = true;
    origin.current = { x: e.clientX, y: e.clientY, px: pos.x, py: pos.y };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    setPos({
      x: origin.current.px + (e.clientX - origin.current.x),
      y: origin.current.py + (e.clientY - origin.current.y),
    });
  };
  const endDrag = () => { dragging.current = false; };

  return createPortal(
    <div
      onClick={(e) => { e.stopPropagation(); onClose(); }}
      onWheel={(e) => { e.stopPropagation(); onWheel(e); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(6,8,14,.9)',
        backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', animation: 'fadeUp .2s ease both',
      }}
    >
      <img
        src={src}
        alt={alt}
        draggable={false}
        onClick={(e) => e.stopPropagation()}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onDoubleClick={() => (scale === 1 ? zoom(1.4) : reset())}
        style={{
          maxWidth: '92vw', maxHeight: '88vh', objectFit: 'contain', userSelect: 'none',
          transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
          transition: dragging.current ? 'none' : 'transform .15s ease',
          cursor: scale > 1 ? (dragging.current ? 'grabbing' : 'grab') : 'zoom-in',
          borderRadius: 6, boxShadow: '0 20px 60px -10px rgba(0,0,0,.7)',
        }}
      />

      {/* Toolbar */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 99,
          background: 'rgba(20,22,30,.55)', border: '1px solid rgba(255,255,255,.15)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <button style={ctrlBtn} onClick={() => zoom(-STEP)} aria-label="Zoom out" disabled={scale <= MIN}
          title="Zoom out (-)">−</button>
        <span style={{ color: '#fff', fontSize: 13, fontWeight: 600, minWidth: 46, textAlign: 'center' }}>
          {Math.round(scale * 100)}%
        </span>
        <button style={ctrlBtn} onClick={() => zoom(STEP)} aria-label="Zoom in" disabled={scale >= MAX}
          title="Zoom in (+)">+</button>
        <button style={{ ...ctrlBtn, fontSize: 13 }} onClick={reset} aria-label="Reset zoom" title="Reset (0)">⤢</button>
      </div>

      {/* Close */}
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Close"
        title="Close (Esc)"
        style={{ ...ctrlBtn, position: 'fixed', top: 20, right: 20, fontSize: 22 }}
      >
        ×
      </button>
    </div>,
    document.body,
  );
};

export default Lightbox;
