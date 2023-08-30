import { MdPayment } from 'react-icons/md'
import styles from '@/styles/orders.module.scss'

const PaymentButton = () => {
  return (
    <button className='btn btn-success'>
      <span className={styles.btnIcon}>
        <MdPayment />
      </span>
      {' '}
      Pay Order
    </button>
  )
}

export default PaymentButton
