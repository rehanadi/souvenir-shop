import { type NextRequest, NextResponse } from 'next/server'
import type { Order } from '@/lib/types'
import { createPaymentRequest } from '@/services/payment'

export async function POST(request: NextRequest) {
  try {
    const order = await request.json() as Order
    const redirectURL = await createPaymentRequest(order)
    
    return NextResponse.json({ redirectURL }, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 400 })
  }
}
