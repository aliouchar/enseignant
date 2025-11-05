import React from 'react';
import { Section } from '../Section';
import { ContactForm } from '../ContactForm';
import { MailIcon, PhoneIcon, OfficeIcon, LinkedInIcon, GoogleScholarIcon, TwitterIcon, GitHubIcon, ResearchGateIcon } from '../../constants';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';

export const ContactPage: React.FC = () => {
    const { language } = useLanguage();
    
    return (
        <Section title={translations.contact[language]}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md text-left rtl:text-right">
                    <h3 className="text-3xl font-bold mb-6 text-slate-900">{translations.coordinates[language]}</h3>
                    <div className="space-y-4 text-slate-700">
                        <p className="flex items-center gap-3"><MailIcon /> <strong>{translations.email[language]}:</strong> elise.dubois@sorbonne.fr</p>
                        <p className="flex items-center gap-3"><PhoneIcon /> <strong>Téléphone:</strong> +33 1 23 45 67 89</p>
                        <p className="flex items-center gap-3"><OfficeIcon /> <strong>Bureau:</strong> Bâtiment C, Bureau 203</p>
                    </div>
                    <h3 className="text-3xl font-bold mt-8 mb-6 text-slate-900">{translations.socialAndAcademicNetworks[language]}</h3>
                    <div className="flex space-x-4 rtl:space-x-reverse">
                        <a href="#" className="text-teal-600 hover:text-teal-800 transition-colors"><LinkedInIcon /></a>
                        <a href="#" className="text-teal-600 hover:text-teal-800 transition-colors"><GoogleScholarIcon /></a>
                        <a href="#" className="text-teal-600 hover:text-teal-800 transition-colors"><TwitterIcon /></a>
                        <a href="#" className="text-teal-600 hover:text-teal-800 transition-colors"><GitHubIcon /></a>
                        <a href="#" className="text-teal-600 hover:text-teal-800 transition-colors"><ResearchGateIcon /></a>
                    </div>
                </div>
                <ContactForm />
            </div>
        </Section>
    );
};