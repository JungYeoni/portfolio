import type { Metadata } from "next";
import { projects } from "@/data/portfolio";
import { ExtLink, Section } from "../_components/ui";

export const metadata: Metadata = {
  title: "이정연 | 포트폴리오",
  description: "데이터 분석·모델링·AI 서비스 프로젝트와 직접 맡은 작업을 소개합니다.",
};

export default function Portfolio() {
  return (
    <div className="min-h-full bg-background text-foreground">
      <main id="top" className="mx-auto max-w-5xl px-6 pb-16">
        <h1 className="sr-only">이정연 포트폴리오</h1>
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
                <p className="mt-2 text-base text-muted">{p.period} · {p.role}</p>
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
      </main>
    </div>
  );
}
