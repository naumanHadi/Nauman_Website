"use client";

import { useState } from "react";
import { aiStack } from "@/lib/content";

export function AiStackExplorer() {
  const [active, setActive] = useState(aiStack[0].id);
  const current = aiStack.find((l) => l.id === active) ?? aiStack[0];
  const activeIndex = aiStack.findIndex((l) => l.id === active);

  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr]">
      {/* Stack column */}
      <div className="flex flex-col gap-2">
        {aiStack.map((layer, i) => {
          const isActive = layer.id === active;
          return (
            <button
              key={layer.id}
              type="button"
              onMouseEnter={() => setActive(layer.id)}
              onFocus={() => setActive(layer.id)}
              onClick={() => setActive(layer.id)}
              aria-pressed={isActive}
              className={`group relative overflow-hidden rounded-xl border px-4 py-3 text-left transition ${
                isActive
                  ? "border-white/25 bg-white/10"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/5"
              }`}
            >
              <div
                className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-purple-400 to-cyan-300 transition-opacity"
                style={{ opacity: isActive ? 1 : 0.15 }}
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-slate-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      isActive ? "text-white" : "text-slate-200"
                    }`}
                  >
                    {layer.name}
                  </span>
                </div>
                <span
                  className={`text-xs transition ${
                    isActive ? "text-cyan-200" : "text-slate-500"
                  }`}
                >
                  {isActive ? "●" : "○"}
                </span>
              </div>
              <p className="mt-1 pl-8 text-xs text-slate-400">{layer.summary}</p>
            </button>
          );
        })}
      </div>

      {/* Detail column */}
      <div className="glass card-border rounded-2xl p-6 sm:p-8">
        <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
          Layer {String(activeIndex + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-1 text-2xl font-semibold text-white">
          {current.name}
        </h3>
        <p className="mt-1 text-slate-300">{current.summary}</p>
        <ul className="mt-5 space-y-3">
          {current.detail.map((d) => (
            <li key={d} className="flex gap-3 text-slate-300">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
