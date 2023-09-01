import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getCategoryBySlug } from '@/services/categories'
import { errorMessage } from '@/utils/error'

export async function GET(
  request: NextRequest, 
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug
    const category = await getCategoryBySlug(slug)
    
    return NextResponse.json({ category }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: errorMessage(err) }, { status: 400 })
  }
}
