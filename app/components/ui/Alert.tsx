import { FaExclamationTriangle } from "react-icons/fa";
import styles from '@/styles/layout.module.scss'

type AlertProps = React.FC<{ variant?: string, text?: string }>

const Alert: AlertProps = ({ variant = 'danger', text = 'Something went wrong!' }) => {
  const icon = variant === 'primary' ? <FaExclamationTriangle />
    : variant === 'info' ? <FaExclamationTriangle /> 
    : variant === 'success' ? <FaExclamationTriangle /> 
    : variant === 'warning' ? <FaExclamationTriangle /> 
    : variant === 'danger' ? <FaExclamationTriangle /> 
    : <></>

  return (
    <div className={`alert alert-${variant} d-flex align-items-center`} role='alert'>
      <span className={styles.alertIcon}>{icon}</span>
      <div>{text}</div>
    </div>
  )
}

export default Alert
