'use client'

import { signIn } from 'next-auth/react'
import { FaUserCircle } from 'react-icons/fa'
import styles from '@/styles/layout.module.scss'

const SignInButton: React.FC = () => {
  return (
    <button 
      className='btn btn-success' 
      onClick={() => signIn()}
    >
      <span className={styles.btnIcon}><FaUserCircle /></span> Sign In
    </button>
  )
}

export default SignInButton
