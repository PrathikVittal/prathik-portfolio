import Pill from "@/components/Pill";
import { profile } from "@/content/profile";
import { MapPin } from "lucide-react";

import { skillsTickerRows } from "@/content/SkillsTicker";
import SkillsTicker from "@/components/SkillsTicker";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {/* Same width wrapper for About + Skills */}
      <div className="mx-auto w-full max-w-4xl">
        {/* About (no card) */}
        <section className="text-center">
          <div className="flex flex-wrap items-center justify-start gap-2 text-sm ml-25">
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80">
              Software Engineer
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80">
              Cloud / AI
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80">
              Distributed Systems
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Hey, I&apos;m Prathik Vittal Beechanahally Prahlad!
          </h1>
          <h1 className="mt-2.5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Welcome to my technical showcase!
          </h1>

          {/* Avatar below heading, centered */}
          <div className="mt-6 flex justify-center">
            {/* If you already have an avatar path, replace src */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.avatar ?? "/avatar.jpg"}
              alt={profile.name}
              className="h-20 w-20 rounded-full border border-white/10 object-cover shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
            />
          </div>

          <div className="mt-6 space-y-4 text-left text-white/80">
            {profile.about.map((p) => (
              <p key={p} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          {/* <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Pill>
              <MapPin className="mr-2 h-4 w-4" /> {profile.location}
            </Pill>
            <Pill>Cloud-native</Pill>
            <Pill>Real-time streaming</Pill>
            <Pill>API security</Pill>
            <Pill>Docker/Kubernetes</Pill>
          </div> */}
        </section>

        {/* Skills (same width as About) */}
        <div className="mt-12">
          <SkillsTicker rows={skillsTickerRows} />
        </div>
      </div>
    </main>
  );
}
