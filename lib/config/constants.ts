// Site

export const SITE_TITLE: string = 'Souvenir Shop'
export const SITE_DESCRIPTION: string = 'Best store for gifts and souvenirs'

// API

export const BASE_URL: string = ''
export const PRODUCTS_URL: string = '/api/products'
export const CATEGORIES_URL: string = '/api/categories'
export const USERS_URL: string = '/api/users'
export const SHIPPING_URL: string = '/api/shipping'
export const PAYMENT_URL: string = '/api/payment'
export const ORDERS_URL: string = '/api/orders'
export const MIDTRANS_PAYMENT_LINK_URL: string = '/v1/payment-links'
export const REVALIDATE_TIMES: number = 60

// Shipping

export const ORIGIN_SUBDISTRICT_ID: string = '752'
export const DESTINATION_TYPE: string = 'subdistrict'
export const WEIGHT_IN_GRAMS: number = 1000
export const COURIERS: string = 'jne:pos:tiki:sicepat'

// Payment

export const CURRENCY: string = 'IDR'
export const SUCCESS_REDIRECT_URL: string = 'http://localhost:3000/orders'
export const FAILURE_REDIRECT_URL: string = 'http://localhost:3000/orders'
export const SHOULD_SEND_EMAIL: boolean = true
export const PAYMENT_DESCRIPTION: string = 'Invoice for Souvenir Shop'
