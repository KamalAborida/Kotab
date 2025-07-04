import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
  const data = await request.json()
  const quiz = await prisma.quiz.create({ data })
  return NextResponse.json(quiz)
}

export async function GET() {
  const quizzes = await prisma.quiz.findMany({ include: { questions: true } })
  return NextResponse.json(quizzes)
}
