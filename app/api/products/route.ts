import { NextResponse } from 'next/server';
import products from '../../../lib/data/products'

export async function GET() {
  try {
    return NextResponse.json({ products }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
