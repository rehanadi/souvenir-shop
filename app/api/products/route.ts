import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma/client'

export async function GET() {
  try {
    const products = await prisma.product.findMany()
    return NextResponse.json({ products }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
