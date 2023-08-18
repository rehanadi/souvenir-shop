'use client'

import { FaFacebook } from 'react-icons/fa'
import styles from '@/styles/layout.module.scss'

type FacebookSignInButtonProps = React.FC<{ callbackUrl?: string }>

const FacebookSignInButton: FacebookSignInButtonProps = ({ callbackUrl }) => {
  return (
    <button className='btn btn-primary'>
      <span className={styles.btnIcon}><FaFacebook /></span> Continue with Facebook
    </button>
  )
}

export default FacebookSignInButton
