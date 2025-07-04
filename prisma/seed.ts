import { PrismaClient } from '@prisma/client';
import { dummyQuestions } from '../src/modules/question/data/dummy';

const prisma = new PrismaClient();

async function main() {
  const categories = [
    'geography',
    'history',
    'languages',
    'mathematics',
    'nature',
    'people',
    'religion',
    'science',
    'technology',
    'literature',
  ];

  const difficulties = ['easy', 'medium', 'hard'];

  for (const name of categories) {
    await prisma.category.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  for (const name of difficulties) {
    await prisma.difficulty.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  for (const q of dummyQuestions) {
    await prisma.question.create({
      data: {
        body: q.body,
        answers: q.answers,
        rightAnswerIndex: q.rightAnswerIndex,
        answerExplanation: q.answerExplanation,
        score: q.score,
        questionCategories: {
          create: [{ category: { connect: { name: q.category } } }],
        },
        questionDifficulties: {
          create: [{ difficulty: { connect: { name: q.difficulty } } }],
        },
      },
    });
  }

  await prisma.quiz.create({
    data: {
      title: 'Quiz 1',
      numberOfQuestions: 5,
      quizCategories: {
        create: [{ category: { connect: { name: 'science' } } }],
      },
      quizDifficulties: {
        create: [{ difficulty: { connect: { name: 'easy' } } }],
      },
    },
  });

  await prisma.quiz.create({
    data: {
      title: 'Quiz 2',
      numberOfQuestions: 3,
      quizCategories: {
        create: [{ category: { connect: { name: 'history' } } }],
      },
      quizDifficulties: {
        create: [{ difficulty: { connect: { name: 'medium' } } }],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
