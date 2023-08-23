type RemainStockProps = React.FC<{ isUseStock?: boolean, remainStock?: number }>

const RemainStock: RemainStockProps = ({ isUseStock = false, remainStock = 0 }) => {
  return (
    <>
      {isUseStock && (
        <>
          Stock:
          {' '}
          <span className='text-success'>
            {remainStock}
          </span>
        </>
      )}
    </>
  )
}

export default RemainStock
