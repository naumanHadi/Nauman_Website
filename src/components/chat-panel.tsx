"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";

type Role = "user" | "assistant";
type Message = { id: string; role: Role; content: string };

const createId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

const starterMessage: Message = {
  id: "intro",
  role: "assistant",
  content:
    "I’m Nauman’s digital twin. Ask about enterprise AI delivery, network modernization, or how I drive products from discovery to production.",
};

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([starterMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const textareaId = useId();
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = logRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;
    setError(null);

    const userMessage: Message = {
      id: createId(),
      role: "user",
      content: trimmed,
    };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Request failed");
      }
      const data = await res.json();
      const reply = data?.reply as { role?: Role; content?: string } | undefined;
      if (!reply?.content) throw new Error("No reply received");
      setMessages((prev) => [
        ...prev,
        { id: createId(), role: "assistant", content: reply.content! },
      ]);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
      // Roll back the failed turn and give the user their text back to retry.
      setMessages((prev) => prev.filter((m) => m.id !== userMessage.id));
      setInput(trimmed);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([starterMessage]);
    setInput("");
    setError(null);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const canReset = messages.length > 1 || input.length > 0 || error !== null;

  return (
    <div className="glass card-border relative flex h-full flex-col rounded-2xl p-6 sm:p-7">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
            Digital twin
          </p>
          <h3 className="text-xl font-semibold text-white">Ask about my work</h3>
          <p className="mt-1 text-sm text-slate-300">
            Quick, executive answers grounded in my profile.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {canReset && (
            <button
              type="button"
              onClick={clearChat}
              className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/5"
            >
              Clear
            </button>
          )}
          <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-semibold text-slate-200">
            Context-aware
          </span>
        </div>
      </div>

      <div
        ref={logRef}
        role="log"
        aria-live="polite"
        aria-busy={loading}
        className="mt-5 max-h-[420px] min-h-[220px] flex-1 space-y-3 overflow-y-auto rounded-xl border border-white/10 bg-white/5 p-4"
      >
        {messages.map((m) => (
          <div
            key={m.id}
            className={`rounded-lg px-3 py-2 text-sm leading-relaxed ${
              m.role === "assistant"
                ? "bg-white/5 text-slate-100"
                : "bg-purple-500/15 text-white"
            }`}
          >
            {m.content}
          </div>
        ))}
        {loading && <div className="text-sm text-slate-300">Thinking…</div>}
        {error && (
          <div className="rounded-md border border-red-400/40 bg-red-500/10 px-3 py-2 text-sm text-red-100">
            {error}
          </div>
        )}
      </div>

      <div className="mt-4 space-y-2">
        <label htmlFor={textareaId} className="sr-only">
          Ask Nauman’s digital twin a question
        </label>
        <textarea
          id={textareaId}
          className="h-24 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white placeholder:text-slate-400 focus:border-white/30 focus:outline-none"
          placeholder="Ask about enterprise AI delivery, network modernization, or how I run programs..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-slate-400">
            Enter to send • Shift+Enter for a new line
          </p>
          <button
            type="button"
            onClick={sendMessage}
            disabled={loading || input.trim().length === 0}
            aria-busy={loading}
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 shadow-lg shadow-purple-500/20 transition hover:-translate-y-0.5 hover:shadow-purple-500/30 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sending…" : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
}
