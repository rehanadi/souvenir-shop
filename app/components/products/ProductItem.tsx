import Link from 'next/link'
import Image from "next/image"
import { noImage, blurDataUrl } from '@/utils/images'
import { formatPrice } from '@/utils/products'
import type { Product } from '@/lib/types'
import Rating from '@/components/products/Rating'
import styles from '@/styles/products.module.scss'

type ProductItemProps = React.FC<{ product: Product }>

const ProductItem: ProductItemProps = ({ product }) => {
  return (
    <div className='card' >
      <Link href={`/products/${product?.slug}`}>
        <div className={styles.itemImageContainer}>
          <Image
            fill
            src={product?.image || noImage} 
            className='card-img-top' 
            alt={product?.name}
            sizes='50vw'
            placeholder='blur'
            blurDataURL={blurDataUrl}
          />
        </div>
      </Link>
      <div className='card-body'>
        <Link href={`/products/${product?.slug}`}>
          <h5 className={`${styles.title} card-title mb-1`}>{product?.name}</h5>
        </Link>
        <div className='card-text mb-2'>
          <Rating value={product?.rating || 0} />
        </div>
        <div className='card-text'>
          <span className={`${styles.price}`}>Rp{formatPrice(product?.price)}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductItem