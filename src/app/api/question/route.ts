import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
  const data = await request.json()
  const question = await prisma.question.create({ data })
  return NextResponse.json(question)
}

export async function GET() {
  const questions = await prisma.question.findMany()
  return NextResponse.json(questions)
}
