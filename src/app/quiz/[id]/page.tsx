"use client";

import { useQuiz } from "@/modules/quiz/hooks/useQuiz";
import { Quiz } from "@/modules/quiz/ui/Quiz";
import { McqQuestion, useMcqQuestions } from "@/modules/question";
import { selectUsername } from "@/redux/features/user/userSelectores";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Categories, Difficulties } from "@/modules/question/types";
import axios from "axios";
import { useParams } from "next/navigation";

interface QuizConfig {
  numberOfQuestions: number;
  categories: Categories[];
  difficulties: Difficulties[];
}

const QuizPage = () => {
  const username = useSelector(selectUsername);
  const params = useParams<{ id: string }>();

  const [quizConfig, setQuizConfig] = useState<QuizConfig | null>(null);

  useEffect(() => {
    const fetchQuizDetails = async () => {
      try {
        const { data } = await axios.get("/api/quizzes", { params: { id: params.id } });
        const quiz = data[0];
        setQuizConfig({
          numberOfQuestions: quiz.numberOfQuestions,
          categories: quiz.categories.map((c: { name: string }) => c.name as Categories),
          difficulties: quiz.difficulties.map((d: { name: string }) => d.name as Difficulties),
        });
      } catch (error) {
        console.error("Failed to load quiz config:", error);
      }
    };

    if (params.id) fetchQuizDetails();
  }, [params.id]);
  
  const { questions } = useMcqQuestions({
    numberOfQuestions: quizConfig?.numberOfQuestions || 0,
    categories: quizConfig?.categories || [],
    difficulties: quizConfig?.difficulties || [],
  });

  useEffect(() => {
    console.log(quizConfig);
  }, [quizConfig]);

  const { currentQuestion, moveToNextQuestion, handleOnRightAnswer, score } =
    useQuiz(username, questions);

  if (!quizConfig) {
    return (
      <div
        className="min-h-screen flex justify-center items-center text-white"
        dir="rtl"
      >
        جارٍ تحميل الاختبار...
      </div>
    );
  }

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[url('/home-hero.png')] bg-cover bg-center text-white flex flex-col justify-between pt-40"
    >
      <div className="max-w-3xl mx-auto px-4" dir="rtl">
        <div className="bg-[#1d1d1d] p-4 rounded-md text-center mb-6">
          <h2 className="text-white text-xl font-bold">
            امتحان الدرس الأول توحيد
          </h2>
          <div className="mt-2">
            <span className="bg-[#1e3a8a] text-white text-xs font-bold py-1 px-3 rounded-full">
              توحيد
            </span>
          </div>
        </div>

        <Quiz
          questions={questions}
          QuestionComponent={McqQuestion}
          moveToNextQuestion={moveToNextQuestion}
          handleOnRightAnswer={handleOnRightAnswer}
          score={score}
          currentQuestion={currentQuestion}
          userName={username}
        />
      </div>
    </div>
  );
};

export default QuizPage;
