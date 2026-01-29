
// import "./globals.css";
// import type { Metadata } from "next";
// import AuroraBackground from "@/components/AuroraBackground";
// import Navbar from "@/components/Navbar";

// export const metadata: Metadata = {
//   title: "Prathik | Portfolio",
//   description: "Software Engineer portfolio",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       {/* ✅ Aurora starts from the top */}
//       <body className="min-h-screen">
//         <AuroraBackground>
//           {/* ✅ Navbar overlays Aurora */}
//           <Navbar />

//           {/* ✅ push content below fixed navbar */}
//           <div className="pt-15">
//             {children}
//             <footer className="border-t border-white/10 py-10">
//               <div className="mx-auto max-w-6xl px-4 text-sm text-white/60">
//                 Made with patience and passion. © {new Date().getFullYear()} Prathik
//               </div>
//             </footer>
//           </div>
//         </AuroraBackground>
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import type { Metadata } from "next";
import AuroraBackground from "@/components/AuroraBackground";
import Navbar from "@/components/Navbar";
import { profile } from "@/content/profile";
import { Linkedin, Github, Mail, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Prathik | Portfolio",
  description: "Software Engineer portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <AuroraBackground>
          {/* Navbar overlays Aurora */}
          <Navbar />

          {/* Push content below fixed navbar */}
          <div className="pt-16">
            {children}

            {/* Footer */}
            <footer className="border-t border-white/10 py-10">
              <div className="mx-auto max-w-6xl px-4">

                {/* Contact icons */}
                <div className="mb-6 flex flex-col items-center gap-3">
                  <p className="text-sm text-white/70">Contact Me:</p>

                  <div className="flex items-center gap-6">
                    {/* LinkedIn */}
                    <a
                      href={profile.links.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="opacity-80 transition hover:opacity-100"
                    >
                      <Linkedin className="h-6 w-6 text-white/75 hover:text-white" />
                    </a>

                    {/* GitHub */}
                    <a
                      href={profile.links.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="opacity-80 transition hover:opacity-100"
                    >
                      <Github className="h-6 w-6 text-white/75 hover:text-white" />
                    </a>

                    {/* Email */}
                    <a
                      href={`mailto:${profile.email}`}
                      aria-label="Email"
                      className="opacity-80 transition hover:opacity-100"
                    >
                      <Mail className="h-6 w-6 text-white/75 hover:text-white" />
                    </a>

                    {/* Phone */}
                    <a
                      href={`tel:${String(profile.phone).replace(/\s+/g, "")}`}
                      aria-label="Phone"
                      className="opacity-80 transition hover:opacity-100"
                    >
                      <Phone className="h-6 w-6 text-white/75 hover:text-white" />
                    </a>
                  </div>
                </div>

                {/* Footer text — EXACT position preserved */}
                <div className="text-left text-sm text-white/60">
                  Made with patience and passion. © {new Date().getFullYear()} Prathik
                </div>
              </div>
            </footer>
          </div>
        </AuroraBackground>
      </body>
    </html>
  );
}
