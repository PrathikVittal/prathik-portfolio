import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import type { ShowcaseProject } from "@/components/ProjectShowcase";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import SkillsTicker from "@/components/SkillsTicker";
import { skillsTickerRows } from "@/content/SkillsTicker";
import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const GRADIENTS = [
  "from-violet-500 via-purple-500 to-fuchsia-600",
  "from-cyan-400 via-blue-500 to-indigo-600",
  "from-orange-400 via-rose-500 to-red-600",
  "from-emerald-400 via-teal-500 to-cyan-600",
];

function getShowcaseProjects(): ShowcaseProject[] {
  return projects
    .filter((p) => p.image)
    .map((p, i) => ({
      title: p.title.split(" —")[0].split(" (")[0],
      category: p.tags.slice(0, 3).join(" / "),
      gradient: GRADIENTS[i % GRADIENTS.length],
      image: p.image,
      href: "/projects",
    }));
}

function ProfileCard() {
  return (
    <div className="overflow-hidden rounded-3xl bg-zinc-900 p-6 text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
      <div className="overflow-hidden rounded-2xl bg-orange-500">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={profile.avatar ?? "/avatar.jpg"}
          alt={profile.name}
          className="aspect-[4/5] w-full object-cover"
        />
      </div>

      <h2 className="mt-5 text-xl font-black leading-tight">{profile.name}</h2>
      <p className="mt-2 text-sm text-white/70">{profile.role}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {["Software Engineer", "Cloud / AI", "Distributed Systems"].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4">
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-white/70 transition hover:text-white"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-white/70 transition hover:text-white"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="text-white/70 transition hover:text-white"
        >
          <Mail className="h-5 w-5" />
        </a>
        <a
          href={`tel:${String(profile.phone).replace(/\s+/g, "")}`}
          aria-label="Phone"
          className="text-white/70 transition hover:text-white"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}

function HeroIntro() {
  return (
    <section className="border-b border-zinc-100 pb-16 lg:pb-24">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">
        {profile.location}
      </p>

      <h1 className="mt-4 text-[clamp(2.8rem,7vw,5.5rem)] font-black leading-[0.92] tracking-tight text-zinc-400">
        SOFTWARE
        <span className="block text-zinc-900">ENGINEER</span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-zinc-600">
        Passionate about building cloud-native systems, real-time data pipelines, and
        AI-driven applications that are secure, scalable, and production ready.
      </p>

      <div className="mt-10 space-y-6 text-base leading-relaxed text-zinc-600">
        {profile.about.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}

function ExperiencePreview() {
  const preview = experience.slice(0, 2);

  return (
    <section className="border-b border-zinc-100 py-16 lg:py-24">
      <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black uppercase leading-[0.95] tracking-tight text-zinc-300">
        2+ Years of
        <span className="block text-zinc-900">Experience</span>
      </h2>

      <div className="mt-12 space-y-10">
        {preview.map((item) => (
          <div key={`${item.company}-${item.role}`}>
            <h3 className="text-2xl font-black text-zinc-900">{item.company}</h3>
            <p className="mt-1 text-sm font-bold text-zinc-500">{item.role}</p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-zinc-600">
              {item.bullets[0]}
            </p>
            <p className="mt-3 text-sm font-medium text-zinc-400">{item.dates}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/experience"
          className="text-sm font-bold text-zinc-700 underline-offset-4 hover:text-zinc-900 hover:underline"
        >
          View all experience →
        </Link>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400">
          Get in touch
        </p>
        <h2 className="mt-2 text-[clamp(2.5rem,6vw,4rem)] font-black leading-[0.95] text-zinc-900">
          Contact Me
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-zinc-600">
          Open to software engineering roles, cloud/AI projects, and collaborations.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 transition hover:text-zinc-900"
          >
            <Linkedin className="h-5 w-5" />
            LinkedIn
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 transition hover:text-zinc-900"
          >
            <Github className="h-5 w-5" />
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 transition hover:text-zinc-900"
          >
            <Mail className="h-5 w-5" />
            Email
          </a>
          <a
            href={`tel:${String(profile.phone).replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 transition hover:text-zinc-900"
          >
            <Phone className="h-5 w-5" />
            Phone
          </a>
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-flex items-center justify-center rounded-full bg-zinc-900 px-8 py-3 text-sm font-bold text-white shadow-[0_14px_30px_rgba(0,0,0,0.18)] transition hover:bg-zinc-800"
        >
          Send me an email
        </a>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <aside className="lg:sticky lg:top-24 lg:h-fit lg:w-[min(100%,320px)] lg:flex-shrink-0 lg:self-start">
            <ProfileCard />
          </aside>

          <div className="min-w-0 flex-1">
            <HeroIntro />
            <ExperiencePreview />
            <ProjectShowcase projects={getShowcaseProjects()} />
            <SkillsTicker rows={skillsTickerRows} />
            <ContactSection />
          </div>
        </div>
      </div>
    </main>
  );
}
