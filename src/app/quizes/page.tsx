"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import QuizCard from "../components/QuizCard/QuizCard";
import { Quiz } from "@/modules/quiz/types";

const dummyQuizzes: Quiz[] = [];

export default function QuestionsPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>(dummyQuizzes);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const { data } = await axios.get<Quiz[]>("/api/quizzes");
        setQuizzes(
          data.map((quiz) => ({
            ...quiz,
            image: "/circle-tawheed.png",
            backgroundColor: "bg-[#222]",
          }))
        );
      } catch (error) {
        console.error("Failed to fetch quizzes:", error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[url('/home-hero.png')] bg-cover bg-center text-white flex flex-col justify-between pt-60"
    >
      {quizzes.map((quiz) => (
        <div key={quiz.id} className="my-6">
          <QuizCard
            id={quiz.id}
            title={quiz.title}
            image={quiz.image}
            backgroundColor={quiz.backgroundColor}
          />
        </div>
      ))}
    </main>
  );
}
