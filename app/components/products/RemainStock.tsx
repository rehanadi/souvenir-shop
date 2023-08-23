type RemainStockProps = React.FC<{ isUseStock?: boolean, remainStock?: number }>

const RemainStock: RemainStockProps = ({ isUseStock = false, remainStock = 0 }) => {
  return (
    <>
      {isUseStock && (
        <div style={{ marginTop: '2.5rem' }}>
          Stock:
          {' '}
          <span className='text-success'>
            {remainStock} remaining
          </span>
        </div>
      )}
    </>
  )
}

export default RemainStock
