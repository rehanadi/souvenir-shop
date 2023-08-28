import ShippingAddressForm from '@/components/checkout/ShippingAddressForm'
import CustomerInfo from '@/components/checkout/CustomerInfo'
import styles from '@/styles/checkout.module.scss'

export const metadata = {
  title: 'Shipping Address'
}

const ShippingAddressPage: React.FC = () => {
  return (
    <>
      <section className={styles.section}>
        <h4 className={styles.sectionTitle}>Customer information</h4>
        <CustomerInfo />
      </section>
      <section className={styles.section}>
        <h4 className={styles.sectionTitle}>Shipping address</h4>
        <ShippingAddressForm />
      </section>
    </>
  )
}

export default ShippingAddressPage
