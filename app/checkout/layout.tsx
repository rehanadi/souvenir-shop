import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth"
import { headers } from "next/headers"
import { authOptions } from "@/config/auth"

const CheckoutLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const session = await getServerSession(authOptions)

  if (!session) {
    const headersList = headers()
    const pathname = headersList.get('x-invoke-path') || '/checkout/shipping-address'
    const callbackUrl = encodeURIComponent(pathname)

    redirect(`/signin?callbackUrl=${callbackUrl}`)
  }

  return (
    <>
      {children}
    </>
  )
}

export default CheckoutLayout
