'use client'

// import { signIn } from 'next-auth/react'
import { FaRegEnvelope } from 'react-icons/fa'
import { toast } from 'react-toastify'
import styles from '@/styles/layout.module.scss'

type EmailSignInFormProps = React.FC<{ callbackUrl?: string }>

const EmailSignInForm: EmailSignInFormProps = ({ callbackUrl }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const { email, password } = Object.fromEntries(formData)

    if (!email || !password) {
      toast.error('Please fill email and password!')
      return
    }

    // signIn('credentials', { email, password, callbackUrl })
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className='mb-3'>
        <label htmlFor='email' className='form-label'>Email address</label>
        <input type='email' className='form-control' id='email' name='email' />
      </div>
      <div className='mb-4'>
        <label htmlFor='password' className='form-label'>Password</label>
        <input type='password' className='form-control' id='password' name='password' />
      </div>
      <div className='d-grid gap-2'>
        <button type='submit' className='btn btn-success'>
          <span className={styles.btnIcon}><FaRegEnvelope /></span> Continue with Email
        </button>
      </div>
    </form>
  )
}

export default EmailSignInForm
