import PaymentMethodForm from '@/components/checkout/PaymentMethodForm'
import styles from '@/styles/checkout.module.scss'

export const metadata = {
  title: 'Payment Method'
}

const PaymentMethodPage: React.FC = () => {
  return (
    <>
      <section className={styles.section}>
        <h4 className={`mb-5 ${styles.sectionTitle}`}>Payment Method</h4>
        <PaymentMethodForm />
      </section>
    </>
  )
}

export default PaymentMethodPage
