import React, { useState, useMemo } from 'react';
import { Section } from '../Section';
import { ActionCard } from '../ActionCard';
import { SearchAndFilter } from '../SearchAndFilter';
import type { Supervision } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { AnimateOnScroll } from '../AnimateOnScroll';

interface SupervisionsPageProps {
    supervisions: Supervision[];
    onViewSupervision: (id: number) => void;
}

export const SupervisionsPage: React.FC<SupervisionsPageProps> = ({ supervisions, onViewSupervision }) => {
    const { language } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');

    const yearOptions = useMemo(() => 
        // Fix: Sort years numerically to avoid TypeScript errors with localeCompare on 'unknown' type.
        [...new Set(supervisions.map(s => s.year.toString()))].sort((a, b) => Number(b) - Number(a)), 
    [supervisions]);

    const levelOptions = useMemo(() => 
        [...new Set(supervisions.map(s => s.level[language]))],
    [supervisions, language]);
    
    const filteredSupervisions = useMemo(() => {
        return supervisions.filter(sup => {
            const term = searchTerm.toLowerCase();
            const matchesSearch = term === '' ||
                sup.topic[language].toLowerCase().includes(term);
            
            const matchesYear = selectedYear === '' || sup.year.toString() === selectedYear;
            const matchesLevel = selectedLevel === '' || sup.level[language] === selectedLevel;

            return matchesSearch && matchesYear && matchesLevel;
        });
    }, [supervisions, searchTerm, selectedYear, selectedLevel, language]);

    const handleReset = () => {
        setSearchTerm('');
        setSelectedYear('');
        setSelectedLevel('');
    };

    return (
        <Section title={translations.supervisions[language]}>
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
                        value: selectedLevel,
                        onChange: setSelectedLevel,
                        placeholder: translations.filterByLevel[language],
                        options: levelOptions,
                    },
                ]}
                onReset={handleReset}
            />
            {filteredSupervisions.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {filteredSupervisions.map((sup, index) => (
                        <AnimateOnScroll key={index} animationClass="animate-fade-in-up">
                            <ActionCard
                                title={sup.topic[language]}
                                description={`${sup.studentName[language]} - ${sup.level[language]} (${sup.year})`}
                                onReadMore={() => onViewSupervision(sup.id)}
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