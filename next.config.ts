import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a self-contained server build for a lean Docker image (Hugging Face Spaces).
  output: "standalone",
  async redirects() {
    return [
      // /experience merged into the homepage flagship.
      { source: "/experience", destination: "/#proof", permanent: true },
    ];
  },
};

export default nextConfig;
