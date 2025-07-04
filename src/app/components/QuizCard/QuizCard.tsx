"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { quizCardWrapper, imageWrapper, titleStyle } from "./styles";
import clsx from "clsx";

interface QuizCardProps {
  title: string;
  image: string;
  backgroundColor: string;
  id: string
}

const QuizCard: React.FC<QuizCardProps> = ({
  title,
  image,
  backgroundColor,
  id
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    router.push(`/quiz/${e.currentTarget.id}`);
  };

  return (
    <section
      onClick={handleClick}
      className={clsx(backgroundColor, quizCardWrapper)}
      id={id}
    >
      <div
        className="max-w-6xl mx-auto flex items-center justify-between gap-10 cursor-pointer hover:opacity-90 hover:scale-[1.01] transition-all duration-300 ease-in-out"
      >
        <div className={imageWrapper}>
          <Image src={image} alt={title} fill className="object-contain" />
        </div>
        <div>
          <h2 className={titleStyle}>{title}</h2>
        </div>
      </div>
    </section>
  );
};

export default QuizCard;
