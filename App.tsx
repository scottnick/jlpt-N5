
import React, { useState, useEffect } from 'react';
import Home from './features/questions/Home';
import ModeSelect from './features/questions/ModeSelect';
import QuizSessionUI from './features/questions/QuizSessionUI';
import Results from './features/questions/Results';
import NotebookHub from './features/notebook/NotebookHub';
import NotebookList from './features/notebook/NotebookList';
import WrongBook from './features/notebook/WrongBook';
import Profile from './features/profile/Profile';
import { ExamLevel, Category, QuizSession, WrongQuestion } from './types';
import { localDb } from './db/localDb';
import { generateQuiz } from './services/gemini';

type AppScreen = 'home' | 'mode_select' | 'quiz_setup' | 'quiz' | 'results' | 'notebook_hub' | 'notebook_words' | 'notebook_wrong' | 'profile';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('home');
  const [selectedLevel, setSelectedLevel] = useState<ExamLevel>('N5');
  const [selectedCategory, setSelectedCategory] = useState<Category>('vocabulary');
  const [activeSession, setActiveSession] = useState<QuizSession | null>(null);
  const [quizResults, setQuizResults] = useState<{ answers: Record<string, string>, time: number } | null>(null);
  const [dailyGoal, setDailyGoal] = useState(localDb.getGoals());

  const navigateTo = (screen: AppScreen) => {
    setCurrentScreen(screen);
  };

  useEffect(() => {
    localDb.saveGoals(dailyGoal);
  }, [dailyGoal]);

  const handleQuizFinish = (correctCount: number, timeSeconds: number) => {
    // 1. Update daily goal
    setDailyGoal(prev => ({ ...prev, current: prev.current + correctCount }));
    
    // 2. Update persistent detailed stats
    if (activeSession) {
      localDb.updateQuizResult(activeSession.examLevel, activeSession.questions.length, correctCount, timeSeconds);
      
      // 3. Save wrong questions
      const wrongs: WrongQuestion[] = activeSession.questions
        .filter(q => quizResults?.answers[q.id] !== q.answer.label)
        .map(q => ({
          id: `${q.id}_${Date.now()}`,
          level: activeSession.examLevel,
          category: activeSession.category,
          question: q,
          userAnswer: quizResults?.answers[q.id] || '',
          timestamp: new Date().toISOString()
        }));
      localDb.addWrongQuestions(wrongs);
    }
    
    navigateTo('home');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home onSelectLevel={(l) => { setSelectedLevel(l); navigateTo('mode_select'); }} dailyGoal={dailyGoal} />;
      case 'mode_select':
        return <ModeSelect level={selectedLevel} dailyGoal={dailyGoal} onSelectCategory={(c) => { setSelectedCategory(c); navigateTo('quiz_setup'); }} onBack={() => navigateTo('home')} />;
      case 'quiz_setup':
        return <QuizSetup level={selectedLevel} category={selectedCategory} onStart={(s) => { setActiveSession(s); navigateTo('quiz'); }} onBack={() => navigateTo('mode_select')} />;
      case 'quiz':
        return <QuizSessionUI session={activeSession!} onComplete={(res, t) => { setQuizResults({ answers: res, time: t }); navigateTo('results'); }} onCancel={() => navigateTo('home')} />;
      case 'results':
        return <Results session={activeSession!} results={quizResults!} onFinish={(correct) => handleQuizFinish(correct, quizResults!.time)} />;
      case 'notebook_hub':
        return <NotebookHub onSelect={(choice) => navigateTo(choice === 'words' ? 'notebook_words' : 'notebook_wrong')} />;
      case 'notebook_words':
        return <NotebookList onBack={() => navigateTo('notebook_hub')} />;
      case 'notebook_wrong':
        return <WrongBook onBack={() => navigateTo('notebook_hub')} />;
      case 'profile':
        return <Profile dailyGoal={dailyGoal} />;
      default:
        return <Home onSelectLevel={() => {}} dailyGoal={dailyGoal} />;
    }
  };

  const isQuizMode = currentScreen === 'quiz' || currentScreen === 'results';
  const isNotebookActive = currentScreen.startsWith('notebook');

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-slate-50 relative shadow-2xl overflow-hidden">
      <div className="flex-1 overflow-y-auto pb-20">
        {renderScreen()}
      </div>

      {!isQuizMode && (
        <nav className="absolute bottom-0 w-full bg-white border-t border-slate-200 flex py-3 z-50 shadow-inner">
          <button 
            onClick={() => navigateTo('home')}
            className={`flex-1 flex flex-col items-center gap-1 transition-colors ${currentScreen === 'home' || currentScreen === 'mode_select' || currentScreen === 'quiz_setup' ? 'text-indigo-600' : 'text-slate-400'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            <span className="text-[10px] font-bold">題目</span>
          </button>
          <button 
            onClick={() => navigateTo('notebook_hub')}
            className={`flex-1 flex flex-col items-center gap-1 transition-colors ${isNotebookActive ? 'text-indigo-600' : 'text-slate-400'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            <span className="text-[10px] font-bold">筆記本</span>
          </button>
          <button 
            onClick={() => navigateTo('profile')}
            className={`flex-1 flex flex-col items-center gap-1 transition-colors ${currentScreen === 'profile' ? 'text-indigo-600' : 'text-slate-400'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            <span className="text-[10px] font-bold">個人檔案</span>
          </button>
        </nav>
      )}
    </div>
  );
};

const QuizSetup: React.FC<{ level: ExamLevel, category: Category, onStart: (s: QuizSession) => void, onBack: () => void }> = ({ level, category, onStart, onBack }) => {
  const [count, setCount] = useState(5);
  const [loading, setLoading] = useState(false);

  const handleStart = async () => {
    setLoading(true);
    try {
      const session = await generateQuiz(level, category, count);
      onStart(session);
    } catch (e) {
      alert(e instanceof Error ? e.message : '發生錯誤');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center gap-6">
        <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        <div>
          <h2 className="text-xl font-bold text-slate-800">正在透過 AI 生成題目...</h2>
          <p className="text-slate-500 mt-2">這可能需要幾秒鐘，請稍候</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <button onClick={onBack} className="mb-8 text-slate-500 flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        返回
      </button>

      <h2 className="text-2xl font-bold text-slate-800 mb-2">選擇題數</h2>
      <p className="text-slate-500 mb-8">{level} - {category === 'vocabulary' ? '文字語彙' : category === 'grammar' ? '文法' : category === 'reading' ? '讀解' : '模擬考'}</p>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[3, 5, 10].map(n => (
          <button 
            key={n}
            onClick={() => setCount(n)}
            className={`py-4 rounded-2xl font-bold transition-all ${count === n ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-slate-600 border border-slate-200'}`}
          >
            {n} 題
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 mb-12">
        <span className="text-slate-700 font-medium">自訂題數</span>
        <div className="flex items-center gap-4">
          <button onClick={() => setCount(Math.max(1, count - 1))} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xl">-</button>
          <span className="text-xl font-bold w-8 text-center">{count}</span>
          <button onClick={() => setCount(count + 1)} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xl">+</button>
        </div>
      </div>

      <button 
        onClick={handleStart}
        className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-transform"
      >
        開始測驗
      </button>
    </div>
  );
};

export default App;
