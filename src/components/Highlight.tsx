import React from 'react';

// Renders a string, turning **keyword** spans into accent-coloured, semibold text.
const Highlight: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/\*\*(.+?)\*\*/g); // odd indices are the highlighted captures
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} style={{ color: '#4562D9', fontWeight: 600 }}>{part}</span>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        ),
      )}
    </>
  );
};

export default Highlight;
