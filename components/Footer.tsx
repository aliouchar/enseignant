import React from 'react';
import { LinkedInIcon, GoogleScholarIcon, TwitterIcon, GitHubIcon, ResearchGateIcon, headerInfo } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import type { Page } from '../types';

interface FooterProps {
    setActivePage: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
    const { language } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-12 py-6">
            <div className="container mx-auto px-4 md:px-8">
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                    <div className="flex justify-center items-center gap-6 mb-4">
                        <a href="#" aria-label="LinkedIn" className="text-slate-500 hover:text-teal-600 transition-colors"><LinkedInIcon /></a>
                        <a href="#" aria-label="Google Scholar" className="text-slate-500 hover:text-teal-600 transition-colors"><GoogleScholarIcon /></a>
                        <a href="#" aria-label="Twitter" className="text-slate-500 hover:text-teal-600 transition-colors"><TwitterIcon /></a>
                        <a href="#" aria-label="GitHub" className="text-slate-500 hover:text-teal-600 transition-colors"><GitHubIcon /></a>
                        <a href="#" aria-label="ResearchGate" className="text-slate-500 hover:text-teal-600 transition-colors"><ResearchGateIcon /></a>
                    </div>
                     <div className="flex justify-center items-center gap-4 mb-4 text-base">
                        <a href="https://www.sorbonne-universite.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors">Sorbonne Université</a>
                        <span>•</span>
                        <a href="https://www.ens.psl.eu/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors">ENS</a>
                         <span>•</span>
                        <a href="https://www.mit.edu/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-600 transition-colors">MIT</a>
                    </div>
                    <div className="space-y-2">
                        <p className="text-base text-slate-500">
                            © {currentYear} {headerInfo.name[language]}. {translations.copyright[language]}
                        </p>
                        <button onClick={() => setActivePage('Admin')} className="text-sm text-slate-400 hover:text-teal-600 transition-colors underline">
                            {translations.admin.title[language]}
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};