import prisma from '@/lib/prisma/client'

export const getPaymentChannels = async () => {
  const paymentChannels = await prisma.paymentChannel.findMany({
    orderBy: { position: 'asc' },
    include: { paymentMethods: true }
  })

  return paymentChannels
}
