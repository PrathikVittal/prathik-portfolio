"use client";

import { useMemo, useState } from "react";
import GlassCard from "@/components/GlassCard";

type Msg = { role: "user" | "ai"; text: string };

export default function ChatbotDemo() {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [msgs, setMsgs] = useState<Msg[]>([
        { role: "ai", text: "Hi! I’m a fake AI demo. Ask me anything — I respond instantly (no API keys)." },
    ]);

    const suggestions = useMemo(
        () => [
            "Summarize my experience in 2 lines",
            "Give me a project idea using Kafka + Docker",
            "Write a short LinkedIn bio for me",
            "Generate a sample REST API design for voting",
        ],
        []
    );

    async function send(text: string) {
        const trimmed = text.trim();
        if (!trimmed || loading) return;

        setMsgs((m) => [...m, { role: "user", text: trimmed }]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("/api/demo/chatbot", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ prompt: trimmed }),
            });
            const data = await res.json();
            setMsgs((m) => [...m, { role: "ai", text: data.reply }]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="grid gap-4 lg:grid-cols-[1fr_0.45fr]">
            <GlassCard>
                <h2 className="text-sm font-semibold">Chatbot Demo (Fake AI)</h2>

                <div className="mt-4 h-[360px] overflow-auto rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="space-y-3">
                        {msgs.map((m, idx) => (
                            <div
                                key={idx}
                                className={`max-w-[92%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${m.role === "user"
                                    ? "ml-auto bg-white text-zinc-900"
                                    : "bg-white/10 text-white"
                                    }`}
                            >
                                <pre className="whitespace-pre-wrap font-sans">{m.text}</pre>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-4 flex gap-2">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message..."
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-white/20"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") send(input);
                        }}
                    />
                    <button
                        onClick={() => send(input)}
                        disabled={loading}
                        className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-zinc-900 disabled:opacity-60"
                    >
                        {loading ? "..." : "Send"}
                    </button>
                </div>
            </GlassCard>

            <GlassCard>
                <h3 className="text-sm font-semibold">Try these</h3>
                <div className="mt-4 grid gap-2">
                    {suggestions.map((s) => (
                        <button
                            key={s}
                            onClick={() => send(s)}
                            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-white/85 hover:bg-white/10"
                        >
                            {s}
                        </button>
                    ))}
                </div>

                <p className="mt-4 text-xs text-white/60">
                    Later, we can replace this API with your real MERN/OpenAI backend without changing the UI.
                </p>
            </GlassCard>
        </div>
    );
}
