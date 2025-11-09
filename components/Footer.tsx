import React from 'react';
import { LinkedInIcon, GoogleScholarIcon, TwitterIcon, GitHubIcon, ResearchGateIcon } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import type { Page, SiteConfig } from '../types';

interface FooterProps {
    setActivePage: (page: Page) => void;
    siteConfigData: SiteConfig;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, siteConfigData }) => {
    const { language } = useLanguage();
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { href: siteConfigData.socialLinks.linkedin, icon: <LinkedInIcon />, label: 'LinkedIn' },
        { href: siteConfigData.socialLinks.googleScholar, icon: <GoogleScholarIcon />, label: 'Google Scholar' },
        { href: siteConfigData.socialLinks.twitter, icon: <TwitterIcon />, label: 'Twitter' },
        { href: siteConfigData.socialLinks.github, icon: <GitHubIcon />, label: 'GitHub' },
        { href: siteConfigData.socialLinks.researchGate, icon: <ResearchGateIcon />, label: 'ResearchGate' },
    ];

    return (
        <footer className="mt-12 py-6">
            <div className="container mx-auto px-4 md:px-8">
                <div className="bg-white rounded-xl p-6 text-center shadow-md">
                    <div className="flex justify-center items-center gap-6 mb-4">
                        {socialLinks.map(link => link.href && (
                            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-slate-500 hover:text-teal-600 transition-colors">{link.icon}</a>
                        ))}
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
                            © {currentYear} {siteConfigData.authorName[language]}. {translations.copyright[language]}
                        </p>
                        <div className="flex justify-center items-center gap-2">
                             <button onClick={() => setActivePage('Admin')} className="text-sm text-slate-400 hover:text-teal-600 transition-colors underline">
                                {translations.admin.title[language]}
                            </button>
                            <span className="text-slate-400">•</span>
                            <a href="https://mail27.lwspanel.com/roundcube/" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-teal-600 transition-colors underline">
                                {translations.webmail[language]}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};