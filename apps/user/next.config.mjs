/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  images: {
    domains: [
      "github.com",
      "avatars.githubusercontent.com",
      "shopee.co.id",
      "tokopedia.com",
      "p16-sign-va.tiktokcdn.com",
    ],
  },
};

export default nextConfig;
