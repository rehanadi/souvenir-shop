import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth"
import { headers } from "next/headers"
import { authOptions } from "@/config/auth"

import Breadcrumb from "@/components/ui/Breadcrumb"
import ShippingAddressForm from '@/components/checkout/ShippingAddressForm'
import CustomerInfo from '@/components/checkout/CustomerInfo'
import styles from '@/styles/checkout.module.scss'

export const metadata = {
  title: 'Shipping Address'
}

const CheckoutPage: React.FC = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    const headersList = headers()
    const pathname = headersList.get('x-invoke-path') || '/checkout'
    const callbackUrl = encodeURIComponent(pathname)

    redirect(`/signin?callbackUrl=${callbackUrl}`)
  }

  const breadcrumbItems = [{
    name: 'Cart',
    url: '/cart'
  }, {
    name: 'Checkout',
  }]

  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className={styles.wrapper}>
        <div className="row">
          <div className="col-12">
            <h1 className="mt-3 mb-5">Checkout</h1>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-8">
            <section className={styles.section}>
              <h4 className={styles.subTitle}>Customer information</h4>
              <CustomerInfo user={session.user} />
            </section>
            <section className={styles.section}>
              <h4 className={styles.subTitle}>Shipping address</h4>
              <ShippingAddressForm />
            </section>
          </div>
          <div className="col-lg-4 bg-body-secondary">
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckoutPage
