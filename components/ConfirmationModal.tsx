import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm, title, message }) => {
    const { language } = useLanguage();
    if (!isOpen) {
        return null;
    }

    return (
        <div 
            className="fixed inset-0 bg-black/50 z-[100] flex justify-center items-center" 
            style={{ animation: 'fadeIn 0.3s ease' }}
            aria-modal="true" 
            role="dialog" 
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md m-4 text-left rtl:text-right" 
                style={{ animation: 'fadeInUp 0.3s ease' }}
                onClick={e => e.stopPropagation()}
            >
                <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-slate-600">{message}</p>
                <div className="mt-6 flex justify-end gap-4">
                    <button
                        onClick={onClose}
                        type="button"
                        className="px-4 py-2 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
                    >
                        {translations.cancel[language]}
                    </button>
                    <button
                        onClick={onConfirm}
                        type="button"
                        className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                        {translations.delete[language]}
                    </button>
                </div>
            </div>
        </div>
    );
};