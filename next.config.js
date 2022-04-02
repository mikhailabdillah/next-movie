const locales = ['en-us', 'id']

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SITE_URL: process.env.SITE_URL,
    PRISMIC_REPOSITORY_NAME: process.env.PRISMIC_REPOSITORY_NAME,
    PRISMIC_ACCESS_TOKEN: process.env.PRISMIC_ACCESS_TOKEN
  },
  i18n: {
    locales,
    defaultLocale: locales[0],
  },
  images: {
    domains: ['images.prismic.io', process.env.PRISMIC_REPOSITORY_NAME + '.cdn.prismic.io']
  },
}

module.exports = nextConfig
