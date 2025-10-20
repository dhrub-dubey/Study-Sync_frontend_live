import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FlashcardProps {
  term: string;
  definition: string;
}

export function Flashcard({ term, definition }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      className="relative h-80 w-full cursor-pointer perspective-1000"
    >
      <div
        className={cn(
          'relative h-full w-full transition-transform duration-500 transform-style-preserve-3d',
          isFlipped && 'rotate-y-180'
        )}
      >
        <Card className="absolute inset-0 flex items-center justify-center backface-hidden border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
          <div className="p-8 text-center">
            <div className="mb-4 text-sm font-medium text-blue-600 dark:text-blue-400">
              TERM
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {term}
            </p>
            <div className="mt-8 text-xs text-gray-500">
              Click to flip
            </div>
          </div>
        </Card>

        <Card className="absolute inset-0 flex items-center justify-center backface-hidden rotate-y-180 border-2 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950">
          <div className="p-8 text-center">
            <div className="mb-4 text-sm font-medium text-cyan-600 dark:text-cyan-400">
              DEFINITION
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {definition}
            </p>
            <div className="mt-8 text-xs text-gray-500">
              Click to flip
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
