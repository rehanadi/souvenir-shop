import Link from 'next/link'
import Image from "next/image"
import noImage from '@/public/assets/images/no-img.png'
import Rating from '@/components/products/Rating'
import { Product } from '@/lib/types'
import { formatPrice } from '@/lib/utils/products'
import styles from '@/styles/products.module.scss'

type ProductItemProps = React.FC<{ product: Product }>

const ProductItem: ProductItemProps = ({ product }) => {
  return (
    <div className='card' >
      <Link href={`/products/${product?.slug}`}>
        <Image 
          src={product?.image || noImage} 
          className='card-img-top' 
          alt={product?.name}
          width={250}
          height={250}
        />
      </Link>
      <div className='card-body'>
        <Link href={`/products/${product?.slug}`}>
          <h5 className={`${styles.productTitle} card-title mb-1`}>{product?.name}</h5>
        </Link>
        <div className='card-text mb-2'>
          <Rating value={product?.rating || 0} />
        </div>
        <div className='card-text'>
          <span className={`${styles.productPrice}`}>Rp{formatPrice(product?.price)}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductItem