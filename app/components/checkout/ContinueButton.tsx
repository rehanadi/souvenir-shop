import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import styles from '@/styles/checkout.module.scss'

type ContinueButtonProps = React.FC<{ text: string, disabled: boolean }>

const ContinueButton: ContinueButtonProps = ({ text, disabled = false }) => {
  return (
    <button 
      type='submit' 
      className={`btn btn-success ${styles.linkBtn}`}
      disabled={disabled}
    >
      {text} <MdOutlineKeyboardArrowRight />
    </button>
  )
}

export default ContinueButton
