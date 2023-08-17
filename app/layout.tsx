import './styles/globals.scss'
import { Poppins } from 'next/font/google'
import { Providers } from '@/components/Providers'
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'
import { Site } from '@/lib/types'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: Site.title,
  description: Site.description
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
