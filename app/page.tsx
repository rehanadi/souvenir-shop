import { Suspense } from "react"
import TopProductList from "@/components/products/TopProductList"
import Spinner from "@/components/ui/Spinner"
import Carousel from "@/components/ui/Carousel"

export default function IndexPage() {
  return (
    <>
      <Carousel />
      <main className='py-3'>
        <div className='container'>
          <h1 className="py-5 text-center">Featured Products</h1>
          <Suspense fallback={<Spinner />}>
            <div style={{ marginBottom: '10rem' }}>
              <TopProductList />
            </div>
          </Suspense>
        </div>
      </main>
    </>
  )
}
