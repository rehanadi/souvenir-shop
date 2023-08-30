import { type NextRequest, NextResponse } from 'next/server'
import { createOrder } from '@/services/orders'

export async function POST(request: NextRequest) {
  try {
    const cart = await request.json()
    const order = await createOrder(cart)
    
    return NextResponse.json({ order }, { status: 200 })
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ message: errorMessage }, { status: 400 })
  }
}
