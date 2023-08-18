const Spinner: React.FC = () => {
  return (
    <div className='text-center'>
      <div className='spinner-border spinner-border-lg' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  )
}

export default Spinner
