import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
  const data = await request.json()
  const admin = await prisma.admin.create({ data })
  return NextResponse.json(admin)
}

export async function GET() {
  const admins = await prisma.admin.findMany()
  return NextResponse.json(admins)
}
