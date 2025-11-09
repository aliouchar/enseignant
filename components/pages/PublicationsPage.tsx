import React, { useState, useMemo } from 'react';
import { Section } from '../Section';
import { ActionCard } from '../ActionCard';
import { SearchAndFilter } from '../SearchAndFilter';
import type { Publication } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { AnimateOnScroll } from '../AnimateOnScroll';

interface PublicationsPageProps {
    publications: Publication[];
    onViewPublication: (id: number) => void;
}

export const PublicationsPage: React.FC<PublicationsPageProps> = ({ publications, onViewPublication }) => {
    const { language } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedType, setSelectedType] = useState('');
    
    const yearOptions = useMemo(() => 
        // Fix: Sort years numerically to avoid TypeScript errors with localeCompare on 'unknown' type.
        [...new Set(publications.map(p => p.year.toString()))].sort((a, b) => Number(b) - Number(a)), 
    [publications]);

    const typeOptions = useMemo(() => 
        [...new Set(publications.map(p => p.type[language]))],
    [publications, language]);

    const filteredPublications = useMemo(() => {
        return publications.filter(pub => {
            const term = searchTerm.toLowerCase();
            const matchesSearch = term === '' ||
                pub.title[language].toLowerCase().includes(term) ||
                pub.authors.join(', ').toLowerCase().includes(term) ||
                pub.journal[language].toLowerCase().includes(term);

            const matchesYear = selectedYear === '' || pub.year.toString() === selectedYear;
            const matchesType = selectedType === '' || pub.type[language] === selectedType;

            return matchesSearch && matchesYear && matchesType;
        });
    }, [publications, searchTerm, selectedYear, selectedType, language]);

    const handleReset = () => {
        setSearchTerm('');
        setSelectedYear('');
        setSelectedType('');
    };

    return (
        <Section title={translations.publications[language]}>
            <SearchAndFilter
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                filters={[
                    {
                        value: selectedYear,
                        onChange: setSelectedYear,
                        placeholder: translations.filterByYear[language],
                        options: yearOptions,
                    },
                    {
                        value: selectedType,
                        onChange: setSelectedType,
                        placeholder: translations.filterByType[language],
                        options: typeOptions,
                    },
                ]}
                onReset={handleReset}
            />
            {filteredPublications.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {filteredPublications.map((pub, index) => (
                        <AnimateOnScroll key={pub.id} delay={index * 100}>
                            <ActionCard 
                                title={`${pub.title[language]} (${pub.year})`} 
                                description={pub.authors.join(', ')} 
                                onReadMore={() => onViewPublication(pub.id)}
                                downloadUrl={pub.downloadUrl}
                                downloadFilename={`Publication_${pub.title.en.replace(/\s+/g, '_')}.txt`}
                            />
                        </AnimateOnScroll>
                    ))}
                </div>
            ) : (
                <p className="text-center text-slate-500 mt-8">{translations.noResults[language]}</p>
            )}
        </Section>
    );
};