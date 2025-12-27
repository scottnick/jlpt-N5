
import React from 'react';
import { ExamLevel } from '../../types';

interface BankHubProps {
  onBack: () => void;
  onSelectLevel: (l: ExamLevel) => void;
}

const BankHub: React.FC<BankHubProps> = ({ onBack, onSelectLevel }) => {
  return (
    <div className="p-6 pt-12 animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <button onClick={onBack} className="p-2 -ml-2 text-slate-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-slate-800">題庫中心</h2>
        <p className="text-slate-500 mt-1">選擇等級進入專屬練習題庫</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <button 
          onClick={() => onSelectLevel('N4')}
          className="group relative bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-5 active:scale-[0.98] transition-all hover:shadow-md"
        >
          <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-indigo-600 group-hover:text-white">
            <span className="text-xl font-black">N4</span>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-bold text-slate-800">JLPT N4 題庫</h3>
            <p className="text-sm text-slate-400">掌握中級詞彙與文法應用</p>
          </div>
          <div className="ml-auto text-slate-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </div>
        </button>

        <button 
          onClick={() => onSelectLevel('N5')}
          className="group relative bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-5 active:scale-[0.98] transition-all hover:shadow-md"
        >
          <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-indigo-600 group-hover:text-white">
            <span className="text-xl font-black">N5</span>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-bold text-slate-800">JLPT N5 題庫</h3>
            <p className="text-sm text-slate-400">包含 120 題內建精選練習題</p>
          </div>
          <div className="ml-auto text-slate-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default BankHub;
