
import React from 'react';
import { ExamLevel, Category, DailyGoal } from '../../types';

interface ModeSelectProps {
  level: ExamLevel;
  dailyGoal: DailyGoal;
  onSelectCategory: (cat: Category) => void;
  onBack: () => void;
}

const ModeSelect: React.FC<ModeSelectProps> = ({ level, dailyGoal, onSelectCategory, onBack }) => {
  const progressPercent = Math.min(100, (dailyGoal.current / dailyGoal.target) * 100);

  const categories: { id: Category, label: string, desc: string, icon: React.ReactNode }[] = [
    { 
      id: 'vocabulary', 
      label: '文字語彙', 
      desc: '漢字讀法、書寫及語彙應用練習',
      icon: <span className="text-xl">あ</span>
    },
    { 
      id: 'grammar', 
      label: '文法', 
      desc: '句型結構與語法形式判斷',
      icon: <span className="text-xl">は</span>
    },
    { 
      id: 'reading', 
      label: '讀解', 
      desc: '文章理解、資訊檢索及重點分析',
      icon: <span className="text-xl">讀</span>
    },
    { 
      id: 'mock', 
      label: '模擬考', 
      desc: '綜合性模擬測驗，全方位檢測實力',
      icon: <span className="text-xl">★</span>
    }
  ];

  return (
    <div className="p-6">
      <button onClick={onBack} className="mb-6 text-slate-500 flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        返回主頁
      </button>

      {/* Tiny Goal Bar */}
      <div className="mb-8 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
        <div className="flex justify-between text-xs font-bold text-slate-400 mb-2 uppercase tracking-wider">
          <span>今日目標</span>
          <span>{dailyGoal.current}/{dailyGoal.target} 題</span>
        </div>
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-indigo-500" style={{ width: `${progressPercent}%` }}></div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800">{level} 模式選擇</h2>
        <p className="text-slate-500">請選擇你想要練習的類別</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {categories.map(cat => (
          <button 
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className="flex items-center gap-4 bg-white p-5 rounded-3xl border border-slate-100 shadow-sm text-left active:scale-[0.98] transition-transform"
          >
            <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 font-bold">
              {cat.icon}
            </div>
            <div>
              <div className="font-bold text-slate-800 text-lg">{cat.label}</div>
              <div className="text-sm text-slate-500">{cat.desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ModeSelect;
