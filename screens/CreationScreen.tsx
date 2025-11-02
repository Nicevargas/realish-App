
import React, { useState, useRef } from 'react';
import { Screen, NavigateFunc } from '../types';

interface CreationScreenProps {
    navigate: NavigateFunc;
}

const CreationScreen: React.FC<CreationScreenProps> = ({ navigate }) => {
    const [prompt, setPrompt] = useState('');
    const [generationType, setGenerationType] = useState('image');
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    
    const handleUploadClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewUrl(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    
    const appendToPrompt = (text: string) => {
        setPrompt(p => p ? `${p}, ${text}`: text);
    }

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-dark font-display text-white">
            <header className="flex items-center p-4 pb-2 justify-between sticky top-0 z-10 bg-background-dark/80 backdrop-blur-sm">
                <div className="flex size-12 shrink-0 items-center justify-start">
                    <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0 hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-white/90"> menu </span>
                    </button>
                </div>
                <h1 className="text-white text-xl font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Criar</h1>
                <div className="flex w-12 items-center justify-end">
                    <button onClick={() => navigate(Screen.Profile)} className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 w-10 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0 hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-white/90"> person </span>
                    </button>
                </div>
            </header>
            <main className="flex flex-col flex-1 px-4 pb-4">
                <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 justify-between rounded-full mb-6 max-w-sm mx-auto w-full">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-2xl text-yellow-400">stars</span>
                        <p className="text-gray-300 text-sm font-medium leading-normal">Créditos:</p>
                    </div>
                    <p className="text-white text-sm font-bold leading-normal">150</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex flex-col gap-2">
                        <p className="text-white/90 text-sm font-medium leading-normal mb-1">Upload</p>
                        <div onClick={handleUploadClick} className="flex flex-col items-center justify-center aspect-square w-full rounded-xl border border-dashed border-gray-600 bg-gray-800 p-4 text-center cursor-pointer hover:bg-gray-700 transition-colors">
                            <span className="material-symbols-outlined text-4xl text-gray-500">upload_file</span>
                            <p className="text-gray-500 font-medium text-sm mt-2">Toque para carregar</p>
                            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-white/90 text-sm font-medium leading-normal mb-1">Prévia</p>
                        <div className="flex flex-col items-center justify-center aspect-square w-full rounded-xl border border-gray-700 bg-gray-800 p-4 text-center overflow-hidden">
                            {previewUrl ? (
                                <img src={previewUrl} alt="Preview" className="h-full w-full object-cover" />
                            ) : (
                                <>
                                    <span className="material-symbols-outlined text-4xl text-gray-500">image</span>
                                    <p className="text-gray-500 font-medium text-sm mt-2">A prévia aparecerá aqui</p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 mb-6">
                    <label className="flex flex-col min-w-40 flex-1">
                        <p className="text-white/90 text-sm font-medium leading-normal pb-2">Seu prompt</p>
                        <textarea value={prompt} onChange={e => setPrompt(e.target.value)} className="form-input flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-white/90 focus:outline-0 focus:ring-2 focus:ring-offset-0 focus:ring-offset-background-dark focus:ring-indigo-500 border border-gray-700 bg-gray-800 focus:border-indigo-500 min-h-36 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal transition-all" placeholder="Ex: um astronauta surfando em uma onda cósmica..."></textarea>
                    </label>
                    <div className="flex flex-wrap gap-2">
                        <button onClick={() => appendToPrompt('Cinemático')} className="rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-sm text-gray-300 hover:bg-gray-700 transition-colors">Cinemático</button>
                        <button onClick={() => appendToPrompt('Fantasia')} className="rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-sm text-gray-300 hover:bg-gray-700 transition-colors">Fantasia</button>
                        <button onClick={() => appendToPrompt('Animação')} className="rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-sm text-gray-300 hover:bg-gray-700 transition-colors">Animação</button>
                        <button onClick={() => appendToPrompt('Realista')} className="rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-sm text-gray-300 hover:bg-gray-700 transition-colors">Realista</button>
                    </div>
                </div>
                <div className="flex flex-col gap-2 py-3">
                    <p className="text-white/90 text-sm font-medium leading-normal mb-1">Tipo de Geração</p>
                    <div className="flex h-12 flex-1 items-center justify-center rounded-xl bg-gray-800 p-1">
                        <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-indigo-600 has-[:checked]:shadow-lg has-[:checked]:text-white text-gray-400 text-sm font-medium leading-normal transition-all duration-200">
                            <span className="truncate">Imagem</span>
                            <input checked={generationType === 'image'} onChange={() => setGenerationType('image')} className="sr-only" name="content-type" type="radio" value="image" />
                        </label>
                        <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-indigo-600 has-[:checked]:shadow-lg has-[:checked]:text-white text-gray-400 text-sm font-medium leading-normal transition-all duration-200">
                            <span className="truncate">Vídeo</span>
                            <input checked={generationType === 'video'} onChange={() => setGenerationType('video')} className="sr-only" name="content-type" type="radio" value="video" />
                        </label>
                    </div>
                </div>
                <div className="flex-grow"></div>
            </main>
            <footer className="sticky bottom-0 w-full p-4 bg-background-dark/80 backdrop-blur-sm mt-auto">
                <button className="flex w-full min-w-[84px] max-w-[480px] mx-auto cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-4 text-white text-lg font-bold leading-normal tracking-[0.015em] shadow-lg shadow-indigo-500/30 transition-opacity" style={{backgroundImage: 'linear-gradient(to right, #8A2BE2, #4F46E5)'}}>
                    <span className="truncate">Gerar</span>
                </button>
            </footer>
        </div>
    );
};

export default CreationScreen;
