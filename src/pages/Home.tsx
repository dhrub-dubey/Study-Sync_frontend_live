import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { StudyPlanCard } from '@/components/StudyPlanCard';
import { Upload, Sparkles, Loader2 } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

interface StudyPlan {
  day: number;
  topic: string;
  duration: string;
  subtopics: string[];
  completed: boolean;
}

export function Home() {
  const [syllabus, setSyllabus] = useState('');
  const [loading, setLoading] = useState(false);
  const [studyPlan, setStudyPlan] = useState<StudyPlan[]>([]);

  const handleGenerate = async () => {
    setLoading(true);

    setTimeout(() => {
      const mockPlan: StudyPlan[] = [
        {
          day: 1,
          topic: 'Introduction to React',
          duration: '2 hours',
          subtopics: ['Components and Props', 'State Management', 'JSX Syntax'],
          completed: false,
        },
        {
          day: 2,
          topic: 'React Hooks',
          duration: '3 hours',
          subtopics: ['useState', 'useEffect', 'useContext', 'Custom Hooks'],
          completed: false,
        },
        {
          day: 3,
          topic: 'Advanced Patterns',
          duration: '2.5 hours',
          subtopics: ['Higher Order Components', 'Render Props', 'Context API'],
          completed: false,
        },
        {
          day: 4,
          topic: 'React Router',
          duration: '2 hours',
          subtopics: ['Routes and Navigation', 'Dynamic Routing', 'Protected Routes'],
          completed: false,
        },
      ];
      setStudyPlan(mockPlan);
      setLoading(false);
    }, 1500);
  };

  const toggleComplete = (index: number) => {
    setStudyPlan((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const completedCount = studyPlan.filter((p) => p.completed).length;
  const progress = studyPlan.length > 0 ? (completedCount / studyPlan.length) * 100 : 0;

  return (
    <div className="space-y-8">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
          StudySync – AI Study Organiser
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Transform your syllabus into a personalized study plan
        </p>
      </div>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5 text-blue-500" />
            Upload Your Syllabus or Notes
          </CardTitle>
          <CardDescription>
            Paste your study material and let AI create a personalized plan
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Paste your syllabus, course outline, or study notes here..."
            value={syllabus}
            onChange={(e) => setSyllabus(e.target.value)}
            className="min-h-32 resize-none"
          />
          <Button
            onClick={handleGenerate}
            disabled={!syllabus.trim() || loading}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
            size="lg"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating Your Study Plan...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Generate Study Plan
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {studyPlan.length > 0 && (
        <>
          <Card className="border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
            <CardHeader>
              <CardTitle>Overall Progress</CardTitle>
              <CardDescription>
                {completedCount} of {studyPlan.length} topics completed
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={progress} className="h-3" />
              <p className="mt-2 text-center text-sm font-medium text-blue-600 dark:text-blue-400">
                {Math.round(progress)}% Complete
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Your Study Plan</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {studyPlan.map((plan, index) => (
                <StudyPlanCard
                  key={index}
                  {...plan}
                  onToggleComplete={() => toggleComplete(index)}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
