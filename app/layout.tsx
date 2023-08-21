import './styles/globals.scss'
import { Poppins } from 'next/font/google'
import { Providers } from '@/components/Providers'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import { site } from '@/config/site'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
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
