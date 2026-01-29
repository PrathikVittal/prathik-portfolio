import GlassCard from "./GlassCard";
import Pill from "./Pill";
import { skillGroups } from "@/content/skills";

export default function SkillsGrid() {
    return (
        <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((g) => {
                const Icon = g.icon;
                return (
                    <GlassCard key={g.title}>
                        <div className="flex items-center gap-2">
                            <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                                <Icon className="h-4 w-4 text-white/90" />
                            </div>
                            <h3 className="text-sm font-semibold">{g.title}</h3>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {g.items.map((x) => (
                                <Pill key={x}>{x}</Pill>
                            ))}
                        </div>
                    </GlassCard>
                );
            })}
        </div>
    );
}
