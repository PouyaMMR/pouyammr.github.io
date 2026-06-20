import { navLinks } from "@/lib/data";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-paper/12 bg-ink-deep/82 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-8 py-[18px]">
        <a
          href="#top"
          className="flex items-center gap-[9px] font-mono text-[0.82rem] tracking-[0.06em] text-paper"
        >
          <span className="h-2 w-2 rounded-full bg-amber shadow-[0_0_0_3px_rgba(217,164,65,0.16)]" />
          WELCOME
        </a>

        <ul className="hidden gap-[30px] md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[0.76rem] tracking-[0.08em] text-ink-soft uppercase transition-colors hover:text-amber"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="rounded-full border border-amber px-4 py-2 font-mono text-[0.74rem] tracking-[0.06em] whitespace-nowrap text-amber uppercase transition-colors hover:bg-amber hover:text-ink-deep"
        >
          Say Hello
        </a>
      </div>
    </header>
  );
}
