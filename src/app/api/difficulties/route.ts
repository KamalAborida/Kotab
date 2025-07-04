import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (id) {
    const difficulty = await prisma.difficulty.findUnique({ where: { id } })
    return NextResponse.json(difficulty)
  }
  const difficulties = await prisma.difficulty.findMany()
  return NextResponse.json(difficulties)
}

export async function POST(request: NextRequest) {
  const data = await request.json()
  const difficulty = await prisma.difficulty.create({ data })
  return NextResponse.json(difficulty)
}
