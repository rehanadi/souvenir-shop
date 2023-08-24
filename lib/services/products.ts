import prisma from '@/lib/prisma/client'

export const getAllProducts = async () => {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return products
}

export const getTopProducts = async () => {
  const products = await prisma.product.findMany({
    take: 8,
    orderBy: [{
      rating: 'desc'
    }, {
      createdAt: 'desc'
    }]
  })

  return products
}

export const getProductsBySlug = async (slug: string) => {
  const product = await prisma.product.findUnique({ 
    where: { slug },
    include: { categories: true } 
  })

  return product
}

export const getProductsByCategorySlug = async (slug: string) => {
  const category = await prisma.category.findUnique({ 
    select : {
      products: {
        orderBy: {
          createdAt: 'desc'
        }
      }
    },
    where: {
      slug
    }
  })

  const products = category?.products || []
  return products
}
