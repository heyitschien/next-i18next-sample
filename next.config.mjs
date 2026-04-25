/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "fr", "vi", "zz-pseudo"],
    defaultLocale: "en",
    // Do not override explicit paths like /zz-pseudo/* using Accept-Language (automation + Puppeteer send en).
    localeDetection: false
  }
};

export default nextConfig;
