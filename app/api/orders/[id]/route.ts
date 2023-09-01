import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getOrderById } from '@/services/orders'
import { errorMessage } from '@/utils/error'

export async function GET(
  request: NextRequest, 
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id
    const order = await getOrderById(id)
    
    return NextResponse.json({ order }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ message: errorMessage(err) }, { status: 400 })
  }
}
