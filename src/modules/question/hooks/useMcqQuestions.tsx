// src/modules/mcq-question/hooks/useMcqQuestions.ts
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Categories, Difficulties, Question } from "../types";

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
    const fetchQuestions = async () => {
      try {
        const params: Record<string, string> = {};
        if (categories.length > 0) params.categories = categories.join(",");
        if (difficulties.length > 0) params.difficulties = difficulties.join(",");

        const { data } = await axios.get<Question[]>("/api/questions", { params });

        setQuestions(data.slice(0, numberOfQuestions));
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  return { questions };
};
