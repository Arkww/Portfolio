import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { T, type Lang, type Loc, type LocArr, type UIStrings } from './content';

export type Modal = { kind: 'track' | 'project'; id: string } | null;

interface Store {
  lang: Lang;
  setLang: (l: Lang) => void;
  dark: boolean;
  toggleDark: () => void;
  filter: string;
  setFilter: (f: string) => void;
  query: string;
  setQuery: (q: string) => void;
  showAll: boolean;
  setShowAll: (v: boolean) => void;
  hovered: number;
  setHovered: (i: number) => void;
  modal: Modal;
  setModal: (m: Modal) => void;
  t: UIStrings;
  pick: (o: Loc | string) => string;
  pickArr: (o: LocArr) => string[];
}

const StoreCtx = createContext<Store | null>(null);

function isLang(v: string | null): v is Lang {
  return v === 'en' || v === 'fr' || v === 'zh';
}

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Lang>('en');
  const [dark, setDark] = useState(false);
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [hovered, setHovered] = useState(-1);
  const [modal, setModal] = useState<Modal>(null);

  // Restore persisted preferences on mount.
  useEffect(() => {
    try {
      const l = localStorage.getItem('mj-lang');
      if (isLang(l)) setLangState(l);
      const d = localStorage.getItem('mj-dark');
      if (d != null) setDark(d === '1');
    } catch { /* ignore */ }
  }, []);

  // Apply dark theme to <body> and persist.
  useEffect(() => {
    document.body.classList.toggle('dark', dark);
    try { localStorage.setItem('mj-dark', dark ? '1' : '0'); } catch { /* ignore */ }
  }, [dark]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try { localStorage.setItem('mj-lang', l); } catch { /* ignore */ }
  }, []);

  const toggleDark = useCallback(() => setDark((d) => !d), []);

  // Resolve a translatable field to the current language.
  const pick = useCallback(
    (o: Loc | string): string => (typeof o === 'object' ? o[lang] : o),
    [lang],
  );
  const pickArr = useCallback((o: LocArr): string[] => o[lang], [lang]);

  const value: Store = {
    lang, setLang, dark, toggleDark, filter, setFilter, query, setQuery,
    showAll, setShowAll, hovered, setHovered, modal, setModal,
    t: T[lang], pick, pickArr,
  };

  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>;
};

export const useStore = (): Store => {
  const ctx = useContext(StoreCtx);
  if (!ctx) throw new Error('useStore must be used within StoreProvider');
  return ctx;
};
