import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  try {
    const categories = await prisma.category.findMany({
      where: {
        ...(id && { id }),
        ...(name && { name: { contains: name, mode: "insensitive" } }),
      },
    });

    const formatted = categories.map((c) => ({ id: c.id, name: c.name }));

    return NextResponse.json(formatted, { status: 200 });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}
