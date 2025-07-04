export interface Question {
  id: string;
  body: string;
  answers: string[];
  rightAnswerIndex: number;
  answerExplanation: string;
  score: number;
  categories?: { id: string; name: string }[];
  difficulties?: { id: string; name: string }[];
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