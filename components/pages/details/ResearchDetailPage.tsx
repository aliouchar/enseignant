import React from 'react';
import type { ResearchProject, Publication } from '../../../types';
import { BackIcon, LinkIcon, DownloadIcon } from '../../../constants';
import { useLanguage } from '../../../contexts/LanguageContext';
import { translations } from '../../../translations';

interface ResearchDetailPageProps {
    project: ResearchProject;
    onBack: () => void;
    publications: Publication[];
    onViewPublication: (id: number) => void;
}

export const ResearchDetailPage: React.FC<ResearchDetailPageProps> = ({ project, onBack, publications, onViewPublication }) => {
    const { language } = useLanguage();
    const associatedPublications = publications.filter(p => p.researchProjectId === project.id);

    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg animate-fade-in">
            <button onClick={onBack} className="inline-flex items-center gap-2 text-teal-600 font-semibold mb-6 hover:underline">
                <span className="transform rtl:rotate-180"><BackIcon /></span>
                {translations.backToProjects[language]}
            </button>

            <article className="text-left rtl:text-right">
                <p className="text-base text-slate-500 font-semibold">{translations.researchProjects[language]} - {project.year}</p>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">{project.title[language]}</h1>
                
                 {project.downloadUrl && (
                    <div className="mt-6">
                        <a 
                            href={project.downloadUrl} 
                            download={`Project_${project.title.en.replace(/\s+/g, '_')}.txt`}
                            className="inline-flex items-center gap-2 bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors"
                        >
                            <DownloadIcon /> {translations.download[language]}
                        </a>
                    </div>
                )}

                <div className="mt-8 border-t pt-6">
                    <h2 className="text-3xl font-bold text-slate-800 mb-3">{translations.fullDescription[language]}</h2>
                    <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{project.fullDescription[language]}</p>
                </div>

                <div className="mt-8">
                    <h2 className="text-3xl font-bold text-slate-800 mb-3">{translations.outcomes[language]}</h2>
                     <ul className="list-disc list-inside space-y-2 text-slate-700">
                        {project.outcomes.map((outcome, index) => (
                            <li key={index}>{outcome[language]}</li>
                        ))}
                    </ul>
                </div>

                {associatedPublications.length > 0 && (
                    <div className="mt-8 border-t pt-6">
                        <h2 className="text-3xl font-bold text-slate-800 mb-3">{translations.associatedPublications[language]}</h2>
                        <ul className="space-y-3">
                            {associatedPublications.map(pub => (
                                <li key={pub.id}>
                                    <button onClick={() => onViewPublication(pub.id)} className="text-teal-600 hover:underline text-left rtl:text-right">
                                        {pub.title[language]} ({pub.year}) <LinkIcon />
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </article>
        </div>
    );
};