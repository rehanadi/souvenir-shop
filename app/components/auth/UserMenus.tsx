import Link from 'next/link'
import Image from 'next/image'
import { FaRegUserCircle } from 'react-icons/fa'
import { GrFavorite } from 'react-icons/gr'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import type { Session } from 'next-auth'
import { avatarImage } from '@/utils/images'
import SignOutLink from '@/components/auth/SignOutLink'
import styles from '@/styles/auth.module.scss'

type UserMenusProps = React.FC<{ session: Session }>

const UserMenus: UserMenusProps = ({ session: { user } }) => {
  return (
    <li className='nav-item dropdown'>
      <a className='nav-link btn btn-success text-white dropdown-toggle' href='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
        <Image 
          className='rounded-circle shadow-4-strong' 
          alt={user?.name || 'Profile'} 
          src={user?.image || avatarImage}
          width={25}
          height={25}
          style={{ marginRight: '.6rem' }} 
        /> 
        {user?.name || 'Profile'}
      </a>
      <ul className={`dropdown-menu dropdown-menu-end ${styles.userMenus}`}>
        <li>
          <Link className='dropdown-item' href='/account'>
            <span className={styles.btnIcon}>
              <FaRegUserCircle />
            </span>
            {' '}
            Account
          </Link>
        </li>
        <li>
          <Link className='dropdown-item' href='/orders'>
            <span className={styles.btnIcon}>
              <HiOutlineShoppingBag />
            </span>
            {' '}
            Orders
          </Link>
        </li>
        <li>
          <Link className='dropdown-item' href='/wishlist'>
            <span className={styles.btnIcon}>
              <GrFavorite />
            </span>
            {' '}
            Wishlist
          </Link>
        </li>
        <li><hr className='dropdown-divider' /></li>
        <li><SignOutLink /></li>
      </ul>
    </li>
  )
}

export default UserMenus
