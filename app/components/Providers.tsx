'use client'

import { SessionProvider } from 'next-auth/react'
import { Provider } from 'react-redux'
import { reduxStore } from '@/lib/redux'

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <SessionProvider>
      <Provider store={reduxStore}>{children}</Provider>
    </SessionProvider>
  )
}
