import { NextResponse } from 'next/server'
import { getPaymentChannels } from '@/services/payment'
import { errorMessage } from '@/utils/error'

export async function GET() {
  try {
    const paymentChannels = await getPaymentChannels()
    
    return NextResponse.json({ paymentChannels }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: errorMessage(err) }, { status: 400 })
  }
}
