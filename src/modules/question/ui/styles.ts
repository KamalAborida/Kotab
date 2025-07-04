// src/modules/questions/ui/questionStyles.ts
import clsx from "clsx";

// === Question.tsx ===
export const questionContainerClass = clsx(
  "bg-zinc-900 text-white p-6 rounded-xl max-w-xl mx-auto shadow-lg space-y-6"
);

export const questionTextClass = clsx(
  "text-lg font-medium leading-relaxed text-right"
);

export const nextButtonClass = clsx(
  "bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-6 rounded-md transition-all duration-200"
);

// === Answers.tsx ===
export const answerBaseClass = clsx(
  "w-full flex flex-row-reverse items-center justify-between px-4 py-2 rounded-md border transition-all duration-200 cursor-pointer text-right"
);

export const answerStateClass = {
  default: clsx("border-gray-600 bg-zinc-800 hover:bg-zinc-700"),
  correct: clsx("border-green-500 bg-green-100 text-green-800"),
  wrong: clsx("border-red-500 bg-red-100 text-red-800"),
  selected: clsx("bg-zinc-700"),
};

// === Explanation.tsx ===
export const explanationBoxClass = clsx(
  "p-3 bg-zinc-800 rounded-lg border border-zinc-700 mt-4 text-right"
);

export const resultTextClass = clsx("font-semibold text-yellow-400 mb-1");

export const explanationTextClass = clsx("text-sm text-gray-300");
