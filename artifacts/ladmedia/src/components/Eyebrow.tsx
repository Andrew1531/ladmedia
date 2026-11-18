import type { ReactNode } from 'react';

export default function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className={`mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] ${dark ? 'text-lilac' : 'text-plum'}`}>
      <span aria-hidden="true" className={`inline-block h-2.5 w-2.5 rotate-45 ${dark ? 'bg-white' : 'bg-ink'}`} />
      {children}
    </div>
  );
}
