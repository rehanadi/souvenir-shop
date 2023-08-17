import { Product } from '@/types/index'
import Link from 'next/link'
import Image from "next/image"
import products from "@/lib/data/products"
import noImage from '@/public/assets/images/no-img.png'
import styles from '@/styles/products.module.scss'

const ProductItem: React.FC<{ productId: string }> = ({ productId }) => {
  const product = products.find(product => product.id === productId)

  return (
    <div className="col-12 col-sm-6 col-lg-4 pb-5">
      <div className='card' style={{'width': '18rem'}}>
        <Image 
          src={product?.image || noImage} 
          className='card-img-top' 
          alt={product?.name || ''}
          width={300}
          height={200}
        />
        <div className='card-body'>
          <Link href={'/products'}>
            <h5 className={`${styles.productTitle} card-title`}>{product?.name}</h5>
          </Link>
          <p className='card-text'>${product?.price}</p>
        </div>
        <div className='card-body'>
          <Link href='#' className='card-link'>Add to Cart</Link>
          <Link href='#' className='card-link'>Buy Now</Link>
        </div>
      </div>
    </div>
  )
}

export default ProductItem