import ProductList from "@/components/products/ProductList"
import { Suspense } from "react"

export default function IndexPage() {
  return (
    <>
      <h1 className="py-5">Featured Products</h1>
      <Suspense fallback={<div>Loading Products...</div>}>
        <ProductList />
      </Suspense>
    </>
  )
}
