import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/download": ["./private/**/*"],
  },
  async redirects() {
    return [
      {
        source: "/:locale(fr|en|es)/agent",
        destination: "/:locale/agents",
        permanent: true,
      },
      {
        source: "/:locale(fr|en|es)/agent/:path*",
        destination: "/:locale/agents/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
