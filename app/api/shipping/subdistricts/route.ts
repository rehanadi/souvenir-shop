import { type NextRequest, NextResponse } from 'next/server'
import { getSubdistricts } from '@/services/shipping'
import { errorMessage } from '@/utils/error'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const cityId = searchParams.get('cityId') || ''
    const subdistricts = await getSubdistricts(cityId)
    
    return NextResponse.json({ subdistricts }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: errorMessage(err) }, { status: 400 })
  }
}
