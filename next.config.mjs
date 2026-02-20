/** @type {import('next').NextConfig} */
// Use basePath only for GitHub Pages default URL (username.github.io/repo-name).
// Set to "" when using a custom domain (site served at root).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
const nextConfig = {
  output: "export",
  ...(basePath && { basePath }),
  ...(basePath && { assetPrefix: `${basePath}/` }),
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
