import Link from "next/link"
import type { Category } from "@prisma/client"

type CategoryLinksProps = React.FC<{ categories?: Category[] }>

const CategoryLinks: CategoryLinksProps = ({ categories = [] }) => {
  return (
    <>
      {categories?.map((category, index) => (
        <span key={category?.id}>
          {index > 0 && ', '}
          <Link 
            className='text-success' 
            href={`/categories/${category?.slug}`}
          >
            {category?.name}
          </Link>
        </span>
      ))}
    </>
  )
}

export default CategoryLinks
