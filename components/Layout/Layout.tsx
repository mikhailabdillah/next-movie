import { PrismicDocument } from '@prismicio/types'

type LayoutProps = {
  doc?: PrismicDocument
  layout?: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
