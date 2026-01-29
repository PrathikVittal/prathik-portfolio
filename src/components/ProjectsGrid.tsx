import GlassCard from "./GlassCard";
import Pill from "./Pill";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { projects } from "@/content/projects";

export default function ProjectsGrid() {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
                <GlassCard key={p.slug}>
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <h3 className="text-base font-semibold">{p.title}</h3>
                            <p className="mt-2 text-sm text-white/75">{p.summary}</p>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                            <Pill key={t}>{t}</Pill>
                        ))}
                    </div>

                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/80">
                        {p.bullets.map((b, idx) => (
                            <li key={idx}>{b}</li>
                        ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                        <a
                            href={p.codeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:opacity-90"
                        >
                            <ExternalLink className="h-4 w-4" />
                            Code
                        </a>

                        <Link
                            href={`/projects/${p.slug}`}
                            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
                        >
                            Demo
                        </Link>
                    </div>
                </GlassCard>
            ))}
        </div>
    );
}
