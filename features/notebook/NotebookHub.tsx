
import React from 'react';

interface NotebookHubProps {
  onSelect: (choice: 'words' | 'wrong' | 'bank') => void;
}

const NotebookHub: React.FC<NotebookHubProps> = ({ onSelect }) => {
  return (
    <div className="p-6 pt-12 animate-fade-in">
      <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800">筆記中心</h2>
          <p className="text-slate-500 mt-1">回顧你的學習足跡，攻克弱點</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
          <button 
            onClick={() => onSelect('words')}
            className="group relative bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-5 active:scale-[0.98] transition-all hover:shadow-md"
          >
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              </div>
              <div className="text-left">
                  <h3 className="text-lg font-bold text-slate-800">單字本</h3>
                  <p className="text-sm text-slate-400">收藏你在測驗中標記的生字</p>
              </div>
              <div className="ml-auto text-slate-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </div>
          </button>

          <button 
            onClick={() => onSelect('bank')}
            className="group relative bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-5 active:scale-[0.98] transition-all hover:shadow-md"
          >
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
              </div>
              <div className="text-left">
                  <h3 className="text-lg font-bold text-slate-800">題庫中心</h3>
                  <p className="text-sm text-slate-400">AI 事先生成的練習題庫</p>
              </div>
              <div className="ml-auto text-slate-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </div>
          </button>

          <button 
            onClick={() => onSelect('wrong')}
            className="group relative bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-5 active:scale-[0.98] transition-all hover:shadow-md"
          >
              <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-rose-600 group-hover:text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div className="text-left">
                  <h3 className="text-lg font-bold text-slate-800">錯題本</h3>
                  <p className="text-sm text-slate-400">系統自動紀錄測驗中答錯的題目</p>
              </div>
              <div className="ml-auto text-slate-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </div>
          </button>
      </div>

      <div className="mt-12 bg-slate-100 p-6 rounded-3xl border border-slate-200/50">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-1">學習箴言</p>
          <p className="text-center text-slate-500 italic text-sm">「失敗は成功の基（失敗是成功之母）。」</p>
      </div>
    </div>
  );
};

export default NotebookHub;
