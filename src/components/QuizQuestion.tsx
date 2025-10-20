import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';

interface QuizQuestionProps {
  question: string;
  options: string[];
  correctAnswer: number;
  onAnswer: (isCorrect: boolean) => void;
}

export function QuizQuestion({ question, options, correctAnswer, onAnswer }: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleAnswer = (index: number) => {
    if (hasAnswered) return;

    setSelectedAnswer(index);
    setHasAnswered(true);
    const isCorrect = index === correctAnswer;

    setTimeout(() => {
      onAnswer(isCorrect);
    }, 1500);
  };

  return (
    <Card className="w-full border-2">
      <CardHeader>
        <CardTitle className="text-xl leading-relaxed">{question}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === correctAnswer;
            const showResult = hasAnswered && (isSelected || isCorrect);

            let buttonState = 'default';
            if (showResult) {
              buttonState = isCorrect ? 'correct' : isSelected ? 'incorrect' : 'default';
            }

            return (
              <Button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={hasAnswered}
                variant="outline"
                className={cn(
                  'h-auto justify-start p-4 text-left transition-all duration-300',
                  !hasAnswered && 'hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950',
                  buttonState === 'correct' && 'border-green-500 bg-green-50 dark:bg-green-950',
                  buttonState === 'incorrect' && 'border-red-500 bg-red-50 dark:bg-red-950'
                )}
              >
                <span className="flex-1">{option}</span>
                {showResult && (
                  <span className="ml-2">
                    {isCorrect ? (
                      <Check className="h-5 w-5 text-green-600" />
                    ) : isSelected ? (
                      <X className="h-5 w-5 text-red-600" />
                    ) : null}
                  </span>
                )}
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
