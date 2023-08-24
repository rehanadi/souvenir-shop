import { NextResponse } from 'next/server'
import { getAllCategories } from '@/services/categories'

export async function GET() {
  try {
    const categories = await getAllCategories()
    
    return NextResponse.json({ categories }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
