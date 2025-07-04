import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (id) {
    const quizUser = await prisma.quizUser.findUnique({ where: { id } })
    return NextResponse.json(quizUser)
  }
  const quizUsers = await prisma.quizUser.findMany()
  return NextResponse.json(quizUsers)
}

export async function POST(request: NextRequest) {
  const data = await request.json()
  const quizUser = await prisma.quizUser.create({ data })
  return NextResponse.json(quizUser)
}
