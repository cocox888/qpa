import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://127.0.0.1:5173/:path*'
      }
    ];
  }
};

export default nextConfig;
