import Link from 'next/link'
import Image from 'next/image'
import type { Session } from 'next-auth'
import SignOutLink from '@/components/auth/SignOutLink'

type UserProfileButtonProps = React.FC<{ session: Session }>

const UserProfileButton: UserProfileButtonProps = ({ session }) => {
  return (
    <ul className='navbar-nav bg-success' data-bs-theme='light'>
      <li className='nav-item dropdown'>
        <a className='nav-link dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
          <Image 
            className='rounded-circle shadow-4-strong' 
            alt={session.user?.name || 'Profile'} 
            src={session.user?.image || ''}
            width={25} 
            height={25}
            style={{ marginRight: '.5rem' }} 
          /> 
          {session.user?.name || 'Profile'}
        </a>
        <ul className='dropdown-menu dropdown-menu-end'>
          <li><Link className='dropdown-item' href='/account'>Dashboard</Link></li>
          <li><Link className='dropdown-item' href='/account/orders'>Orders</Link></li>
          <li><Link className='dropdown-item' href='/account/address'>Edit Address</Link></li>
          <li><Link className='dropdown-item' href='/account/profile'>Account Details</Link></li>
          <li><hr className='dropdown-divider' /></li>
          <li><SignOutLink /></li>
        </ul>
      </li>
    </ul>
  )
}

export default UserProfileButton
