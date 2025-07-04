import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
  const data = await request.json()
  const difficulty = await prisma.difficulty.create({ data })
  return NextResponse.json(difficulty)
}

export async function GET() {
  const difficulties = await prisma.difficulty.findMany()
  return NextResponse.json(difficulties)
}
