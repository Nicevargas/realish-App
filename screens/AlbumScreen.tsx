
import React, { useState } from 'react';
import { Screen, NavigateFunc, Creation } from '../types';
import MainBottomNav from '../components/MainBottomNav';
import { ALBUM_CREATIONS } from '../constants';

interface AlbumScreenProps {
  navigate: NavigateFunc;
}

const ImageModal: React.FC<{ creation: Creation | null; onClose: () => void }> = ({ creation, onClose }) => {
  if (!creation) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-lg rounded-xl bg-background-dark shadow-2xl" onClick={e => e.stopPropagation()}>
        <img alt={creation.alt} className="h-auto w-full rounded-t-xl object-contain" src={creation.src} />
        <div className="flex items-center justify-around border-t border-slate-700 bg-slate-900/50 p-3">
          <button className="flex flex-col items-center gap-1 text-white/90">
            <span className="material-symbols-outlined text-2xl">share</span>
            <span className="text-xs">Compartilhar</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-white/90">
            <span className="material-symbols-outlined text-2xl">download</span>
            <span className="text-xs">Download</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-red-400">
            <span className="material-symbols-outlined text-2xl">delete</span>
            <span className="text-xs">Excluir</span>
          </button>
        </div>
        <button onClick={onClose} className="absolute -top-3 -right-3 flex size-8 items-center justify-center rounded-full bg-slate-700 text-white shadow-lg">
          <span className="material-symbols-outlined text-xl">close</span>
        </button>
      </div>
    </div>
  );
};

const AlbumScreen: React.FC<AlbumScreenProps> = ({ navigate }) => {
  const [selectedCreation, setSelectedCreation] = useState<Creation | null>(null);

  return (
    <div className="relative flex min-h-screen w-full flex-col pb-20 bg-background-dark font-display text-slate-200">
      <header className="sticky top-0 z-20 flex flex-col bg-background-dark/80 p-4 pb-3 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img alt="Logo Realish" className="h-8 w-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnChrcvdL3BVfID8FTjnlaff6ZLrEyb2m4obFRhxGIPIs_et-OB8VnzSGMbMe4AWXQDo3Da8E1ugSNmHgUVqm4TMA6ntaLTk0or5ciYpF2vPWk8L5XH4cer8NSdcN7bf2_mKGFY2FFOKs7ZDmBEl1P517cLzLb_1r21U5BlCIm2XLksVUHQXkufJ14OobQNRU0e_YwUhEeTGq2AiRAUrZ9NcInjOMNcFnt23f6sbkRNgkdJAnXvDL59mXxq5jPW82wwUYrAAYqqgVU" />
            <h1 className="text-xl font-bold leading-tight tracking-[-0.015em] text-white">Minhas Criações</h1>
          </div>
          <button onClick={() => navigate(Screen.Creation)} className="flex items-center gap-1.5 rounded-full border border-primary/50 bg-primary/20 px-3 py-1.5 text-xs font-medium text-primary">
            <span className="material-symbols-outlined text-base">add_circle</span>
            <span>Criar</span>
          </button>
        </div>
      </header>
      <main className="flex-grow">
        <div className="sticky top-[68px] z-10 bg-background-dark/80 px-4 pb-3 pt-1 backdrop-blur-sm">
          <div className="relative">
            <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input className="w-full rounded-full border border-slate-700 bg-slate-800/50 py-2.5 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-500 focus:border-primary focus:ring-primary" placeholder="Buscar por tags..." type="search" />
          </div>
          <div className="mt-3 flex space-x-2 overflow-x-auto pb-1">
            <button className="flex items-center gap-1.5 whitespace-nowrap rounded-full border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-300">
              <span className="material-symbols-outlined text-base">tune</span>
              Tipo: Todos
            </button>
            <button className="whitespace-nowrap rounded-full bg-slate-700 px-3 py-1.5 text-xs font-medium text-slate-300">
              Data: Recentes
            </button>
            <button className="whitespace-nowrap rounded-full bg-slate-700 px-3 py-1.5 text-xs font-medium text-slate-300">
              Tags
            </button>
          </div>
        </div>
        <div className="p-4 pt-0">
          <div className="grid grid-cols-2 gap-3">
            {ALBUM_CREATIONS.map((creation) => (
              <div key={creation.id} onClick={() => setSelectedCreation(creation)} className="group relative aspect-square cursor-pointer overflow-hidden rounded-lg shadow-sm">
                <img alt={creation.alt} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" src={creation.src} />
                {creation.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <span className="material-symbols-outlined text-4xl text-white/90 drop-shadow-lg">play_circle</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <MainBottomNav activeScreen={Screen.Album} navigate={navigate} />
      <ImageModal creation={selectedCreation} onClose={() => setSelectedCreation(null)} />
    </div>
  );
};


export default AlbumScreen;
