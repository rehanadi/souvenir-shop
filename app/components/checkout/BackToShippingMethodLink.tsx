import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

const BackToShippingMethodLink: React.FC = () => {
  return (
    <span className='text-success'>
      <FiArrowLeft />
      {' '}
      <Link href='/checkout/shipping-method'>
        Back
      </Link>
    </span>
  )
}

export default BackToShippingMethodLink
