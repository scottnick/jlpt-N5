
import React, { useState } from 'react';
import { Question, WrongQuestion } from '../../types';
import { localDb } from '../../db/localDb';

const parseQuestionText = (text: string) => {
  const parts = text.split(/(\[\[u\]\].*?\[\[\/u\]\])/g);
  return parts.map((part, i) => {
    const match = part.match(/\[\[u\]\](.*?)\[\[\/u\]\]/);
    if (match) {
      return (
        <span key={i} className="underline decoration-indigo-300 decoration-2 underline-offset-4 px-0.5 font-bold">
          {match[1]}
        </span>
      );
    }
    return part;
  });
};

const BankDetail: React.FC<{ question: Question; onBack: () => void }> = ({ question, onBack }) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToWrongBook = () => {
    const item: WrongQuestion = {
      id: `${question.id}_manual_${Date.now()}`,
      level: question.level,
      category: question.category,
      question: question,
      userAnswer: '0', // Manual add
      timestamp: new Date().toISOString()
    };
    localDb.addWrongQuestions([item]);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="p-2 -ml-2 text-slate-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <span className="text-xs font-black text-slate-300 uppercase tracking-widest">Question Detail</span>
        <button 
          onClick={handleAddToWrongBook}
          className={`p-2 rounded-xl transition-all ${added ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'}`}
        >
          {added ? (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
          )}
        </button>
      </div>

      <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden mb-8">
        <div className="p-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-black rounded-full uppercase tracking-widest border border-indigo-100">
              {question.itemType}
            </span>
          </div>
          
          <div className="text-slate-400 text-sm mb-4">{question.instruction}</div>
          <div className="text-2xl font-bold text-slate-800 leading-relaxed japanese mb-10">
            {parseQuestionText(question.stem)}
          </div>

          <div className="space-y-3">
            {question.choices.map((choice, idx) => {
              const label = (idx + 1).toString();
              const text = typeof choice === 'string' ? choice : choice.text;
              const isCorrect = idx === question.answerIndex;

              return (
                <div 
                  key={label}
                  className={`p-4 rounded-2xl border-2 transition-all flex items-center gap-4 ${showExplanation && isCorrect ? 'border-emerald-500 bg-emerald-50' : 'border-slate-50 bg-slate-50'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${showExplanation && isCorrect ? 'bg-emerald-500 text-white' : 'bg-slate-200 text-slate-500'}`}>
                    {label}
                  </div>
                  <span className="text-lg text-slate-700 japanese font-medium">{text}</span>
                  {showExplanation && isCorrect && (
                    <svg className="w-6 h-6 text-emerald-500 ml-auto" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {!showExplanation ? (
        <button 
          onClick={() => setShowExplanation(true)}
          className="w-full py-5 bg-indigo-600 text-white rounded-[24px] font-bold text-lg shadow-xl shadow-indigo-100 active:scale-95 transition-all"
        >
          查看正解與詳解
        </button>
      ) : (
        <div className="animate-fade-in bg-indigo-50 p-6 rounded-[32px] border border-indigo-100 mb-10">
          <h4 className="text-indigo-600 font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9v-2h2v2zm0-4H9V5h2v4z"></path></svg>
            官方詳解回顧
          </h4>
          
          <div className="space-y-6">
            <div>
              <div className="text-[10px] font-black text-slate-400 uppercase mb-1">【正解】</div>
              <div className="text-emerald-600 font-bold text-lg">{question.explanation.correct}</div>
            </div>
            <div>
              <div className="text-[10px] font-black text-slate-400 uppercase mb-1">【解析】</div>
              <p className="text-slate-700 leading-relaxed text-sm">{question.explanation.analysis}</p>
            </div>
            <div className="space-y-2 border-t border-indigo-100 pt-4">
              {question.explanation.options.map(opt => (
                <div key={opt.label} className="text-xs text-slate-600">
                  <span className="font-bold mr-2">{opt.label}.</span>
                  {opt.whyWrongOrRight}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BankDetail;
