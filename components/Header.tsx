import React, { useState } from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import type { Page, SiteConfig } from '../types';
import { MenuIcon, CloseIcon } from '../constants';

interface HeaderProps {
    activePage: Page;
    setActivePage: (page: Page) => void;
    siteConfigData: SiteConfig;
}

export const Header: React.FC<HeaderProps> = ({ activePage, setActivePage, siteConfigData }) => {
    const { language } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handlePageChange = (page: Page) => {
        setActivePage(page);
        setIsMenuOpen(false); // Close menu on navigation
    };
    
    const navLinks = translations.navLinks.map(link => {
        return {
            name: link.name[language],
            page: 'page' in link ? link.page : undefined,
            subLinks:
                'subLinks' in link && link.subLinks
                    ? link.subLinks.map(subLink => ({
                          name: subLink.name[language],
                          page: subLink.page,
                      }))
                    : undefined,
        };
    });

    return (
        <header className="sticky top-4 z-50 container mx-auto px-4 md:px-8">
            <div className="bg-white rounded-xl shadow-lg flex items-center justify-between p-3">
                <button onClick={() => handlePageChange('Accueil')} className="text-3xl font-bold text-slate-900 hover:text-teal-600 transition-colors">
                   {siteConfigData.headerTitle[language]}
                </button>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-2">
                     {navLinks.map((link) => (
                        <li key={link.name} className="relative group list-none">
                            <button
                                onClick={() => link.page && handlePageChange(link.page)}
                                className={`px-4 py-2 text-lg font-medium rounded-lg transition-colors duration-300 ${
                                    (link.page === activePage || link.subLinks?.some(sl => sl.page === activePage)) 
                                        ? 'bg-teal-600 text-white' 
                                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                }`}
                            >
                                {link.name} {link.subLinks && <span className="rtl:hidden text-base"> ▾</span>}
                            </button>
                            {link.subLinks && (
                                <ul className="absolute left-0 rtl:left-auto rtl:right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-10">
                                    {link.subLinks.map((subLink) => (
                                        <li key={subLink.name}>
                                            <button
                                                onClick={() => handlePageChange(subLink.page)}
                                                className={`w-full text-left rtl:text-right px-4 py-2 text-lg ${
                                                    subLink.page === activePage ? 'text-teal-600 font-semibold' : 'text-slate-600'
                                                } hover:bg-slate-100 hover:text-teal-600`}
                                            >
                                                {subLink.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </nav>
                <div className="hidden md:block">
                    <LanguageSwitcher />
                </div>
                
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(true)} className="p-2 rounded-md text-slate-600 hover:bg-slate-100" aria-label="Open menu">
                        <MenuIcon />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <div className={`fixed inset-0 z-[60] transform transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : (language === 'ar' ? '-translate-x-full' : 'translate-x-full')}`}>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
                <div className={`relative h-full w-4/5 max-w-sm bg-white shadow-xl p-6 flex flex-col ${language === 'ar' ? 'mr-auto' : 'ml-auto'}`}>
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="font-bold text-xl text-slate-800">Menu</h2>
                         <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-500 hover:text-slate-900" aria-label="Close menu">
                            <CloseIcon />
                         </button>
                    </div>
                    <nav className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                {link.page ? (
                                    <button
                                        onClick={() => handlePageChange(link.page!)}
                                        className={`w-full text-left rtl:text-right text-xl font-medium py-3 px-2 rounded-md ${
                                            (link.page === activePage || link.subLinks?.some(sl => sl.page === activePage))
                                                ? 'bg-teal-50 text-teal-600'
                                                : 'text-slate-700 hover:bg-slate-50'
                                        }`}
                                    >
                                        {link.name}
                                    </button>
                                ) : (
                                    <div className="text-xl font-medium text-slate-400 py-3 px-2">{link.name}</div>
                                )}
                                {link.subLinks && (
                                    <ul className="pl-6 rtl:pr-6 mt-1 space-y-1">
                                        {link.subLinks.map(subLink => (
                                            <li key={subLink.name}>
                                                <button
                                                    onClick={() => handlePageChange(subLink.page)}
                                                    className={`w-full text-left rtl:text-right text-lg py-2 px-2 rounded-md ${
                                                        subLink.page === activePage ? 'text-teal-600 font-semibold' : 'text-slate-600 hover:bg-slate-50'
                                                    }`}
                                                >
                                                    {subLink.name}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </nav>
                    <div className="mt-auto pt-6 flex justify-center border-t">
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </header>
    );
};