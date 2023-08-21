import { FaCartPlus } from 'react-icons/fa'
import styles from '@/styles/cart.module.scss'

type CartButtonProps = React.FC<{ disabled?: boolean, onClick?(): void }>

const CartButton: CartButtonProps = ({ disabled = false, onClick }) => {
  return (
    <button 
      className='btn btn-success' 
      disabled={disabled} 
      onClick={onClick}
    >
      <span className={styles.cartIcon}><FaCartPlus /></span> Add to Cart
    </button>
  )
}

export default CartButton
