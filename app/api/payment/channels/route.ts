import { NextResponse } from 'next/server'
import { getPaymentChannels } from '@/services/payment'

export async function GET() {
  try {
    const paymentChannels = await getPaymentChannels()
    
    return NextResponse.json({ paymentChannels }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 })
  }
}
