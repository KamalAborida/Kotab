import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const quizId = searchParams.get("quizId");
  const username = searchParams.get("username");

  try {
    const quizUsers = await prisma.quizUser.findMany({
      where: {
        ...(id && { id }),
        ...(quizId && { quizId }),
        ...(username && { username }),
      },
      include: {
        quiz: true,
      },
    });

    const formatted = quizUsers.map((user) => ({
      id: user.id,
      username: user.username,
      score: user.score,
      quiz: {
        id: user.quiz.id,
        title: user.quiz.title,
        numberOfQuestions: user.quiz.numberOfQuestions,
      },
    }));

    return NextResponse.json(formatted, { status: 200 });
  } catch (error) {
    console.error("Error fetching quiz users:", error);
    return NextResponse.json({ error: "Failed to fetch quiz users" }, { status: 500 });
  }
}
