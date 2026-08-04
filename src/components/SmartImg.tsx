import React, { useEffect, useMemo, useState } from 'react';

// Extension/case candidates tried (in order) when the written path fails to load.
const CANDIDATE_EXTS = [
  'png', 'PNG', 'jpg', 'JPG', 'jpeg', 'JPEG', 'JPG',
  'webp', 'WEBP', 'gif', 'GIF', 'heic', 'HEIC', 'svg', 'SVG',
];

// Given a written path, produce the ordered list of URLs to try: the path exactly as
// written first, then the same basename with every candidate extension. This makes the
// picture resolve no matter how the extension is cased/spelled in content.ts.
function buildCandidates(src: string): string[] {
  if (!src) return [];
  const path = src.split(/[?#]/)[0];
  const slash = path.lastIndexOf('/');
  const dot = path.lastIndexOf('.');
  const base = dot > slash ? path.slice(0, dot) : path; // strip an existing extension
  const list = [src, ...CANDIDATE_EXTS.map((e) => `${base}.${e}`)];
  return Array.from(new Set(list)); // dedupe, preserve order
}

type Props = React.ImgHTMLAttributes<HTMLImageElement> & { src: string };

const SmartImg: React.FC<Props> = ({ src, ...rest }) => {
  const candidates = useMemo(() => buildCandidates(src), [src]);
  const [i, setI] = useState(0);

  useEffect(() => { setI(0); }, [src]); // restart the search when the source changes

  if (candidates.length === 0 || i >= candidates.length) return null; // nothing loaded → render nothing

  return (
    <img
      {...rest}
      src={candidates[i]}
      onError={() => setI((n) => n + 1)}
    />
  );
};

export default SmartImg;
