import { skillCategories } from "@/lib/data";
import LegendIcon from "./LegendIcon";
import Chip from "./Chip";

export default function Stack() {
  return (
    <section id="stack" className="border-b border-paper/12 py-24">
      <div className="mx-auto max-w-[1120px] px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="font-mono text-[0.74rem] tracking-[0.16em] text-teal uppercase">
              Legend
            </span>
            <h2 className="mt-2 font-display text-[clamp(1.8rem,3vw,2.5rem)] font-medium text-paper">
              What I build with
            </h2>
          </div>
          <p className="max-w-[36ch] text-[0.95rem] text-ink-soft sm:text-right">
            Five categories, read like a map key — the tools, not the destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-paper/12 bg-paper/12 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="bg-panel p-7">
              <LegendIcon type={cat.icon} />
              <h3 className="font-body text-[1.05rem] font-semibold text-paper">{cat.name}</h3>
              <div className="mt-1 font-mono text-[0.7rem] tracking-[0.1em] text-ink-faint uppercase">
                {cat.sub}
              </div>
              <div className="mt-[18px] flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Chip key={skill}>{skill}</Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
