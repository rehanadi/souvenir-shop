import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth"
import { headers } from "next/headers"
import { authOptions } from "@/config/auth"
import CheckoutBreadcrumb from '@/components/checkout/CheckoutBreadcrumb'
import OrderSummary from '@/components/checkout/OrderSummary'
import styles from '@/styles/checkout.module.scss'

/*
export const metadata = {
  title: 'Checkout'
}
*/

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
      <div className='wrapper'>
        <div className="row mt-5">
          <div className="col-lg-8" style={{ paddingRight: '2rem' }}>
            <section style={{ marginBottom: '5rem' }}>
              <h1 className="text-center mb-3">Checkout</h1>
              <CheckoutBreadcrumb />
            </section>
            {children}
          </div>
          <div className="col-lg-4 bg-body-secondary p-5">
            <section className={styles.section}>
              <h4 className={`text-center mt-4 mb-5 ${styles.sectionTitle}`}>Order summary</h4>
              <OrderSummary />
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutLayout
