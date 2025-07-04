// src/modules/questions/ui/Answers.tsx
"use client";

import clsx from "clsx";
import {
  answerBaseClass,
  answerStateClass,
} from "./styles";

interface AnswersProps {
  answers: string[];
  selectedIndex: number | null;
  rightAnswerIndex: number;
  onSelect: (index: number) => void;
}

export const Answers = ({
  answers,
  selectedIndex,
  rightAnswerIndex,
  onSelect,
}: AnswersProps) => {
  return (
    <div className="space-y-3">
      {answers.map((answer, idx) => {
        const isSelected = selectedIndex === idx;
        const isCorrect = selectedIndex !== null && idx === rightAnswerIndex;
        const isWrong = selectedIndex !== null && isSelected && !isCorrect;

        const answerClass = clsx(
          answerBaseClass,
          {
            [answerStateClass.correct]: isCorrect,
            [answerStateClass.wrong]: isWrong,
            [answerStateClass.selected]: isSelected && !isCorrect && !isWrong,
            [answerStateClass.default]: selectedIndex === null,
          }
        );

        return (
          <button
            key={idx}
            className={answerClass}
            disabled={selectedIndex !== null}
            onClick={() => onSelect(idx)}
          >
            <span className="mr-2">{isSelected ? "☻" : "○"}</span>
            {answer}
          </button>
        );
      })}
    </div>
  );
};
