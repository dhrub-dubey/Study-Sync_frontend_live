import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, RefreshCw, Volume2 } from 'lucide-react';

const motivationalQuotes = [
  {
    text: 'The expert in anything was once a beginner.',
    author: 'Helen Hayes',
  },
  {
    text: 'Success is the sum of small efforts repeated day in and day out.',
    author: 'Robert Collier',
  },
  {
    text: 'The only way to learn a new programming language is by writing programs in it.',
    author: 'Dennis Ritchie',
  },
  {
    text: 'Education is the most powerful weapon which you can use to change the world.',
    author: 'Nelson Mandela',
  },
  {
    text: 'Learning is not attained by chance, it must be sought for with ardor and diligence.',
    author: 'Abigail Adams',
  },
  {
    text: 'The beautiful thing about learning is that no one can take it away from you.',
    author: 'B.B. King',
  },
  {
    text: 'You don\'t have to be great to start, but you have to start to be great.',
    author: 'Zig Ziglar',
  },
  {
    text: 'The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.',
    author: 'Brian Herbert',
  },
];

const dailyTips = [
  'Take regular breaks every 25 minutes using the Pomodoro Technique',
  'Stay hydrated - drink water while studying to keep your brain sharp',
  'Review your notes within 24 hours to improve retention by 60%',
  'Teach what you learn to solidify your understanding',
  'Create mind maps to visualize connections between concepts',
  'Study in different locations to improve memory recall',
  'Get 7-8 hours of sleep for optimal brain function',
  'Exercise before studying to boost cognitive performance',
];

export function Motivation() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const [currentTip] = useState(Math.floor(Math.random() * dailyTips.length));
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % motivationalQuotes.length);
        setFadeIn(true);
      }, 300);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleNextQuote = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrentQuote((prev) => (prev + 1) % motivationalQuotes.length);
      setFadeIn(true);
    }, 300);
  };

  const handleSpeak = () => {
    if ('speechSynthesis' in window && !isSpeaking) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(
        `${motivationalQuotes[currentQuote].text}. ${motivationalQuotes[currentQuote].author}`
      );
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Daily Motivation</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Stay inspired and keep moving forward
        </p>
      </div>

      <Card className="border-2 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 dark:from-blue-950 dark:via-cyan-950 dark:to-blue-950">
        <CardHeader>
          <div className="flex items-center justify-center gap-2">
            <Heart className="h-6 w-6 text-red-500 animate-pulse" />
            <CardTitle className="text-center">Quote of the Moment</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div
            className={`min-h-32 transition-opacity duration-300 ${
              fadeIn ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <blockquote className="text-center">
              <p className="text-2xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed">
                "{motivationalQuotes[currentQuote].text}"
              </p>
              <footer className="mt-4 text-lg text-blue-600 dark:text-blue-400">
                — {motivationalQuotes[currentQuote].author}
              </footer>
            </blockquote>
          </div>

          <div className="flex justify-center gap-3">
            <Button
              onClick={handleNextQuote}
              variant="outline"
              size="lg"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Next Quote
            </Button>
            <Button
              onClick={handleSpeak}
              variant="outline"
              size="lg"
              disabled={isSpeaking}
            >
              <Volume2 className="mr-2 h-4 w-4" />
              {isSpeaking ? 'Speaking...' : 'Listen'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Study Tip of the Day
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 p-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              💡 {dailyTips[currentTip]}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-2 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950">
          <CardHeader>
            <CardTitle className="text-orange-700 dark:text-orange-400">
              Your Journey
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Days Active</span>
              <span className="text-2xl font-bold">28</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Total Study Time</span>
              <span className="text-2xl font-bold">42h</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Concepts Learned</span>
              <span className="text-2xl font-bold">67</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950">
          <CardHeader>
            <CardTitle className="text-cyan-700 dark:text-cyan-400">
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🔥</div>
              <div>
                <p className="font-medium">Week Warrior</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  7-day study streak
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-3xl">🎯</div>
              <div>
                <p className="font-medium">Quick Learner</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Completed 10 topics
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-3xl">⭐</div>
              <div>
                <p className="font-medium">Quiz Master</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Perfect score on 3 quizzes
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <CardContent className="py-8 text-center">
          <h3 className="text-2xl font-bold mb-2">
            You're doing amazing! Keep going! 🌟
          </h3>
          <p className="text-blue-100">
            Every study session brings you closer to your goals. Stay consistent, stay focused!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
