import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],

  // Hide "X-Powered-By: Next.js" header — small security/bandwidth win
  poweredByHeader: false,

  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

const withMDX = createMDX({
  options: {
    // Plugin names as strings so they work with Turbopack
    remarkPlugins: ['remark-gfm'],
  },
});
export default withMDX(nextConfig);
