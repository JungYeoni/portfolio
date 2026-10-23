export function ExtLink({ href, label, className = "" }: { href: string; label: string; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={`hover:underline ${className}`}>
      {label} ↗
    </a>
  );
}
