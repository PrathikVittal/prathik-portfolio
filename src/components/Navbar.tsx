
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/components/cn";
import { Download } from "lucide-react";

const NAV = [
    { label: "Home", href: "/" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Certifications", href: "/certifications" },
];

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname?.startsWith(href);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            {/* ✅ transparent (no black strip), just blur */}
            <div className="bg-transparent">
                <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-4">
                    {/* wrapper: center nav + right button */}
                    <div className="relative flex w-full items-center justify-center">
                        {/* NAV (center) */}
                        <nav className="relative rounded-full bg-white/[0.06] px-2 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.10)] backdrop-blur-2xl">
                            {/* ✅ remove the border you didn’t want (no border class) */}
                            <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent" />

                            <ul className="relative flex items-center gap-1">
                                {NAV.map((item) => {
                                    const active = isActive(item.href);

                                    return (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "group relative inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition",
                                                    active
                                                        ? "text-black"
                                                        : "text-white/75 hover:text-white/95"
                                                )}
                                            >
                                                {/* active pill */}
                                                {active && (
                                                    <span className="pointer-events-none absolute inset-0 rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.25)]" />
                                                )}

                                                {/* hover glass (only when not active) */}
                                                {!active && (
                                                    <>
                                                        <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition duration-200 group-hover:opacity-100 bg-white/[0.10] backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.18)]" />
                                                        <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition duration-200 group-hover:opacity-100 bg-[radial-gradient(120px_60px_at_30%_25%,rgba(255,255,255,0.35),transparent_60%)]" />
                                                        <span className="pointer-events-none absolute inset-x-2 top-1 h-px rounded-full opacity-0 transition duration-200 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                                                    </>
                                                )}

                                                <span className="relative">{item.label}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        {/* ✅ Download button (far right) */}
                        <a
                            href="/resume.pdf"
                            download
                            className="group absolute right-0 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white/90
                         bg-white/[0.06] shadow-[0_10px_30px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.10)]
                         backdrop-blur-2xl transition hover:text-white"
                        >
                            {/* liquid glass hover */}
                            <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition duration-200 group-hover:opacity-100 bg-white/[0.10] shadow-[0_10px_30px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.18)]" />
                            <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition duration-200 group-hover:opacity-100 bg-[radial-gradient(120px_60px_at_30%_25%,rgba(255,255,255,0.35),transparent_60%)]" />
                            <span className="pointer-events-none absolute inset-x-2 top-1 h-px rounded-full opacity-0 transition duration-200 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                            <Download className="relative h-4 w-4 text-white/80" />
                            <span className="relative">Download Resume</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
