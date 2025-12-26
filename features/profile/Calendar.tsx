
import React, { useState } from 'react';
import { DailyGoal } from '../../types';

interface CalendarProps {
  dailyGoal: DailyGoal;
}

const Calendar: React.FC<CalendarProps> = ({ dailyGoal }) => {
  const [view, setView] = useState<'week' | 'month'>('week');
  const [showDetail, setShowDetail] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  // Generate mock dates
  const today = new Date();
  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
  
  const getWeekDates = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date();
        d.setDate(today.getDate() - today.getDay() + i);
        dates.push(d);
    }
    return dates;
  };

  const dates = getWeekDates();

  const handleDayClick = (d: Date) => {
    setSelectedDay(d.toLocaleDateString('zh-TW', { month: 'long', day: 'numeric' }));
    setShowDetail(true);
  };

  return (
    <div className="bg-white p-6 rounded-[40px] shadow-sm border border-slate-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-slate-800">學習日曆</h3>
        <select 
          value={view}
          onChange={(e) => setView(e.target.value as any)}
          className="text-xs font-bold text-slate-400 bg-slate-50 border-none rounded-lg p-2 focus:ring-0"
        >
          <option value="week">週曆</option>
          <option value="month">月曆</option>
        </select>
      </div>

      <div className="flex justify-between gap-2 mb-8">
        {dates.map((d, i) => {
            const isToday = d.toDateString() === today.toDateString();
            const isCompleted = d.getDate() < today.getDate() || (isToday && dailyGoal.current >= dailyGoal.target);
            
            return (
                <button 
                    key={i} 
                    onClick={() => handleDayClick(d)}
                    className="flex flex-col items-center flex-1 gap-3"
                >
                    <span className="text-xs font-black text-slate-300 uppercase">{weekDays[i]}</span>
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
                        isCompleted 
                        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-200' 
                        : isToday ? 'border-2 border-indigo-500 text-indigo-500 font-black' : 'bg-slate-50 text-slate-300'
                    }`}>
                        {isCompleted ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                        ) : d.getDate()}
                    </div>
                </button>
            )
        })}
      </div>

      <div className="flex items-center gap-4 bg-indigo-50 p-4 rounded-3xl border border-indigo-100">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-xl italic shadow-lg">
              🔥 5
          </div>
          <div>
              <div className="text-sm font-bold text-slate-800">連續達標天數</div>
              <div className="text-xs text-slate-500">再堅持 2 天解鎖新成就！</div>
          </div>
      </div>

      {showDetail && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/50 backdrop-blur-md">
            <div className="bg-white rounded-[40px] w-full max-w-sm overflow-hidden shadow-2xl animate-scale-up">
                <div className="p-8">
                    <h4 className="text-2xl font-bold text-slate-800 mb-2">{selectedDay}</h4>
                    <p className="text-slate-500 mb-8 border-b border-slate-100 pb-4 uppercase tracking-widest text-xs font-black">每日學習摘要</p>
                    
                    <div className="space-y-6 mb-10">
                        <div className="flex justify-between items-center">
                            <span className="text-slate-500 font-medium">練習類別</span>
                            <span className="font-bold text-slate-800">N5 文字語彙 / N4 文法</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-500 font-medium">答對題數</span>
                            <span className="font-bold text-emerald-500">12 題</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-500 font-medium">練習時長</span>
                            <span className="font-bold text-slate-800">15:32</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-slate-500 font-medium">達標狀態</span>
                            <span className="font-bold text-emerald-500">已達成</span>
                        </div>
                    </div>

                    <button 
                        onClick={() => setShowDetail(false)}
                        className="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl active:scale-95 transition-transform"
                    >
                        我知道了
                    </button>
                </div>
            </div>
          </div>
      )}
    </div>
  );
};

export default Calendar;
