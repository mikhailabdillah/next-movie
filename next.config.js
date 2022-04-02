const locales = ['en-us', 'id']

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales,
    defaultLocale: locales[0],
  },
  images: {
    domains: ['images.prismic.io', 'next-movie.cdn.prismic.io']
  },
}

module.exports = nextConfig
