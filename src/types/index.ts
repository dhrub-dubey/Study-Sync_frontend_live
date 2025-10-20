export interface StudyPlan {
  day: number;
  topic: string;
  duration: string;
  subtopics: string[];
  completed: boolean;
}

export interface FlashcardData {
  term: string;
  definition: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface ProgressData {
  totalProgress: number;
  streak: number;
  weeklyHours: number;
  topicsCompleted: number;
  totalTopics: number;
}
