import { NextResponse } from 'next/server'
import { getProducts } from '@/services/products'
import { errorMessage } from '@/utils/error'

export async function GET() {
  try {
    const products = await getProducts()
    
    return NextResponse.json({ products }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: errorMessage(err) }, { status: 400 })
  }
}
