import { NextResponse } from 'next/server'
import { getCategories } from '@/services/categories'
import { errorMessage } from '@/utils/error'

export async function GET() {
  try {
    const categories = await getCategories()
    
    return NextResponse.json({ categories }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: errorMessage(err) }, { status: 400 })
  }
}
