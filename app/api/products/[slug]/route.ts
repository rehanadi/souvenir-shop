import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma/client'

export async function GET(
  request: NextRequest, 
  { params }: { params: { slug: string } }
) {
  const slug = params.slug
  const product = await prisma.product.findUnique({ where: { slug } })

  try {
    return NextResponse.json({ product }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
