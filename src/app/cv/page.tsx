import type { Metadata } from "next";
import { site } from "@/lib/site";
import { experience, skills } from "@/lib/cv";

export const metadata: Metadata = { title: "CV" };

export default function CVPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <header className="border-b border-border pb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">Curriculum Vitae</p>
        <h1 className="mt-4 font-display text-5xl">{site.name}</h1>
        <p className="mt-3 text-lg text-muted">
          {site.role} · {site.location}
        </p>
      </header>

      <section className="py-12">
        <h2 className="mb-8 font-display text-3xl text-gold">Experience</h2>
        <ol className="space-y-10 border-l border-gold/40 pl-8">
          {experience.map((role) => (
            <li key={`${role.company}-${role.title}`} className="relative">
              <span className="absolute -left-[2.35rem] top-2 h-3 w-3 rounded-full bg-gold" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">{role.title}</h3>
                {role.period && <span className="text-sm text-gold">{role.period}</span>}
              </div>
              <p className="text-muted">
                {role.company}
                {role.location ? ` · ${role.location}` : ""}
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-foreground/90 marker:text-gold">
                {role.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-border pt-12">
        <h2 className="mb-6 font-display text-3xl text-gold">Skills</h2>
        <ul className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <li key={s} className="rounded-full border border-border bg-surface px-4 py-2 text-sm">
              {s}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
