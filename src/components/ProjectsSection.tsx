import React from 'react';
import { useStore } from '../store';
import { PROJECTS, FILTERS } from '../content';

const ProjectsSection: React.FC = () => {
  const { t, pick, filter, setFilter, query, setQuery, showAll, setShowAll, setModal } = useStore();

  const q = query.trim().toLowerCase();
  const allProjects = PROJECTS
    .filter((p) => filter === 'All' || p.cats.includes(filter))
    .filter((p) =>
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.techs.join(' ').toLowerCase().includes(q) ||
      pick(p.blurb).toLowerCase().includes(q),
    );

  const projects = showAll ? allProjects : allProjects.slice(0, 6);
  const hiddenCount = allProjects.length - projects.length;
  const showExpand = hiddenCount > 0 || (showAll && allProjects.length > 6);
  const expandLabel = showAll ? t.showLess : `${t.showAll} (${hiddenCount})`;

  return (
    <section id="projects">
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '90px 28px 100px' }}>
        <h2 style={{ margin: 0, fontSize: 30, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)' }}>
          {t.projectsTitle}
        </h2>

        <div style={{
          marginTop: 24, display: 'flex', gap: 14, flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {FILTERS.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  style={{
                    fontFamily: 'inherit', fontSize: 12.5, fontWeight: 600, padding: '8px 16px',
                    borderRadius: 99, cursor: 'pointer',
                    border: `1px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
                    background: active ? 'var(--accent)' : 'var(--card)',
                    color: active ? '#fff' : 'var(--sub)',
                    transition: 'all .25s ease',
                  }}
                >
                  {pick(f.label)}
                </button>
              );
            })}
          </div>
          <input
            className="search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPh}
            style={{
              fontFamily: 'inherit', fontSize: 13.5, padding: '10px 18px',
              border: '1px solid var(--border)', borderRadius: 99, background: 'var(--card)',
              color: 'var(--text)', outline: 'none', width: 240,
            }}
          />
        </div>

        <div className="projects-grid" style={{
          marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22,
        }}>
          {projects.map((p) => (
            <div
              key={p.title}
              className="lift"
              onClick={() => setModal({ kind: 'project', id: p.title })}
              style={{
                background: 'var(--card)', border: '1px solid var(--border-soft)', borderRadius: 18,
                overflow: 'hidden', boxShadow: 'var(--shadow)', display: 'flex',
                flexDirection: 'column', cursor: 'pointer',
              }}
            >
              <img
                src={p.img}
                alt={p.title}
                style={{ height: 160, width: '100%', objectFit: 'cover', borderBottom: '1px solid var(--border-soft)' }}
              />
              <div style={{ padding: '18px 20px 20px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                <div style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>{p.title}</div>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: 'var(--sub)', flex: 1 }}>{pick(p.blurb)}</p>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {p.techs.map((tech) => (
                    <span key={tech} style={{
                      fontSize: 11, fontWeight: 600, padding: '4px 10px', borderRadius: 99,
                      background: 'var(--accent-soft)', color: 'var(--accent)',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: 2, fontSize: 12.5, fontWeight: 600, color: 'var(--accent)' }}>
                  {t.details} →
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length === 0 && (
          <div style={{ marginTop: 40, textAlign: 'center', fontSize: 14, color: 'var(--muted)' }}>
            {t.noResults}
          </div>
        )}

        {showExpand && (
          <div style={{ marginTop: 36, display: 'flex', justifyContent: 'center' }}>
            <button
              className="expand-btn"
              onClick={() => setShowAll(!showAll)}
              style={{
                fontFamily: 'inherit', fontSize: 13.5, fontWeight: 600, padding: '12px 26px',
                border: '1px solid var(--border)', borderRadius: 99, background: 'var(--card)',
                color: 'var(--text)', cursor: 'pointer', boxShadow: 'var(--shadow)',
              }}
            >
              {expandLabel}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
