import CategoryList from "@/components/categories/CategoryList"
import Breadcrumb from "@/components/ui/Breadcrumb"
import styles from '@/styles/categories.module.scss'

export const metadata = {
  title: 'Categories'
}

const CategoriesPage: React.FC = () => {
  const breadcrumbItems = [{
    name: 'Categories'
  }]
  
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <div className={styles.wrapper}>
        <div className="row">
          <div className="col-12">
            <h1 className="mt-3 mb-5">Categories</h1>
            <CategoryList />
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoriesPage
