import React from 'react';
import type { Course } from '../../../types';
import { BackIcon, DownloadIcon } from '../../../constants';
import { useLanguage } from '../../../contexts/LanguageContext';
import { translations } from '../../../translations';

interface CourseDetailPageProps {
    course: Course;
    onBack: () => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({ course, onBack }) => {
    const { language } = useLanguage();
    return (
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg animate-fade-in">
            <button onClick={onBack} className="inline-flex items-center gap-2 text-teal-600 font-semibold mb-6 hover:underline">
                <span className="transform rtl:rotate-180"><BackIcon /></span>
                {translations.backToCourses[language]}
            </button>

            <article className="text-left rtl:text-right">
                <p className="text-base text-slate-500 font-semibold">{course.level[language]} - {course.year}</p>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">{course.title[language]}</h1>
                <p className="text-slate-600 mt-4 leading-relaxed">{course.description[language]}</p>

                {course.downloadUrl && (
                    <div className="mt-6">
                        <a 
                            href={course.downloadUrl} 
                            download={`Syllabus_${course.title.en.replace(/\s+/g, '_')}.txt`}
                            className="inline-flex items-center gap-2 bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors"
                        >
                            <DownloadIcon /> {translations.download[language]}
                        </a>
                    </div>
                )}

                <div className="mt-8 border-t pt-6">
                    <h2 className="text-3xl font-bold text-slate-800 mb-3">{translations.courseObjectives[language]}</h2>
                    <ul className="list-disc list-inside space-y-2 text-slate-700">
                        {course.objectives.map((objective, index) => (
                            <li key={index}>{objective[language]}</li>
                        ))}
                    </ul>
                </div>

                <div className="mt-8">
                    <h2 className="text-3xl font-bold text-slate-800 mb-3">{translations.syllabus[language]}</h2>
                    <ul className="list-disc list-inside space-y-2 text-slate-700">
                         {course.syllabus.map((item, index) => (
                            <li key={index}>{item[language]}</li>
                        ))}
                    </ul>
                </div>
            </article>
        </div>
    );
};