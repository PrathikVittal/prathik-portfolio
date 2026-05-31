"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/components/cn";
import { useCursorLabel } from "@/components/CustomCursorProvider";
import {
  Award,
  Briefcase,
  Download,
  FolderOpen,
  House,
  type LucideIcon,
} from "lucide-react";

const NAV = [
  { label: "Home", href: "/", icon: House },
  { label: "Experience", href: "/experience", icon: Briefcase },
  { label: "Projects", href: "/projects", icon: FolderOpen },
  { label: "Certifications", href: "/certifications", icon: Award },
] as const;

async function downloadResume() {
  const res = await fetch("/resume.pdf");
  const blob = await res.blob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Prathik_Vittal_Resume.pdf";
  a.click();
  URL.revokeObjectURL(url);
}

function NavIconLink({
  href,
  label,
  icon: Icon,
  active,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  active: boolean;
}) {
  const cursorHandlers = useCursorLabel(label);

  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        "group relative inline-flex h-10 w-10 items-center justify-center rounded-full transition",
        active ? "text-zinc-900" : "text-white/80 hover:text-white"
      )}
      {...cursorHandlers}
    >
      {active && (
        <span className="pointer-events-none absolute inset-0 rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.2)]" />
      )}

      {!active && (
        <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition duration-200 group-hover:opacity-100 group-hover:bg-white/10" />
      )}

      <Icon className="relative h-[18px] w-[18px]" strokeWidth={2} />
    </Link>
  );
}

function ResumeButton() {
  const cursorHandlers = useCursorLabel("Resume");

  return (
    <button
      type="button"
      onClick={downloadResume}
      aria-label="Download Resume"
      className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition hover:text-white"
      {...cursorHandlers}
    >
      <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition duration-200 group-hover:opacity-100 group-hover:bg-white/10" />
      <Download className="relative h-[18px] w-[18px]" strokeWidth={2} />
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-transparent">
        <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-4">
          <nav className="relative rounded-full bg-zinc-900 px-2 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
            <ul className="relative flex items-center gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <NavIconLink
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                    active={isActive(item.href)}
                  />
                </li>
              ))}
              <li>
                <ResumeButton />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
