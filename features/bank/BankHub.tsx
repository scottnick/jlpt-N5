
import React, { useState, useEffect } from 'react';
import { localDb } from '../../db/localDb';
import { ExamLevel, Category, QuestionBank } from '../../types';
import { generateBankBatch } from '../../services/gemini';

const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'vocabulary', label: '文字語彙' },
  { id: 'grammar', label: '文法' },
  { id: 'reading', label: '讀解' }
];

const BankHub: React.FC<{ onBack: () => void; onSelectBank: (l: ExamLevel, c: Category) => void }> = ({ onBack, onSelectBank }) => {
  const [loadingMap, setLoadingMap] = useState<Record<string, boolean>>({});
  const [banks, setBanks] = useState<Record<string, QuestionBank | null>>({});

  useEffect(() => {
    refreshBanks();
  }, []);

  const refreshBanks = () => {
    const data: any = {};
    ['N4', 'N5'].forEach(l => {
      CATEGORIES.forEach(c => {
        data[`${l}_${c.id}`] = localDb.getBank(l, c.id);
      });
    });
    setBanks(data);
  };

  const handleGenerate = async (level: ExamLevel, category: Category) => {
    const key = `${level}_${category}`;
    setLoadingMap(prev => ({ ...prev, [key]: true }));
    try {
      // Mocking itemTypes - for a real app, these would come from ITEM_TYPES_CONFIG
      const itemTypes = ['kanji_reading', 'orthography', 'context_expression']; 
      const questions = await generateBankBatch(level, category, 20, itemTypes);
      localDb.saveBank({
        level,
        category,
        updatedAt: new Date().toISOString(),
        questions
      });
      refreshBanks();
    } catch (e) {
      alert("生成失敗，請稍後再試");
    } finally {
      setLoadingMap(prev => ({ ...prev, [key]: false }));
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={onBack} className="p-2 -ml-2 text-slate-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
        </button>
        <h2 className="text-xl font-bold text-slate-800">題庫中心</h2>
      </div>

      <div className="space-y-10">
        {['N5', 'N4'].map(level => (
          <section key={level}>
            <h3 className="text-sm font-black text-slate-300 uppercase tracking-widest mb-4 px-1">{level} 專業題庫</h3>
            <div className="grid grid-cols-1 gap-4">
              {CATEGORIES.map(cat => {
                const key = `${level}_${cat.id}`;
                const bank = banks[key];
                const isLoading = loadingMap[key];
                const isBuiltIn = level === 'N5' && cat.id === 'vocabulary';

                return (
                  <div key={cat.id} className="bg-white p-6 rounded-[32px] border border-slate-100 shadow-sm flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="flex items-center gap-2">
                            <h4 className="font-bold text-slate-800 text-lg">{cat.label}</h4>
                            {isBuiltIn && (
                                <span className="text-[9px] bg-emerald-100 text-emerald-600 px-1.5 py-0.5 rounded-full font-black uppercase">Built-in</span>
                            )}
                        </div>
                        {bank ? (
                          <p className="text-xs text-slate-400 mt-1">共 {bank.questions.length} 題 • {isBuiltIn ? '系統內建' : `更新於 ${new Date(bank.updatedAt).toLocaleDateString()}`}</p>
                        ) : (
                          <p className="text-xs text-slate-400 mt-1 italic">尚未生成題庫</p>
                        )}
                      </div>
                      <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {bank ? (
                        <button 
                          onClick={() => onSelectBank(level as ExamLevel, cat.id)}
                          className="flex-1 py-3 bg-indigo-600 text-white rounded-2xl font-bold text-sm shadow-md active:scale-95 transition-all"
                        >
                          進入題庫
                        </button>
                      ) : null}
                      
                      {!isBuiltIn && (
                        <button 
                            disabled={isLoading}
                            onClick={() => handleGenerate(level as ExamLevel, cat.id)}
                            className={`flex-1 py-3 border-2 rounded-2xl font-bold text-sm transition-all ${isLoading ? 'bg-slate-50 text-slate-300 border-slate-100' : 'bg-white text-indigo-600 border-indigo-50 hover:bg-indigo-50'}`}
                        >
                            {isLoading ? '生成中...' : bank ? '更新題庫' : '立即生成'}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default BankHub;
