import { NextResponse } from 'next/server'
import { getProvinces } from '@/services/shipping'
import { errorMessage } from '@/utils/error'

export async function GET() {
  try {
    const provinces = await getProvinces()
    
    return NextResponse.json({ provinces }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: errorMessage(err) }, { status: 400 })
  }
}
