import React, { ReactNode } from 'react';
import { AnimateOnScroll } from './AnimateOnScroll';

interface SectionProps {
    title: string;
    children: ReactNode;
    className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, className = '' }) => {
    return (
        <section className={`py-8 md:py-12 ${className}`}>
            <AnimateOnScroll animationClass="animate-fade-in-up">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">{title}</h2>
                    <div className="mt-4 w-24 h-1 mx-auto rounded-full bg-teal-500"></div>
                </div>
            </AnimateOnScroll>
            <div>{children}</div>
        </section>
    );
};