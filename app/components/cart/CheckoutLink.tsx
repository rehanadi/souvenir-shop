import Link from "next/link"
import { MdShoppingCartCheckout } from 'react-icons/md'
import styles from '@/styles/cart.module.scss'

const CheckoutLink = () => {
  return (
    <Link 
      href='/checkout/shipping-address' 
      className={`btn btn-success ${styles.checkoutLink}`}
    >
      <span className={styles.btnIcon}>
        <MdShoppingCartCheckout />
      </span>
      {' '}
      Checkout
    </Link>
  )
}

export default CheckoutLink
