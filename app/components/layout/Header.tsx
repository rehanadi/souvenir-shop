import { FaShopify } from 'react-icons/fa'
import Link from "next/link"
import { site } from '@/config/site'
import styles from '@/styles/layout.module.scss'
import SignInButton from '@/components/auth/SignInButton'

const Header: React.FC = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg bg-success' data-bs-theme="dark">
        <div className='container'>
          <Link className={`navbar-brand ${styles.headerLogo}`} href='/'>
            <span className={styles.logoIcon}><FaShopify /></span> {site.title}
          </Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link' href='/products'>Products</Link>
              </li>
            </ul>
            <SignInButton />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
