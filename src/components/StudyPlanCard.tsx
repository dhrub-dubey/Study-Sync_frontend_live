import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Clock, BookOpen } from 'lucide-react';

interface StudyPlanCardProps {
  day: number;
  topic: string;
  duration: string;
  subtopics: string[];
  completed: boolean;
  onToggleComplete: () => void;
}

export function StudyPlanCard({
  day,
  topic,
  duration,
  subtopics,
  completed,
  onToggleComplete,
}: StudyPlanCardProps) {
  return (
    <Card className="group overflow-hidden border-2 transition-all duration-300 hover:shadow-lg hover:border-blue-300">
      <CardHeader className="space-y-1">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-sm font-bold text-white">
              {day}
            </div>
            <CardTitle className="text-lg">{topic}</CardTitle>
          </div>
          <Checkbox
            checked={completed}
            onCheckedChange={onToggleComplete}
            className="h-5 w-5"
          />
        </div>
        <CardDescription className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          {duration}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {subtopics.map((subtopic, index) => (
            <div key={index} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
              <BookOpen className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-500" />
              <span>{subtopic}</span>
            </div>
          ))}
        </div>
        {completed && (
          <div className="mt-4 rounded-lg bg-green-50 px-3 py-2 text-center text-sm font-medium text-green-700 dark:bg-green-950 dark:text-green-400">
            Completed
          </div>
        )}
      </CardContent>
    </Card>
  );
}
