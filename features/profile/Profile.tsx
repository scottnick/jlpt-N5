
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

  const levels = [
    { id: 'N4', name: 'JLPT N4', tag: 'N4' },
    { id: 'N5', name: 'JLPT N5', tag: 'N5' },
    { id: 'Conversational', name: '日常對話', tag: '日常' }
  ];

  const getStatusColor = (acc: number) => {
    if (acc >= 90) return { stroke: 'text-emerald-500', text: 'text-emerald-600', bg: 'bg-emerald-50' };
    if (acc >= 70) return { stroke: 'text-blue-500', text: 'text-blue-600', bg: 'bg-blue-50' };
    if (acc >= 40) return { stroke: 'text-amber-500', text: 'text-amber-600', bg: 'bg-amber-50' };
    return { stroke: 'text-rose-500', text: 'text-rose-600', bg: 'bg-rose-50' };
  };

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

        {/* 優化後的總體表現區域 */}
        <div className="mb-8">
            <div className="flex items-center gap-2 px-1 mb-3">
                <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest">總體表現</h3>
            </div>
            <div className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100 flex items-center divide-x divide-slate-100">
                <div className="flex-1 text-center">
                    <div className="text-[11px] font-medium text-slate-500 mb-1">總做題數</div>
                    <div className="text-2xl font-bold text-slate-800 tracking-tight">{stats.totalQuestions}</div>
                </div>
                <div className="flex-1 text-center">
                    <div className="text-[11px] font-medium text-slate-500 mb-1">總答對率</div>
                    <div className="text-2xl font-bold text-indigo-600 tracking-tight">{totalAccuracy}%</div>
                </div>
            </div>
        </div>

        <div className="space-y-3 mb-10">
            <h3 className="text-sm font-black text-slate-300 uppercase tracking-widest px-1">各級別數據</h3>
            {levels.map(lvl => {
                const s = stats.levelStats[lvl.id] || { doneCount: 0, correctCount: 0, totalTimeSeconds: 0 };
                const acc = s.doneCount > 0 ? Math.round((s.correctCount / s.doneCount) * 100) : 0;
                const avg = s.doneCount > 0 ? Math.round(s.totalTimeSeconds / s.doneCount) : 0;
                const isExpanded = expandedLevel === lvl.id;
                const colors = getStatusColor(acc);

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
                                {/* 優化：右上角精簡顯示已做題數 */}
                                <div className="flex items-center gap-1.5 mr-1">
                                    <span className="text-[10px] font-medium text-slate-400">已做</span>
                                    <span className="text-lg font-medium text-slate-800 tracking-tight">{s.doneCount}</span>
                                </div>
                                <svg className={`w-5 h-5 text-slate-300 transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
                        </button>
                        
                        {isExpanded && (
                            <div className="px-5 pb-5 animate-fade-in flex items-center justify-between border-t border-slate-50 pt-5">
                                <div className="space-y-4 flex-1">
                                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                        <div className="text-[10px] font-medium text-slate-500 uppercase tracking-widest mb-0.5">正確題數</div>
                                        <div className="text-lg font-medium text-slate-800 tracking-tight">
                                            {s.correctCount} <span className="text-xs font-normal text-slate-400">/ {s.doneCount}</span>
                                        </div>
                                    </div>
                                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                        <div className="text-[10px] font-medium text-slate-500 uppercase tracking-widest mb-0.5">平均作答</div>
                                        <div className="text-lg font-medium text-slate-800 tracking-tight">
                                            {avg} <span className="text-xs font-normal text-slate-400">秒/題</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-col items-center justify-center pl-6 animate-grow-in">
                                    <div className="relative w-24 h-24 flex items-center justify-center">
                                        <svg viewBox="0 0 36 36" className="w-24 h-24 transform -rotate-90 overflow-visible">
                                            <circle
                                                cx="18"
                                                cy="18"
                                                r="15.915"
                                                fill="none"
                                                stroke="#f1f5f9"
                                                strokeWidth="3.2"
                                            />
                                            <circle
                                                cx="18"
                                                cy="18"
                                                r="15.915"
                                                fill="none"
                                                stroke="currentColor"
                                                className={`${colors.stroke} transition-all duration-700 ease-out`}
                                                strokeWidth="3.2"
                                                strokeDasharray={`${acc} 100`}
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className={`text-xl font-black leading-none ${colors.text}`}>{acc}%</span>
                                        </div>
                                    </div>
                                    <div className="text-[10px] font-medium text-slate-400 mt-2">正確率</div>
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
