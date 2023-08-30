import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getProductsByCategorySlug } from '@/services/products'

export async function GET(
  request: NextRequest, 
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug
    const products = await getProductsByCategorySlug(slug)
    
    return NextResponse.json({ products }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 })
  }
}
