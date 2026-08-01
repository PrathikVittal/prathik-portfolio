import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import GlassCard from "@/components/GlassCard";
import Pill from "@/components/Pill";
import BoldText from "@/components/BoldText";
import Link from "next/link";

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const p = projects.find((x) => x.slug === params.slug);
    if (!p) return notFound();

    return (
        <main className="mx-auto max-w-6xl px-4 py-10">
            <div className="mb-4">
                <Link href="/projects" className="text-sm text-zinc-500 hover:text-zinc-900">
                    ← Back to Projects
                </Link>
            </div>

            <GlassCard>
                <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">{p.title}</h1>
                <p className="mt-2 text-sm text-zinc-600">{p.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                        <Pill key={t}>{t}</Pill>
                    ))}
                </div>

                <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-zinc-600">
                    {p.bullets.map((b, idx) => (
                        <li key={idx}><BoldText text={b} /></li>
                    ))}
                </ul>

                {p.codeUrl && !p.codeUrl.includes("YOUR_REPO") && (
                    <div className="mt-6">
                        <a
                            href={p.codeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
                        >
                            View on GitHub ↗
                        </a>
                    </div>
                )}
            </GlassCard>
        </main>
    );
}
