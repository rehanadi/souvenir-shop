export interface Product {
  id: string
  name: string
  slug: string 
  image?: string
  description?: string
  brand?: string
  category?: string
  price: number
  countInStock: number
  rating: number
  numReviews: number
}

export type Products = Product[]
