import GlassCard from "./GlassCard";
import Pill from "./Pill";
import BoldText from "./BoldText";
import { ExternalLink } from "lucide-react";
import { projects } from "@/content/projects";

export default function ProjectsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((p) => (
        <GlassCard key={p.slug}>
          {p.image ? (
            <div className="mb-4 overflow-hidden rounded-2xl border border-zinc-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.image}
                alt={p.title}
                className="aspect-[1.28] w-full object-cover object-top"
              />
            </div>
          ) : null}

          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold text-zinc-900">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{p.summary}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-600">
            {p.bullets.map((b, idx) => (
              <li key={idx}><BoldText text={b} /></li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={p.codeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              <ExternalLink className="h-4 w-4" />
              Code
            </a>
          </div>
        </GlassCard>
      ))}
    </div>
  );
}
