import { headers } from "next/headers"
import Link from 'next/link'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import type { BreadcumbItem } from "@/lib/types"
import styles from '@/styles/checkout.module.scss'

export const dynamic = 'force-dynamic'

type CheckoutBreadcrumbItemProps = React.FC<{ index: number, item: BreadcumbItem }>

const CheckoutBreadcrumbItem: CheckoutBreadcrumbItemProps = ({ index, item }) => {
  const headersList = headers()
  const pathname = headersList.get('x-invoke-path')

  return (
    <>
      {index > 0 && (
        <li className='nav-item mt-2'>
          <MdOutlineKeyboardArrowRight />
        </li>
      )}
      <li className='nav-item'>
        <Link 
          className={'nav-link text-dark ' + (pathname === item.url ? styles.linkActive : '')} 
          href={item.url || ''}
        >{item.name}</Link>
      </li>
    </>
  )
}

export default CheckoutBreadcrumbItem
