"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { waypoints, type Waypoint } from "@/lib/data";

// Avoids a React warning during server rendering, since useLayoutEffect
// only makes sense once we're actually in the browser.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Cards are visible by default (no JS required). Where IntersectionObserver
 * is available, we briefly hide off-screen cards *before paint* and reveal
 * them with a fade-up as they scroll into view. If anything goes wrong,
 * the content simply stays visible — this never hides content permanently.
 */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [hidden, setHidden] = useState(false);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight - 60;
    if (alreadyVisible) return;

    setHidden(true);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHidden(false);
          io.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, hidden };
}

function WaypointCard({ wp }: { wp: Waypoint }) {
  const { ref, hidden } = useReveal<HTMLElement>();

  const pinClasses =
    wp.variant === "current"
      ? "border-amber bg-amber text-ink-deep"
      : wp.variant === "origin"
        ? "border-teal bg-ink-deep text-teal"
        : "border-amber bg-ink-deep text-amber";

  return (
    <article
      ref={ref}
      className={`relative mb-14 pl-16 transition-all duration-600 ease-out last:mb-0 ${
        hidden ? "translate-y-[18px] opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div
        className={`absolute top-0.5 left-0 flex h-11 w-11 items-center justify-center rounded-full border-2 font-mono text-[0.78rem] ${pinClasses}`}
      >
        {wp.index}
      </div>

      <div className="rounded-2xl border border-paper/12 bg-panel p-7 transition-all hover:-translate-y-[3px] hover:border-teal sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="font-display text-[1.4rem] font-medium text-paper">{wp.role}</div>
            <div className="mt-1 text-[0.98rem] text-teal">{wp.org}</div>
          </div>
          <div className="text-right font-mono text-[0.74rem] tracking-[0.05em] whitespace-nowrap text-ink-faint uppercase">
            {wp.when}
            <br />
            {wp.location}
          </div>
        </div>

        {wp.tag && (
          <span className="mt-1.5 inline-block rounded-full border border-amber/16 bg-amber/16 px-2.5 py-1 font-mono text-[0.66rem] tracking-[0.1em] text-amber uppercase">
            {wp.tag}
          </span>
        )}

        {wp.bullets && (
          <ul className="mt-5 grid gap-2.5">
            {wp.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3 text-[0.95rem] leading-[1.55] text-ink-soft">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-teal" />
                {bullet}
              </li>
            ))}
          </ul>
        )}

        {wp.stats && (
          <div className="mt-[18px] flex flex-wrap gap-7 font-mono">
            {wp.stats.map((stat) => (
              <div key={stat.label}>
                <span className="block text-2xl text-amber">{stat.num}</span>
                <span className="text-[0.68rem] tracking-[0.1em] text-ink-faint uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function JourneyRoute() {
  return (
    <section id="route" className="border-b border-paper/12 py-24">
      <div className="mx-auto max-w-[1120px] px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="font-mono text-[0.74rem] tracking-[0.16em] text-teal uppercase">
              Route, 2015 → Present
            </span>
            <h2 className="mt-2 font-display text-[clamp(1.8rem,3vw,2.5rem)] font-medium text-paper">
              The journey so far
            </h2>
          </div>
          <p className="max-w-[36ch] text-[0.95rem] text-ink-soft sm:text-right">
            Three waypoints: one internship, two product teams.
          </p>
        </div>

        <div className="relative mt-2.5">
          <div className="bg-route-dashes absolute top-2.5 bottom-2.5 left-[21px] w-0.5" />
          {waypoints.map((wp) => (
            <WaypointCard key={wp.id} wp={wp} />
          ))}
        </div>
      </div>
    </section>
  );
}
