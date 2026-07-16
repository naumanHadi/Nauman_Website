import Link from "next/link";
import { nav, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <p className="text-lg font-semibold text-white">{site.name}</p>
            <p className="mt-2 text-sm text-slate-400">{site.role}</p>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-slate-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-2 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="text-slate-300 transition hover:text-white"
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 transition hover:text-white"
            >
              LinkedIn ↗
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 transition hover:text-white"
            >
              Instagram ↗
            </a>
            <a
              href={site.resume}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 transition hover:text-white"
            >
              Résumé ↗
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {site.location}.
          </p>
          <p>Built with Next.js · Deployed on Vercel</p>
        </div>
      </div>
    </footer>
  );
}
