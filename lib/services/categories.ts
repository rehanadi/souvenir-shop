import prisma from '@/lib/prisma/client'

export const getCategories = async () => {
  const categories = await prisma.category.findMany({
    orderBy: {
      name: 'asc'
    }
  })

  return categories
}

export const getCategoryBySlug = async (slug: string) => {
  const category = await prisma.category.findUnique({ 
    where: { slug }
  })

  return category
}
