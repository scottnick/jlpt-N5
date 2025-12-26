
import React, { useState } from 'react';
import { DailyGoal, UserStats } from '../../types';
import { localDb } from '../../db/localDb';
import Calendar from './Calendar';

interface ProfileProps {
  dailyGoal: DailyGoal;
}

const Profile: React.FC<ProfileProps> = ({ dailyGoal }) => {
  const [stats] = useState<UserStats>(localDb.getStats());
  const [expandedLevel, setExpandedLevel] = useState<string | null>(null);

  const totalAccuracy = stats.totalQuestions > 0 
    ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100) 
    : 0;

  // REORDERED: N4 -> N5 -> Conversational
  const levels = [
    { id: 'N4', name: 'JLPT N4', tag: 'N4' },
    { id: 'N5', name: 'JLPT N5', tag: 'N5' },
    { id: 'Conversational', name: '日常對話', tag: '日常' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600 shadow-lg shadow-indigo-100 flex items-center justify-center text-white">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg>
            </div>
            <div>
                <h2 className="text-xl font-bold text-slate-800">學習者看板</h2>
                <p className="text-xs text-slate-400">紀錄你的成長軌跡</p>
            </div>
        </div>

        <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 flex items-center justify-around mb-8">
            <div className="text-center">
                <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">總做題數</div>
                <div className="text-2xl font-black text-slate-800">{stats.totalQuestions}</div>
            </div>
            <div className="w-[1px] h-10 bg-slate-100"></div>
            <div className="text-center">
                <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">總答對率</div>
                <div className="text-2xl font-black text-indigo-600">{totalAccuracy}%</div>
            </div>
        </div>

        <div className="space-y-3 mb-10">
            <h3 className="text-sm font-black text-slate-300 uppercase tracking-widest px-1">各級別數據</h3>
            {levels.map(lvl => {
                const s = stats.levelStats[lvl.id] || { doneCount: 0, correctCount: 0, totalTimeSeconds: 0 };
                const acc = s.doneCount > 0 ? Math.round((s.correctCount / s.doneCount) * 100) : 0;
                const avg = s.doneCount > 0 ? Math.round(s.totalTimeSeconds / s.doneCount) : 0;
                const isExpanded = expandedLevel === lvl.id;

                return (
                    <div key={lvl.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all">
                        <button 
                            onClick={() => setExpandedLevel(isExpanded ? null : lvl.id)}
                            className="w-full flex items-center justify-between p-5 text-left active:bg-slate-50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xs">
                                    {lvl.tag}
                                </div>
                                <span className="font-bold text-slate-700">{lvl.name}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-right">
                                    <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full block leading-none mb-1">已做 {s.doneCount}</span>
                                </div>
                                <svg className={`w-5 h-5 text-slate-300 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </button>
                        
                        {isExpanded && (
                            <div className="px-5 pb-5 animate-fade-in flex items-center justify-between border-t border-slate-50 pt-5">
                                <div className="space-y-4 flex-1">
                                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                        <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">正確題數</div>
                                        <div className="font-bold text-slate-700">{s.correctCount} <span className="text-xs font-normal text-slate-400">/ {s.doneCount}</span></div>
                                    </div>
                                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                        <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">平均作答</div>
                                        <div className="font-bold text-slate-700">{avg} <span className="text-xs font-normal text-slate-400">秒/題</span></div>
                                    </div>
                                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                        <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest">答對率</div>
                                        <div className="font-bold text-emerald-600">{acc}%</div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col items-center justify-center pl-6">
                                    <div 
                                        className="relative w-24 h-24 rounded-full flex items-center justify-center"
                                        style={{
                                            background: `conic-gradient(#4f46e5 ${acc * 3.6}deg, #f1f5f9 0deg)`
                                        }}
                                    >
                                        <div className="absolute inset-[10px] bg-white rounded-full flex flex-col items-center justify-center">
                                            <span className="text-xl font-black text-slate-800 leading-none">{acc}%</span>
                                            <span className="text-[8px] font-bold text-slate-400 mt-1">Accuracy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>

        <div className="mb-10">
            <Calendar dailyGoal={dailyGoal} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
