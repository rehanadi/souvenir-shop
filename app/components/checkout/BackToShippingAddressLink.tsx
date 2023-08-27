import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

const BackToShippingAddressLink: React.FC = () => {
  return (
    <span className='text-success'>
      <FiArrowLeft />
      {' '}
      <Link href='/checkout/shipping-address'>
        Back
      </Link>
    </span>
  )
}

export default BackToShippingAddressLink
