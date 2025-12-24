// next.config.mjs
/** @type {import('next').NextConfig} */

const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  // trailingSlash: true,
};

// Handle static export if needed
if (typeof process !== 'undefined' && process.env?.NEXT_STATIC_EXPORT === "true") {
  nextConfig.output = "export";
}

export default nextConfig;

