import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export const Newsletter: React.FC = () => {
    const { language } = useLanguage();
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            console.log('Newsletter subscription for:', email);
            setSubmitted(true);
            setEmail('');
            setTimeout(() => setSubmitted(false), 5000); // Reset after 5s
        }
    };

    if (submitted) {
        return (
            <div className="text-center p-8 bg-white shadow-md rounded-lg">
                <h3 className="text-3xl font-bold text-teal-600">{translations.newsletter.successTitle[language]}</h3>
                <p className="mt-2 text-slate-700">{translations.newsletter.successMessage[language]}</p>
            </div>
        );
    }

    return (
        <div className="bg-white shadow-md p-8 rounded-lg text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900">{translations.newsletter.title[language]}</h3>
            <p className="mt-2 text-slate-600">{translations.newsletter.description[language]}</p>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={translations.newsletter.placeholder[language]}
                    required
                    className="flex-grow px-4 py-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-base text-slate-900"
                    aria-label="Email Address"
                />
                <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                    {translations.newsletter.button[language]}
                </button>
            </form>
        </div>
    );
};