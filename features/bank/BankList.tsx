
import React, { useState, useEffect } from 'react';
import { localDb } from '../../db/localDb';
import { ExamLevel, Category, Question } from '../../types';
import { parseUnderline } from '../../App';

const BankList: React.FC<{ level: ExamLevel; category: Category; onBack: () => void; onSelectQuestion: (q: Question) => void }> = ({ level, category, onBack, onSelectQuestion }) => {
  const [bank] = useState(localDb.getBank(level, category));
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');

  if (!bank) return null;

  const itemTypes = Array.from(new Set(bank.questions.map(q => q.itemType || 'General')));

  const filtered = bank.questions.filter(q => {
    const matchesSearch = q.stem.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType === 'All' || q.itemType === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="p-2 -ml-2 text-slate-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-800">{level} {category === 'vocabulary' ? '文字語彙' : category === 'grammar' ? '文法' : '讀解'}</h2>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Question Bank</p>
        </div>
        <div className="w-10"></div>
      </div>

      <div className="mb-6 space-y-3">
        <div className="relative">
          <input 
            type="text" 
            placeholder="搜尋題目關鍵字..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-slate-100 rounded-2xl py-3 pl-11 pr-4 text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 outline-none transition-all shadow-sm"
          />
          <svg className="w-5 h-5 text-slate-300 absolute left-4 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button 
            onClick={() => setFilterType('All')}
            className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${filterType === 'All' ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100' : 'bg-white text-slate-400 border border-slate-100'}`}
          >
            全部題型
          </button>
          {itemTypes.map(type => (
            <button 
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${filterType === type ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100' : 'bg-white text-slate-400 border border-slate-100'}`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3 pb-10">
        {filtered.map((q, idx) => (
          <button 
            key={q.id}
            onClick={() => onSelectQuestion(q)}
            className="w-full bg-white p-5 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-4 text-left active:scale-[0.98] transition-transform"
          >
            <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-xs font-black text-indigo-400 flex-shrink-0">
              {idx + 1}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="japanese text-sm font-bold text-slate-700 leading-relaxed line-clamp-2">
                {parseUnderline(q.stem)}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{q.itemType}</span>
                <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                <span className="text-[9px] font-black text-indigo-300 uppercase tracking-widest">View Details</span>
              </div>
            </div>
          </button>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-300">
            <p className="font-bold">找不到符合條件的題目</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BankList;
