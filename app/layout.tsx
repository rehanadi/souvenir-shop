import './styles/globals.scss'
import { Providers } from '@/lib/providers'
import { Poppins } from 'next/font/google'

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
          <main>{props.children}</main>
        </body>
      </html>
    </Providers>
  )
}
