import { type NextRequest, NextResponse } from 'next/server'
import { getCities } from '@/services/shipping'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const provinceId = searchParams.get('provinceId') || ''
    const cities = await getCities(provinceId)
    
    return NextResponse.json({ cities }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
