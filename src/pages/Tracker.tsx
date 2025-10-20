import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Calendar, Target, Flame } from 'lucide-react';

const weeklyData = [
  { day: 'Mon', hours: 2.5 },
  { day: 'Tue', hours: 3 },
  { day: 'Wed', hours: 1.5 },
  { day: 'Thu', hours: 4 },
  { day: 'Fri', hours: 2 },
  { day: 'Sat', hours: 3.5 },
  { day: 'Sun', hours: 2.5 },
];

export function Tracker() {
  const totalProgress = 68;
  const streak = 7;
  const weeklyHours = weeklyData.reduce((sum, day) => sum + day.hours, 0);
  const topicsCompleted = 12;
  const totalTopics = 18;

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Progress Tracker</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Monitor your learning journey and celebrate your achievements
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Overall Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Target className="h-8 w-8 text-blue-600" />
              <div className="text-3xl font-bold">{totalProgress}%</div>
            </div>
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
              {topicsCompleted} of {totalTopics} topics completed
            </p>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Study Streak
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Flame className="h-8 w-8 text-orange-500" />
              <div className="text-3xl font-bold">{streak} days</div>
            </div>
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
              Keep it up! You're on fire!
            </p>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              This Week
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Calendar className="h-8 w-8 text-green-600" />
              <div className="text-3xl font-bold">{weeklyHours}h</div>
            </div>
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
              Study time logged
            </p>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-8 w-8 text-cyan-600" />
              <div className="text-3xl font-bold">+12%</div>
            </div>
            <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
              vs. last week
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2">
        <CardHeader>
          <CardTitle>Overall Completion</CardTitle>
          <CardDescription>
            You're {totalProgress}% done — keep going!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress value={totalProgress} className="h-4" />
          <div className="rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 p-4">
            <p className="text-center text-sm font-medium text-blue-700 dark:text-blue-300">
              Amazing progress! Just {100 - totalProgress}% more to go. You've got this! 💪
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2">
        <CardHeader>
          <CardTitle>Weekly Study Hours</CardTitle>
          <CardDescription>
            Your study activity for the past week
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-800" />
                <XAxis
                  dataKey="day"
                  className="text-sm"
                  tick={{ fill: 'currentColor' }}
                />
                <YAxis
                  className="text-sm"
                  tick={{ fill: 'currentColor' }}
                  label={{ value: 'Hours', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '2px solid #e5e7eb',
                    borderRadius: '0.5rem'
                  }}
                  labelStyle={{ fontWeight: 'bold' }}
                />
                <Bar
                  dataKey="hours"
                  fill="url(#colorGradient)"
                  radius={[8, 8, 0, 0]}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-2 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950">
          <CardHeader>
            <CardTitle className="text-green-700 dark:text-green-400">Flashcards Mastered</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">45</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              out of 60 total cards
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950">
          <CardHeader>
            <CardTitle className="text-blue-700 dark:text-blue-400">Quizzes Taken</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">8</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              Average score: 82%
            </p>
          </CardContent>
        </Card>

        <Card className="border-2 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950">
          <CardHeader>
            <CardTitle className="text-orange-700 dark:text-orange-400">Study Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">23</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              This month
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
