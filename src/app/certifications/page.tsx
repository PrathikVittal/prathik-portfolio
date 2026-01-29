
// import Section from "@/components/Section";
// import GlassCard from "@/components/GlassCard";
// import Pill from "@/components/Pill";
// import {
//     credlyBadges,
//     workshops,
//     awards,
//     credlySkills,
// } from "@/content/certifications";
// import { skillGroups } from "@/content/skills";
// import { ExternalLink, Award, ChevronDown } from "lucide-react";
// import { profile } from "@/content/profile";

// export default function CertificationsPage() {
//     return (
//         <main className="mx-auto max-w-6xl px-4 py-10">
//             <Section
//                 title="Certifications & Badges"
//                 subtitle="Credly badges, verified skills, workshops, awards, and skills in detail."
//             >
//                 <div className="grid items-start gap-4 lg:grid-cols-[1.25fr_0.75fr]">
//                     {/* ✅ Credly Badges (image + description, NO skills) */}
//                     <GlassCard>
//                         <div className="flex items-center justify-between gap-3">
//                             <h3 className="text-sm font-semibold">Credly Badges</h3>
//                             <a
//                                 href={profile.links.credly}
//                                 target="_blank"
//                                 rel="noreferrer"
//                                 className="text-sm text-white/75 underline inline-flex items-center gap-2"
//                             >
//                                 View Credly <ExternalLink className="h-4 w-4" />
//                             </a>
//                         </div>

//                         <div className="mt-4 grid gap-4">
//                             {credlyBadges.map((b) => (
//                                 <div
//                                     key={b.title}
//                                     className="rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
//                                 >
//                                     <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
//                                         {/* Badge image */}
//                                         <div className="shrink-0">
//                                             <div className="relative h-[140px] w-[160px] overflow-hidden rounded-2xl border border-white/10 bg-black/20">
//                                                 {b.image ? (
//                                                     // eslint-disable-next-line @next/next/no-img-element
//                                                     <img
//                                                         src={b.image}
//                                                         alt={b.title}
//                                                         className="h-full w-full object-contain p-2"
//                                                     />
//                                                 ) : (
//                                                     <div className="flex h-full w-full items-center justify-center">
//                                                         <Award className="h-8 w-8 text-white/50" />
//                                                     </div>
//                                                 )}
//                                             </div>
//                                         </div>

//                                         {/* Badge text */}
//                                         <div className="min-w-0 flex-1">
//                                             <p className="text-base font-semibold text-white">
//                                                 {b.title}
//                                             </p>

//                                             <p className="mt-1 text-sm text-white/70">
//                                                 Issued by{" "}
//                                                 <span className="text-white/85">{b.issuer}</span>
//                                                 {b.date ? (
//                                                     <span className="text-white/50"> • {b.date}</span>
//                                                 ) : null}
//                                             </p>

//                                             {/* ✅ Description only */}
//                                             {b.description ? (
//                                                 <p className="mt-3 text-sm leading-relaxed text-white/75">
//                                                     {b.description}
//                                                 </p>
//                                             ) : null}

//                                             {/* Link button */}
//                                             {b.link ? (
//                                                 <div className="mt-4">
//                                                     <a
//                                                         href={b.link}
//                                                         target="_blank"
//                                                         rel="noreferrer"
//                                                         className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10"
//                                                     >
//                                                         View on Credly <ExternalLink className="h-4 w-4" />
//                                                     </a>
//                                                 </div>
//                                             ) : null}
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </GlassCard>

//                     {/* ✅ RIGHT SIDE: Credly Verified Skills (Expandable cards) */}
//                     <GlassCard>
//                         <div className="flex items-center justify-between gap-3">
//                             <h3 className="text-sm font-semibold">Credly Verified Skills</h3>
//                             <a
//                                 href={profile.links.credly}
//                                 target="_blank"
//                                 rel="noreferrer"
//                                 className="text-sm text-white/75 underline inline-flex items-center gap-2"
//                             >
//                                 Skills Wallet <ExternalLink className="h-4 w-4" />
//                             </a>
//                         </div>

//                         <p className="mt-2 text-xs text-white/60">
//                             Verified skills issued from the Credly platform. Click to expand.
//                         </p>

//                         <div className="mt-4 max-h-[2100px] overflow-auto pr-1 space-y-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
//                             {credlySkills.map((s) => (
//                                 <details
//                                     key={s.name}
//                                     className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
//                                 >
//                                     <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
//                                         <div className="min-w-0">
//                                             <p className="truncate text-sm font-semibold text-white">
//                                                 {s.name}
//                                             </p>
//                                             <p className="mt-1 text-xs text-white/60">
//                                                 {s.evidenceCount} source{s.evidenceCount === 1 ? "" : "s"}{" "}
//                                                 of skill evidence
//                                             </p>
//                                         </div>

