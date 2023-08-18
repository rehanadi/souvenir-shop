import Script from 'next/script'
import { ToastContainer } from 'react-toastify'
import { Site } from '@/lib/types'

const Footer: React.FC = () => {
  return (
    <>
      <footer className='py-3'>
        <div className="container">&copy; {Site.title} - 2023</div>
      </footer>
      <Script src='/assets/js/bootstrap.bundle.min.js' />
      <ToastContainer />
    </>
  )
}

export default Footer
