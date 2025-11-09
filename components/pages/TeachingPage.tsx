import React, { useState, useMemo } from 'react';
import { Section } from '../Section';
import { ActionCard } from '../ActionCard';
import { SearchAndFilter } from '../SearchAndFilter';
import { BookOpenIcon, PencilIcon } from '../../constants';
import type { Course } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { AnimateOnScroll } from '../AnimateOnScroll';

interface TeachingPageProps {
    courses: Course[];
    onViewCourse: (id: number) => void;
}

export const TeachingPage: React.FC<TeachingPageProps> = ({ courses, onViewCourse }) => {
    const { language } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedLevel, setSelectedLevel] = useState('');

    const yearOptions = useMemo(() => 
        // Fix: Sort years numerically to avoid TypeScript errors with localeCompare on 'unknown' type.
        [...new Set(courses.map(c => c.year.toString()))].sort((a, b) => Number(b) - Number(a)), 
    [courses]);

    const levelOptions = useMemo(() => 
        [...new Set(courses.map(c => c.level[language]))],
    [courses, language]);
    
    const filteredCourses = useMemo(() => {
        return courses.filter(course => {
            const term = searchTerm.toLowerCase();
            const matchesSearch = term === '' ||
                course.title[language].toLowerCase().includes(term) ||
                course.description[language].toLowerCase().includes(term);
            
            const matchesYear = selectedYear === '' || course.year.toString() === selectedYear;
            const matchesLevel = selectedLevel === '' || course.level[language] === selectedLevel;

            return matchesSearch && matchesYear && matchesLevel;
        });
    }, [courses, searchTerm, selectedYear, selectedLevel, language]);
    
    const pedagogicalMethodsText = {
        fr: "Mon approche pédagogique est centrée sur l'étudiant, combinant théorie fondamentale et projets pratiques pour développer des compétences concrètes. J'utilise des méthodes d'apprentissage actif, des études de cas réels et des outils de collaboration pour favoriser un environnement d'apprentissage dynamique et engageant.",
        en: "My pedagogical approach is student-centered, combining fundamental theory and practical projects to develop concrete skills. I use active learning methods, real-world case studies, and collaboration tools to foster a dynamic and engaging learning environment.",
        ar: "نهجي التربوي يركز على الطالب، ويجمع بين النظرية الأساسية والمشاريع العملية لتطوير مهارات ملموسة. أستخدم أساليب التعلم النشط ودراسات الحالة الواقعية وأدوات التعاون لتعزيز بيئة تعليمية ديناميكية وجذابة."
    };
    
    const handleReset = () => {
        setSearchTerm('');
        setSelectedYear('');
        setSelectedLevel('');
    };

    return (
        <Section title={translations.teaching[language]}>
            <div className="space-y-16">
                <div className="max-w-3xl mx-auto">
                    <AnimateOnScroll animationClass="animate-fade-in-up">
                        <div className={`bg-white p-6 rounded-lg shadow-md`}>
                            <div className="flex items-center gap-3 mb-3">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 border border-slate-200">
                                    <span className="text-teal-600"><PencilIcon /></span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{translations.pedagogicalMethods[language]}</h3>
                            </div>
                            <p className="text-slate-600 text-left rtl:text-right">{pedagogicalMethodsText[language]}</p>
                        </div>
                    </AnimateOnScroll>
                </div>

                <div className="max-w-5xl mx-auto">
                    <AnimateOnScroll animationClass="animate-fade-in-up">
                        <h3 className="text-4xl font-bold text-center mb-8 text-slate-900 flex items-center justify-center gap-3">
                            <BookOpenIcon /> {translations.taughtCourses[language]}
                        </h3>
                    </AnimateOnScroll>
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

                    {filteredCourses.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            {filteredCourses.map((course) => (
                                <AnimateOnScroll key={course.id} animationClass="animate-fade-in-up">
                                    <ActionCard 
                                        title={course.title[language]} 
                                        description={`${course.level[language]} - ${course.year}`} 
                                        onReadMore={() => onViewCourse(course.id)}
                                        downloadUrl={course.downloadUrl}
                                        downloadFilename={`Syllabus_${course.title.en.replace(/\s+/g, '_')}.txt`}
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