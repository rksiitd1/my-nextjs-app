// next.config.mjs
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // Ensure that Next.js outputs a static website
    output: 'export',
    // Disable image optimization (not supported on Cloudflare Pages)
    images: {
      unoptimized: true,
    },
  }
  
  export default nextConfig;