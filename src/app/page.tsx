import { activities, certifications, competitions, profile, projects } from "@/data/portfolio";
import { ThemeToggle } from "./_components/theme-toggle";
import { ExtLink } from "./_components/ui";

const NAV = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "activity", label: "Activity" },
  { id: "certification", label: "Certification" },
];

export default function Home() {
  return (
    <div className="min-h-full bg-background text-foreground">
      <nav className="sticky top-0 z-10 border-b border-line bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-3">
          <a href="#top" className="hidden shrink-0 font-bold sm:block">
            🦦 {profile.nameKo}
          </a>
          <ul className="flex flex-1 gap-4 overflow-x-auto text-base text-muted sm:justify-end">
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
            <p className="text-base text-muted">
              🦦 {profile.nameKo} · {profile.nameEn}
            </p>
            <h1 className="mt-3 max-w-xl text-4xl leading-tight font-black">{profile.tagline}</h1>
          </div>
          <div className="flex gap-4 text-base text-muted">
            {profile.links.map((l) => (
              <ExtLink key={l.label} {...l} />
            ))}
          </div>
        </header>

        <Section id="about" title="About">
          <div className="space-y-4 rounded-xl bg-card p-6 leading-8 text-muted">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-10">
            {projects.map((p, index) => (
              <article key={p.title} className="border-b border-line pb-10 last:border-0 last:pb-0">
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                  <span className="mr-2 font-bold text-accent">{String(index + 1).padStart(2, "0")}</span>
                  {(Array.isArray(p.category) ? p.category : [p.category]).map((c) => (
                    <span key={c} className="rounded-full border border-line px-2 py-0.5">
                      {c}
                    </span>
                  ))}
                </div>
                <h3 className="mt-4 text-2xl font-bold sm:text-4xl">{p.title}</h3>
                <p className="mt-2 text-base text-muted">{p.period}{"role" in p && ` · ${p.role}`}</p>
                {"stories" in p ? (
                  <>
                    <p className="mt-5 max-w-3xl leading-8">{p.summary}</p>
                    <div className="mt-7 grid gap-7 border-t border-line pt-7">
                      {p.stories.map((story) => (
                        <div key={story.title}>
                          <h4 className="text-xl font-semibold">{story.title}</h4>
                          <div className="mt-3 grid gap-4">
                            {story.paragraphs.map((paragraph) => (
                              <p key={paragraph} className="max-w-3xl text-base leading-8 text-muted">{paragraph}</p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="mt-5 grid gap-4">
                    {p.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="max-w-3xl text-base leading-8 text-muted">{paragraph}</p>
                    ))}
                  </div>
                )}
                <div className="mt-7 border-t border-line pt-5">
                  <p className="text-xs font-semibold tracking-wider text-muted uppercase">직접 사용한 기술</p>
                  <p className="mt-2 text-base text-muted">{p.stack.join(" · ")}</p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-base">
                    {"links" in p ? p.links.map((l) => <ExtLink key={l.label} {...l} />) : <ExtLink href={p.href} label="GitHub" />}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="activity" title="Activity">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 font-semibold">대회·공모전</h3>
              <ul className="grid gap-2 rounded-xl bg-card p-5 text-base">
                {competitions.map((a) => (
                  <li key={a.title} className="border-b border-line pb-3 last:border-0 last:pb-0">
                    <div className="flex justify-between gap-3">
                      <span className="font-medium">{a.title}</span>
                      <span className="shrink-0 text-xs text-muted">{a.period}</span>
                    </div>
                    <p className="mt-1 text-xs text-muted">{a.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold">동아리</h3>
              <ul className="grid gap-2 rounded-xl bg-card p-5 text-base">
                {activities.map((a) => (
                  <li key={a.title} className="border-b border-line pb-3 last:border-0 last:pb-0">
                    <div className="flex justify-between gap-3">
                      <span className="font-medium">{a.title}</span>
                      <span className="shrink-0 text-xs text-muted">{a.period}</span>
                    </div>
                    <p className="mt-1 text-xs text-muted">{a.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="certification" title="Certification">
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {certifications.map((c) => (
              <div key={c.title} className="border-t border-line pt-6">
                <h3 className="text-base font-semibold">{c.title}</h3>
                <p className="mt-4 text-base text-muted">취득일 · {c.date}</p>
                <p className="mt-2 text-base text-muted">자격증 번호 · {c.number}</p>
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
    <section id={id} className="mt-24 scroll-mt-24">
      <h2 className="mb-8 text-[32px] font-black tracking-tight text-foreground uppercase sm:text-5xl md:text-6xl">{title}</h2>
      {children}
    </section>
  );
}