//                                         <ChevronDown className="h-4 w-4 text-white/60 transition group-open:rotate-180" />
//                                     </summary>

//                                     <div className="mt-3 text-sm text-white/75">
//                                         {s.details ? (
//                                             <p className="leading-relaxed">{s.details}</p>
//                                         ) : (
//                                             <p className="text-white/55 italic">
//                                                 Details coming soon.
//                                             </p>
//                                         )}
//                                     </div>
//                                 </details>
//                             ))}
//                         </div>
//                     </GlassCard>
//                 </div>

//                 {/* ✅ Replace Courses & Learning Paths with Awards */}
//                 <div className="mt-4 grid gap-4 md:grid-cols-2">
//                     <GlassCard>
//                         <h3 className="text-sm font-semibold">Awards</h3>
//                         <div className="mt-4 space-y-3">
//                             {awards.map((a) => (
//                                 <div
//                                     key={a.title}
//                                     className="rounded-2xl border border-white/10 bg-white/5 p-4"
//                                 >
//                                     <p className="text-sm font-semibold">{a.title}</p>
//                                     <p className="mt-1 text-sm text-white/75">{a.detail}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </GlassCard>

//                     <GlassCard>
//                         <h3 className="text-sm font-semibold">Workshops & Activities</h3>
//                         <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/80">
//                             {workshops.map((w) => (
//                                 <li key={w}>{w}</li>
//                             ))}
//                         </ul>
//                     </GlassCard>
//                 </div>
//             </Section>

//             <Section title="Skills (Detailed)" subtitle="Grouped for quick scanning.">
//                 <div className="grid gap-4 md:grid-cols-2">
//                     {skillGroups.map((g) => {
//                         const Icon = g.icon;
//                         return (
//                             <GlassCard key={g.title}>
//                                 <div className="flex items-center gap-2">
//                                     <div className="rounded-xl border border-white/10 bg-white/5 p-2">
//                                         <Icon className="h-4 w-4 text-white/90" />
//                                     </div>
//                                     <h4 className="text-sm font-semibold">{g.title}</h4>
//                                 </div>
//                                 <div className="mt-4 flex flex-wrap gap-2">
//                                     {g.items.map((x) => (
//                                         <Pill key={x}>{x}</Pill>
//                                     ))}
//                                 </div>
//                             </GlassCard>
//                         );
//                     })}
//                 </div>
//             </Section>
//         </main>
//     );
// }



// src/app/certifications/page.tsx

// src/app/certifications/page.tsx

import Section from "@/components/Section";
import GlassCard from "@/components/GlassCard";
import Pill from "@/components/Pill";

import { credlyBadges, workshops, awards } from "@/content/certifications";
import { credlyVerifiedSkills } from "@/content/credlySkills";

import { skillGroups } from "@/content/skills";
import { ExternalLink, Award, ChevronDown } from "lucide-react";
import { profile } from "@/content/profile";

function FlagPill({ flag }: { flag: "IN_DEMAND" | "FUTURE_PROOF" }) {
    const label = flag === "IN_DEMAND" ? "IN DEMAND" : "FUTURE PROOF";
    return (
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-wide text-white/80">
            {label}
        </span>
    );
}

function getSourcesLine(s: any) {
    // 1) Use explicit string if present (optional)
    if (typeof s.sources === "string" && s.sources.trim().length > 0) return s.sources;

    // 2) Otherwise compute from badges list (recommended)
    const countFromBadges = Array.isArray(s.credlyBadges) ? s.credlyBadges.length : 0;
    if (countFromBadges > 0) {
        return `${countFromBadges} source${countFromBadges === 1 ? "" : "s"} of skill evidence`;
    }

    // 3) Fallback to old field if you ever have it
    if (typeof s.evidenceCount === "number") {
        return `${s.evidenceCount} source${s.evidenceCount === 1 ? "" : "s"} of skill evidence`;
    }

    return null;
}

