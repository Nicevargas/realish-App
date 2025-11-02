
import React from 'react';
import { Screen, NavigateFunc } from '../types';
import MainBottomNav from '../components/MainBottomNav';

interface PlansScreenProps {
  navigate: NavigateFunc;
}

const PlansScreen: React.FC<PlansScreenProps> = ({ navigate }) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background-dark font-display text-text-dark-primary">
      <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-center border-b border-border-dark bg-surface-dark/80 px-4 backdrop-blur-sm">
        <h1 className="text-lg font-bold text-text-dark-primary">Planos</h1>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center p-4 text-center">
        <span className="material-symbols-outlined text-6xl text-primary mb-4">
          workspace_premium
        </span>
        <h2 className="text-2xl font-bold text-text-dark-primary mb-2">
          Nossos Planos
        </h2>
        <p className="text-text-dark-secondary max-w-md">
          Esta seção está em construção. Volte em breve para conferir nossos planos e escolher o que melhor se adapta às suas necessidades de criação!
        </p>
      </main>
      <MainBottomNav activeScreen={Screen.Plans} navigate={navigate} />
    </div>
  );
};

export default PlansScreen;
