'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import styles from '@/styles/layout.module.scss'

const SignInButton: React.FC = () => {
  const { data: session } = useSession()

  return (
    <>
      {session ? (
        <button type='button' className='btn btn-light btn-outline-success' onClick={() => signOut()}>
          <span className={styles.btnIcon}><FaSignOutAlt /></span> Sign Out
        </button>
      ) : (
        <button type='button' className='btn btn-light btn-outline-success' onClick={() => signIn()}>
          <span className={styles.btnIcon}><FaSignInAlt /></span> Sign In
        </button>
      )}
    </>
  )
}

export default SignInButton
