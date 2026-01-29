"use client";

import { useMemo, useState } from "react";
import GlassCard from "@/components/GlassCard";
import Pill from "@/components/Pill";

type Candidate = { id: string; name: string };
type VoteState = Record<string, number>;

export default function VotingDemo() {
    const candidates: Candidate[] = useMemo(
        () => [
            { id: "a", name: "Candidate A" },
            { id: "b", name: "Candidate B" },
            { id: "c", name: "Candidate C" },
        ],
        []
    );

    const [connected, setConnected] = useState(false);
    const [walletId, setWalletId] = useState<string>("");
    const [voted, setVoted] = useState(false);
    const [tally, setTally] = useState<VoteState>({ a: 12, b: 9, c: 6 });
    const [auditHash, setAuditHash] = useState("0xDEMO_AUDIT_HASH");

    async function connectWallet() {
        const res = await fetch("/api/demo/voting", { method: "POST" });
        const data = await res.json();
        setConnected(true);
        setWalletId(data.walletId);
    }

    function castVote(candidateId: string) {
        if (!connected || voted) return;

        setTally((t) => ({ ...t, [candidateId]: (t[candidateId] || 0) + 1 }));
        setVoted(true);
        setAuditHash(`0x${Math.random().toString(16).slice(2)}${Math.random().toString(16).slice(2)}`.slice(0, 18));
    }

    const total = Object.values(tally).reduce((a, b) => a + b, 0);

    return (
        <div className="grid gap-4 lg:grid-cols-[1fr_0.7fr]">
            <GlassCard>
                <h2 className="text-sm font-semibold">Voting Demo (Simulated Wallet)</h2>

                <div className="mt-4 flex flex-wrap gap-2">
                    <Pill>{connected ? "Wallet connected" : "Wallet not connected"}</Pill>
                    {connected ? <Pill>Wallet: {walletId}</Pill> : null}
                    <Pill>Audit: {auditHash}</Pill>
                </div>

                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    {!connected ? (
                        <button
                            onClick={connectWallet}
                            className="rounded-2xl bg-white px-4 py-3 text-sm font-medium text-zinc-900"
                        >
                            Connect Wallet (Dummy)
                        </button>
                    ) : (
                        <div className="space-y-3">
                            <p className="text-sm text-white/80">
                                Choose a candidate to cast your vote. This is a simulation (no blockchain).
                            </p>
                            <div className="grid gap-2 sm:grid-cols-3">
                                {candidates.map((c) => (
                                    <button
                                        key={c.id}
                                        onClick={() => castVote(c.id)}
                                        disabled={voted}
                                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white hover:bg-white/10 disabled:opacity-50"
                                    >
                                        Vote {c.name}
                                    </button>
                                ))}
                            </div>
                            {voted ? (
                                <p className="text-sm text-emerald-300">Vote recorded (simulated). ✅</p>
                            ) : null}
                        </div>
                    )}
                </div>
            </GlassCard>

            <GlassCard>
                <h3 className="text-sm font-semibold">Live Results (Simulated)</h3>
                <p className="mt-2 text-sm text-white/70">Total votes: {total}</p>

                <div className="mt-4 space-y-3">
                    {candidates.map((c) => {
                        const v = tally[c.id] || 0;
                        const pct = total ? Math.round((v / total) * 100) : 0;
                        return (
                            <div key={c.id}>
                                <div className="flex items-center justify-between text-sm">
                                    <span className="text-white/85">{c.name}</span>
                                    <span className="text-white/60">
                                        {v} ({pct}%)
                                    </span>
                                </div>
                                <div className="mt-2 h-2 w-full rounded-full bg-white/10">
                                    <div
                                        className="h-2 rounded-full bg-white/70"
                                        style={{ width: `${pct}%` }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <p className="mt-4 text-xs text-white/60">
                    Later, we can replace this simulation with real contract calls while keeping the same UI.
                </p>
            </GlassCard>
        </div>
    );
}
