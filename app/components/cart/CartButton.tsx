import { FaCartPlus } from 'react-icons/fa'
import styles from '@/styles/cart.module.scss'

const CartButton: React.FC = () => {
  return (
    <button className='btn btn-success' type='button'>
      <span className={styles.cartIcon}><FaCartPlus /></span> Add to Cart
    </button>
  )
}

export default CartButton
