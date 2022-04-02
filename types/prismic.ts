import type * as PrismicT from '@prismicio/types'

export type PrismicLayoutData = {
  // SEO tab
  metaTitle: PrismicT.KeyTextField
  metaDescription: PrismicT.KeyTextField
  metaImage: PrismicT.FilledImageFieldImage
  metaTitleLong: PrismicT.KeyTextField
  metaUrl: PrismicT.KeyTextField
  // Main tab
  logo: PrismicT.FilledImageFieldImage
}

export type PrismicGenericPageData = PrismicT.PrismicDocument<{
  metaTitle: PrismicT.KeyTextField
  metaDescription: PrismicT.KeyTextField
  metaImage: PrismicT.FilledImageFieldImage
  slices: PrismicT.SliceZone
}>
