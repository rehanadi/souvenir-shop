import Script from 'next/script'
import { ToastContainer } from 'react-toastify'
import { site } from '@/config/constants'

const Footer: React.FC = () => {
  return (
    <>
      <footer className='py-3'>
        <div className="container">&copy; {site.title} - 2023</div>
      </footer>
      <Script src='/assets/js/bootstrap.bundle.min.js' />
      <ToastContainer />
    </>
  )
}

export default Footer
