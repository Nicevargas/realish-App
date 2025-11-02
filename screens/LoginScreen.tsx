
import React, { useState } from 'react';

interface LoginScreenProps {
  onLoginSuccess: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-x-hidden p-4 bg-background-dark font-display">
      <div 
        className="absolute inset-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat opacity-10" 
        style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-ozUXkaLoLkJvayBJ1qY7Ytx3xu4cCFEm2Vd2-1ZDwT3OXBhcaBUOOD_TTMxPlbOuGIa7DdjSWRHO8N4Ko0ps_szPq6_BgXCKqnWdvPbzEs_mvFVKb4ubG1OrM942Xo5gRG1lzfn627TdM9ddRsGB0txIdaHO55CIIhyCOskY5V7hDzO5o4cZS5yEsr9WEU6qyFr2SSRfQzKvzGiuVL5hSeCx2_-YIXwrhkCIKuQUjBFR-zrtOf2trPI7tosb6ZEZ9_qR62Zgm7cr')"}}
      ></div>
      <div className="relative z-10 flex w-full max-w-sm flex-col items-center">
        <div className="mb-8 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary text-5xl">auto_awesome</span>
        </div>
        <h1 className="text-white font-display text-[32px] font-bold tracking-tight text-center">Crie sua conta</h1>
        <p className="text-neutral-400 font-display text-base font-normal leading-normal text-center mt-2">Comece a criar imagens e vídeos incríveis</p>
        <div className="mt-8 w-full space-y-6">
          <div className="flex flex-col">
            <label className="text-white text-sm font-medium leading-normal pb-2 font-display">E-mail ou nome de usuário</label>
            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-neutral-700 bg-neutral-800/50 p-[15px] text-base font-normal leading-normal text-white placeholder:text-neutral-500 focus:border-primary focus:outline-0 focus:ring-0 font-display h-14" placeholder="Digite seu e-mail ou nome de usuário" type="email" />
          </div>
          <div className="flex flex-col">
            <label className="text-white text-sm font-medium leading-normal pb-2 font-display">Senha</label>
            <div className="relative flex w-full flex-1 items-stretch">
              <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-neutral-700 bg-neutral-800/50 p-[15px] pr-12 text-base font-normal leading-normal text-white placeholder:text-neutral-500 focus:border-primary focus:outline-0 focus:ring-0 font-display h-14" placeholder="Crie uma senha" type={passwordVisible ? 'text' : 'password'} />
              <button className="absolute inset-y-0 right-0 flex items-center pr-4 text-neutral-400 hover:text-white" onClick={togglePasswordVisibility}>
                <span className="material-symbols-outlined">{passwordVisible ? 'visibility' : 'visibility_off'}</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col space-y-4 pt-2">
            <button 
              onClick={onLoginSuccess}
              className="flex h-14 w-full items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark font-display">
              Criar Conta
            </button>
            <button 
              onClick={onLoginSuccess}
              className="flex h-14 w-full items-center justify-center rounded-lg border border-neutral-700 bg-neutral-800/50 px-6 text-base font-bold text-white transition-colors hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background-dark font-display">
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
