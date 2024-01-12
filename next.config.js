/** @type {import("next").NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: 'ru',
    locales: ['en', 'ru'],
  },
  images: {
    remotePatterns: [
      {
        hostname: 'it-incubator.storage.yandexcloud.net',
        pathname: '**',
        protocol: 'https',
      },
    ],
  },
  reactStrictMode: false,
}

module.exports = nextConfig
