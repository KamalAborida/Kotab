// src/modules/mcq-question/hooks/useMcqQuestions.ts
"use client";

import { useEffect, useState } from "react";
import { Categories, Difficulties, Question } from "../types";
import { dummyQuestions } from "../data/dummy";

interface UseMcqQuestionsProps {
  numberOfQuestions: number;
  categories: Categories[];
  difficulties: Difficulties[];
}

export const useMcqQuestions = ({
  numberOfQuestions,
  categories,
  difficulties,
}: UseMcqQuestionsProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    let filtered = dummyQuestions;

    if (categories.length > 0) {
      filtered = filtered.filter((q) => categories.includes(q.category as Categories));
    }

    if (difficulties.length > 0) {
      filtered = filtered.filter((q) => difficulties.includes(q.difficulty as Difficulties));
    }

    setQuestions(filtered.slice(0, numberOfQuestions));
  }, []);

  return { questions };
};
