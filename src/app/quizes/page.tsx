"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import QuizCard from "../components/QuizCard/QuizCard";
import { Quiz } from "@/modules/quiz/types";

const dummyQuizzes: Quiz[] = [
  {
    title: "امتحان الدرس الأول توحيد",
    id: "1",
    image: "/circle-tawheed.png",
    backgroundColor: "bg-[#222]",
    categories: ["physics", "chemistry", "biology"],
    difficulties: ["easy", "medium", "hard"],
    numberOfQuestions: 3,
  },
  {
    title: "امتحان الدرس التاني فقه",
    id: "2",
    image: "/circle-fiqh.png",
    backgroundColor: "bg-[#1b2a1d]",
    categories: ["physics", "chemistry", "biology"],
    difficulties: ["easy"],
    numberOfQuestions: 3,
  },
];

export default function QuestionsPage() {
  const [quizzes, setQuizzes] = useState<Quiz[]>(dummyQuizzes);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get("/api/quiz"); // Change this to your real endpoint
        console.log(response.data);
        setQuizzes(response.data);
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
