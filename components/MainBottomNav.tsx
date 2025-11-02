
import React from 'react';
import { Screen, NavigateFunc } from '../types';

interface MainBottomNavProps {
  activeScreen: Screen;
  navigate: NavigateFunc;
}

const NavItem: React.FC<{
  screen: Screen;
  activeScreen: Screen;
  navigate: NavigateFunc;
  icon: string;
  label: string;
  isFilled?: boolean;
}> = ({ screen, activeScreen, navigate, icon, label, isFilled = false }) => {
  const isActive = activeScreen === screen;
  const activeColorClass = isActive ? 'text-primary' : 'text-text-dark-secondary';
  const activeWeightClass = isActive ? 'font-bold' : '';

  return (
    <button
      onClick={() => navigate(screen)}
      className={`flex flex-1 flex-col items-center gap-1 py-2 transition-colors hover:text-primary ${activeColorClass}`}
    >
      <span className="material-symbols-outlined" style={isActive && isFilled ? { fontVariationSettings: "'FILL' 1" } : {}}>
        {icon}
      </span>
      <span className={`text-xs ${activeWeightClass}`}>{label}</span>
    </button>
  );
};

const MainBottomNav: React.FC<MainBottomNavProps> = ({ activeScreen, navigate }) => {
  return (
    <nav className="fixed bottom-0 z-10 w-full border-t border-border-dark bg-surface-dark/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-md justify-around">
        <NavItem screen={Screen.Creation} activeScreen={activeScreen} navigate={navigate} icon="auto_awesome" label="Criação" isFilled />
        <NavItem screen={Screen.Album} activeScreen={activeScreen} navigate={navigate} icon="photo_album" label="Álbum" isFilled />
        <NavItem screen={Screen.Plans} activeScreen={activeScreen} navigate={navigate} icon="workspace_premium" label="Planos" />
        <NavItem screen={Screen.Profile} activeScreen={activeScreen} navigate={navigate} icon="person" label="Perfil" isFilled />
      </div>
    </nav>
  );
};

export default MainBottomNav;
