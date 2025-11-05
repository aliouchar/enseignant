import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { ChatbotIcon, CloseIcon } from '../constants';
import type { ChatMessage } from '../types';

export const Chatbot: React.FC = () => {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [chat, setChat] = useState<Chat | null>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const systemInstructionText = "You are a helpful and professional AI assistant on the personal academic portfolio of Dr. Élise Dubois. Your purpose is to answer questions from visitors about her work, research, publications, teaching, and background based on the information available on her website. Be concise, friendly, and informative. Your knowledge is limited to the context of Dr. Dubois's portfolio.";
        
        const newChat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: { systemInstruction: systemInstructionText }
        });
        setChat(newChat);
    }, []);
    
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                {
                    role: 'model',
                    parts: [{ text: translations.chatbot.greeting[language] }]
                }
            ]);
        }
    }, [isOpen, messages.length, language]);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    const handleSend = async () => {
        if (input.trim() === '' || isLoading || !chat) return;

        const userMessage: ChatMessage = { role: 'user', parts: [{ text: input }] };
        setMessages(prev => [...prev, userMessage]);
        const currentInput = input;
        setInput('');
        setIsLoading(true);

        try {
            const response = await chat.sendMessage({ message: currentInput });
            const modelMessage: ChatMessage = { role: 'model', parts: [{ text: response.text }] };
            setMessages(prev => [...prev, modelMessage]);
        } catch (error) {
            console.error("Error with Gemini API:", error);
            const errorMessage: ChatMessage = { role: 'model', parts: [{ text: "Sorry, I'm having trouble connecting right now." }] };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 z-50"
                style={{ animation: 'pulse 2.5s infinite' }}
                aria-label="Open Chatbot"
            >
                <ChatbotIcon />
            </button>
        );
    }

    return (
        <div className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 w-[calc(100%-3rem)] sm:w-96 h-[70vh] sm:h-[600px] bg-white rounded-xl shadow-2xl flex flex-col z-50" style={{animation: 'fadeInUp 0.5s ease'}}>
            <header className="flex justify-between items-center p-4 border-b border-slate-200 flex-shrink-0">
                <h3 className="font-bold text-slate-900">{translations.chatbot.title[language]}</h3>
                <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-slate-800">
                    <CloseIcon />
                </button>
            </header>

            <div ref={chatContainerRef} className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === 'user' ? 'bg-teal-600 text-white rounded-br-none' : 'bg-slate-100 text-slate-800 rounded-bl-none'}`}>
                           <p className="text-base">{msg.parts[0].text}</p>
                        </div>
                    </div>
                ))}
                {isLoading && (
                     <div className="flex justify-start">
                        <div className="max-w-[80%] p-3 rounded-2xl bg-slate-100 text-slate-800 rounded-bl-none">
                           <div className="flex items-center gap-2">
                               <span className="h-2 w-2 bg-teal-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                               <span className="h-2 w-2 bg-teal-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                               <span className="h-2 w-2 bg-teal-400 rounded-full animate-bounce"></span>
                           </div>
                        </div>
                    </div>
                )}
            </div>

            <footer className="p-4 border-t border-slate-200 flex-shrink-0">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder={translations.chatbot.placeholder[language]}
                        className="flex-1 px-3 py-2 bg-slate-100 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-base text-slate-900"
                        disabled={isLoading}
                    />
                    <button onClick={handleSend} disabled={isLoading} className="px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 disabled:bg-teal-400 transition-colors">
                        Send
                    </button>
                </div>
            </footer>
        </div>
    );
};