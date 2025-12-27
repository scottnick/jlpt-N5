
import React, { useState } from 'react';
import { localDb } from '../../db/localDb';
import { WrongQuestion, ExamLevel } from '../../types';
import { parseUnderline } from '../../App';

const WrongBook: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [items, setItems] = useState(localDb.getWrongQuestions());
  const [filter, setFilter] = useState<ExamLevel | 'All'>('All');
  const [selected, setSelected] = useState<WrongQuestion | null>(null);

  const filtered = filter === 'All' ? items : items.filter(i => i.level === filter);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
          <button onClick={onBack} className="p-2 -ml-2 text-slate-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <h2 className="text-xl font-bold text-slate-800">錯題回顧</h2>
          <div className="w-10"></div>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {['All', 'N4', 'N5', 'Conversational'].map(lvl => (
              <button 
                key={lvl}
                onClick={() => setFilter(lvl as any)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${filter === lvl ? 'bg-indigo-600 text-white' : 'bg-white text-slate-400 border border-slate-100'}`}
              >
                  {lvl === 'Conversational' ? '日常' : lvl}
              </button>
          ))}
      </div>

      <div className="space-y-3">
          {filtered.map(item => (
              <button 
                key={item.id}
                onClick={() => setSelected(item)}
                className="w-full bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4 text-left active:scale-[0.99]"
              >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-[10px] font-black ${item.level === 'N5' ? 'bg-amber-100 text-amber-600' : 'bg-indigo-100 text-indigo-600'}`}>
                      {item.level}
                  </div>
                  <div className="flex-1 overflow-hidden">
                      <p className="japanese text-sm font-bold text-slate-700 truncate">
                        {parseUnderline(item.question.stem)}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">{item.question.itemType || item.category} • {new Date(item.timestamp).toLocaleDateString()}</p>
                  </div>
              </button>
          ))}

          {filtered.length === 0 && (
              <div className="text-center py-20 text-slate-300">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  <p className="font-bold">目前沒有相關錯題紀錄</p>
              </div>
          )}
      </div>

      {selected && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md">
              <div className="bg-white rounded-[40px] w-full max-w-sm overflow-hidden shadow-2xl animate-scale-up max-h-[85vh] flex flex-col">
                  <div className="bg-rose-600 p-6 text-white shrink-0">
                      <div className="flex justify-between items-center mb-4">
                          <span className="px-3 py-1 bg-white/20 rounded-full text-[10px] font-black uppercase tracking-widest">{selected.level} • {selected.category}</span>
                          <button onClick={() => setSelected(null)} className="p-1 hover:bg-white/10 rounded-full">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                          </button>
                      </div>
                      <p className="japanese text-xl font-bold leading-relaxed">
                        {parseUnderline(selected.question.stem)}
                      </p>
                  </div>
                  <div className="p-6 overflow-y-auto flex-1">
                      <div className="space-y-3 mb-8">
                          {selected.question.choices.map((c, idx) => {
                              const label = (idx + 1).toString();
                              const text = typeof c === 'string' ? c : c.text;
                              const isCorrect = idx === selected.question.answerIndex;
                              const isUser = label === selected.userAnswer;
                              return (
                                  <div key={label} className={`p-3 rounded-xl border flex items-center justify-between ${isCorrect ? 'border-emerald-200 bg-emerald-50' : isUser ? 'border-rose-200 bg-rose-50' : 'border-slate-50 bg-slate-50'}`}>
                                      <div className="flex items-center gap-3">
                                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${isCorrect ? 'bg-emerald-500 text-white' : isUser ? 'bg-rose-500 text-white' : 'bg-slate-200 text-slate-400'}`}>{label}</span>
                                          <span className="japanese text-sm text-slate-700">{text}</span>
                                      </div>
                                      {isCorrect && <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>}
                                  </div>
                              )
                          })}
                      </div>

                      <div className="bg-indigo-50 p-5 rounded-3xl text-sm">
                          <h4 className="text-indigo-600 font-black text-xs uppercase tracking-widest mb-3 flex items-center gap-2">💡 詳解詳情</h4>
                          <div className="space-y-4">
                              <div>
                                <div className="font-bold text-emerald-600 mb-1">【正解】 {selected.question.explanation.correct}</div>
                                <p className="text-slate-700 leading-relaxed">{selected.question.explanation.analysis}</p>
                              </div>
                              <div className="space-y-1 border-t border-indigo-100 pt-3">
                                {selected.question.explanation.options.map(opt => (
                                    <div key={opt.label} className="text-slate-600 text-xs">
                                        <span className="font-bold mr-1">{opt.label}.</span>
                                        {opt.whyWrongOrRight}
                                    </div>
                                ))}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default WrongBook;
