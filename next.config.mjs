/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { qualities: [75, 80], remotePatterns: [{ protocol: "https", hostname: "images.squarespace-cdn.com", pathname: "/content/v1/6665b34c59b104790e9104b7/**" }], formats: ["image/avif", "image/webp"], deviceSizes: [390, 640, 828, 1080, 1440, 1920, 2400] },
  async redirects() {
    return [{ source: "/home", destination: "/", permanent: true }];
  },
};
export default nextConfig;
