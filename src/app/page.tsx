import type { Metadata } from "next";
import Link from "next/link";
import { activities, certifications, competitions, experience, profile, projects } from "@/data/portfolio";
import { ExtLink, Section } from "./_components/ui";

export const metadata: Metadata = {
  title: "이정연 | 소개",
  description: profile.tagline,
};

export default function Home() {
  return (
    <div className="min-h-full bg-background text-foreground">
      <main id="top" className="mx-auto max-w-5xl px-6 py-16">
        <header>
          <div>
            <p className="text-base text-muted">🦦 {profile.nameKo} · {profile.nameEn}</p>
            <h1 className="mt-3 max-w-xl text-4xl leading-tight font-black">{profile.tagline}</h1>
          </div>
        </header>

        <nav aria-label="소개 페이지 목차" className="mt-12 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          <a href="#about" className="hover:text-foreground hover:underline">소개</a>
          <a href="#experience" className="hover:text-foreground hover:underline">경력</a>
          <a href="#projects" className="hover:text-foreground hover:underline">프로젝트</a>
          <a href="#activity" className="hover:text-foreground hover:underline">활동</a>
          <a href="#certification" className="hover:text-foreground hover:underline">자격증</a>
        </nav>

        <Section id="about" title="About">
          <div className="max-w-3xl rounded-xl bg-card p-6">
            <p className="leading-8 text-muted">{profile.shortAbout}</p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-5 text-base text-muted">
              {profile.links.map((link) => <ExtLink key={link.label} {...link} />)}
              <Link href="/portfolio" className="font-semibold text-foreground hover:underline">포트폴리오 보기 ↗</Link>
            </div>
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="grid gap-8">
            {experience.map((item) => (
              <article key={item.organization} className="grid gap-2 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-12">
                <p className="pt-1 text-sm font-medium text-muted md:text-base">{item.period}</p>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold md:text-xl">{item.organization}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <div className="grid gap-10">
            {projects.map((project) => (
              <article key={project.title} className="grid gap-2 md:grid-cols-[12rem_minmax(0,1fr)] md:gap-12">
                <p className="pt-1 text-lg font-semibold text-muted">{project.period}</p>
                <div className="min-w-0">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed">
                    {project.shortDescription}
                    <span className="text-muted"> · {project.role}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
          <Link href="/portfolio" className="mt-12 inline-block text-lg text-muted hover:text-foreground hover:underline">
            자세한 이야기는 포트폴리오에 ↗
          </Link>
        </Section>

        <Section id="activity" title="Activities">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="mb-3 font-semibold">대회·공모전</h3>
              <ul className="grid gap-2 rounded-xl bg-card p-5 text-base">
                {competitions.map((item) => (
                  <li key={item.title} className="border-b border-line pb-3 last:border-0 last:pb-0">
                    <div className="flex justify-between gap-3">
                      <span className="font-medium">
                        {item.title}
                        {item.award && <span className="ml-2 font-bold text-sky-600 dark:text-sky-400">{item.award}</span>}
                      </span>
                      <span className="shrink-0 text-xs text-muted">{item.period}</span>
                    </div>
                    {item.detail && <p className="mt-1 text-xs text-muted">{item.detail}</p>}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-semibold">동아리</h3>
              <ul className="grid gap-2 rounded-xl bg-card p-5 text-base">
                {activities.map((item) => (
                  <li key={item.title} className="border-b border-line pb-3 last:border-0 last:pb-0">
                    <div className="flex justify-between gap-3">
                      <span className="font-medium">{item.title}</span>
                      <span className="shrink-0 text-xs text-muted">{item.period}</span>
                    </div>
                    <p className="mt-1 text-xs text-muted">{item.role}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="certification" title="Certification">
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {certifications.map((item) => (
              <div key={item.title} className="border-t border-line pt-6">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-4 text-base text-muted">취득일 · {item.date}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
