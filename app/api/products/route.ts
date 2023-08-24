import { NextResponse } from 'next/server'
import { getAllProducts } from '@/services/products'

export async function GET() {
  try {
    const products = await getAllProducts()
    
    return NextResponse.json({ products }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
