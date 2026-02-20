/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/2026-product-design-portfolio",
  assetPrefix: "/2026-product-design-portfolio/",
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
