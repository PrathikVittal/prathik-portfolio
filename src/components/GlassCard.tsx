import React from "react";

export default function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}
