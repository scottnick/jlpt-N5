
import React, { useState, useEffect, useRef } from 'react';
import { QuizSession } from '../../types';
import { parseUnderline } from '../../App';

interface QuizSessionUIProps {
  session: QuizSession;
  onComplete: (answers: Record<string, string>, time: number) => void;
  onCancel: () => void;
}

const QuizSessionUI: React.FC<QuizSessionUIProps> = ({ session, onComplete, onCancel }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [time, setTime] = useState(0);
  const [showConfirmCancel, setShowConfirmCancel] = useState(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    return () => {
        if (timerRef.current) clearInterval(timerRef.current);
    }
  }, []);

  const formatTime = (s: number) => {
    const mm = Math.floor(s / 60).toString().padStart(2, '0');
    const ss = (s % 60).toString().padStart(2, '0');
    return `${mm}:${ss}`;
  };

  const currentQuestion = session.questions[currentIdx];

  const handleSelect = (label: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: label }));
  };

  const handleNext = () => {
    if (currentIdx < session.questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setShowConfirmSubmit(true);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-50">
      <header className="p-4 flex items-center justify-between bg-white border-b border-slate-200">
        <button onClick={() => setShowConfirmCancel(true)} className="p-2 text-slate-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <div className="text-sm font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
          {currentIdx + 1} / {session.questions.length}
        </div>
        <div className="font-mono font-bold text-indigo-600">
          {formatTime(time)}
        </div>
      </header>

      <div className="w-full h-1 bg-slate-200">
        <div 
          className="h-full bg-indigo-500 transition-all duration-300" 
          style={{ width: `${((currentIdx + 1) / session.questions.length) * 100}%` }}
        ></div>
      </div>

      <main className="flex-1 overflow-y-auto p-6 flex flex-col">
        <div className="mb-2">
            <span className="text-xs font-bold px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded-md border border-indigo-100">
                {currentQuestion.itemType || currentQuestion.subtype}
            </span>
        </div>
        <div className="text-slate-500 text-sm mb-4">{parseUnderline(currentQuestion.instruction, 'instruction')}</div>
        <div className="text-2xl font-bold text-slate-800 mb-8 japanese leading-relaxed">
          {parseUnderline(currentQuestion.stem, 'stem')}
        </div>

        <div className="space-y-4">
          {currentQuestion.choices.map((choice, idx) => {
            const label = (idx + 1).toString();
            const choiceText = typeof choice === 'string' ? choice : choice.text;
            return (
              <button
                key={label}
                onClick={() => handleSelect(label)}
                className={`w-full p-5 rounded-2xl text-left border-2 transition-all flex items-center gap-4 ${
                  answers[currentQuestion.id] === label 
                  ? 'border-indigo-600 bg-indigo-50' 
                  : 'border-white bg-white shadow-sm'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  answers[currentQuestion.id] === label ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {label}
                </div>
                <span className="text-lg text-slate-700 japanese">{choiceText}</span>
              </button>
            )
          })}
        </div>
      </main>

      <footer className="p-6 bg-white border-t border-slate-200 flex items-center justify-between">
        <button 
          disabled={currentIdx === 0}
          onClick={() => setCurrentIdx(currentIdx - 1)}
          className={`text-indigo-600 font-bold px-4 py-2 rounded-xl ${currentIdx === 0 ? 'opacity-30' : 'active:bg-indigo-50'}`}
        >
          上一題
        </button>
        <button 
          onClick={handleNext}
          className="px-8 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
        >
          {currentIdx === session.questions.length - 1 ? '提交答案' : '下一題'}
        </button>
      </footer>

      {showConfirmCancel && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-3xl w-full max-w-xs shadow-2xl">
            <h3 className="text-xl font-bold text-slate-800 mb-2">確定離開？</h3>
            <p className="text-slate-500 mb-6">目前的練習進度將不會被儲存。</p>
            <div className="flex flex-col gap-3">
              <button onClick={onCancel} className="py-3 bg-red-50 text-red-600 font-bold rounded-xl">離開測驗</button>
              <button onClick={() => setShowConfirmCancel(false)} className="py-3 bg-slate-100 text-slate-700 font-bold rounded-xl">繼續練習</button>
            </div>
          </div>
        </div>
      )}

      {showConfirmSubmit && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-3xl w-full max-w-xs shadow-2xl text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">確定交卷？</h3>
            <p className="text-slate-500 mb-6">你還有 {session.questions.length - Object.keys(answers).length} 題未作答。</p>
            <div className="flex flex-col gap-3">
              <button onClick={() => onComplete(answers, time)} className="py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg">提交並查看結果</button>
              <button onClick={() => setShowConfirmSubmit(false)} className="py-3 bg-slate-100 text-slate-700 font-bold rounded-xl">返回檢查</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizSessionUI;
