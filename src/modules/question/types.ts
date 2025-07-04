export interface Question {
  id: number;
  body: string;
  answers: string[];
  rightAnswerIndex: number;
  answerExplanation: string;
  category: string;
  difficulty: string;
  score: number;
}

export type Difficulties = "easy" | "medium" | "hard";

export type Categories =
  | "geography"
  | "history"
  | "languages"
  | "mathematics"
  | "nature"
  | "people"
  | "religion"
  | "science"
  | "technology";