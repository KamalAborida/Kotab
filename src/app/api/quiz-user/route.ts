import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const quizUsers = await prisma.quizUser.findMany()
  return NextResponse.json(quizUsers)
}
