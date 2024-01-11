/** @type {import("next").NextConfig} */
const nextConfig = {
  i18n: {
    defaultLocale: 'ru',
    locales: ['en', 'ru'],
  },
  images: { domains: ['it-incubator.storage.yandexcloud.net'] },
  /* reactStrictMode: true,*/
}

module.exports = nextConfig
