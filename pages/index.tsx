import { SliceZone } from '@prismicio/react'
import { components } from 'slices'
import type { PrismicDocument } from '@prismicio/types'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { PrismicLayoutData } from 'types/prismic'
import { getHomepage, getLayout } from 'utils/loaders/prismic'

type PageProps = {
  doc: PrismicDocument
  layout: PrismicLayoutData
}

const Home: NextPage<PageProps> = ({ doc }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SliceZone
        slices={doc.data.slices}
        // @ts-ignore-next-line
        components={components}
      />
    </div>
  )
}

export const getStaticProps: GetStaticProps<PageProps> = async ({
  previewData,
}) => {
  const data = await getHomepage(previewData)
  const layout = await getLayout(previewData)

  return {
    props: {
      doc: data,
      layout,
    },
  }
}

export default Home
