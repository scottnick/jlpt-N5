
export type ExamLevel = 'N4' | 'N5' | 'Conversational';
export type Category = 'vocabulary' | 'grammar' | 'reading' | 'mock';

export interface Choice {
  label: 'A' | 'B' | 'C' | 'D';
  text: string;
  word: string;
  reading: string;
  pos: string;
  verbType: '1' | '2' | '3' | null;
  meaningZh: string;
}

export interface Explanation {
  stemTranslationZh: string;
  choiceNotes: ChoiceNote[];
  whyCorrect: string;
  whyOthersWrong: string;
}

export interface ChoiceNote {
  label: 'A' | 'B' | 'C' | 'D';
  word: string;
  pos: string;
  verbType: '1' | '2' | '3' | null;
  meaningZh: string;
}

export interface Question {
  id: string;
  subtype: string;
  stem: string;
  instruction: string;
  choices: Choice[];
  answer: { label: 'A' | 'B' | 'C' | 'D' };
  explanation: Explanation;
}

export interface QuizSession {
  version: string;
  examLevel: ExamLevel;
  category: Category;
  subtypesIncluded: string[];
  generatedAt: string;
  questions: Question[];
}

export interface UserStats {
  totalQuestions: number;
  totalCorrect: number;
  totalTimeSeconds: number;
  categoryStats: Record<string, { count: number; correct: number; time: number }>;
}

export interface NotebookEntry {
  id: string;
  word: string;
  reading: string;
  pos: string;
  meaningZh: string;
  level: string;
  sentences: string[];
  addedAt: string;
}

export interface DailyGoal {
  target: number;
  unit: 'questions' | 'time' | 'sessions';
  current: number;
}
