import React from 'react'
import type * as PrismicT from '@prismicio/types'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { PrismicRichText } from '@prismicio/react'

type DefaultVariation = {
  title: PrismicT.RichTextField
  description: PrismicT.RichTextField
}

type PropsSlice = PrismicT.SharedSlice<
  'rich_text',
  PrismicT.SharedSliceVariation<'default', DefaultVariation>
>

const RichText: React.FC<{ slice: PropsSlice }> = ({ slice }) => {
  return (
    <>
      <Box as={'section'} position={'relative'}>
        <Container>
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading1: ({ children }) => (
                <Heading as={'h2'} size={'2xl'}>
                  {children}
                </Heading>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.description}
            components={{
              paragraph: ({ children }) => <Text mb={4}>{children}</Text>,
            }}
          />
        </Container>
      </Box>
    </>
  )
}

export default RichText
