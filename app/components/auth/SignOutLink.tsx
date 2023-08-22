'use client'

import Link from 'next/link'
import { signOut } from 'next-auth/react'

const SignOutLink: React.FC = () => {
  return (
    <Link 
      className='dropdown-item' 
      href='#' 
      onClick={() => signOut()}
    >
      Sign Out
    </Link>
  )
}

export default SignOutLink
