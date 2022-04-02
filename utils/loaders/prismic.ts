import { Client } from 'prismic'
import type { PrismicDocument } from '@prismicio/types'
import type { PrismicLayoutData } from 'types/prismic'

export const getLayout = async (params = {}) => {
  const layoutDocument = await Client.getSingle<
    PrismicDocument<PrismicLayoutData>
  >('layout', params)
  return layoutDocument.data
}

export const getAllPages = async (params = {}) => {
  return await Client.getAllByType('page', params)
}

export const getPage = async (uid: string, params = {}) => {
  return await Client.getByUID('page', uid, params)
}

export const getHomepage = async (params = {}) => {
  return await Client.getSingle('homepage', params)
}
