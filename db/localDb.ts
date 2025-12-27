
import { UserStats, NotebookEntry, DailyGoal, WrongQuestion, LevelStats, QuestionBank } from '../types';
import { BUILT_IN_N5_VOCABULARY } from './builtInBank';

const STORAGE_KEYS = {
  STATS: 'jlpt_stats_v2',
  NOTEBOOK: 'jlpt_notebook',
  GOALS: 'jlpt_goals',
  WRONG_BOOK: 'jlpt_wrong_book',
  BANK_PREFIX: 'jlpt_bank_'
};

const initialLevelStats = (): LevelStats => ({
  doneCount: 0,
  correctCount: 0,
  totalTimeSeconds: 0
});

export const localDb = {
  getStats: (): UserStats => {
    const data = localStorage.getItem(STORAGE_KEYS.STATS);
    if (!data) return {
      totalQuestions: 0,
      totalCorrect: 0,
      totalTimeSeconds: 0,
      levelStats: {
        'N4': initialLevelStats(),
        'N5': initialLevelStats(),
        'Conversational': initialLevelStats()
      }
    };
    return JSON.parse(data);
  },
  saveStats: (stats: UserStats) => {
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
  },
  updateQuizResult: (level: string, count: number, correct: number, seconds: number) => {
    const stats = localDb.getStats();
    stats.totalQuestions += count;
    stats.totalCorrect += correct;
    stats.totalTimeSeconds += seconds;

    if (!stats.levelStats[level]) {
      stats.levelStats[level] = initialLevelStats();
    }
    
    stats.levelStats[level].doneCount += count;
    stats.levelStats[level].correctCount += correct;
    stats.levelStats[level].totalTimeSeconds += seconds;
    
    localDb.saveStats(stats);
  },
  getNotebook: (): NotebookEntry[] => {
    const data = localStorage.getItem(STORAGE_KEYS.NOTEBOOK);
    return data ? JSON.parse(data) : [];
  },
  saveNotebook: (entries: NotebookEntry[]) => {
    localStorage.setItem(STORAGE_KEYS.NOTEBOOK, JSON.stringify(entries));
  },
  getWrongQuestions: (): WrongQuestion[] => {
    const data = localStorage.getItem(STORAGE_KEYS.WRONG_BOOK);
    return data ? JSON.parse(data) : [];
  },
  addWrongQuestions: (items: WrongQuestion[]) => {
    const current = localDb.getWrongQuestions();
    const updated = [...items, ...current].filter((v, i, a) => 
      a.findIndex(t => t.id === v.id || t.question.stem === v.question.stem) === i
    );
    localStorage.setItem(STORAGE_KEYS.WRONG_BOOK, JSON.stringify(updated.slice(0, 100)));
  },
  getGoals: (): DailyGoal => {
    const data = localStorage.getItem(STORAGE_KEYS.GOALS);
    return data ? JSON.parse(data) : { target: 10, unit: 'questions', current: 0 };
  },
  saveGoals: (goals: DailyGoal) => {
    localStorage.setItem(STORAGE_KEYS.GOALS, JSON.stringify(goals));
  },
  addNotebookEntry: (entry: NotebookEntry) => {
    const notebook = localDb.getNotebook();
    if (!notebook.find(e => e.word === entry.word)) {
      localDb.saveNotebook([...notebook, entry]);
    }
  },
  removeNotebookEntry: (word: string) => {
    const notebook = localDb.getNotebook();
    localDb.saveNotebook(notebook.filter(e => e.word !== word));
  },
  // Bank logic with Fallback
  getBank: (level: string, category: string): QuestionBank | null => {
    const data = localStorage.getItem(`${STORAGE_KEYS.BANK_PREFIX}${level}_${category}`);
    if (data) return JSON.parse(data);

    // Fallback to built-in for N5 Vocabulary
    if (level === 'N5' && category === 'vocabulary') {
      return {
        level: 'N5',
        category: 'vocabulary',
        updatedAt: new Date(2025, 0, 1).toISOString(), // 固定系統日期
        questions: BUILT_IN_N5_VOCABULARY
      };
    }

    return null;
  },
  saveBank: (bank: QuestionBank) => {
    localStorage.setItem(`${STORAGE_KEYS.BANK_PREFIX}${bank.level}_${bank.category}`, JSON.stringify(bank));
  },
  deleteBank: (level: string, category: string) => {
    localStorage.removeItem(`${STORAGE_KEYS.BANK_PREFIX}${level}_${category}`);
  }
};
