"use client";

import { profile } from "@/content/profile";
import { Linkedin, Mail, Phone, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mx-auto max-w-6xl px-4 pb-10 pt-6">
            {/* Contact row */}
            <div className="mb-6 flex flex-col items-center justify-center gap-3">
                <p className="text-sm text-white/70">Contact:</p>

                <div className="flex items-center justify-center gap-6">
                    {/* LinkedIn */}
                    <a
                        href={profile.links.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="transition hover:opacity-100 opacity-80"
                    >
                        <Linkedin className="h-6 w-6 text-white/75 hover:text-white/95 transition" />
                    </a>

                    {/* GitHub */}
                    <a
                        href={profile.links.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="transition hover:opacity-100 opacity-80"
                    >
                        <Github className="h-6 w-6 text-white/75 hover:text-white/95 transition" />
                    </a>

                    {/* Email */}
                    <a
                        href={`mailto:${profile.email}`}
                        aria-label="Email"
                        className="transition hover:opacity-100 opacity-80"
                    >
                        <Mail className="h-6 w-6 text-white/75 hover:text-white/95 transition" />
                    </a>

                    {/* Phone */}
                    <a
                        href={`tel:${String(profile.phone).replace(/\s+/g, "")}`}
                        aria-label="Phone"
                        className="transition hover:opacity-100 opacity-80"
                    >
                        <Phone className="h-6 w-6 text-white/75 hover:text-white/95 transition" />
                    </a>
                </div>
            </div>

            {/* Existing footer text (keep exact position vibe) */}
            <div className="text-left text-sm text-white/50">
                Made with patience and passion. © 2026 Prathik
            </div>
        </footer>
    );
}
