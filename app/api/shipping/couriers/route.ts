import { type NextRequest, NextResponse } from 'next/server'
import { getCouriers } from '@/services/shipping'
import { errorMessage } from '@/utils/error'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const subdistrictId = searchParams.get('subdistrictId') || ''
    const couriers = await getCouriers(subdistrictId)
    
    return NextResponse.json({ couriers }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: errorMessage(err) }, { status: 400 })
  }
}
