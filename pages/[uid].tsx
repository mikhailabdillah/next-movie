import { components } from 'slices'
import { SliceZone } from '@prismicio/react'
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { PrismicDocument } from '@prismicio/types'
import { getAllPages, getPage, getLayout } from 'utils/loaders/prismic'
import type { PrismicLayoutData } from 'types/prismic'

type PageProps = {
  doc: PrismicDocument
  layout: PrismicLayoutData
}

const Page: NextPage<PageProps> = ({ doc }) => {
  return (
    <>
      <SliceZone
        slices={doc.data.slices}
        // @ts-ignore-next-line
        components={components}
      />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPages().then((res) =>
    res.map(({ uid }) => ({ params: { uid: uid || undefined } }))
  )

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  PageProps,
  { uid: string },
  { ref: string }
> = async ({ params = {}, previewData = {} }) => {
  if (!params?.uid) throw 'page not found'

  const ref = previewData ? previewData.ref : undefined
  const page = await getPage(params.uid, { ref: ref })
  const layout = await getLayout(ref)

  return {
    props: { doc: page, layout },
  }
}

export default Page
