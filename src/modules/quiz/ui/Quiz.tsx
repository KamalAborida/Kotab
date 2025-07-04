"use client";

import { McqQuestion, Question } from "@/modules/question";
import { QuizCompletion } from "./QuizCompletion";
import { ReactElement } from "react";

interface QuizProps {
  questions: Question[];
  QuestionComponent: typeof McqQuestion;
  moveToNextQuestion: () => void;
  handleOnRightAnswer: (score: number) => void;
  score: number;
  currentQuestion: Question | null;
  userName?: string;
}

export const Quiz = ({
  QuestionComponent,
  moveToNextQuestion,
  handleOnRightAnswer,
  score,
  currentQuestion,
  userName,
}: QuizProps): ReactElement => {
  const isFinished = !currentQuestion;

  return (
    <div className="max-w-2xl mx-auto p-6 text-right" dir="rtl">
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-4">
          {isFinished ? "🎉 انتهي!" : `الدرجة الحالية: ${score}`}
        </h1>
      </div>

      {isFinished ? (
        <QuizCompletion
          score={score}
          onRetry={() => window.location.reload()}
          userName={userName}
        />
      ) : (
        <>
          <QuestionComponent
            key={currentQuestion.id || currentQuestion.body}
            questionBody={currentQuestion.body}
            answers={currentQuestion.answers}
            rightAnswerIndex={currentQuestion.rightAnswerIndex}
            answerExplanation={currentQuestion.answerExplanation}
            score={currentQuestion.score}
            handleOnRightAnswer={handleOnRightAnswer}
          />

          <div className="mt-6 flex justify-start">
            <button
              onClick={moveToNextQuestion}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              التالي
            </button>
          </div>
        </>
      )}
    </div>
  );
};
