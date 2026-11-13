import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/cv", label: "CV" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl tracking-wide text-gold">
          {site.name}
        </Link>
        <nav className="flex gap-6 text-sm uppercase tracking-[0.18em] text-muted">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-gold">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
