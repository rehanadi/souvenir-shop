'use client'

import { signIn } from 'next-auth/react'
import { FaFacebook } from 'react-icons/fa'
import styles from '@/styles/auth.module.scss'

type FacebookSignInButtonProps = React.FC<{ callbackUrl?: string }>

const FacebookSignInButton: FacebookSignInButtonProps = ({ callbackUrl }) => {
  return (
    <button 
      className='btn btn-primary' 
      onClick={() => signIn('facebook', { callbackUrl })}
    >
      <span className={styles.btnIcon}><FaFacebook /></span> Continue with Facebook
    </button>
  )
}

export default FacebookSignInButton
