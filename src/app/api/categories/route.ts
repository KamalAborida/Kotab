import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (id) {
    const category = await prisma.category.findUnique({ where: { id } })
    return NextResponse.json(category)
  }
  const categories = await prisma.category.findMany()
  return NextResponse.json(categories)
}

export async function POST(request: NextRequest) {
  const data = await request.json()
  const category = await prisma.category.create({ data })
  return NextResponse.json(category)
}
