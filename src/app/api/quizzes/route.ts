import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (id) {
    const quiz = await prisma.quiz.findUnique({ where: { id } })
    return NextResponse.json(quiz)
  }
  const quizzes = await prisma.quiz.findMany()
  return NextResponse.json(quizzes)
}

export async function POST(request: NextRequest) {
  const data = await request.json()
  const quiz = await prisma.quiz.create({ data })
  return NextResponse.json(quiz)
}
