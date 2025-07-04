import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  if (id) {
    const admin = await prisma.admin.findUnique({ where: { id } })
    return NextResponse.json(admin)
  }
  const admins = await prisma.admin.findMany()
  return NextResponse.json(admins)
}

export async function POST(request: NextRequest) {
  const data = await request.json()
  const admin = await prisma.admin.create({ data })
  return NextResponse.json(admin)
}
