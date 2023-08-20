'use client'

import { signIn } from 'next-auth/react'
import { FaGoogle } from 'react-icons/fa'
import styles from '@/styles/layout.module.scss'

type GoogleSignInButtonProps = React.FC<{ callbackUrl?: string }>

const GoogleSignInButton: GoogleSignInButtonProps = ({ callbackUrl }) => {
  return (
    <button 
      className='btn btn-danger' 
      onClick={() => signIn('google', { callbackUrl })}
    >
      <span className={styles.btnIcon}><FaGoogle /></span> Continue with Google
    </button>
  )
}

export default GoogleSignInButton