export default function CertificationsPage() {
    return (
        <main className="mx-auto max-w-6xl px-4 py-10">
            <Section
                title="Certifications & Badges"
                subtitle="Credly badges, verified skills, workshops, awards, and skills in detail."
            >
                <div className="grid items-start gap-4 lg:grid-cols-[1.25fr_0.75fr]">
                    {/* ✅ LEFT: Credly Badges */}
                    <GlassCard>
                        <div className="flex items-center justify-between gap-3">
                            <h3 className="text-sm font-semibold">Credly Badges</h3>
                            <a
                                href={profile.links.credly}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-white/75 underline"
                            >
                                View Credly <ExternalLink className="h-4 w-4" />
                            </a>
                        </div>

                        <div className="mt-4 grid gap-4">
                            {credlyBadges.map((b) => (
                                <div
                                    key={b.title}
                                    className="rounded-3xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                                >
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                                        {/* Badge image */}
                                        <div className="shrink-0">
                                            <div className="relative h-[140px] w-[160px] overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                                                {b.image ? (
                                                    // eslint-disable-next-line @next/next/no-img-element
                                                    <img
                                                        src={b.image}
                                                        alt={b.title}
                                                        className="h-full w-full object-contain p-2"
                                                    />
                                                ) : (
                                                    <div className="flex h-full w-full items-center justify-center">
                                                        <Award className="h-8 w-8 text-white/50" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Badge text */}
                                        <div className="min-w-0 flex-1">
                                            <p className="text-base font-semibold text-white">{b.title}</p>

                                            <p className="mt-1 text-sm text-white/70">
                                                Issued by <span className="text-white/85">{b.issuer}</span>
                                                {b.date ? <span className="text-white/50"> • {b.date}</span> : null}
                                            </p>

                                            {b.description ? (
                                                <p className="mt-3 text-sm leading-relaxed text-white/75">
                                                    {b.description}
                                                </p>
                                            ) : null}

                                            {b.link ? (
                                                <div className="mt-4">
                                                    <a
                                                        href={b.link}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/85 transition hover:bg-white/10"
                                                    >
                                                        View on Credly <ExternalLink className="h-4 w-4" />
                                                    </a>
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>

                    {/* ✅ RIGHT: Credly Verified Skills */}
                    <GlassCard>
                        <div className="flex items-center justify-between gap-3">
                            <h3 className="text-sm font-semibold">Credly Verified Skills</h3>
                            <a
                                href={profile.links.credly}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-white/75 underline"
                            >
                                Skills Wallet <ExternalLink className="h-4 w-4" />
                            </a>
                        </div>

                        <p className="mt-2 text-xs text-white/60">
                            Verified skills issued from the Credly platform. Click to expand.
                        </p>

                        <div className="mt-4 max-h-[2100px] space-y-3 overflow-auto pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                            {credlyVerifiedSkills.map((s) => {
                                const sourcesLine = getSourcesLine(s);

                                return (
                                    <details
                                        key={s.name}
                                        className="group rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                                    >
                                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                                            <div className="min-w-0">
                                                <p className="truncate text-sm font-semibold text-white">{s.name}</p>

                                                {s.flags?.length ? (
                                                    <div className="mt-2 flex flex-wrap items-center gap-2">
                                                        {s.flags.map((f) => (
                                                            <FlagPill key={f} flag={f} />
                                                        ))}
                                                    </div>
                                                ) : null}

                                                {sourcesLine ? (
                                                    <p className="mt-2 text-xs text-white/60">{sourcesLine}</p>
                                                ) : null}
                                            </div>

                                            <ChevronDown className="h-4 w-4 text-white/60 transition group-open:rotate-180" />
                                        </summary>

                                        {/* ✅ Expanded content (NO Learn more link) */}
                                        <div className="mt-4 space-y-4">
                                            <p className="text-sm leading-relaxed text-white/75">{s.description}</p>

                                            {/* ✅ Badge refs list — NO badge images */}
                                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                                <p className="text-sm font-semibold text-white/90">Credly Badges</p>

                                                <div className="mt-3 space-y-2">
                                                    {s.credlyBadges.map((b) => (
                                                        <div key={`${s.name}-${b.title}`} className="text-sm text-white/80">
                                                            <span className="font-semibold text-white/90">{b.title}</span>
                                                            <span className="text-white/70">, {b.issuer}</span>
                                                            {b.issued ? (
                                                                <span className="text-white/55"> (Issued {b.issued})</span>
                                                            ) : null}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </details>
                                );
                            })}
                        </div>
                    </GlassCard>
                </div>

                {/* ✅ Awards + Workshops */}
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <GlassCard>
                        <h3 className="text-sm font-semibold">Awards</h3>
                        <div className="mt-4 space-y-3">
                            {awards.map((a) => (
                                <div key={a.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-sm font-semibold">{a.title}</p>
                                    <p className="mt-1 text-sm text-white/75">{a.detail}</p>
                                </div>
                            ))}
                        </div>
                    </GlassCard>

                    <GlassCard>
                        <h3 className="text-sm font-semibold">Workshops & Activities</h3>
                        <div className="mt-4 space-y-3">
                            {workshops.map((w) => (
                                <div key={w} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                    <p className="text-sm text-white/85">{w}</p>
                                </div>
                            ))}
                        </div>

                    </GlassCard>
                </div>
            </Section>

            <Section title="Technical Skills" subtitle="Grouped for quick scanning.">
                <div className="grid gap-4 md:grid-cols-2">
                    {skillGroups.map((g) => {
                        const Icon = g.icon;
                        return (
                            <GlassCard key={g.title}>
                                <div className="flex items-center gap-2">
                                    <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                                        <Icon className="h-4 w-4 text-white/90" />
                                    </div>
                                    <h4 className="text-sm font-semibold">{g.title}</h4>
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
            </Section>
        </main>
    );
}

