import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (id) {
    const question = await prisma.question.findUnique({ where: { id } })
    return NextResponse.json(question)
  }
  const questions = await prisma.question.findMany()
  return NextResponse.json(questions)
}

export async function POST(request: NextRequest) {
  const data = await request.json()
  const question = await prisma.question.create({ data })
  return NextResponse.json(question)
}
