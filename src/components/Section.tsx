import React from "react";

export default function Section({
    title,
    subtitle,
    children,
}: {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}) {
    return (
        <section className="py-10">
            <div className="mb-6">
                <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
                {subtitle ? <p className="mt-2 text-white/70">{subtitle}</p> : null}
            </div>
            {children}
        </section>
    );
}
