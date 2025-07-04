// src/modules/questions/ui/Explanation.tsx
"use client";

import {
  explanationBoxClass,
  resultTextClass,
  explanationTextClass,
} from "./styles";

interface ExplanationProps {
  isCorrect: boolean;
  answerExplanation: string;
}

export const Explanation = ({
  isCorrect,
  answerExplanation,
}: ExplanationProps) => {
  return (
    <div className={explanationBoxClass}>
      <p className={resultTextClass}>
        {isCorrect ? "إجابة صحيحة!" : "إجابة خاطئة."}
      </p>
      <p className={explanationTextClass}>{answerExplanation}</p>
    </div>
  );
};
