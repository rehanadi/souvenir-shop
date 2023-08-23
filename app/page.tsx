import { Suspense } from "react"
import TopProductList from "@/components/products/TopProductList"
import Spinner from "./components/ui/Spinner"

export default function IndexPage() {
  return (
    <>
      <h1 className="py-5 text-center">Featured Products</h1>
      <Suspense fallback={<Spinner />}>
        <div className="row" style={{ marginBottom: '10rem' }}>
          <div className="col-12">
            <TopProductList />
          </div>
        </div>
      </Suspense>
    </>
  )
}
