import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const categories = searchParams.get("categories")?.split(",");
  const difficulties = searchParams.get("difficulties")?.split(",");

  try {
    const questions = await prisma.question.findMany({
      where: {
        ...(id && { id }),
        ...(categories && categories.length > 0 && {
          questionCategories: {
            some: {
              category: {
                name: { in: categories },
              },
            },
          },
        }),
        ...(difficulties && difficulties.length > 0 && {
          questionDifficulties: {
            some: {
              difficulty: {
                name: { in: difficulties },
              },
            },
          },
        }),
      },
      include: {
        questionCategories: { include: { category: true } },
        questionDifficulties: { include: { difficulty: true } },
      },
    });

    const formatted = questions.map((q) => ({
      id: q.id,
      body: q.body,
      answers: q.answers,
      rightAnswerIndex: q.rightAnswerIndex,
      answerExplanation: q.answerExplanation,
      score: q.score,
      categories: q.questionCategories.map((qc) => ({
        id: qc.category.id,
        name: qc.category.name,
      })),
      difficulties: q.questionDifficulties.map((qd) => ({
        id: qd.difficulty.id,
        name: qd.difficulty.name,
      })),
    }));

    return NextResponse.json(formatted, { status: 200 });
  } catch (error) {
    console.error("Error fetching questions:", error);
    return NextResponse.json({ error: "Failed to fetch questions" }, { status: 500 });
  }
}
