import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const username = searchParams.get("username");

  try {
    const admins = await prisma.admin.findMany({
      where: {
        ...(id && { id }),
        ...(username && { username }),
      },
    });

    const formatted = admins.map((admin) => ({
      id: admin.id,
      username: admin.username,
      password: admin.password,
    }));

    return NextResponse.json(formatted, { status: 200 });
  } catch (error) {
    console.error("Error fetching admins:", error);
    return NextResponse.json({ error: "Failed to fetch admins" }, { status: 500 });
  }
}
