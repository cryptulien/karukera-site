import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/download": ["./private/**/*"],
  },
};

export default nextConfig;
