import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  devIndicators: false,
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  async rewrites() {
    return [
      { source: '/en', destination: '/' },
      { source: '/ar', destination: '/?lang=ar' },
      { source: '/en/services', destination: '/services' },
      { source: '/ar/services', destination: '/services?lang=ar' },
      { source: '/en/projects', destination: '/projects' },
      { source: '/ar/projects', destination: '/projects?lang=ar' },
      { source: '/en/about', destination: '/about' },
      { source: '/ar/about', destination: '/about?lang=ar' },
      { source: '/en/quality-approach', destination: '/quality' },
      { source: '/ar/quality-approach', destination: '/quality?lang=ar' },
      { source: '/quality-approach', destination: '/quality' },
      { source: '/en/contact', destination: '/contact' },
      { source: '/ar/contact', destination: '/contact?lang=ar' },
    ];
  },
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
