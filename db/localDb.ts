
import { UserStats, NotebookEntry, DailyGoal } from '../types';

const STORAGE_KEYS = {
  STATS: 'jlpt_stats',
  NOTEBOOK: 'jlpt_notebook',
  GOALS: 'jlpt_goals',
  HISTORY: 'jlpt_history'
};

export const localDb = {
  getStats: (): UserStats => {
    const data = localStorage.getItem(STORAGE_KEYS.STATS);
    return data ? JSON.parse(data) : {
      totalQuestions: 0,
      totalCorrect: 0,
      totalTimeSeconds: 0,
      categoryStats: {}
    };
  },
  saveStats: (stats: UserStats) => {
    localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
  },
  getNotebook: (): NotebookEntry[] => {
    const data = localStorage.getItem(STORAGE_KEYS.NOTEBOOK);
    return data ? JSON.parse(data) : [];
  },
  saveNotebook: (entries: NotebookEntry[]) => {
    localStorage.setItem(STORAGE_KEYS.NOTEBOOK, JSON.stringify(entries));
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
  }
};
