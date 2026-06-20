import { languages, workingStyle, interests } from "@/lib/data";
import Chip from "./Chip";

export default function FieldNotes() {
  return (
    <section id="notes" className="border-b border-paper/12 py-24">
      <div className="mx-auto max-w-[1120px] px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="font-mono text-[0.74rem] tracking-[0.16em] text-teal uppercase">
              Field Notes
            </span>
            <h2 className="mt-2 font-display text-[clamp(1.8rem,3vw,2.5rem)] font-medium text-paper">
              Beyond the stack
            </h2>
          </div>
          <p className="max-w-[36ch] text-[0.95rem] text-ink-soft sm:text-right">
            Languages, working style, and what fills the hours off-screen.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-5 font-mono text-[0.78rem] tracking-[0.12em] text-ink-faint uppercase">
              Languages
            </h3>
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="mb-4 grid grid-cols-[100px_1fr_auto] items-center gap-3.5 font-mono text-[0.85rem]"
              >
                <span>{lang.name}</span>
                <div className="flex gap-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <span
                      key={i}
                      className={`h-2 flex-1 rounded-sm ${
                        i < lang.bars ? "bg-teal" : "bg-paper/12"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[0.72rem] tracking-[0.06em] whitespace-nowrap text-ink-faint uppercase">
                  {lang.level}
                </span>
              </div>
            ))}

            <h3 className="mt-10 mb-5 font-mono text-[0.78rem] tracking-[0.12em] text-ink-faint uppercase">
              Working Style
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {workingStyle.map((skill) => (
                <Chip key={skill}>{skill}</Chip>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-mono text-[0.78rem] tracking-[0.12em] text-ink-faint uppercase">
              Off the Clock
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {interests.map((interest) => (
                <Chip key={interest}>{interest}</Chip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
