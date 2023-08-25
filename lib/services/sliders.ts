import prisma from '@/lib/prisma/client'

export const getSliders = async () => {
  const sliders = await prisma.slider.findMany({
    orderBy: {
      createdAt: 'asc'
    }
  })

  return sliders
}
