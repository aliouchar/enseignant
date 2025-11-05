import React from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();
    const languages: { code: Language; label: string }[] = [
        { code: 'fr', label: 'FR' },
        { code: 'en', label: 'EN' },
        { code: 'ar', label: 'ع' }, // AR in Arabic
    ];

    return (
        <div className="flex items-center gap-1 rounded-full bg-slate-100 p-1">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-3 py-1 text-base font-semibold rounded-full transition-colors duration-300 ${
                        language === lang.code
                            ? 'bg-white text-slate-800'
                            : 'text-slate-600 hover:bg-slate-200'
                    }`}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
};