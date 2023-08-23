'use client'

import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { GoSignOut } from 'react-icons/go'
import styles from '@/styles/auth.module.scss'

const SignOutLink: React.FC = () => {
  return (
    <Link 
      className='dropdown-item' 
      href='#' 
      onClick={() => signOut()}
    >
      <span className={styles.btnIcon}><GoSignOut /></span> Sign Out
    </Link>
  )
}

export default SignOutLink
