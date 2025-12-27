
import React, { useState } from 'react';
import { QuizSession, NotebookEntry } from '../../types';
import { localDb } from '../../db/localDb';

interface ResultsProps {
  session: QuizSession;
  results: { answers: Record<string, string>, time: number };
  onFinish: (correctCount: number) => void;
}

const parseQuestionText = (text: string) => {
  const parts = text.split(/(\[\[u\]\].*?\[\[\/u\]\])/g);
  return parts.map((part, i) => {
    const match = part.match(/\[\[u\]\](.*?)\[\[\/u\]\]/);
    if (match) {
      return (
        <span key={i} className="underline decoration-slate-400 decoration-1 underline-offset-4 px-0.5">
          {match[1]}
        </span>
      );
    }
    return part;
  });
};

const Results: React.FC<ResultsProps> = ({ session, results, onFinish }) => {
  const [notebook, setNotebook] = useState(localDb.getNotebook());
  const correctCount = session.questions.filter(q => results.answers[q.id] === (q.answerIndex + 1).toString()).length;
  const scorePercent = (correctCount / session.questions.length) * 100;
  
  const getFeedback = () => {
    if (scorePercent >= 90) return { text: "太棒了！完美的表現！", color: "bg-emerald-500" };
    if (scorePercent >= 60) return { text: "不錯喔！繼續加油！", color: "bg-amber-500" };
    return { text: "再多加練習，你可以的！", color: "bg-rose-500" };
  };

  const feedback = getFeedback();

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className={`${feedback.color} p-10 pt-12 text-center text-white rounded-b-[50px] shadow-xl relative`}>
        <div className="text-sm font-bold opacity-80 mb-2 uppercase tracking-widest">測驗結算</div>
        <div className="text-6xl font-black mb-4">{Math.round(scorePercent)}%</div>
        <h2 className="text-xl font-bold">{feedback.text}</h2>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="text-xs opacity-80">答對題數</div>
                <div className="text-xl font-bold">{correctCount} / {session.questions.length}</div>
            </div>
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="text-xs opacity-80">總時長</div>
                <div className="text-xl font-bold">{Math.floor(results.time / 60)}:{(results.time % 60).toString().padStart(2, '0')}</div>
            </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">詳解回顧</h3>

        {session.questions.map((q, idx) => {
          const userAnswer = results.answers[q.id];
          const isCorrect = userAnswer === (q.answerIndex + 1).toString();
          
          return (
            <div key={q.id} className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs flex items-center justify-center font-bold">#{idx+1}</span>
                    <span className="text-xs font-bold text-indigo-500 uppercase">{q.itemType || q.subtype}</span>
                    <span className={`ml-auto text-xs font-bold px-2 py-0.5 rounded ${isCorrect ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                        {isCorrect ? '正確' : '錯誤'}
                    </span>
                </div>
                <div className="text-lg font-bold text-slate-800 japanese mb-4 leading-relaxed">
                  {parseQuestionText(q.stem)}
                </div>
                
                <div className="space-y-2 mb-6">
                    {q.choices.map((c, cIdx) => {
                        const label = (cIdx + 1).toString();
                        const text = typeof c === 'string' ? c : c.text;
                        const isThisCorrect = cIdx === q.answerIndex;
                        const isThisUser = userAnswer === label;
                        return (
                            <div key={label} className={`flex items-center justify-between p-3 rounded-xl border ${isThisCorrect ? 'border-emerald-100 bg-emerald-50' : isThisUser ? 'border-rose-100 bg-rose-50' : 'border-slate-50 bg-slate-50'}`}>
                                <div className="flex gap-3 items-center">
                                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${isThisCorrect ? 'bg-emerald-500 text-white' : isThisUser ? 'bg-rose-500 text-white' : 'bg-slate-200 text-slate-500'}`}>{label}</span>
                                    <span className="japanese font-medium text-slate-700">{text}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="bg-indigo-50/50 p-5 rounded-2xl text-sm">
                    <div className="text-indigo-600 font-bold mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"></path></svg>
                        官方詳解
                    </div>
                    <div className="mb-4">
                        <div className="font-black text-slate-400 text-[10px] uppercase mb-1">【正解】</div>
                        <div className="text-emerald-600 font-bold">{q.explanation.correct}</div>
                    </div>
                    <div className="mb-4">
                        <div className="font-black text-slate-400 text-[10px] uppercase mb-1">【解析】</div>
                        <div className="text-slate-700 leading-relaxed">{q.explanation.analysis}</div>
                    </div>
                    <div className="mb-4">
                        <div className="font-black text-slate-400 text-[10px] uppercase mb-1">【選項分析】</div>
                        <div className="space-y-1">
                            {q.explanation.options.map(opt => (
                                <div key={opt.label} className="text-slate-600">
                                    <span className="font-bold mr-2">{opt.label}.</span>
                                    {opt.whyWrongOrRight}
                                </div>
                            ))}
                        </div>
                    </div>
                    {q.explanation.extra && (
                        <div>
                            <div className="font-black text-slate-400 text-[10px] uppercase mb-1">【補充】</div>
                            <div className="text-indigo-600 japanese italic">{q.explanation.extra}</div>
                        </div>
                    )}
                </div>
              </div>
            </div>
          );
        })}

        <button 
          onClick={() => onFinish(correctCount)}
          className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-transform mt-8 mb-20"
        >
          完成複習
        </button>
      </div>
    </div>
  );
};

export default Results;
