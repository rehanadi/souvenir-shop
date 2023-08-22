import Link from "next/link"
import { FaShoppingCart } from "react-icons/fa"
import CartBadge from "@/components/cart/CartBadge"
import styles from '@/styles/cart.module.scss'

const CartLink: React.FC = () => {
  return (
    <Link 
      className='nav-link btn btn-success text-white' 
      href='/cart'
    >
      <span className={styles.btnIcon}>
        <FaShoppingCart />
      </span>
      {' '}
      <span className={styles.cartLabel}>
        Cart <CartBadge />
      </span>
    </Link>
  )
}

export default CartLink
