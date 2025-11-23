import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "https://x.com/bruvimtired",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
