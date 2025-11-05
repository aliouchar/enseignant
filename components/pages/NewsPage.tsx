import React, { useState, useMemo } from 'react';
import { Section } from '../Section';
import { SearchAndFilter } from '../SearchAndFilter';
import type { NewsItem, NewsLink } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { ReadMoreIcon } from '../../constants';
import { AnimateOnScroll } from '../AnimateOnScroll';

interface NewsPageProps {
    newsItems: NewsItem[];
    onNewsClick: (link: NewsLink) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ newsItems, onNewsClick }) => {
    const { language } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    const yearOptions = useMemo(() =>
        // Fix: Sort years numerically to avoid TypeScript errors with localeCompare on 'unknown' type.
        [...new Set(newsItems.map(item => item.year.toString()))].sort((a, b) => Number(b) - Number(a)),
    [newsItems]);

    const filteredNews = useMemo(() => {
        return newsItems.filter(item => {
            const term = searchTerm.toLowerCase();
            const matchesSearch = term === '' ||
                item.title[language].toLowerCase().includes(term) ||
                item.content[language].toLowerCase().includes(term);

            const matchesYear = selectedYear === '' || item.year.toString() === selectedYear;

            return matchesSearch && matchesYear;
        });
    }, [newsItems, searchTerm, selectedYear, language]);
    
    const handleReset = () => {
        setSearchTerm('');
        setSelectedYear('');
    };

    const renderItem = (item: NewsItem, index: number) => {
        const linkText = item.link?.type === 'publication'
            ? translations.viewPublication[language]
            : translations.viewProject[language];

        return (
            <AnimateOnScroll key={index} delay={index * 100}>
                <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full shadow-md">
                    <img src={item.imageUrl} alt={item.title[language]} className="w-full h-48 object-cover" />
                    <div className="p-6 flex flex-col flex-grow">
                        <p className="text-base text-slate-500 mb-1">{item.date[language]}</p>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title[language]}</h3>
                        <p className="text-slate-600 flex-grow">{item.content[language]}</p>
                        {item.link && (
                            <div className="mt-4 pt-4 border-t border-slate-200">
                                <button
                                    onClick={() => onNewsClick(item.link!)}
                                    className="inline-flex items-center gap-2 text-base bg-slate-100 text-slate-700 font-semibold py-2 px-4 rounded-lg hover:bg-slate-200 hover:text-slate-900 transition-colors"
                                >
                                    <ReadMoreIcon /> {linkText}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </AnimateOnScroll>
        );
    };

    return (
        <Section title={translations.news[language]}>
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
            {filteredNews.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {filteredNews.map((item, index) => renderItem(item, index))}
                </div>
            ) : (
                 <p className="text-center text-slate-500 mt-8">{translations.noResults[language]}</p>
            )}
        </Section>
    );
};