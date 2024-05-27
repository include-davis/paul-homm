/** @type {import('next').NextConfig} */

const i18n = {
  locales: ["en", "zh", "vi", "ko", "es", "hmn"],
  defaultLocale: "en",
};

const nextConfig = {
  reactStrictMode: true,
  i18n: { ...i18n },
};

export default nextConfig;
