import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.panacompu.com" },
      { protocol: "https", hostname: "i.dell.com" },
      { protocol: "https", hostname: "store.lenovo.com" },
      { protocol: "https", hostname: "i5.walmartimages.com" },
      { protocol: "https", hostname: "www.apple.com" },
      { protocol: "https", hostname: "www.phoneplacekenya.com" },
    ],
  },
  turbopack: {
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
};

export default nextConfig;
