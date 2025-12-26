
import React, { useState } from 'react';
import { localDb } from '../../db/localDb';
import { NotebookEntry } from '../../types';

const NotebookList: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [entries, setEntries] = useState(localDb.getNotebook());
  const [deleteMode, setDeleteMode] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<NotebookEntry | null>(null);

  const handleDelete = (word: string) => {
    localDb.removeNotebookEntry(word);
    setEntries(localDb.getNotebook());
  };

  const categorized = {
    N4: entries.filter(e => e.level === 'N4'),
    N5: entries.filter(e => e.level === 'N5'),
    Other: entries.filter(e => e.level !== 'N4' && e.level !== 'N5')
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-2 mb-4">
          <button onClick={onBack} className="p-2 -ml-2 text-slate-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
      </div>

      <div className="flex justify-between items-center mb-8">
        <div>
            <h2 className="text-2xl font-bold text-slate-800">單字筆記本</h2>
            <p className="text-slate-500 text-sm">收藏你在測驗中標記的生字</p>
        </div>
        <button 
            onClick={() => setDeleteMode(!deleteMode)}
            className={`p-3 rounded-2xl transition-all ${deleteMode ? 'bg-rose-100 text-rose-600' : 'bg-slate-100 text-slate-600'}`}
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
        </button>
      </div>

      <div className="space-y-8">
        {Object.entries(categorized).map(([lvl, list]) => list.length > 0 && (
          <section key={lvl}>
            <h3 className="text-sm font-black text-slate-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                {lvl} 類別
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {list.map(entry => (
                <div 
                    key={entry.word}
                    className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm animate-fade-in group"
                >
                  {deleteMode && (
                      <button 
                        onClick={() => handleDelete(entry.word)}
                        className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center animate-pop"
                      >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                      </button>
                  )}
                  <button 
                    onClick={() => setSelectedEntry(entry)}
                    className="flex-1 text-left flex items-center gap-3"
                  >
                    <div className="japanese">
                        <div className="text-lg font-bold text-slate-800">{entry.word}</div>
                        <div className="text-xs text-slate-400">{entry.reading}</div>
                    </div>
                    <div className="ml-auto text-right">
                        <div className="text-sm font-medium text-slate-600">{entry.meaningZh}</div>
                        <div className="text-[10px] text-indigo-400 uppercase font-bold">{entry.pos}</div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}

        {entries.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
            </div>
            <p className="text-slate-400 font-medium">還沒有任何單字筆記喔！<br/>多做題目來擴充筆記吧。</p>
          </div>
        )}
      </div>

      {/* Details Modal */}
      {selectedEntry && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md">
            <div className="bg-white rounded-[40px] w-full max-w-sm overflow-hidden shadow-2xl animate-scale-up">
                <div className="bg-indigo-600 p-8 text-white text-center">
                    <div className="japanese text-4xl font-black mb-2">{selectedEntry.word}</div>
                    <div className="japanese text-lg opacity-80 mb-4">{selectedEntry.reading}</div>
                    <div className="flex justify-center gap-2">
                        <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase">{selectedEntry.level}</span>
                        <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase">{selectedEntry.pos}</span>
                    </div>
                </div>
                <div className="p-8">
                    <div className="mb-8">
                        <div className="text-xs font-black text-slate-300 uppercase tracking-widest mb-2">中文意思</div>
                        <div className="text-xl font-bold text-slate-800">{selectedEntry.meaningZh}</div>
                    </div>

                    <div>
                        <div className="text-xs font-black text-slate-300 uppercase tracking-widest mb-4">範例句</div>
                        <div className="space-y-4">
                            <div className="japanese">
                                <p className="text-slate-800 font-medium leading-relaxed">今日はとてもいい天気ですね。</p>
                                <p className="text-xs text-slate-400 mt-1">今天天氣真好呢。</p>
                            </div>
                            <div className="japanese">
                                <p className="text-slate-800 font-medium leading-relaxed">この単語を覚えるのは大変です。</p>
                                <p className="text-xs text-slate-400 mt-1">記住這個單字真辛苦。</p>
                            </div>
                        </div>
                    </div>

                    <button 
                        onClick={() => setSelectedEntry(null)}
                        className="w-full mt-10 py-4 bg-slate-100 text-slate-600 font-bold rounded-2xl active:bg-slate-200 transition-colors"
                    >
                        關閉詳情
                    </button>
                </div>
            </div>
          </div>
      )}
    </div>
  );
};

export default NotebookList;
