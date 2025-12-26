
import React, { useState } from 'react';
import { QuizSession, NotebookEntry } from '../../types';
import { localDb } from '../../db/localDb';

interface ResultsProps {
  session: QuizSession;
  results: { answers: Record<string, string>, time: number };
  onFinish: (correctCount: number) => void;
}

const Results: React.FC<ResultsProps> = ({ session, results, onFinish }) => {
  const [notebook, setNotebook] = useState(localDb.getNotebook());
  const correctCount = session.questions.filter(q => results.answers[q.id] === q.answer.label).length;
  const scorePercent = (correctCount / session.questions.length) * 100;
  
  const getFeedback = () => {
    if (scorePercent >= 90) return { text: "太棒了！完美的表現！", color: "bg-emerald-500", textCol: "text-emerald-600" };
    if (scorePercent >= 60) return { text: "不錯喔！繼續加油！", color: "bg-amber-500", textCol: "text-amber-600" };
    return { text: "再多加練習，你可以的！", color: "bg-rose-500", textCol: "text-rose-600" };
  };

  const feedback = getFeedback();

  const toggleNotebook = (choice: any, level: string) => {
    const word = choice.word || choice.text;
    const exists = notebook.find(e => e.word === word);
    if (exists) {
      localDb.removeNotebookEntry(word);
    } else {
      const entry: NotebookEntry = {
        id: Math.random().toString(36).substr(2, 9),
        word: word,
        reading: choice.reading || '',
        pos: choice.pos || '',
        meaningZh: choice.meaningZh || '',
        level: level,
        sentences: [],
        addedAt: new Date().toISOString()
      };
      localDb.addNotebookEntry(entry);
    }
    setNotebook(localDb.getNotebook());
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Summary Header */}
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
                <div className="text-xl font-bold">{Math.floor(results.time / 60)}:{ (results.time % 60).toString().padStart(2, '0') }</div>
            </div>
        </div>
      </div>

      <div className="p-6 space-y-8">
        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.993 7.993 0 002 12a7.993 7.993 0 007 7.196V4.804zM11 4.804v14.392A7.993 7.993 0 0018 12a7.993 7.993 0 00-7-7.196z"></path></svg>
            詳解回顧
        </h3>

        {session.questions.map((q, idx) => {
          const userAnswer = results.answers[q.id];
          const isCorrect = userAnswer === q.answer.label;
          
          return (
            <div key={q.id} className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                    <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs flex items-center justify-center font-bold">#{idx+1}</span>
                    <span className="text-xs font-bold text-indigo-500 uppercase">{q.subtype}</span>
                    <span className={`ml-auto text-xs font-bold px-2 py-0.5 rounded ${isCorrect ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                        {isCorrect ? '正確' : '錯誤'}
                    </span>
                </div>
                <div className="text-lg font-bold text-slate-800 japanese mb-4 leading-relaxed">{q.stem}</div>
                
                {/* Options with Notebook Action */}
                <div className="space-y-2 mb-6">
                    {q.choices.map(c => {
                        const inNotebook = notebook.find(e => e.word === (c.word || c.text));
                        return (
                            <div key={c.label} className={`flex items-center justify-between p-3 rounded-xl border ${c.label === q.answer.label ? 'border-emerald-100 bg-emerald-50' : 'border-slate-50 bg-slate-50'}`}>
                                <div className="flex gap-3 items-center">
                                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${c.label === q.answer.label ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'}`}>{c.label}</span>
                                    <div className="japanese">
                                        <span className="font-medium">{c.text}</span>
                                        <span className="text-xs text-slate-400 ml-2">({c.reading} / {c.pos} / {c.meaningZh})</span>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => toggleNotebook(c, session.examLevel)}
                                    className={`p-1 rounded-lg border transition-colors ${inNotebook ? 'text-indigo-600 border-indigo-200 bg-indigo-50' : 'text-slate-300 border-slate-200 hover:text-indigo-400'}`}
                                >
                                    {inNotebook ? (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path></svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                    )}
                                </button>
                            </div>
                        );
                    })}
                </div>

                {/* Explanation Box */}
                <div className="bg-indigo-50/50 p-5 rounded-2xl">
                    <div className="text-indigo-600 text-sm font-bold mb-2">💡 詳解</div>
                    <div className="text-slate-700 text-sm mb-4 border-l-4 border-indigo-200 pl-3 leading-relaxed">
                        <span className="font-bold">題幹翻譯：</span>{q.explanation.stemTranslationZh}
                    </div>
                    <div className="text-slate-600 text-sm mb-3">
                        <span className="font-bold text-emerald-600">正確原因：</span>{q.explanation.whyCorrect}
                    </div>
                    <div className="text-slate-600 text-sm italic">
                        <span className="font-bold text-slate-500">其他錯誤：</span>{q.explanation.whyOthersWrong}
                    </div>
                </div>
              </div>
            </div>
          );
        })}

        <button 
          onClick={() => onFinish(correctCount)}
          className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-transform mt-8"
        >
          完成複習
        </button>
      </div>
    </div>
  );
};

export default Results;
