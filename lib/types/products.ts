import type { Product as ProductModel, Category as CategoryModel } from "@prisma/client"

export type Product = ProductModel & {
  categories?: CategoryModel[]
}
