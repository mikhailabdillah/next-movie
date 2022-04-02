import React, { useContext, FC } from 'react'
import { PrismicLayoutData } from 'types/prismic'

const LayoutContext = React.createContext<Partial<PrismicLayoutData>>({})

export const LayoutConsumer = LayoutContext.Consumer

export const useLayout = () => {
  return useContext(LayoutContext)
}

export type Props = {
  layout: PrismicLayoutData
}

export const LayoutProvider: FC<Props> = ({ children, layout }) => {
  return (
    <LayoutContext.Provider value={layout}>{children}</LayoutContext.Provider>
  )
}

export default LayoutContext
