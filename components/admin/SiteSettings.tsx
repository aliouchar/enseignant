import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import type { SiteConfig, MultilingualString, SocialLinks } from '../../types';

interface SiteSettingsProps {
    siteConfigData: SiteConfig;
    setSiteConfigData: React.Dispatch<React.SetStateAction<SiteConfig>>;
}

export const SiteSettings: React.FC<SiteSettingsProps> = ({ siteConfigData, setSiteConfigData }) => {
    const { language } = useLanguage();
    const [localSiteConfig, setLocalSiteConfig] = useState(siteConfigData);
    const [saveStatus, setSaveStatus] = useState('');

     useEffect(() => {
        setLocalSiteConfig(siteConfigData);
    }, [siteConfigData]);

    const handleSiteConfigChange = (field: keyof SiteConfig, value: any) => {
        setLocalSiteConfig(prev => ({...prev, [field]: value}));
    }

    const handleMultilingualSiteConfigChange = (field: 'headerTitle' | 'authorName' | 'heroSubtitle' | 'contactOffice', lang: keyof MultilingualString, value: string) => {
        setLocalSiteConfig(prev => ({
            ...prev,
            [field]: { ...prev[field], [lang]: value },
        }));
    };
    
    const handleSocialLinkChange = (field: keyof SocialLinks, value: string) => {
        setLocalSiteConfig(prev => ({
            ...prev,
            socialLinks: { ...prev.socialLinks, [field]: value },
        }));
    };

    const handleProfilePicChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                handleSiteConfigChange('profilePicUrl', reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveSiteConfig = () => {
        setSiteConfigData(localSiteConfig);
        setSaveStatus(translations.admin.settingsSaved[language]);
        setTimeout(() => setSaveStatus(''), 3000);
    };

    const renderMultilingualField = (label: string, field: 'headerTitle' | 'authorName' | 'heroSubtitle' | 'contactOffice') => (
         <div className="space-y-3 p-4 bg-slate-50 rounded-lg border">
            <label className="block text-base font-medium text-slate-700">{label}</label>
            {(['fr', 'en', 'ar'] as const).map(lang => (
                <div key={lang}>
                    <label className="block text-sm font-medium text-slate-500">{lang.toUpperCase()}</label>
                    <input type="text" value={localSiteConfig[field][lang]} onChange={e => handleMultilingualSiteConfigChange(field, lang, e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm" />
                </div>
            ))}
        </div>
    );
    const renderSocialField = (label: string, field: keyof SocialLinks) => (
         <div>
            <label className="block text-sm font-medium text-slate-700">{label}</label>
            <input type="url" value={localSiteConfig.socialLinks[field] || ''} onChange={e => handleSocialLinkChange(field, e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm" />
        </div>
    );

    return (
        <div className="space-y-6">
            {renderMultilingualField(translations.admin.headerTitleLabel[language], 'headerTitle')}
            {renderMultilingualField(translations.admin.authorNameLabel[language], 'authorName')}
            {renderMultilingualField(translations.admin.heroSubtitleLabel[language], 'heroSubtitle')}
            {renderMultilingualField(translations.admin.contactOfficeLabel[language], 'contactOffice')}
            
             <div className="space-y-1.5 p-4 bg-slate-50 rounded-lg border">
                <label className="block text-base font-medium text-slate-700">{translations.admin.profilePicLabel[language]}</label>
                 <div className="flex items-center gap-4">
                    <img src={localSiteConfig.profilePicUrl} alt="Profile" className="h-20 w-20 rounded-full object-cover border" />
                    <input type="file" accept=".jpg,.jpeg" onChange={handleProfilePicChange} className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100" />
                </div>
            </div>
            
             <div className="space-y-3 p-4 bg-slate-50 rounded-lg border">
                <h4 className="text-lg font-semibold text-slate-800">Contact Info</h4>
                 <div>
                    <label className="block text-sm font-medium text-slate-700">{translations.admin.contactEmailLabel[language]}</label>
                    <input type="email" value={localSiteConfig.contactEmail} onChange={e => handleSiteConfigChange('contactEmail', e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm" />
                </div>
                 <div>
                    <label className="block text-sm font-medium text-slate-700">{translations.admin.contactPhoneLabel[language]}</label>
                    <input type="tel" value={localSiteConfig.contactPhone} onChange={e => handleSiteConfigChange('contactPhone', e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm" />
                </div>
            </div>
             <div className="space-y-3 p-4 bg-slate-50 rounded-lg border">
                <h4 className="text-lg font-semibold text-slate-800">{translations.admin.socialLinksTitle[language]}</h4>
                {renderSocialField(translations.admin.linkedinUrl[language], 'linkedin')}
                {renderSocialField(translations.admin.googleScholarUrl[language], 'googleScholar')}
                {renderSocialField(translations.admin.twitterUrl[language], 'twitter')}
                {renderSocialField(translations.admin.githubUrl[language], 'github')}
                {renderSocialField(translations.admin.researchGateUrl[language], 'researchGate')}
            </div>

             <div className="flex items-center gap-4">
                <button onClick={handleSaveSiteConfig} className="px-5 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">
                    {translations.admin.saveSettings[language]}
                </button>
                {saveStatus && <p className="text-green-600">{saveStatus}</p>}
            </div>
        </div>
    );
};