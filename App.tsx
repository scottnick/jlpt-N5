
import React, { useState, useEffect } from 'react';
import Home from './features/questions/Home';
import ModeSelect from './features/questions/ModeSelect';
import QuizSessionUI from './features/questions/QuizSessionUI';
import Results from './features/questions/Results';
import NotebookHub from './features/notebook/NotebookHub';
import NotebookList from './features/notebook/NotebookList';
import WrongBook from './features/notebook/WrongBook';
import BankHub from './features/bank/BankHub';
import BankCategories from './features/bank/BankCategories';
import BankList from './features/bank/BankList';
import BankDetail from './features/bank/BankDetail';
import Profile from './features/profile/Profile';
import { ExamLevel, Category, QuizSession, WrongQuestion, Question } from './types';
import { localDb } from './db/localDb';
import { generateQuiz } from './services/gemini';

type AppScreen = 'home' | 'mode_select' | 'quiz_setup' | 'quiz' | 'results' | 'notebook_hub' | 'notebook_words' | 'notebook_wrong' | 'profile' | 'bank_hub' | 'bank_categories' | 'bank_list' | 'bank_detail';

// 全域底線解析函數
export const parseUnderline = (text: string) => {
  if (!text) return "";
  const parts = text.split(/(\[\[u\]\].*?\[\[\/u\]\])/g);
  return parts.map((part, i) => {
    const match = part.match(/\[\[u\]\](.*?)\[\[\/u\]\]/);
    if (match) {
      return (
        <span key={i} className="underline decoration-slate-400 decoration-1 underline-offset-4 font-bold">
          {match[1]}
        </span>
      );
    }
    return part;
  });
};

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('home');
  const [selectedLevel, setSelectedLevel] = useState<ExamLevel>('N5');
  const [selectedCategory, setSelectedCategory] = useState<Category>('vocabulary');
  const [activeSession, setActiveSession] = useState<QuizSession | null>(null);
  const [activeQuestion, setActiveQuestion] = useState<Question | null>(null);
  const [quizResults, setQuizResults] = useState<{ answers: Record<string, string>, time: number } | null>(null);
  const [dailyGoal, setDailyGoal] = useState(localDb.getGoals());

  const navigateTo = (screen: AppScreen) => {
    setCurrentScreen(screen);
  };

  useEffect(() => {
    localDb.saveGoals(dailyGoal);
  }, [dailyGoal]);

  const handleQuizFinish = (correctCount: number, timeSeconds: number) => {
    setDailyGoal(prev => ({ ...prev, current: prev.current + correctCount }));
    if (activeSession) {
      localDb.updateQuizResult(activeSession.examLevel, activeSession.questions.length, correctCount, timeSeconds);
      const wrongs: WrongQuestion[] = activeSession.questions
        .filter(q => quizResults?.answers[q.id] !== (q.answerIndex + 1).toString())
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
        return <NotebookHub onSelect={(choice) => {
          if (choice === 'bank') navigateTo('bank_hub');
          else navigateTo(choice === 'words' ? 'notebook_words' : 'notebook_wrong');
        }} />;
      case 'notebook_words':
        return <NotebookList onBack={() => navigateTo('notebook_hub')} />;
      case 'notebook_wrong':
        return <WrongBook onBack={() => navigateTo('notebook_hub')} />;
      case 'bank_hub':
        return <BankHub onBack={() => navigateTo('notebook_hub')} onSelectLevel={(l) => { setSelectedLevel(l); navigateTo('bank_categories'); }} />;
      case 'bank_categories':
        return <BankCategories level={selectedLevel} onBack={() => navigateTo('bank_hub')} onSelectCategory={(c) => { setSelectedCategory(c); navigateTo('bank_list'); }} />;
      case 'bank_list':
        return <BankList level={selectedLevel} category={selectedCategory} onBack={() => navigateTo('bank_categories')} onSelectQuestion={(q) => { setActiveQuestion(q); navigateTo('bank_detail'); }} />;
      case 'bank_detail':
        return <BankDetail question={activeQuestion!} onBack={() => navigateTo('bank_list')} />;
      case 'profile':
        return <Profile dailyGoal={dailyGoal} />;
      default:
        return <Home onSelectLevel={() => {}} dailyGoal={dailyGoal} />;
    }
  };

  const isQuizMode = currentScreen === 'quiz' || currentScreen === 'results';
  
  // 導覽列 Active 狀態判斷
  const isPracticeActive = currentScreen === 'home' || currentScreen === 'mode_select' || currentScreen === 'quiz_setup';
  const isBankActive = currentScreen.startsWith('bank');
  const isNotebookActive = currentScreen === 'notebook_hub' || currentScreen === 'notebook_words' || currentScreen === 'notebook_wrong';
  const isProfileActive = currentScreen === 'profile';

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-slate-50 relative shadow-2xl overflow-hidden">
      <div className="flex-1 overflow-y-auto pb-20">
        {renderScreen()}
      </div>

      {!isQuizMode && (
        <nav className="absolute bottom-0 w-full bg-white border-t border-slate-200 flex py-3 z-50 shadow-inner">
          <button 
            onClick={() => navigateTo('home')}
            className={`flex-1 flex flex-col items-center gap-1 transition-colors ${isPracticeActive ? 'text-indigo-600' : 'text-slate-400'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2c-3.31 0-6 2.69-6 6v2H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-1V8c0-3.31-2.69-6-6-6zm4 8H8V8c0-2.21 1.79-4 4-4s4 1.79 4 4v2z" />
            </svg>
            <span className="text-[10px] font-bold">練習</span>
          </button>

          <button 
            onClick={() => navigateTo('bank_hub')}
            className={`flex-1 flex flex-col items-center gap-1 transition-colors ${isBankActive ? 'text-indigo-600' : 'text-slate-400'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span className="text-[10px] font-bold">題庫</span>
          </button>

          <button 
            onClick={() => navigateTo('notebook_hub')}
            className={`flex-1 flex flex-col items-center gap-1 transition-colors ${isNotebookActive ? 'text-indigo-600' : 'text-slate-400'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-[10px] font-bold">筆記本</span>
          </button>

          <button 
            onClick={() => navigateTo('profile')}
            className={`flex-1 flex flex-col items-center gap-1 transition-colors ${isProfileActive ? 'text-indigo-600' : 'text-slate-400'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-[10px] font-bold">個人檔案</span>
          </button>
        </nav>
      )}
    </div>
  );
};

// Item Type Definitions
const ITEM_TYPES_CONFIG: Record<string, Record<string, { id: string, label: string }[]>> = {
  'N5': {
    vocabulary: [
      { id: 'kanji_reading', label: '漢字讀法' },
      { id: 'orthography', label: '表記' },
      { id: 'context_expression', label: '文脈規定' },
      { id: 'paraphrase', label: '近義替換' },
    ],
    grammar: [
      { id: 'selecting_grammar_form', label: '文法形式' },
      { id: 'sentence_composition', label: '句子組成' },
    ],
    reading: [
      { id: 'reading_short_passage', label: '短文理解' },
      { id: 'reading_info_retrieval', label: '資訊檢索' },
    ],
    mock: [
      { id: 'mock_mixed', label: '綜合模擬題' }
    ]
  },
  'N4': {
    vocabulary: [
      { id: 'kanji_reading', label: '漢字讀法' },
      { id: 'orthography', label: '表記' },
      { id: 'context_expression', label: '文脈規定' },
      { id: 'paraphrase', label: '近義替換' },
      { id: 'usage', label: '用法' },
    ],
    grammar: [
      { id: 'selecting_grammar_form', label: '文法形式' },
      { id: 'sentence_composition', label: '句子組成' },
      { id: 'text_grammar', label: '文章文法' },
    ],
    reading: [
      { id: 'reading_short_passage', label: '短文理解' },
      { id: 'reading_mid_passage', label: '中級文章理解' },
      { id: 'reading_info_retrieval', label: '資訊檢索' },
    ],
    mock: [
      { id: 'mock_mixed', label: '綜合模擬題' }
    ]
  },
  'Conversational': {
    vocabulary: [{ id: 'daily_words', label: '日常單字' }],
    grammar: [{ id: 'daily_grammar', label: '日常文法' }],
    reading: [{ id: 'daily_reading', label: '生活對話' }],
    mock: [{ id: 'daily_mock', label: '情境模擬' }]
  }
};

const QuizSetup: React.FC<{ level: ExamLevel, category: Category, onStart: (s: QuizSession) => void, onBack: () => void }> = ({ level, category, onStart, onBack }) => {
  const [count, setCount] = useState(5);
  const [loading, setLoading] = useState(false);
  
  const availableTypes = ITEM_TYPES_CONFIG[level]?.[category] || [];
  const [selectedTypes, setSelectedTypes] = useState<string[]>(availableTypes.map(t => t.id));

  const toggleType = (id: string) => {
    setSelectedTypes(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const toggleAll = () => {
    if (selectedTypes.length === availableTypes.length) setSelectedTypes([]);
    else setSelectedTypes(availableTypes.map(t => t.id));
  };

  const handleStart = async () => {
    if (selectedTypes.length === 0) {
      alert("請至少選擇一個題型");
      return;
    }
    setLoading(true);
    try {
      const session = await generateQuiz(level, category, count, selectedTypes);
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
          <h2 className="text-xl font-bold text-slate-800 animate-pulse">正在透過 AI 生成題目...</h2>
          <p className="text-slate-500 mt-2">正在為您平均分配各小題型</p>
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

      <h2 className="text-2xl font-bold text-slate-800 mb-2">測驗設定</h2>
      <p className="text-slate-500 mb-8">{level} - {category === 'vocabulary' ? '文字語彙' : category === 'grammar' ? '文法' : category === 'reading' ? '讀解' : '模擬考'}</p>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-slate-700">選擇小題型</h3>
          <button onClick={toggleAll} className="text-xs text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded">
            {selectedTypes.length === availableTypes.length ? "取消全選" : "全選"}
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {availableTypes.map(type => (
            <button
              key={type.id}
              onClick={() => toggleType(type.id)}
              className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all ${selectedTypes.includes(type.id) ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-500 border-slate-200'}`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-bold text-slate-700 mb-4">選擇題數</h3>
        <div className="grid grid-cols-3 gap-4">
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
