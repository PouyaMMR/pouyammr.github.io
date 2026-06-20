"use client";

import { useSyncExternalStore } from "react";
import { contactCoords } from "@/lib/data";

function formatTehranTime(): string {
  try {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Tehran",
      hour: "2-digit",
      minute: "2-digit",
      weekday: "short",
      day: "2-digit",
      month: "short",
    });
    return `${fmt.format(new Date())} — Tehran local time`;
  } catch {
    return "Tehran, Iran";
  }
}

function subscribeToClock(callback: () => void) {
  const id = setInterval(callback, 30_000);
  return () => clearInterval(id);
}

function getServerSnapshot() {
  // Rendered on the server and during the first client pass, before we know
  // the visitor's clock is even reachable — avoids a hydration mismatch.
  return "Loading Tehran time…";
}

export default function Contact() {
  const time = useSyncExternalStore(subscribeToClock, formatTehranTime, getServerSnapshot);

  return (
    <footer id="contact" className="py-20 pb-12">
      <div className="mx-auto max-w-[1120px] px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr]">
          <div>
            <span className="font-mono text-[0.74rem] tracking-[0.16em] text-teal uppercase">
              Coordinates
            </span>
            <h2 className="mt-2 max-w-[14ch] font-display text-[clamp(1.9rem,4vw,3rem)] font-medium text-paper">
              Let&apos;s build the next waypoint.
            </h2>
            <p className="mt-[18px] max-w-[42ch] text-ink-soft">
              Open to full-time front-end and full-stack roles. The fastest way to
              reach me is email — I read everything.
            </p>
            <div className="mt-[26px] flex items-center gap-2.5 font-mono text-[0.78rem] text-ink-faint">
              <span className="h-2 w-2 rounded-full bg-teal" />
              <span>{time}</span>
            </div>
          </div>

          <div className="grid gap-[18px]">
            {contactCoords.map((item) =>
              item.href ? (
                <a
                  key={item.key}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener" : undefined}
                  className="flex items-center justify-between border-b border-paper/12 pb-3.5 text-paper transition-colors hover:text-amber"
                >
                  <span className="font-mono text-[0.7rem] tracking-[0.1em] text-ink-faint uppercase">
                    {item.key}
                  </span>
                  <span className="font-mono text-[0.92rem]">{item.value}</span>
                </a>
              ) : (
                <div
                  key={item.key}
                  className="flex items-center justify-between border-b border-paper/12 pb-3.5"
                >
                  <span className="font-mono text-[0.7rem] tracking-[0.1em] text-ink-faint uppercase">
                    {item.key}
                  </span>
                  <span className="font-mono text-[0.92rem] text-paper">{item.value}</span>
                </div>
              )
            )}
          </div>
        </div>

        <div className="mt-[70px] flex flex-wrap justify-between gap-2.5 border-t border-paper/12 pt-6 font-mono text-[0.72rem] text-ink-faint">
          <span>POUYA MASHHADI MOHAMMAD REZA</span>
          <span>FRONT-END DEVELOPER · 35.6892° N, 51.3890° E</span>
        </div>
      </div>
    </footer>
  );
}
