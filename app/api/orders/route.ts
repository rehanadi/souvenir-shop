import { type NextRequest, NextResponse } from 'next/server'
import { createOrder } from '@/services/orders'
import { errorMessage } from '@/utils/error'

export async function POST(request: NextRequest) {
  try {
    const cart = await request.json()
    const order = await createOrder(cart)
    
    return NextResponse.json({ order }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: errorMessage(err) }, { status: 400 })
  }
}
