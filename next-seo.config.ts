import { NextSeoProps } from 'next-seo'

import type { PrismicLayoutData } from 'types/prismic'

const defaultSeo = (layout: PrismicLayoutData) => {
  const title = layout.metaTitle || ''
  const titleLong = layout.metaTitleLong || ''
  const description = layout.metaDescription || ''
  const image = layout.metaImage || ''
  const url = layout.metaUrl || ''

  const seo: NextSeoProps = {
    titleTemplate: `%s | ${title}`,
    description,
    defaultTitle: titleLong,
    canonical: url,
    openGraph: {
      site_name: title,
      title,
      description,
      type: 'website',
      url,
      images: [
        {
          url: image.url,
          alt: image.alt || '',
          width: image.dimensions?.width,
          height: image.dimensions?.height,
        },
      ],
    },
    twitter: {
      site: title,
      cardType: 'photo',
    },
    additionalLinkTags: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/favicon-16x16.png',
        sizes: '16x16',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicons/favicon-32x32.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicons/apple-touch-icon.png',
      },
      {
        rel: 'mask-icon',
        href: '/favicons/safari-pinned-tab.svg',
      },
      { rel: 'icon', href: 'favicons/favicon.ico' },

      { rel: 'manifest', href: '/site.manifest' },
    ],
  }

  return seo
}

export default defaultSeo
