import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  try {
    const difficulties = await prisma.difficulty.findMany({
      where: {
        ...(id && { id }),
        ...(name && { name: { contains: name, mode: "insensitive" } }),
      },
    });

    const formatted = difficulties.map((d) => ({ id: d.id, name: d.name }));

    return NextResponse.json(formatted, { status: 200 });
  } catch (error) {
    console.error("Error fetching difficulties:", error);
    return NextResponse.json({ error: "Failed to fetch difficulties" }, { status: 500 });
  }
}
