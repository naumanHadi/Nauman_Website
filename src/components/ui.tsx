import type { ReactNode } from "react";

export function BackgroundDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="background-grid" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-blue-500/16 blur-3xl" />
    </div>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <span className="w-fit rounded-full accent-pill px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-300">
        {eyebrow}
      </span>
      <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
        {title}
      </h1>
      {intro && <p className="max-w-3xl text-lg text-slate-300">{intro}</p>}
    </div>
  );
}

export function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`glass card-border rounded-2xl p-6 sm:p-8 ${className}`}>
      {children}
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  chip,
}: {
  eyebrow: string;
  title: string;
  chip?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">
          {title}
        </h2>
      </div>
      {chip && (
        <span className="hidden rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-200 sm:inline">
          {chip}
        </span>
      )}
    </div>
  );
}

export function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-2 text-slate-300">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
      <span>{children}</span>
    </li>
  );
}
