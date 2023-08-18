import { FaExclamationTriangle } from "react-icons/fa";

type AlertProps = React.FC<{ variant?: string, text?: string }>

const Alert: AlertProps = ({ variant = 'danger', text = 'Something went wrong!' }) => {
  // console.error(text)

  const icon = variant === 'primary' ? <FaExclamationTriangle />
    : variant === 'info' ? <FaExclamationTriangle /> 
    : variant === 'success' ? <FaExclamationTriangle /> 
    : variant === 'warning' ? <FaExclamationTriangle /> 
    : variant === 'danger' ? <FaExclamationTriangle /> 
    : <></>

  return (
    <div className={`alert alert-${variant} d-flex align-items-center`} role='alert'>
      <span style={{ marginRight: '.5rem' }}>{icon}</span>
      <div>{text}</div>
    </div>
  )
}

export default Alert
