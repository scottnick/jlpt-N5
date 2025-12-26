
import React from 'react';
import { ExamLevel, DailyGoal } from '../../types';

interface HomeProps {
  onSelectLevel: (level: ExamLevel) => void;
  dailyGoal: DailyGoal;
}

const Home: React.FC<HomeProps> = ({ onSelectLevel, dailyGoal }) => {
  const progressPercent = Math.min(100, (dailyGoal.current / dailyGoal.target) * 100);

  return (
    <div className="animate-fade-in">
      {/* Top Banner */}
      <div className="bg-indigo-600 p-6 pt-10 pb-16 text-white rounded-b-[40px] shadow-lg">
        <h1 className="text-2xl font-bold mb-4">你好，學習者！</h1>
        
        {/* Daily Goal Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-medium opacity-80">每日目標進度</span>
            <span className="text-lg font-bold">{dailyGoal.current} / {dailyGoal.target} 題</span>
          </div>
          <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-400 transition-all duration-500 ease-out" 
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Category Cards */}
      <div className="px-6 -mt-8 space-y-4 pb-8">
        <LevelCard 
          title="JLPT N4" 
          desc="中級程度，掌握日常對話與基本商務應用。" 
          color="bg-white" 
          onClick={() => onSelectLevel('N4')}
          tag="N4"
        />
        <LevelCard 
          title="JLPT N5" 
          desc="初級程度，日檢入門首選，掌握基本句型。" 
          color="bg-white" 
          onClick={() => onSelectLevel('N5')}
          tag="N5"
        />
        <LevelCard 
          title="日常對話" 
          desc="生活情境模擬，最實用的日文練習。" 
          color="bg-white" 
          onClick={() => onSelectLevel('Conversational')}
          tag="日常"
        />
      </div>
    </div>
  );
};

const LevelCard: React.FC<{ title: string, desc: string, color: string, onClick: () => void, tag: string }> = ({ title, desc, onClick, tag }) => (
  <button 
    onClick={onClick}
    className="w-full text-left bg-white p-5 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow active:scale-[0.98]"
  >
    <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
        <span className="text-indigo-600 font-bold text-lg">{tag}</span>
    </div>
    <div>
      <h3 className="text-lg font-bold text-slate-800">{title}</h3>
      <p className="text-sm text-slate-500 mt-1">{desc}</p>
    </div>
    <div className="ml-auto">
      <svg className="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
    </div>
  </button>
);

export default Home;
