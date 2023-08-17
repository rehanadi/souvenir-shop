'use client'

import { Provider } from 'react-redux'
import { reduxStore } from '@/lib/redux'

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <Provider store={reduxStore}>{children}</Provider>
}
