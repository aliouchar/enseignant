import React from 'react';
import type { Supervision, ResearchProject } from '../../../types';
import { BackIcon, LinkIcon } from '../../../constants';
import { useLanguage } from '../../../contexts/LanguageContext';
import { translations } from '../../../translations';

interface SupervisionDetailPageProps {
    supervision: Supervision;
    onBack: () => void;
    researchProjects: ResearchProject[];
    onViewProject: (id: number) => void;
}

export const SupervisionDetailPage: React.FC<SupervisionDetailPageProps> = ({ supervision, onBack, researchProjects, onViewProject }) => {
    const { language } = useLanguage();
    const associatedProject = supervision.researchProjectId ? researchProjects.find(p => p.id === supervision.researchProjectId) : null;

    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg animate-fade-in">
            <button onClick={onBack} className="inline-flex items-center gap-2 text-teal-600 font-semibold mb-6 hover:underline">
                <span className="transform rtl:rotate-180"><BackIcon /></span>
                {translations.backToSupervisions[language]}
            </button>

            <article className="text-left rtl:text-right">
                <p className="text-base text-slate-500 font-semibold">{supervision.level[language]} - {supervision.year}</p>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">{supervision.topic[language]}</h1>
                <p className="text-slate-600 mt-2"><em>{translations.student[language]}: {supervision.studentName[language]}</em></p>

                <div className="mt-8 border-t pt-6">
                    <h2 className="text-3xl font-bold text-slate-800 mb-3">{translations.supervisionDetails[language]}</h2>
                    <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{supervision.description[language]}</p>
                </div>

                {associatedProject && (
                    <div className="mt-8 border-t pt-6">
                         <h3 className="text-xl font-bold text-slate-800 mb-2">{translations.associatedProject[language]}</h3>
                         <button onClick={() => onViewProject(associatedProject.id)} className="text-teal-600 hover:underline">
                             {associatedProject.title[language]} <LinkIcon />
                         </button>
                    </div>
                )}
            </article>
        </div>
    );
};