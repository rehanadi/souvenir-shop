import { formatAmount } from "@/utils/products"

type RemainStockProps = React.FC<{ isUseStock?: boolean, remainStock?: number }>

const RemainStock: RemainStockProps = ({ isUseStock = false, remainStock = 0 }) => {
  return (
    <>
      {isUseStock && (
        <>
          Stock:
          {' '}
          <span className='text-success'>
            {formatAmount(remainStock)}
          </span>
        </>
      )}
    </>
  )
}

export default RemainStock
