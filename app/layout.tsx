import './styles/globals.scss'
import { Poppins } from 'next/font/google'
import { Providers } from '@/components/layout/Providers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { SITE_TITLE, SITE_DESCRIPTION } from '@/config/constants'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
})

export const metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION
}

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body className={poppins.className}>
          <Header />
          {props.children}
          <Footer />
        </body>
      </html>
    </Providers>
  )
}
