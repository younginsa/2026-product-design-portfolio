/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/2026-product-design-portfolio",
  assetPrefix: "/2026-product-design-portfolio/",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
