
export type ExamLevel = 'N4' | 'N5' | 'Conversational';
export type Category = 'vocabulary' | 'grammar' | 'reading' | 'mock';

export interface Choice {
  label: string; // Will show "1", "2", "3", "4"
  text: string;
  word?: string;
  reading?: string;
  pos?: string;
  meaningZh?: string;
}

export interface OptionAnalysis {
  label: string;
  whyWrongOrRight: string;
}

export interface Explanation {
  correct: string;
  analysis: string;
  options: OptionAnalysis[];
  extra?: string;
  stemTranslationZh?: string; // Legacy support if needed
}

export interface Question {
  id: string;
  level: ExamLevel;
  category: Category;
  itemType: string;
  subtype?: string; // Legacy support
  stem: string; // The question text/sentence
  instruction: string;
  choices: string[] | Choice[]; // Gemini will return string[], we map to Choice UI
  answerIndex: number; // 0-3
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

export interface QuestionBank {
  level: ExamLevel;
  category: Category;
  updatedAt: string;
  questions: Question[];
}

export interface LevelStats {
  doneCount: number;
  correctCount: number;
  totalTimeSeconds: number;
}

export interface UserStats {
  totalQuestions: number;
  totalCorrect: number;
  totalTimeSeconds: number;
  levelStats: Record<string, LevelStats>;
}

export interface WrongQuestion {
  id: string;
  level: ExamLevel;
  category: Category;
  question: Question;
  userAnswer: string; // "1", "2", "3", "4"
  timestamp: string;
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
