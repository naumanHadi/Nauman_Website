import type { Metadata } from "next";
import { ChatPanel } from "@/components/chat-panel";
import { BackgroundDecor, Container, PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Digital Twin | Nauman Hadi",
  description:
    "Ask Nauman Hadi's digital twin about his career, enterprise AI, multi-agent systems, Realty.ai, entrepreneurship, and investing.",
  alternates: { canonical: "/digital-twin" },
};

const prompts = [
  "What's your experience across the AI stack?",
  "Tell me about Naavik and its impact.",
  "What is Realty.ai and who is it for?",
  "What did you learn building Float Fleet?",
  "How do you think about options and risk?",
];

export default function DigitalTwinPage() {
  return (
    <main className="relative">
      <BackgroundDecor />
      <Container className="flex flex-col gap-10 pb-10 pt-16">
        <PageHeader
          eyebrow="Digital Twin"
          title="Ask me anything."
          intro="An interactive twin grounded in my résumé and profile — spanning career, AI & product, Realty.ai, entrepreneurship, and investing."
        />

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="glass card-border flex h-fit flex-col gap-4 rounded-2xl p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
              Try asking
            </p>
            <ul className="space-y-2">
              {prompts.map((p) => (
                <li
                  key={p}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"
                >
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-slate-500">
              Career answers are grounded in the résumé. Investing content is
              educational only and not financial advice.
            </p>
          </div>

          <div className="min-h-[520px]">
            <ChatPanel />
          </div>
        </div>
      </Container>
    </main>
  );
}
