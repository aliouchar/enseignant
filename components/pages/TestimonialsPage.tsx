import React from 'react';
import { Section } from '../Section';
import { TestimonialCard } from '../TestimonialCard';
import { BackIcon } from '../../constants';
import type { Testimonial } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { AnimateOnScroll } from '../AnimateOnScroll';

interface TestimonialsPageProps {
    testimonials: Testimonial[];
    onBack: () => void;
    onOpenImageModal: (image: {src: string, alt: string}) => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ testimonials, onBack, onOpenImageModal }) => {
    const { language } = useLanguage();

    return (
        <Section title={translations.testimonials[language]}>
             <button onClick={onBack} className="inline-flex items-center gap-2 text-teal-600 font-semibold mb-6 hover:underline">
                <span className="transform rtl:rotate-180"><BackIcon /></span>
                {translations.backToHome[language]}
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <AnimateOnScroll key={index} animationClass="animate-fade-in-up">
                        <TestimonialCard 
                            testimonial={testimonial} 
                            onImageClick={() => onOpenImageModal({src: testimonial.imageUrl, alt: testimonial.author[language]})}
                        />
                    </AnimateOnScroll>
                ))}
            </div>
        </Section>
    );
};