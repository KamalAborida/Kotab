// src/modules/quiz/ui/QuizHeader.tsx
interface QuizHeaderProps {
  currentIndex: number;
  numberOfQuestions: number;
}

export const QuizHeader = ({
  currentIndex,
  numberOfQuestions,
}: QuizHeaderProps) => {
  const progress = ((currentIndex + 1) / numberOfQuestions) * 100;

  return (
    <div className="mb-4 text-right" dir="rtl">
      <h2 className="text-xl font-bold mb-2">
        السؤال {currentIndex + 1} من {numberOfQuestions}
      </h2>
      <div className="w-full bg-gray-200 h-2 rounded">
        <div
          className="bg-blue-500 h-2 rounded"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};
