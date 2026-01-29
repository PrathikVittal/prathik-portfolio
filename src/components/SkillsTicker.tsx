"use client";

import React from "react";
import { cn } from "@/components/cn";
import { motion } from "framer-motion";

import type { IconName, SkillRow, SkillItem } from "@/content/SkillsTicker";

// Font Awesome icons
import {
    FaPython,
    FaJs,
    FaReact,
    FaNodeJs,
    FaDocker,
    FaGitAlt,
    FaJava,
    FaHtml5,
    FaCss3Alt,
    FaCloud,
} from "react-icons/fa";

// Simple Icons
import {
    SiTypescript,
    SiNextdotjs,
    SiKubernetes,
    SiMysql,
    SiPostgresql,
    SiApachekafka,
    SiGooglecloud,
    SiTensorflow,
    SiCplusplus,
    SiMongodb,
} from "react-icons/si";

// Concept icons
import { MdApi } from "react-icons/md";
import { TbNetwork } from "react-icons/tb";
import { GiBrain } from "react-icons/gi";

/* ------------------------------------------------------------------ */
/* ICON MAP – ONLY VALID ICONS                                         */
/* ------------------------------------------------------------------ */
const ICONS: Record<IconName, React.ComponentType<{ className?: string }>> = {
    python: FaPython,
    javascript: FaJs,
    typescript: SiTypescript,
    react: FaReact,
    nextjs: SiNextdotjs,
    node: FaNodeJs,

    cplusplus: SiCplusplus,
    java: FaJava,

    docker: FaDocker,
    kubernetes: SiKubernetes,

    convex: FaCloud,
    kafka: SiApachekafka,
    gcp: SiGooglecloud,

    mysql: SiMysql,
    postgres: SiPostgresql,
    mongodb: SiMongodb,

    git: FaGitAlt,

    restapis: MdApi,
    apis: MdApi,
    microservices: TbNetwork,

    tensorflow: SiTensorflow,
    ml: GiBrain,

    html: FaHtml5,
    css: FaCss3Alt,
};
/* ------------------------------------------------------------------ */

function SkillInline({ item }: { item: SkillItem }) {
    const Icon = ICONS[item.icon];

    return (
        <div className="flex items-center gap-4 px-2 py-1 text-white/90">
            <Icon className="h-5 w-5 text-white/55" />
            <span className="text-base font-semibold tracking-tight text-white/80">
                {item.label}
            </span>
        </div>
    );
}

function MarqueeRow({
    items,
    reverse,
    durationSeconds,
}: {
    items: SkillItem[];
    reverse?: boolean;
    durationSeconds?: number;
}) {
    const loopItems = [...items, ...items];

    return (
        <div
            className={cn("marquee flex items-center gap-14 py-2.5", reverse && "marquee-reverse")}
            style={
                {
                    ["--marquee-duration" as any]: `${durationSeconds ?? 26}s`,
                } as React.CSSProperties
            }
        >
            {loopItems.map((item, idx) => (
                <SkillInline key={`${item.label}-${idx}`} item={item} />
            ))}
        </div>
    );
}

export default function SkillsTicker({ rows }: { rows: SkillRow[] }) {
    return (
        <section className="relative">
            {/* same overall width as the page/about section */}
            <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-12">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        My Skills
                    </h2>
                </div>

                {/* ✅ Smooth edge fade (no visible outline/box) */}
                <div
                    className="relative mt-4 overflow-hidden rounded-none border-0 bg-transparent"
                    style={{
                        WebkitMaskImage:
                            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                        maskImage:
                            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    }}
                >
                    <div className="space-y-0">
                        {rows.map((row, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 6 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.35 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                            >
                                <MarqueeRow
                                    items={row.items}
                                    reverse={row.reverse}
                                    durationSeconds={row.durationSeconds}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
