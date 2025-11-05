import React, { useState, useMemo } from 'react';
import { Section } from '../Section';
import { InfoCard } from '../InfoCard';
import { ActionCard } from '../ActionCard';
import { SearchAndFilter } from '../SearchAndFilter';
import type { ResearchProject, MultilingualString } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { AnimateOnScroll } from '../AnimateOnScroll';

interface ResearchPageProps {
    researchDomains: MultilingualString[];
    researchProjects: ResearchProject[];
    onViewProject: (id: number) => void;
}

export const ResearchPage: React.FC<ResearchPageProps> = ({ researchDomains, researchProjects, onViewProject }) => {
    const { language } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    const yearOptions = useMemo(() => 
        // Fix: Sort years numerically to avoid TypeScript errors with localeCompare on 'unknown' type.
        [...new Set(researchProjects.map(p => p.year.toString()))].sort((a, b) => Number(b) - Number(a)),
    [researchProjects]);

    const filteredProjects = useMemo(() => {
        return researchProjects.filter(project => {
            const term = searchTerm.toLowerCase();
            const matchesSearch = term === '' ||
                project.title[language].toLowerCase().includes(term) ||
                project.summary[language].toLowerCase().includes(term);
            
            const matchesYear = selectedYear === '' || project.year.toString() === selectedYear;

            return matchesSearch && matchesYear;
        });
    }, [researchProjects, searchTerm, selectedYear, language]);

    const handleReset = () => {
        setSearchTerm('');
        setSelectedYear('');
    };

    return (
        <Section title={translations.research[language]}>
            <div className="space-y-16">
                <div>
                    <AnimateOnScroll>
                        <h3 className="text-4xl font-bold text-center mb-8 text-slate-900">{translations.researchDomains[language]}</h3>
                    </AnimateOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {researchDomains.map((domain, i) => (
                            <AnimateOnScroll key={i} delay={i * 100}>
                                <InfoCard title={domain[language]} className="text-center h-full flex items-center justify-center" />
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-4xl font-bold text-center mb-8 text-slate-900">{translations.researchProjects[language]}</h3>
                    <SearchAndFilter
                        searchTerm={searchTerm}
                        onSearchChange={setSearchTerm}
                        filters={[
                            {
                                value: selectedYear,
                                onChange: setSelectedYear,
                                placeholder: translations.filterByYear[language],
                                options: yearOptions,
                            }
                        ]}
                        onReset={handleReset}
                    />

                    {filteredProjects.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            {filteredProjects.map((project, index) => (
                                <AnimateOnScroll key={project.id} delay={index * 100}>
                                    <ActionCard 
                                        title={`${project.title[language]} (${project.year})`} 
                                        description={project.summary[language]} 
                                        onReadMore={() => onViewProject(project.id)}
                                        downloadUrl={project.downloadUrl}
                                        downloadFilename={`Project_${project.title.en.replace(/\s+/g, '_')}.txt`}
                                        size="large"
                                    />
                                </AnimateOnScroll>
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-slate-500 mt-8">{translations.noResults[language]}</p>
                    )}
                </div>
            </div>
        </Section>
    );
};