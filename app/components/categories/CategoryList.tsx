'use client'

import Link from "next/link"
import { useGetCategoriesQuery } from "@/lib/redux"
import { Category } from "@prisma/client"
import styles from '@/styles/categories.module.scss'

const CategoryList: React.FC = () => {
  const { data } = useGetCategoriesQuery(null)
  const categories: Category[] = data?.categories || []

  return (
    <ul className='nav flex-column'>
      {categories?.map(category => (
        <li key={category?.id} className='nav-item'>
          <Link 
            className={`nav-link text-success ${styles.categoryLink}`} 
            href={`/categories/${category?.slug}`}
          >{category?.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default CategoryList
