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

          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-justify text-white/80 text-[18px] leading-relaxed">
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


//Mobile friendly, still needs work
// import { profile } from "@/content/profile";
// import SkillsTicker from "@/components/SkillsTicker";
// import { skillsTickerRows } from "@/content/SkillsTicker";

// export default function HomePage() {
//   return (
//     <main className="mx-auto max-w-6xl px-4 py-10">
//       {/* narrower like the 2nd screenshot */}
//       <div className="mx-auto w-full max-w-2xl">
//         <section className="text-center">
//           {/* Pills */}
//           <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
//             <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80">
//               Software Engineer
//             </span>
//             <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80">
//               Cloud / AI
//             </span>
//             <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80">
//               Distributed Systems
//             </span>
//           </div>

//           {/* Headings */}
//           <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
//             Hey, I&apos;m Prathik Vittal
//             <br className="hidden sm:block" />
//             Beechanahally Prahlad!
//           </h1>

//           <p className="mt-3 text-base text-white/75 sm:text-lg">
//             Welcome to my technical showcase.
//           </p>

//           {/* Avatar */}
//           <div className="mt-6 flex justify-center">
//             {/* eslint-disable-next-line @next/next/no-img-element */}
//             <img
//               src={profile.avatar ?? "/avatar.jpg"}
//               alt={profile.name}
//               className="h-20 w-20 rounded-full border border-white/10 object-cover shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
//             />
//           </div>

//           {/* About */}
//           <div className="mx-auto mt-6 max-w-3xl space-y-5 text-left text-white/80 text-base leading-relaxed sm:text-[18px]">
//             {profile.about.map((p) => (
//               <p key={p} className="md:text-justify">
//                 {p}
//               </p>
//             ))}
//           </div>
//         </section>

//         {/* Skills ticker */}
//         <div className="mt-12">
//           <SkillsTicker rows={skillsTickerRows} />
//         </div>
//       </div>
//     </main>
//   );
// }
