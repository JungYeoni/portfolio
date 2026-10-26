"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

export function SiteNav({ name }: { name: string }) {
  const pathname = usePathname();

  return (
    <nav aria-label="주 메뉴" className="sticky top-0 z-10 border-b border-line bg-background/90 backdrop-blur">
      <div className="flex w-full flex-wrap items-center justify-between gap-x-2 gap-y-1 px-3 py-4 sm:gap-3 sm:px-6 sm:py-5 lg:px-10">
        <Link href="/" className="shrink-0 text-xl font-black tracking-tight sm:text-3xl md:text-4xl">
          {name}
        </Link>
        <div className="flex items-center gap-2 sm:gap-8">
          {[
            { href: "/portfolio", label: "portfolio" },
            { href: "/", label: "about" },
          ].map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`pb-1 text-base font-bold sm:text-2xl ${active ? "text-foreground underline decoration-wavy decoration-2 decoration-accent underline-offset-[10px]" : "text-muted hover:text-foreground"}`}
              >
                {item.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
