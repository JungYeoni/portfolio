export function ExtLink({ href, label, className = "" }: { href: string; label: string; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`hover:underline ${className}`}>
      {label} ↗
    </a>
  );
}

export function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-24 scroll-mt-24">
      <h2 className="mb-8 text-[32px] font-black tracking-tight text-foreground uppercase sm:text-5xl md:text-6xl">{title}</h2>
      {children}
    </section>
  );
}
