import Link from "next/link"
import type { BreadcumbItems } from "@/lib/types"

type BreadcrumbProps = React.FC<{ items: BreadcumbItems }> 

const Breadcrumb: BreadcrumbProps = ({ items = [] }) => {
  return (
    <nav aria-label='breadcrumb' className="py-3">
      <ol className='breadcrumb'>
        <li className='breadcrumb-item'>
          <Link href='/'>Home</Link>
        </li>
        {items.map((item, index) => 
          item.url 
          ? (
            <li key={index} className='breadcrumb-item'>
              <Link href={item.url}>{item.name}</Link>
            </li>
          )
          : (
            <li key={index} className='breadcrumb-item active' aria-current='page'>
              {item.name}
            </li>
          )
        )}
      </ol>
    </nav>
  )
}

export default Breadcrumb
