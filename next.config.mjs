/** @type {import('next').NextConfig} */
const repoName = 'demo-invite';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  // GitHub Pages hosts this project under /demo-invite/ rather than the domain root.
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: { unoptimized: true },
};

export default nextConfig;
