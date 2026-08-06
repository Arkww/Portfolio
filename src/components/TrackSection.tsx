import React from 'react';
import { useStore } from '../store';
import { TRACK } from '../content';
import SmartImg from './SmartImg';

const TrackSection: React.FC = () => {
  const { t, pick, setModal } = useStore();

  // Split entries into Professional Experience and Education (order preserved).
  const groups = [
    { title: t.experienceTitle, items: TRACK.filter((x) => x.category === 'experience') },
    { title: t.educationTitle, items: TRACK.filter((x) => x.category === 'education') },
  ];

  return (
    <section
      id="track"
      style={{
        background: 'var(--bg-soft)',
        borderTop: '1px solid var(--border-soft)',
        borderBottom: '1px solid var(--border-soft)',
      }}
    >
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '90px 28px' }}>
        {/* Professional Experience + Education, two columns */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 40, alignItems: 'start',
        }}>
          {groups.map((group) =>
            group.items.length === 0 ? null : (
              <div key={group.title}>
                <h2 style={{
                  margin: '0 0 22px', fontSize: 30, fontWeight: 800,
                  letterSpacing: '-0.02em', color: 'var(--text)',
                }}>
                  {group.title}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {group.items.map((tr) => (
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
                        {tr.logo && (
                          <SmartImg src={tr.logo} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 6 }} />
                        )}
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
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default TrackSection;
