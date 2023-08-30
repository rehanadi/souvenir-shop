import type { Cart, CartItem, ShippingAddress } from "@/lib/types"
import { getServerSessionUser } from "@/utils/auth"
import { formatPrice } from "@/utils/products"

export const formatShippingAddress = (shippingAddress: ShippingAddress) => {
  return {
    firstName: shippingAddress.firstName,
    lastName: shippingAddress.lastName,
    address: shippingAddress.address,
    provinceId: shippingAddress.provinceId,
    province: shippingAddress.province || '',
    cityId: shippingAddress.cityId,
    city: shippingAddress.city || '',
    subdistrictId: shippingAddress.subdistrictId,
    subdistrict: shippingAddress.subdistrict || '',
    postalCode: shippingAddress.postalCode,
    phone: shippingAddress.phone,
    company: shippingAddress.company,
    comments: shippingAddress.comments
  }
}

export const formatOrderItems = (cartItems: CartItem[] = []) => {
  return cartItems.map(item => {
    return {
      productId: item.id,
      name: item.name,
      image: item.image || '',
      price: item.price,
      qty: item.qty
    }
  })
}

export const validateOrder = async (cart: Cart): Promise<{ 
  error: string | null, 
  userId: string | undefined
}> => {
  let error = null
  const user = await getServerSessionUser()
  const userId = user?.id

  if (!userId) {
    error = 'Please sign in first!'
  } else if (cart.cartItems.length === 0) {
    error = 'Please fill in order items!'
  } else if (!cart.shippingAddress.subdistrictId) {
    error = 'Please fill in shipping address!'
  } else if (!cart.shippingMethod.courier) {
    error = 'Please choose shipping method!'
  } else if (!cart.paymentMethod.code) {
    error = 'Please choose payment method!'
  } else if (cart.totalPrice < cart.paymentMethod.minimumAmount) {
    error = `Total amount must be equal or larger than ${formatPrice(cart.paymentMethod.minimumAmount)}!`
  }

  return {
    error,
    userId
  }
}
