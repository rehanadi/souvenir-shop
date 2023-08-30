import { type NextRequest, NextResponse } from 'next/server'
import { getCouriers } from '@/services/shipping'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const subdistrictId = searchParams.get('subdistrictId') || ''
    const couriers = await getCouriers(subdistrictId)
    
    return NextResponse.json({ couriers }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 })
  }
}
