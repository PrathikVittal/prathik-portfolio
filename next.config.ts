import type { NextConfig } from "next";

const repoName = "prathik-portfolio"; // e.g. prathik-portfolio

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
};

export default nextConfig;
