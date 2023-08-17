import products from '@/lib/data/products'
import ProductItem from './ProductItem'

const ProductList: React.FC = () => {
  return (
    <div className='row'>
      {products.map(product => (
        <ProductItem key={product.id} productId={product.id} />
      ))}
    </div>
  )
}

export default ProductList