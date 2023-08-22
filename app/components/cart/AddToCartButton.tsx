import { FaCartPlus } from 'react-icons/fa'
import styles from '@/styles/cart.module.scss'

type AddToCartButtonProps = React.FC<{ disabled?: boolean, onClick?(): void }>

const AddToCartButton: AddToCartButtonProps = ({ disabled = false, onClick }) => {
  return (
    <button 
      className={`btn btn-success ${styles.addToCartBtn}`} 
      disabled={disabled} 
      onClick={onClick}
    >
      <span className={styles.cartIcon}><FaCartPlus /></span> Add to Cart
    </button>
  )
}

export default AddToCartButton
