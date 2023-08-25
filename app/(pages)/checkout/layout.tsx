import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth"
import { headers } from "next/headers"
import { authOptions } from "@/config/auth"
import CheckoutBreadcrumb from '@/components/checkout/CheckoutBreadcrumb'
import styles from '@/styles/checkout.module.scss'

export const metadata = {
  title: 'Checkout'
}

const CheckoutLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const session = await getServerSession(authOptions)

  if (!session) {
    const headersList = headers()
    const pathname = headersList.get('x-invoke-path') || '/checkout'
    const callbackUrl = encodeURIComponent(pathname)

    redirect(`/signin?callbackUrl=${callbackUrl}`)
  }

  return (
    <>
      <div className={styles.wrapper}>
        <div className="row mt-5">
          <div className="col-lg-8" style={{ paddingRight: '2rem' }}>
            <section style={{ marginBottom: '5rem' }}>
              <h1 className="text-center mb-3">Checkout</h1>
              <CheckoutBreadcrumb />
            </section>
            {children}
          </div>
          <div className="col-lg-4 bg-body-secondary" style={{ minHeight: '100vh' }}>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutLayout
