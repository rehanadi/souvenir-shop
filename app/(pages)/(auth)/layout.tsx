import styles from '@/styles/auth.module.scss'

const AuthLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={`card w-50 mx-auto ${styles.wrapper}`}>
      {children}
    </div>
  )
}

export default AuthLayout
