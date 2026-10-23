import Image from "next/image";
import { activities, awards, featured, others, profile, skills } from "@/data/portfolio";
import { ThemeToggle } from "./_components/theme-toggle";
import { ExtLink } from "./_components/ui";

const NAV = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "activity", label: "Activity" },
  { id: "awards", label: "Awards" },
];

export default function Home() {
  return (
    <div className="min-h-full bg-background text-foreground">
      <nav className="sticky top-0 z-10 border-b border-line bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-3">
          <a href="#top" className="hidden shrink-0 font-bold sm:block">
            🦦 {profile.nameKo}
          </a>
          <ul className="flex flex-1 gap-4 overflow-x-auto text-sm text-muted sm:justify-end">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="hover:text-foreground">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>

      <main id="top" className="mx-auto max-w-5xl px-6 py-16">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm text-muted">
              🦦 {profile.nameKo} · {profile.nameEn}
            </p>
            <h1 className="mt-3 max-w-xl text-4xl leading-tight font-black">{profile.tagline}</h1>
          </div>
          <div className="flex gap-4 text-sm text-muted">
            {profile.links.map((l) => (
              <ExtLink key={l.label} {...l} />
            ))}
          </div>
        </header>

        <Section id="about" title="About">
          <div className="rounded-xl bg-card p-6 leading-8 text-muted">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-3">
            {featured.map((p) => (
              <article key={p.title} className="grid gap-6 rounded-xl bg-card p-6 sm:grid-cols-[1fr_200px]">
                <div>
                  <div className="flex flex-wrap gap-2">
                    {p.category.map((c) => (
                      <span key={c} className="rounded-full border border-line px-2 py-0.5 text-xs text-muted">
                        {c}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-3 text-2xl font-bold">{p.title}</h3>
                  <p className="text-xs text-muted">
                    {p.period} · {p.role}
                  </p>
                  <p className="mt-4">{p.question}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {p.data} → {p.method}
                  </p>
                  <p className="mt-2 text-sm leading-7">
                    <span className="text-accent">▲ </span>
                    {p.insight}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted">
                    <span>{p.stack.join(" · ")}</span>
                    {p.links.map((l) => (
                      <ExtLink key={l.label} {...l} />
                    ))}
                  </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-card-strong">
                  {p.image ? (
                    <Image src={p.image.src} alt={p.image.alt} fill sizes="200px" className="object-cover" />
                  ) : (
                    <p className="flex h-full items-center justify-center text-xs text-muted">이미지 준비 중</p>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {others.map((o) => (
              <div key={o.title} className="rounded-xl border border-line p-4 text-sm">
                <p className="font-bold">{o.title}</p>
                <p className="mt-1 text-xs text-muted">
                  {o.category} · {o.period}
                </p>
                {o.note && <p className="mt-2 text-xs text-accent">{o.note}</p>}
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {skills.map((s) => (
              <div key={s.group} className="rounded-xl bg-card p-5">
                <p className="text-xs tracking-wider text-muted uppercase">{s.group}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span key={i} className="rounded-md bg-card-strong px-2 py-1 text-xs">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="activity" title="Activity">
          <ul className="grid gap-2 rounded-xl bg-card p-5 text-sm">
            {activities.map((a) => (
              <li key={a.title} className="flex justify-between gap-4">
                <span>
                  {a.title} <span className="text-xs text-muted">· {a.role}</span>
                </span>
                <span className="shrink-0 text-xs text-muted">{a.period}</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="awards" title="Awards">
          <div className="grid gap-3 sm:grid-cols-2">
            {awards.map((a) => (
              <div key={a.title} className="flex items-center justify-between gap-4 rounded-xl bg-card p-5 text-sm">
                <span>🏆 {a.title}</span>
                <span className="text-xs text-muted">{a.year}</span>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-14 scroll-mt-20">
      <h2 className="mb-4 text-sm font-bold tracking-widest text-muted uppercase">{title}</h2>
      {children}
    </section>
  );
}
