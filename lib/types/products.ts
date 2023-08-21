export type Product = {
  readonly id: string
  name: string
  slug: string 
  image?: string
  description?: string
  price: number
  isUseStock?: boolean
  baseStock?: boolean
  usedStock?: boolean
  isUseStock?: boolean
  remainStock?: boolean
  rating?: number
  reviewsCount?: number
  isActive?: boolean
  createdBy?: string
  createdAt?: datetime
  updatedBy?: string
  updatedAt?: datetime
}

export type Products = Product[]
