export interface Quiz {
  id: string;
  title: string;
  numberOfQuestions: number;
  categories: { id: string; name: string }[];
  difficulties: { id: string; name: string }[];
  image?: string;
  backgroundColor?: string;
}
