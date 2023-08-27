import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

const BackToCartLink: React.FC = () => {
  return (
    <span className='text-success'>
      <FiArrowLeft />
      {' '}
      <Link href='/cart'>
        Back
      </Link>
    </span>
  )
}

export default BackToCartLink
