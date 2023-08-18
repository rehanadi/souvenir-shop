import Link from 'next/link'
import Image from "next/image"
import noImage from '@/public/assets/images/no-img.png'
import styles from '@/styles/products.module.scss'
import { Product } from '@/lib/types'
import Rating from '@/components/products/Rating'

type ProductItemProps = React.FC<{ product: Product }>

const ProductItem: ProductItemProps = ({ product }) => {
  return (
    <div className='card' style={{'width': '18rem'}}>
      <Link href={`/products/${product?.slug}`}>
        <Image 
          src={product?.image || noImage} 
          className='card-img-top' 
          alt={product?.name}
          width={300}
          height={200}
        />
      </Link>
      <div className='card-body'>
        <Link href={`/products/${product?.slug}`}>
          <h5 className={`${styles.productTitle} card-title`}>{product?.name}</h5>
        </Link>
        <div className='card-text mt-1'>
          <Rating value={product?.rating} />
        </div>
        <div className='card-text mt-2'>${product?.price}</div>
      </div>
    </div>
  )
}

export default ProductItem