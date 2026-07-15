"use client";

import React, { useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

const starterMessage: Message = {
  role: "assistant",
  content:
    "I’m Nauman’s digital twin. Ask about enterprise AI delivery, network modernization, or how I drive products from discovery to production.",
};

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([starterMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;
    setError(null);
    const nextMessages = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Request failed");
      }
      const data = await res.json();
      const reply: Message | undefined = data?.reply;
      if (!reply) throw new Error("No reply received");
      setMessages((prev) => [...prev, reply]);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
      setMessages((prev) => prev.slice(0, -1)); // remove the pending user message if failure
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="glass card-border relative flex h-full flex-col rounded-2xl p-6 sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
            Digital twin
          </p>
          <h3 className="text-xl font-semibold text-white">
            Ask about my work
          </h3>
          <p className="mt-1 text-sm text-slate-300">
            Quick, executive answers grounded in my profile.
          </p>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold text-slate-200">
          Context-aware
        </span>
      </div>

      <div className="mt-5 flex-1 space-y-3 overflow-y-auto rounded-xl border border-white/10 bg-white/5 p-4">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`rounded-lg px-3 py-2 text-sm leading-relaxed ${
              m.role === "assistant"
                ? "bg-white/5 text-slate-100"
                : "bg-purple-500/15 text-white"
            }`}
          >
            {m.content}
          </div>
        ))}
        {loading && (
          <div className="text-sm text-slate-300">Thinking…</div>
        )}
        {error && (
          <div className="rounded-md border border-red-400/40 bg-red-500/10 px-3 py-2 text-sm text-red-100">
            {error}
          </div>
        )}
      </div>

      <div className="mt-4 space-y-2">
        <textarea
          className="h-24 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white placeholder:text-slate-400 focus:border-white/30 focus:outline-none"
          placeholder="Ask about enterprise AI delivery, network modernization, or how I run programs..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-slate-400">
            Enter to send • Shift+Enter for a new line
          </p>
          <button
            onClick={sendMessage}
            disabled={loading}
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow-lg shadow-purple-500/20 transition hover:-translate-y-0.5 hover:shadow-purple-500/30 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending…" : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
