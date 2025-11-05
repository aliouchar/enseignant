import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { SearchIcon } from '../constants';

interface FilterConfig {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    options: string[];
}

interface SearchAndFilterProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
    filters: FilterConfig[];
    onReset: () => void;
}

export const SearchAndFilter: React.FC<SearchAndFilterProps> = ({ searchTerm, onSearchChange, filters, onReset }) => {
    const { language } = useLanguage();
    
    return (
        <div className="bg-white p-4 rounded-lg mb-8 space-y-4 md:space-y-0 md:flex md:flex-wrap md:items-center md:gap-4 shadow-sm">
            {/* Search Input */}
            <div className="relative flex-grow">
                <span className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 flex items-center pl-3 rtl:pl-0 rtl:pr-3 text-slate-500">
                     <SearchIcon />
                </span>
                <input
                    type="text"
                    placeholder={translations.searchPlaceholder[language]}
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full text-slate-900 pl-10 rtl:pr-10 pr-4 rtl:pl-4 py-2 border border-slate-300 bg-white rounded-md focus:ring-teal-500 focus:border-teal-500"
                />
            </div>
            
            {/* Filters */}
            {filters.map((filter, index) => (
                <select
                    key={index}
                    value={filter.value}
                    onChange={(e) => filter.onChange(e.target.value)}
                    className="w-full md:w-auto px-4 py-2 border border-slate-300 bg-white rounded-md text-slate-900 focus:ring-teal-500 focus:border-teal-500"
                >
                    <option value="">{filter.placeholder}</option>
                    {filter.options.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            ))}

            {/* Reset Button */}
            <button 
                onClick={onReset}
                className="w-full md:w-auto px-4 py-2 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 transition-colors"
            >
                {translations.resetFilters[language]}
            </button>
        </div>
    );
};