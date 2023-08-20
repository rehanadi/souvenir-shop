import './styles/globals.scss'
import { Poppins } from 'next/font/google'
import { Providers } from '@/components/Providers'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import { site } from '@/config/constants'

const poppins = Poppins({
  weight: ['300', '400', '600', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: site.title,
  description: site.description
}

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body className={poppins.className}>
          <Header />
          <main className='py-3'>
            <div className='container'>{props.children}</div>
          </main>
          <Footer />
        </body>
      </html>
    </Providers>
  )
}
