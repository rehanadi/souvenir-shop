const PageLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <main className='py-3'>
      <div className='container'>{children}</div>
    </main>
  )
}

export default PageLayout
