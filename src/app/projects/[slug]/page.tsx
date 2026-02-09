import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import GlassCard from "@/components/GlassCard";
import Pill from "@/components/Pill";
import Link from "next/link";

import ChatbotDemo from "@/demos/chatbot/Demo";
import AssistantDemo from "@/demos/assistant/Demo";
import VotingDemo from "@/demos/voting/Demo";

const demoMap: Record<string, React.ReactNode> = {
    chatbot: <ChatbotDemo />,
    assistant: <AssistantDemo />,
    voting: <VotingDemo />,
};

export function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDemoPage({ params }: { params: { slug: string } }) {
    const p = projects.find((x) => x.slug === params.slug);
    if (!p) return notFound();

    return (
        <main className="mx-auto max-w-6xl px-4 py-10">
            <div className="mb-4">
                <Link href="/projects" className="text-sm text-white/70 underline">
                    ← Back to Projects
                </Link>
            </div>

            <GlassCard>
                <h1 className="text-2xl font-semibold tracking-tight">{p.title}</h1>
                <p className="mt-2 text-white/75">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                        <Pill key={t}>{t}</Pill>
                    ))}
                </div>
            </GlassCard>

            <div className="mt-6">{demoMap[p.slug]}</div>
        </main>
    );
}
