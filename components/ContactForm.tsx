import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export const ContactForm: React.FC = () => {
    const { language } = useLanguage();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus(translations.formSuccess[language]);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold mb-6 text-slate-900 text-left rtl:text-right">{translations.contactForm[language]}</h3>
            <form onSubmit={handleSubmit} className="space-y-4 text-left rtl:text-right">
                <div>
                    <label htmlFor="name" className="block text-base font-medium text-slate-700">{translations.name[language]}</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-base text-slate-900"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-base font-medium text-slate-700">{translations.email[language]}</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-base text-slate-900"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-base font-medium text-slate-700">{translations.message[language]}</label>
                    <textarea
                        id="message"
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-base text-slate-900"
                    ></textarea>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                        {translations.sendMessage[language]}
                    </button>
                </div>
                 {status && <p className="text-center text-green-600 mt-4">{status}</p>}
            </form>
        </div>
    );
};