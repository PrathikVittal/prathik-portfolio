import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { CustomCursorProvider } from "@/components/CustomCursorProvider";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Prathik | Portfolio",
  description: "Software Engineer portfolio",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-zinc-900 antialiased">
        <CustomCursorProvider>
          <Navbar />

          <div className="pt-16">{children}</div>

          <SiteFooter />
        </CustomCursorProvider>
      </body>
    </html>
  );
}
