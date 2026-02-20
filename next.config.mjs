/** @type {import('next').NextConfig} */
const basePath = "/2026-product-design-portfolio"
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: `${basePath}/`,
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === "production" ? basePath : "",
  },
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
