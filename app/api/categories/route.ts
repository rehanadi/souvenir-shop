import { NextResponse } from 'next/server'
import { getCategories } from '@/services/categories'

export async function GET() {
  try {
    const categories = await getCategories()
    
    return NextResponse.json({ categories }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 })
  }
}
