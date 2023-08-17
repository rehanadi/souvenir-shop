import Script from 'next/script'
import { ToastContainer } from 'react-toastify'

const Footer: React.FC = () => {
  return (
    <>
      <footer>Footer</footer>
      <Script src='./assets/js/bootstrap.bundle.min.js' />
      <ToastContainer />
    </>
  )
}

export default Footer