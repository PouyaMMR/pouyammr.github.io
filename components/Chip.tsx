export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-paper/12 px-3 py-1.5 font-mono text-[0.74rem] text-ink-soft transition-colors hover:border-amber hover:text-amber">
      {children}
    </span>
  );
}
