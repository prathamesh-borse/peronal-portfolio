/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,

  experimental: {
    legacyBrowsers: false, // ✅ tells Next not to support IE / old browsers
  },

  compiler: {
    removeConsole: true, // ✅ strips console.logs in production
  },

  images: {
    formats: ["image/avif", "image/webp"], // ✅ better image compression
  },
};

export default nextConfig;
