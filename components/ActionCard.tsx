import React from 'react';
import { DownloadIcon, ReadMoreIcon } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

interface ActionCardProps {
    title: string;
    description: string;
    onReadMore?: () => void;
    downloadUrl?: string;
    downloadFilename?: string;
}

export const ActionCard: React.FC<ActionCardProps> = ({ title, description, onReadMore, downloadUrl, downloadFilename }) => {
    const { language } = useLanguage();

    return (
        <div className="bg-white p-8 h-full rounded-lg flex flex-col text-left rtl:text-right shadow-md">
            <h4 className="text-3xl font-bold text-slate-900">{title}</h4>
            <p className="text-slate-600 mt-2 mb-4 overflow-hidden flex-grow">{description}</p>
            <div className="flex flex-wrap gap-4 mt-auto">
                {onReadMore && (
                    <button onClick={onReadMore} className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 font-semibold py-2 px-4 rounded-lg hover:bg-slate-200 hover:text-slate-900 transition-colors text-base">
                        <ReadMoreIcon /> {translations.readMore[language]}
                    </button>
                )}
                {downloadUrl && (
                     <a 
                        href={downloadUrl} 
                        download={downloadFilename || true}
                        className="inline-flex items-center gap-2 bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors text-base"
                    >
                        <DownloadIcon /> {translations.download[language]}
                    </a>
                )}
            </div>
        </div>
    );
};