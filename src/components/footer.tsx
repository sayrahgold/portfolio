import { cacheLife } from "next/cache";
import { site } from "@/lib/site";

export async function Footer() {
  "use cache";
  cacheLife("days");
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <div className="flex gap-5">
          <a href={`mailto:${site.email}`} className="hover:text-gold">Email</a>
          <a href={site.links.linkedin} className="hover:text-gold">LinkedIn</a>
          <a href={site.links.upwork} className="hover:text-gold">Upwork</a>
        </div>
      </div>
    </footer>
  );
}
