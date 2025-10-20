import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { QuizQuestion } from '@/components/QuizQuestion';
import { Trophy, RotateCcw, Sparkles } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

const mockQuestions: Question[] = [
  {
    question: 'What is the primary purpose of React?',
    options: [
      'Server-side rendering',
      'Building user interfaces',
      'Database management',
      'API development',
    ],
    correctAnswer: 1,
  },
  {
    question: 'Which Hook is used to manage state in functional components?',
    options: ['useContext', 'useReducer', 'useState', 'useEffect'],
    correctAnswer: 2,
  },
  {
    question: 'What does JSX stand for?',
    options: [
      'JavaScript XML',
      'Java Syntax Extension',
      'JSON XML',
      'JavaScript Extended',
    ],
    correctAnswer: 0,
  },
  {
    question: 'What is the Virtual DOM?',
    options: [
      'A physical server',
      'A lightweight copy of the actual DOM',
      'A database',
      'A programming language',
    ],
    correctAnswer: 1,
  },
  {
    question: 'Which Hook is used for side effects?',
    options: ['useState', 'useContext', 'useEffect', 'useMemo'],
    correctAnswer: 2,
  },
];

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [questions] = useState<Question[]>(mockQuestions);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }, 1500);
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
  };

  if (questions.length === 0) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Card className="border-2 border-dashed p-12 text-center">
          <CardContent className="space-y-3">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No quiz available yet
            </p>
            <p className="text-sm text-gray-500">
              Generate a study plan first to create quizzes
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    const isPerfect = percentage === 100;
    const isGood = percentage >= 70;

    return (
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Quiz Complete!</h1>
        </div>

        <Card className="border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500">
              <Trophy className="h-10 w-10 text-white" />
            </div>
            <CardTitle className="text-3xl">Your Score</CardTitle>
            <CardDescription className="text-xl">
              {score} out of {questions.length} correct
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {percentage}%
              </div>
            </div>

            <div className="rounded-lg bg-white dark:bg-gray-900 p-6 text-center">
              <p className="text-lg font-medium">
                {isPerfect
                  ? '🎉 Perfect Score! Outstanding work!'
                  : isGood
                  ? '👏 Great job! Keep up the excellent work!'
                  : '💪 Good effort! Review the material and try again!'}
              </p>
            </div>

            <Button
              onClick={handleRetake}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
              size="lg"
            >
              <RotateCcw className="mr-2 h-5 w-5" />
              Retake Quiz
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Quiz Time</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Test your knowledge and track your progress
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm font-medium">
          Question {currentQuestion + 1} of {questions.length}
        </div>
        <div className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 dark:bg-blue-950">
          <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            Score: {score}
          </span>
        </div>
      </div>

      <QuizQuestion
        key={currentQuestion}
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        correctAnswer={questions[currentQuestion].correctAnswer}
        onAnswer={handleAnswer}
      />

      <div className="flex justify-center gap-2">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentQuestion
                ? 'w-8 bg-blue-600'
                : index < currentQuestion
                ? 'bg-green-500'
                : 'bg-gray-300 dark:bg-gray-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
