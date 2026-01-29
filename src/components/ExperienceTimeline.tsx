import GlassCard from "./GlassCard";
import Pill from "./Pill";
import { experience } from "@/content/experience";

export default function ExperienceTimeline() {
    return (
        <div className="relative">
            <div className="absolute left-4 top-2 h-full w-px bg-white/10 md:left-6" />

            <div className="space-y-6">
                {experience.map((e) => (
                    <div key={e.company + e.role} className="relative pl-12 md:pl-16">
                        <div className="absolute left-[10px] top-6 h-3 w-3 rounded-full bg-white md:left-[18px]" />
                        <GlassCard>
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <h3 className="text-base font-semibold">{e.role}</h3>
                                    <p className="mt-1 text-sm text-white/70">
                                        <span className="font-medium text-white/85">{e.company}</span> • {e.location}
                                    </p>
                                </div>
                                <Pill>{e.dates}</Pill>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {e.highlights.map((h) => (
                                    <Pill key={h}>{h}</Pill>
                                ))}
                            </div>

                            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/80">
                                {e.bullets.map((b, idx) => (
                                    <li key={idx}>{b}</li>
                                ))}
                            </ul>
                        </GlassCard>
                    </div>
                ))}
            </div>
        </div>
    );
}
