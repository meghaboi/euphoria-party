/** @type {import('next').NextConfig} */
const nextConfig = {
  // The site is fully static, so export plain files (deploys to Cloudflare Pages/Workers assets, no server).
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
