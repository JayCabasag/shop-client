/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '1000logos.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'logos-world.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.samsung.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i02.appmifile.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i01.appmifile.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dlcdnwebimgs.asus.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'store.storeimages.cdn-apple.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.oppo.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'technave.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
