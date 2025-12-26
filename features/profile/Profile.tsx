
import React, { useState } from 'react';
import { DailyGoal } from '../../types';
import { localDb } from '../../db/localDb';
import Calendar from './Calendar';

interface ProfileProps {
  dailyGoal: DailyGoal;
}

const Profile: React.FC<ProfileProps> = ({ dailyGoal }) => {
  const [stats] = useState(localDb.getStats());

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="p-6">
        {/* User Info Header */}
        <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-16 rounded-full bg-indigo-100 border-4 border-white shadow-sm flex items-center justify-center text-indigo-600">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-slate-800">遊客使用者</h2>
                <button className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md mt-1">登入同步進度</button>
            </div>
            <button className="ml-auto p-3 rounded-2xl bg-white border border-slate-100 shadow-sm text-slate-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </button>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-xs font-black text-slate-300 uppercase tracking-widest mb-1">累積題數</div>
                <div className="text-3xl font-black text-slate-800">{stats.totalQuestions}</div>
            </div>
            <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
                <div className="text-xs font-black text-slate-300 uppercase tracking-widest mb-1">正確率</div>
                <div className="text-3xl font-black text-emerald-500">
                    {stats.totalQuestions > 0 ? Math.round((stats.totalCorrect / stats.totalQuestions) * 100) : 0}%
                </div>
            </div>
        </div>

        {/* Google Login Placeholder Section */}
        <div className="bg-indigo-600 p-8 rounded-[40px] text-white shadow-xl mb-10 relative overflow-hidden">
            <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2">雲端備份你的學習成果</h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">登入 Google 帳號，跨裝置同步筆記本與統計數據。</p>
                <button className="w-full py-4 bg-white text-indigo-600 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-transform">
                    <svg className="w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64,15.19,19.27,12.19,19.27C9.03,19.27,6.36,16.71,6.36,12.12C6.36,7.5,9.03,4.97,12.12,4.97C14.15,4.97,16,5.84,17.2,7.14L19.27,5.07C17.5,3.34,15,2.25,12.14,2.25C6.54,2.25,2.12,6.54,2.12,12.12C2.12,17.7,6.54,22,12.14,22C17.7,22,21.35,17.7,21.35,12.12C21.35,11.77,21.32,11.43,21.35,11.1Z"/></svg>
                    Google 帳號登入
                </button>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
        </div>

        {/* Learning Calendar */}
        <div className="mb-10">
            <Calendar dailyGoal={dailyGoal} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
