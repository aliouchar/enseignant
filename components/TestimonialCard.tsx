import React from 'react';
import type { Testimonial } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface TestimonialCardProps {
    testimonial: Testimonial;
    onImageClick?: () => void;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, onImageClick }) => {
    const { language } = useLanguage();

    return (
        <div className="bg-white p-6 rounded-lg flex flex-col items-center text-center h-full shadow-md">
            <button 
                onClick={onImageClick} 
                disabled={!onImageClick} 
                className="cursor-pointer disabled:cursor-default rounded-full relative group"
                aria-label={`View image of ${testimonial.author[language]}`}
            >
                <img 
                    src={testimonial.imageUrl} 
                    alt={testimonial.author[language]} 
                    className="w-24 h-24 rounded-full object-cover mb-4 ring-2 ring-slate-200" 
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-teal-500/80 ring-offset-4 ring-offset-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <blockquote className="flex-grow">
                <p className="italic text-slate-600">"{testimonial.quote[language]}"</p>
            </blockquote>
            <footer className="mt-4 text-base text-slate-700 font-semibold">
                — {testimonial.author[language]}
            </footer>
        </div>
    );
};