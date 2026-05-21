import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/resume.pdf",
        permanent: false,
      },
      {
        source: "/chat",
        destination: "https://calendly.com/rahulpatni/30min",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
