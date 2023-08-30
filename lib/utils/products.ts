export const formatAmount = (price: number): string => price.toLocaleString('id')

export const formatPrice = (price: number): string => 'Rp' + formatAmount(price)
