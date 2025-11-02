
import React from 'react';
import { Screen, NavigateFunc } from '../types';
import MainBottomNav from '../components/MainBottomNav';

interface ProfileScreenProps {
  navigate: NavigateFunc;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigate }) => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background-dark font-display text-text-dark-primary">
      <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center justify-center border-b border-border-dark bg-surface-dark/80 px-4 backdrop-blur-sm">
        <h1 className="text-lg font-bold text-text-dark-primary">Configurações</h1>
      </header>
      <main className="flex-1 overflow-y-auto pb-20">
        <div className="p-4">
          <div className="flex w-full flex-col items-center gap-4 py-6">
            <div className="relative">
              <div 
                className="h-28 w-28 rounded-full bg-cover bg-center"
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDRRxwaYS3YrAeEmadwAaQI9M6XVc9CK-0V6Vu6BzrYWl99ib34F-oeDm8z27ti_Vs2lPgxH8JGGdFc2MY6-mpc0giRLyZmFhFD7qPpVYTGP60sxLchRRN22eYf1r3KM4GRcCeLnA3CIym9NpDQt-4XY5zIGRkSrKyDGSUz90pGLbn9cfaTdTU7VYBEBTeLKJTUf6qgbgZMMjnCPDkKmkiKEyk98EqUFfRhIsrx6Z_prVfrZyIBcANYSjApu372x8TVaBXPzCODk85-")'}}>
              </div>
              <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-surface-dark bg-primary text-white">
                <span className="material-symbols-outlined text-base">edit</span>
              </button>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-xl font-bold text-text-dark-primary">Nome do Usuário</p>
              <p className="text-sm text-text-dark-secondary">usuario@email.com</p>
            </div>
          </div>
          <div className="mb-6 rounded-xl bg-surface-dark">
            <div className="p-4">
              <label className="block">
                <span className="pb-2 text-sm font-medium text-text-dark-secondary">Nome</span>
                <input className="form-input mt-1 block w-full rounded-lg border border-border-dark bg-background-dark p-3 text-text-dark-primary placeholder:text-text-dark-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" defaultValue="Nome do Usuário" />
              </label>
            </div>
            <hr className="mx-4 border-border-dark" />
            <div className="p-4">
              <label className="block">
                <span className="pb-2 text-sm font-medium text-text-dark-secondary">E-mail</span>
                <input className="form-input mt-1 block w-full rounded-lg border border-border-dark bg-background-dark p-3 text-text-dark-primary placeholder:text-text-dark-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" readOnly defaultValue="usuario@email.com" />
              </label>
            </div>
            <hr className="mx-4 border-border-dark" />
            <button className="flex w-full items-center justify-between p-4 text-left text-text-dark-primary transition-colors hover:bg-white/5">
              <span className="font-medium">Alterar Senha</span>
              <span className="material-symbols-outlined text-text-dark-secondary text-base">arrow_forward_ios</span>
            </button>
          </div>
          <div className="mb-6 overflow-hidden rounded-xl bg-surface-dark">
            <button className="flex w-full items-center p-4 text-left text-text-dark-primary transition-colors hover:bg-white/5">
              <span className="material-symbols-outlined mr-4 text-text-dark-secondary">notifications</span>
              <span className="flex-1">Notificações</span>
              <span className="material-symbols-outlined text-text-dark-secondary text-base">arrow_forward_ios</span>
            </button>
            <hr className="mx-4 border-border-dark" />
            <button className="flex w-full items-center p-4 text-left text-text-dark-primary transition-colors hover:bg-white/5">
              <span className="material-symbols-outlined mr-4 text-text-dark-secondary">lock</span>
              <span className="flex-1">Privacidade</span>
              <span className="material-symbols-outlined text-text-dark-secondary text-base">arrow_forward_ios</span>
            </button>
          </div>
          <div className="overflow-hidden rounded-xl bg-surface-dark">
            <button className="flex w-full items-center p-4 text-left text-destructive transition-colors hover:bg-destructive/10">
              <span className="material-symbols-outlined mr-4">logout</span>
              <span className="font-medium">Sair</span>
            </button>
          </div>
        </div>
      </main>
      <MainBottomNav activeScreen={Screen.Profile} navigate={navigate} />
    </div>
  );
};

export default ProfileScreen;
