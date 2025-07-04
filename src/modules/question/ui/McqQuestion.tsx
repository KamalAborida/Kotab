// src/modules/mcq-question/ui/McqQuestion.tsx
"use client";

import { useState } from "react";
import { Answers } from "./Answers";
import { Explanation } from "./Explanation";
import { questionContainerClass, questionTextClass } from "./styles";

interface McqQuestionProps {
  questionBody: string;
  answers: string[];
  rightAnswerIndex: number;
  answerExplanation: string;
  score: number;
  handleOnRightAnswer?: (questionScore: number) => void;
}

export const McqQuestion = ({
  questionBody,
  answers,
  rightAnswerIndex,
  answerExplanation,
  score,
  handleOnRightAnswer,
}: McqQuestionProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleAnswer = (index: number) => {
    if (selectedIndex !== null) return;
    setSelectedIndex(index);
    if (index === rightAnswerIndex) handleOnRightAnswer?.(score);
  };

  const isCorrect = selectedIndex === rightAnswerIndex;

  return (
    <div dir="rtl" className={questionContainerClass}>
      <div className="flex justify-between items-center">
        <div className={questionTextClass}>{questionBody}</div>
        <div className="text-yellow-400 font-bold text-sm">الدرجة: {score}</div>
      </div>

      <Answers
        answers={answers}
        selectedIndex={selectedIndex}
        rightAnswerIndex={rightAnswerIndex}
        onSelect={handleAnswer}
      />

      {selectedIndex !== null && (
        <Explanation
          isCorrect={isCorrect}
          answerExplanation={answerExplanation}
        />
      )}
    </div>
  );
};
