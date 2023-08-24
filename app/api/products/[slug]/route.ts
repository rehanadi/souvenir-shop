import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getTopProducts, getProductsBySlug } from '@/services/products'

export async function GET(
  request: NextRequest, 
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug
    let result = {}
    
    if (slug === 'top') {
      const products = await getTopProducts()
      result = { products }
    } else {
      const product = await getProductsBySlug(slug)
      result = { product }
    }
    
    return NextResponse.json({ ...result }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
