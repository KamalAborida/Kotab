"use client";

import React, { useMemo } from "react";
import { useRouter } from "next/navigation";
import { quizCardWrapper, titleStyle } from "./styles";
import clsx from "clsx";

interface QuizCardProps {
  title: string;
  image: string;
  backgroundColor?: string;
  id: string;
}

const backgroundColors = [
  "bg-[#222]",
  "bg-[#1b2a1d]",
  "bg-[#2a1d1d]",
  "bg-[#1d1f2a]",
  "bg-[#2a1f1d]",
];

const QuizCard: React.FC<QuizCardProps> = ({ title, id }) => {
  const router = useRouter();

  const randomBg = useMemo(() => {
    const index = Math.floor(Math.random() * backgroundColors.length);
    return backgroundColors[index];
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    router.push(`/quiz/${e.currentTarget.id}`);
  };

  return (
    <section
      onClick={handleClick}
      className={clsx(quizCardWrapper, randomBg)}
      id={id}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-10 cursor-pointer hover:opacity-90 hover:scale-[1.01] transition-all duration-300 ease-in-out">
        <div>
          <h2 className={titleStyle}>{title}</h2>
        </div>
      </div>
    </section>
  );
};

export default QuizCard;
