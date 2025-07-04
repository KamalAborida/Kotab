// src/modules/quiz/hooks/useQuiz.ts
import { Question } from "@/modules/question";
import { useState } from "react";

export const useQuiz = (username: string, questions: Question[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const moveToNextQuestion = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const resetSelection = (resetFn?: () => void) => {
    resetFn?.();
  };

  const handleOnRightAnswer = (questionScore: number) => {
    setScore((prev) => prev + questionScore);
  };

  const currentQuestion = questions[currentIndex];

  return {
    currentQuestion,
    // currentIndex,
    score,
    moveToNextQuestion,
    handleOnRightAnswer,
    resetSelection
  };
};
