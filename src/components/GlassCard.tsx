import React from "react";

export default function GlassCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,.06)]">
            <div className="p-5 sm:p-6">{children}</div>
        </div>
    );
}
