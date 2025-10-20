import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Flashcard } from '@/components/Flashcard';
import { ChevronLeft, ChevronRight, Shuffle, Loader2 } from 'lucide-react';

interface FlashcardData {
  term: string;
  definition: string;
}

const mockFlashcards: FlashcardData[] = [
  {
    term: 'React Component',
    definition: 'A reusable piece of UI that can accept props and manage its own state',
  },
  {
    term: 'useState',
    definition: 'A Hook that lets you add state to functional components',
  },
  {
    term: 'useEffect',
    definition: 'A Hook that lets you perform side effects in functional components',
  },
  {
    term: 'Props',
    definition: 'Short for properties, used to pass data from parent to child components',
  },
  {
    term: 'JSX',
    definition: 'JavaScript XML - a syntax extension that allows writing HTML-like code in JavaScript',
  },
  {
    term: 'Virtual DOM',
    definition: 'A lightweight copy of the actual DOM that React uses to optimize updates',
  },
  {
    term: 'Component Lifecycle',
    definition: 'The series of methods that are called at different stages of a component\'s existence',
  },
  {
    term: 'Context API',
    definition: 'A way to pass data through the component tree without prop drilling',
  },
];

export function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flashcards, setFlashcards] = useState<FlashcardData[]>(mockFlashcards);
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleShuffle = () => {
    setLoading(true);
    setTimeout(() => {
      const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
      setFlashcards(shuffled);
      setCurrentIndex(0);
      setLoading(false);
    }, 500);
  };

  if (flashcards.length === 0) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Card className="border-2 border-dashed p-12 text-center">
          <CardContent className="space-y-3">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No flashcards available yet
            </p>
            <p className="text-sm text-gray-500">
              Generate a study plan first to create flashcards
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Flashcards</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Master your concepts one card at a time
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm font-medium">
          Card {currentIndex + 1} of {flashcards.length}
        </div>
        <Button
          onClick={handleShuffle}
          variant="outline"
          size="sm"
          disabled={loading}
        >
          {loading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Shuffle className="mr-2 h-4 w-4" />
          )}
          Shuffle
        </Button>
      </div>

      <div className="relative">
        {loading ? (
          <div className="flex h-80 items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
          </div>
        ) : (
          <Flashcard
            term={flashcards[currentIndex].term}
            definition={flashcards[currentIndex].definition}
          />
        )}
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button
          onClick={handlePrevious}
          disabled={currentIndex === 0 || loading}
          variant="outline"
          size="lg"
        >
          <ChevronLeft className="mr-2 h-5 w-5" />
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentIndex === flashcards.length - 1 || loading}
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
        >
          Next
          <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      <div className="flex justify-center gap-2">
        {flashcards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-8 bg-blue-600'
                : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
