import Script from 'next/script'
import { ToastContainer } from 'react-toastify'
import { site } from '@/config/site'

const Footer: React.FC = () => {
  return (
    <>
      <footer className='py-3'>
        <div className="container">&copy; {site.title} - {new Date().getFullYear()}</div>
      </footer>
      <Script src='/assets/js/bootstrap.bundle.min.js' />
      <ToastContainer />
    </>
  )
}

export default Footer
