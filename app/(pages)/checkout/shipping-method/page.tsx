import ShippingMethodForm from '@/components/checkout/ShippingMethodForm'
import styles from '@/styles/checkout.module.scss'

/*
export const metadata = {
  title: 'Shipping Method'
}
*/

const ShippingMethodPage: React.FC = () => {
  return (
    <>
      <section className={styles.section}>
        <h4 className={`mb-5 ${styles.sectionTitle}`}>Shipping Method</h4>
        <ShippingMethodForm />
      </section>
    </>
  )
}

export default ShippingMethodPage
