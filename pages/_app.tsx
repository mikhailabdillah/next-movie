import Link from 'next/link'
import { ChakraProvider } from '@chakra-ui/react'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from 'prismic'
import { LayoutProvider } from 'context/LayoutContext'
import Layout from 'components/Layout'
import theme from 'theme'

import type { PrismicLayoutData } from 'types/prismic'
import type { PrismicDocument } from '@prismicio/types'
import type { AppProps } from 'next/app'

function MyApp({
  Component,
  pageProps,
}: AppProps<{ layout: PrismicLayoutData; doc?: PrismicDocument }>) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <ChakraProvider theme={theme}>
        <PrismicPreview repositoryName={repositoryName}>
          <LayoutProvider layout={pageProps.layout}>
            <Layout doc={pageProps.doc} layout={pageProps.layout}>
              <Component {...pageProps} />
            </Layout>
          </LayoutProvider>
        </PrismicPreview>
      </ChakraProvider>
    </PrismicProvider>
  )
}

export default MyApp
