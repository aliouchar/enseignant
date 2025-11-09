import React, { useState } from 'react';
import { Section } from '../Section';
import { ContactForm } from '../ContactForm';
import { MailIcon, PhoneIcon, OfficeIcon, LinkedInIcon, GoogleScholarIcon, TwitterIcon, GitHubIcon, ResearchGateIcon } from '../../constants';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import type { SiteConfig } from '../../types';

interface ContactPageProps {
    siteConfigData: SiteConfig;
    onContactSubmit: (name: string, email: string, message: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ siteConfigData, onContactSubmit }) => {
    const { language } = useLanguage();
    const [status, setStatus] = useState('');

    const handleFormSubmit = (name: string, email: string, message: string) => {
        onContactSubmit(name, email, message);
        setStatus(translations.formSuccess[language]);
        setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
    };
    
    const socialLinks = [
        { href: siteConfigData.socialLinks.linkedin, icon: <LinkedInIcon />, label: 'LinkedIn' },
        { href: siteConfigData.socialLinks.googleScholar, icon: <GoogleScholarIcon />, label: 'Google Scholar' },
        { href: siteConfigData.socialLinks.twitter, icon: <TwitterIcon />, label: 'Twitter' },
        { href: siteConfigData.socialLinks.github, icon: <GitHubIcon />, label: 'GitHub' },
        { href: siteConfigData.socialLinks.researchGate, icon: <ResearchGateIcon />, label: 'ResearchGate' },
    ];
    
    return (
        <Section title={translations.contact[language]}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md text-left rtl:text-right">
                    <h3 className="text-3xl font-bold mb-6 text-slate-900">{translations.coordinates[language]}</h3>
                    <div className="space-y-4 text-slate-700">
                        <p className="flex items-center gap-3"><MailIcon /> <strong>{translations.email[language]}:</strong> <a href={`mailto:${siteConfigData.contactEmail}`} className="hover:underline">{siteConfigData.contactEmail}</a></p>
                        <p className="flex items-center gap-3"><PhoneIcon /> <strong>{translations.phone[language]}:</strong> {siteConfigData.contactPhone}</p>
                        <p className="flex items-center gap-3"><OfficeIcon /> <strong>{translations.office[language]}:</strong> {siteConfigData.contactOffice[language]}</p>
                    </div>
                    <h3 className="text-3xl font-bold mt-8 mb-6 text-slate-900">{translations.socialAndAcademicNetworks[language]}</h3>
                    <div className="flex flex-wrap gap-4">
                        {socialLinks.map(link => link.href && (
                            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-teal-600 hover:text-teal-800 transition-colors">{link.icon}</a>
                        ))}
                    </div>
                </div>
                <div>
                    <ContactForm onSubmit={handleFormSubmit} />
                    {status && <p className="text-center text-green-600 mt-4">{status}</p>}
                </div>
            </div>
        </Section>
    );
};