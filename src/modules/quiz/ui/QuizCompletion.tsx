// src/modules/quiz/ui/QuizCompletion.tsx
"use client";

interface QuizCompletionProps {
  score: number;
  onRetry?: () => void;
  userName?: string;
}

export const QuizCompletion = ({ score, onRetry, userName }: QuizCompletionProps) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded shadow text-lg space-y-4">
      <h2 className="text-2xl font-bold text-green-400">🎉 تهانينا {userName}</h2>
      <p className="text-green-300">لقد أنهيت الاختبار بنجاح.</p>
      <p>
        درجتك النهائية: <span className="font-bold text-green-500">{score}</span>
      </p>

      {onRetry && (
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          onClick={onRetry}
        >
          إعادة المحاولة
        </button>
      )}
    </div>
  );
};
