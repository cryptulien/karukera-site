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
      {
        source: "/:locale(fr|en|es)/kit",
        destination: "/:locale/agents/security/kit",
        permanent: true,
      },
      {
        source: "/docs/karukera-security-kit.md",
        destination: "/fr/agents/security/kit.md",
        permanent: true,
      },
      {
        source: "/docs/karukera-security-kit.en.md",
        destination: "/en/agents/security/kit.md",
        permanent: true,
      },
      {
        source: "/docs/karukera-security-kit.es.md",
        destination: "/es/agents/security/kit.md",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
