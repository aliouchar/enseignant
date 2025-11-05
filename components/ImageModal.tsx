import React from 'react';
import { CloseIcon } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    imageAlt: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageSrc, imageAlt }) => {
    const { language } = useLanguage();
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black/50 z-[100] flex justify-center items-center p-4"
            style={{ animation: 'fadeIn 0.3s ease' }}
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="relative bg-white p-2 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh]"
                style={{ animation: 'fadeInUp 0.3s ease' }}
                onClick={e => e.stopPropagation()}
            >
                <div className="relative w-full h-full flex flex-col">
                    <div className="flex-grow flex items-center justify-center overflow-hidden">
                        <img src={imageSrc} alt={imageAlt} className="max-w-full max-h-[80vh] object-contain rounded" />
                    </div>
                    <p className="text-center text-base text-slate-600 p-2 flex-shrink-0">{imageAlt}</p>
                </div>
                 <button
                    onClick={onClose}
                    className="absolute top-2 right-2 rtl:right-auto rtl:left-2 bg-slate-100 rounded-full p-2 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500"
                    aria-label={translations.closeModal[language]}
                >
                    <CloseIcon />
                </button>
            </div>
        </div>
    );
};