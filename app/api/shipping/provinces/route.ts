import { NextResponse } from 'next/server'
import { getProvinces } from '@/services/shipping'

export async function GET() {
  try {
    const provinces = await getProvinces()
    
    return NextResponse.json({ provinces }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
