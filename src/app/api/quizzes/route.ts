import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const categories = searchParams.get("categories")?.split(",");
  const difficulties = searchParams.get("difficulties")?.split(",");

  try {
    const quizzes = await prisma.quiz.findMany({
      where: {
        ...(id && { id }),
        ...(categories && categories.length > 0 && {
          quizCategories: {
            some: {
              category: {
                name: { in: categories },
              },
            },
          },
        }),
        ...(difficulties && difficulties.length > 0 && {
          quizDifficulties: {
            some: {
              difficulty: {
                name: { in: difficulties },
              },
            },
          },
        }),
      },
      include: {
        quizCategories: { include: { category: true } },
        quizDifficulties: { include: { difficulty: true } },
      },
    });

    const formatted = quizzes.map((quiz) => ({
      id: quiz.id,
      title: quiz.title,
      numberOfQuestions: quiz.numberOfQuestions,
      categories: quiz.quizCategories.map((qc) => ({
        id: qc.category.id,
        name: qc.category.name,
      })),
      difficulties: quiz.quizDifficulties.map((qd) => ({
        id: qd.difficulty.id,
        name: qd.difficulty.name,
      })),
    }));

    return NextResponse.json(formatted, { status: 200 });
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    return NextResponse.json({ error: "Failed to fetch quizzes" }, { status: 500 });
  }
}
