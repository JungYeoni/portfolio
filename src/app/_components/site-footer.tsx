import Link from "next/link";
import { profile } from "@/data/portfolio";

const COPYRIGHT_YEAR = 2026;
const linkClass = "text-muted hover:text-foreground hover:underline";

export function SiteFooter({ name }: { name: string }) {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-4 px-3 py-8 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <Link href="/" className="text-2xl font-black tracking-tight sm:text-3xl">
            {name}
            <span className="text-accent">.</span>
          </Link>
          <small className="text-base text-muted">
            © {COPYRIGHT_YEAR} {profile.nameKo}
          </small>
        </div>
        <nav aria-label="푸터 메뉴">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-base lowercase sm:gap-x-8 sm:text-xl">
            <li><Link href="/" className={linkClass}>about</Link></li>
            <li><Link href="/portfolio" className={linkClass}>portfolio</Link></li>
            {profile.links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noreferrer" })}
                  className={linkClass}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
