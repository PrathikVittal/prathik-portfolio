"use client";

import { useState } from "react";
import GlassCard from "@/components/GlassCard";

type Mode = "loggedOut" | "loggedIn";

export default function AssistantDemo() {
    const [mode, setMode] = useState<Mode>("loggedOut");
    const [emailPrompt, setEmailPrompt] = useState("Write a polite email asking for a meeting next week.");
    const [output, setOutput] = useState("");

    async function runAction(action: "email" | "grammar" | "youtube") {
        const res = await fetch("/api/demo/assistant", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ action, prompt: emailPrompt }),
        });
        const data = await res.json();
        setOutput(data.result);
    }

    return (
        <div className="grid gap-4 lg:grid-cols-[1fr_0.6fr]">
            <GlassCard>
                <h2 className="text-sm font-semibold">Assistant Demo (Mock Gmail Auth)</h2>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    {mode === "loggedOut" ? (
                        <div className="space-y-3">
                            <p className="text-sm text-white/80">
                                This is a mocked Gmail sign-in flow (no real Google auth).
                            </p>
                            <button
                                onClick={() => setMode("loggedIn")}
                                className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-zinc-900"
                            >
                                Sign in with Gmail (Mock)
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center justify-between">
                            <p className="text-sm text-white/80">
                                Signed in as <span className="font-medium text-white">prathik.demo@gmail.com</span>
                            </p>
                            <button
                                onClick={() => setMode("loggedOut")}
                                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
                            >
                                Sign out
                            </button>
                        </div>
                    )}
                </div>

                <div className="mt-4">
                    <label className="text-xs text-white/60">Prompt</label>
                    <textarea
                        value={emailPrompt}
                        onChange={(e) => setEmailPrompt(e.target.value)}
                        className="mt-2 h-28 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/20"
                    />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    <button
                        disabled={mode !== "loggedIn"}
                        onClick={() => runAction("email")}
                        className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-zinc-900 disabled:opacity-50"
                    >
                        Generate Email
                    </button>
                    <button
                        disabled={mode !== "loggedIn"}
                        onClick={() => runAction("grammar")}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white hover:bg-white/10 disabled:opacity-50"
                    >
                        Grammar Check
                    </button>
                    <button
                        disabled={mode !== "loggedIn"}
                        onClick={() => runAction("youtube")}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white hover:bg-white/10 disabled:opacity-50"
                    >
                        YouTube Script
                    </button>
                </div>
            </GlassCard>

            <GlassCard>
                <h3 className="text-sm font-semibold">Output</h3>
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/85">
                    <pre className="whitespace-pre-wrap font-sans">
                        {output || "Sign in (mock) and run an action to see output here."}
                    </pre>
                </div>
            </GlassCard>
        </div>
    );
}
