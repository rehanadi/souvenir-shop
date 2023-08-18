import { Suspense } from "react"
import ProductList from "@/components/products/ProductList"
import Spinner from "./components/ui/Spinner"

export default function IndexPage() {
  return (
    <>
      <h1 className="py-5 text-center">Featured Products</h1>
      <Suspense fallback={<Spinner />}>
        <ProductList />
      </Suspense>
    </>
  )
}
