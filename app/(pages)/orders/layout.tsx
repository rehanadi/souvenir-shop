import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth"
import { headers } from "next/headers"
import { authOptions } from "@/config/auth"

const OrdersLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const session = await getServerSession(authOptions)

  if (!session) {
    const headersList = headers()
    const pathname = headersList.get('x-invoke-path') || '/orders'
    const callbackUrl = encodeURIComponent(pathname)

    redirect(`/signin?callbackUrl=${callbackUrl}`)
  }

  return (
    <>{children}</>
  )
}

export default OrdersLayout
