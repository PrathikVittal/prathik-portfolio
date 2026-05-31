"use client";

import { usePathname } from "next/navigation";
import { profile } from "@/content/profile";
import { Linkedin, Github, Mail, Phone } from "lucide-react";

export default function SiteFooter() {
  const pathname = usePathname();

  // Home page has its own Contact section, so no footer there.
  if (pathname === "/") return null;

  return (
    <footer className="border-t border-zinc-200 py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-6 flex flex-col items-center gap-3">
          <p className="text-sm text-zinc-600">Contact Me:</p>

          <div className="flex items-center gap-6">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="opacity-80 transition hover:opacity-100"
            >
              <Linkedin className="h-6 w-6 text-zinc-700 hover:text-zinc-900" />
            </a>

            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="opacity-80 transition hover:opacity-100"
            >
              <Github className="h-6 w-6 text-zinc-700 hover:text-zinc-900" />
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="opacity-80 transition hover:opacity-100"
            >
              <Mail className="h-6 w-6 text-zinc-700 hover:text-zinc-900" />
            </a>

            <a
              href={`tel:${String(profile.phone).replace(/\s+/g, "")}`}
              aria-label="Phone"
              className="opacity-80 transition hover:opacity-100"
            >
              <Phone className="h-6 w-6 text-zinc-700 hover:text-zinc-900" />
            </a>
          </div>
        </div>

        <div className="text-left text-sm text-zinc-500">
          Made with patience and passion. © {new Date().getFullYear()} Prathik
        </div>
      </div>
    </footer>
  );
}
