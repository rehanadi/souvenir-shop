import './styles/globals.scss'
import { Poppins } from 'next/font/google'

import { Providers } from '@/lib/providers'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Souvenir Shop'
}

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body className={poppins.className}>
          <Header />
          <main>{props.children}</main>
          <Footer />
        </body>
      </html>
    </Providers>
  )
}
