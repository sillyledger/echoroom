import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Topics and Shop are parked for now: send them to the homepage.
  async redirects() {
    return [
      { source: "/topics", destination: "/", permanent: false },
      { source: "/topics/:path*", destination: "/", permanent: false },
      { source: "/shop", destination: "/", permanent: false },
      { source: "/shop/:path*", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
