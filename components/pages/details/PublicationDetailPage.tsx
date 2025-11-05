import React from 'react';
import type { Publication, ResearchProject } from '../../../types';
import { BackIcon, LinkIcon, DownloadIcon } from '../../../constants';
import { useLanguage } from '../../../contexts/LanguageContext';
import { translations } from '../../../translations';

interface PublicationDetailPageProps {
    publication: Publication;
    onBack: () => void;
    researchProjects: ResearchProject[];
    onViewProject: (id: number) => void;
}

export const PublicationDetailPage: React.FC<PublicationDetailPageProps> = ({ publication, onBack, researchProjects, onViewProject }) => {
    const { language } = useLanguage();
    const associatedProject = publication.researchProjectId ? researchProjects.find(p => p.id === publication.researchProjectId) : null;

    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg animate-fade-in">
            <button onClick={onBack} className="inline-flex items-center gap-2 text-teal-600 font-semibold mb-6 hover:underline">
                <span className="transform rtl:rotate-180"><BackIcon /></span>
                {translations.backToPublications[language]}
            </button>

            <article className="text-left rtl:text-right">
                <p className="text-base text-slate-500 font-semibold">{publication.type[language]} - {publication.year}</p>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">{publication.title[language]}</h1>
                <p className="text-slate-600 mt-2"><em>{publication.authors.join(', ')}</em></p>
                <p className="text-slate-500 mt-1">{translations.publishedIn[language]} <strong>{publication.journal[language]}</strong></p>

                {publication.downloadUrl && (
                    <div className="mt-6">
                        <a 
                            href={publication.downloadUrl} 
                            download={`Publication_${publication.title.en.replace(/\s+/g, '_')}.txt`}
                            className="inline-flex items-center gap-2 bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors"
                        >
                            <DownloadIcon /> {translations.download[language]}
                        </a>
                    </div>
                )}


                {associatedProject && (
                    <div className="mt-6">
                         <h3 className="text-xl font-bold text-slate-800 mb-2">{translations.associatedProject[language]}</h3>
                         <button onClick={() => onViewProject(associatedProject.id)} className="text-teal-600 hover:underline">
                             {associatedProject.title[language]} <LinkIcon />
                         </button>
                    </div>
                )}

                <div className="mt-8 border-t pt-6">
                    <h2 className="text-3xl font-bold text-slate-800 mb-3">{translations.abstract[language]}</h2>
                    <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{publication.abstract[language]}</p>
                </div>

                <div className="mt-8">
                    <h2 className="text-3xl font-bold text-slate-800 mb-3">{translations.content[language]}</h2>
                    <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{publication.content[language]}</p>
                </div>
            </article>
        </div>
    );
};