import Script from 'next/script'
import { ToastContainer } from 'react-toastify'
import { SITE_TITLE } from '@/config/constants'

const Footer: React.FC = () => {
  return (
    <>
      <footer className='py-3'>
        <div className="container">&copy; {SITE_TITLE} - {new Date().getFullYear()}</div>
      </footer>
      <Script src='/assets/js/bootstrap.bundle.min.js' />
      <ToastContainer />
    </>
  )
}

export default Footer
