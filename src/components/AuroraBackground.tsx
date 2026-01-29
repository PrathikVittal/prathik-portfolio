import React from "react";

export default function AuroraBackground({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen bg-zinc-950 text-white overflow-hidden">
            {/* Aurora blobs */}
            <div className="pointer-events-none absolute inset-0 opacity-60">
                <div className="absolute -top-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-fuchsia-500 blur-[120px]" />
                <div className="absolute top-20 right-[-10%] h-[520px] w-[520px] rounded-full bg-cyan-400 blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[20%] h-[520px] w-[520px] rounded-full bg-emerald-400 blur-[120px]" />
            </div>

            {/* Subtle grid */}
            {/* <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:72px_72px]" /> */}

            <div className="relative">{children}</div>
        </div>
    );
}
