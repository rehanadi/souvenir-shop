import Script from 'next/script'
import { ToastContainer } from 'react-toastify'
import { SITE_TITLE } from '@/config/constants'

const Footer: React.FC = () => {
  return (
    <>
      <footer className='py-3 text-center'>
        <div className="container">{SITE_TITLE} &copy; {new Date().getFullYear()}</div>
      </footer>
      <Script src='/assets/js/bootstrap.bundle.min.js' />
      <ToastContainer position='bottom-right' />
    </>
  )
}

export default Footer
