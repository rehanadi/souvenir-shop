import { type NextRequest, NextResponse } from 'next/server'
import { createOrder } from '@/services/orders'

export async function POST(request: NextRequest) {
  try {
    const cart = await request.json()
    const order = await createOrder(cart)
    
    return NextResponse.json({ order }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 })
  }
}
