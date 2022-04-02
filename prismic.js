/** Prismic Configuration */
import * as prismic from '@prismicio/client'

export const repositoryName = process.env.PRISMIC_REPOSITORY_NAME

// -- Route Resolver rules
// Manages the url links to internal Prismic documents two levels deep (optionals)
export const routeResolver = {
  routes: [
    {
      type: 'page',
      path: '/:uid',
    },
  ],
}

export const accessToken = process.env.PRISMIC_ACCESS_TOKEN || ''
const endpoint = prismic.getRepositoryEndpoint(repositoryName)

export const Client = prismic.createClient(endpoint, {
  accessToken: accessToken,
})

export const createPrismicClient = (config = {}) => {
  const client = Client

  client.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req
  })

  return client
}

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }
  return '/'
}
