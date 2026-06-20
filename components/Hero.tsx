import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="profile"
      className="relative overflow-hidden border-b border-paper/12 py-22 sm:py-24"
    >
      <div className="bg-contours pointer-events-none absolute inset-0 opacity-35" />

      <svg
        viewBox="0 0 200 200"
        fill="none"
        className="motion-reduce:animate-none animate-spin-slow pointer-events-none absolute -top-22 -right-22 w-[340px] opacity-50"
      >
        <circle cx="100" cy="100" r="92" stroke="#4FA39B" strokeOpacity="0.35" strokeWidth="1" />
        <circle cx="100" cy="100" r="70" stroke="#D9A441" strokeOpacity="0.3" strokeWidth="1" />
        <g stroke="#92A5BB" strokeOpacity="0.4">
          <line x1="100" y1="8" x2="100" y2="26" />
          <line x1="100" y1="174" x2="100" y2="192" />
          <line x1="8" y1="100" x2="26" y2="100" />
          <line x1="174" y1="100" x2="192" y2="100" />
        </g>
        <path d="M100 40 L112 100 L100 160 L88 100 Z" fill="#D9A441" fillOpacity="0.55" />
        <circle cx="100" cy="100" r="4" fill="#F4EEE0" />
      </svg>

      <div className="relative mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-12 px-8 md:grid-cols-[1.5fr_0.9fr] md:gap-16">
        <div>
          <span className="font-mono text-[0.74rem] tracking-[0.16em] text-teal uppercase">
            Front-end Developer — Tehran, Iran
          </span>
          <div className="mt-2.5 font-mono text-[0.78rem] text-ink-soft">
            35.6892° N, 51.3890° E
          </div>

          <h1 className="mt-[18px] font-display text-[clamp(2.5rem,5.4vw,4.4rem)] leading-[1.04] font-medium tracking-[-0.01em] text-paper">
            <em className="text-amber italic">Pouya</em> Mashhadi
            <br />
            Mohammad Reza
          </h1>

          <p className="mt-[26px] max-w-[54ch] text-[1.05rem] text-ink-soft">
            I&apos;ve spent the last five years building interfaces in React, TypeScript,
            and Next.js — turning rough data and rougher requirements into products
            people actually enjoy using, whether I&apos;m working solo or inside a full
            team.
          </p>

          <div className="mt-[34px] flex flex-wrap items-center gap-4">
            <a
              href="#route"
              className="rounded-full border border-amber bg-amber px-6 py-[13px] font-mono text-[0.8rem] tracking-[0.05em] text-ink-deep uppercase transition-transform hover:-translate-y-0.5"
            >
              View the route
            </a>
            <a
              href="#contact"
              className="rounded-full border border-paper/12 px-6 py-[13px] font-mono text-[0.8rem] tracking-[0.05em] text-paper uppercase transition-all hover:-translate-y-0.5 hover:border-teal hover:text-teal"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-[30px] flex items-center gap-2.5 font-mono text-[0.78rem] text-ink-soft">
            <span className="relative h-2 w-2 rounded-full bg-teal">
              <span className="motion-reduce:hidden animate-ping-slow absolute -inset-[5px] rounded-full border border-teal" />
            </span>
            Currently building FoodRo at Snappfood
          </div>
        </div>

        <div className="relative order-first justify-self-center md:order-last">
          <div className="bg-portrait-ring relative mx-auto h-[200px] w-[200px] rounded-full p-2 md:h-[280px] md:w-[280px]">
            <Image
              src="/portrait.jpg"
              alt="Portrait of Pouya Mashhadi Mohammad Reza"
              width={512}
              height={512}
              priority
              className="h-full w-full rounded-full border-[5px] border-ink object-cover [filter:saturate(0.92)_contrast(1.03)]"
            />
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 rounded-full border border-paper/12 bg-ink-deep px-3.5 py-1.5 font-mono text-[0.7rem] tracking-[0.08em] whitespace-nowrap text-paper">
              HELLO! THIS IS ME!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
