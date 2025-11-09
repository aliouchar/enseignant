import React from 'react';
import { Section } from '../Section';
import { InfoCard } from '../InfoCard';
import { DownloadIcon, AcademicCapIcon, BriefcaseIcon, ProjectIcon, StarIcon, CheckCircleIcon, LinkIcon } from '../../constants';
import type { CV } from '../../types';
import { cvDownloadUrl } from '../../constants';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { AnimateOnScroll } from '../AnimateOnScroll';

interface CVPageProps {
    cv: CV;
    onViewProject: (id: number) => void;
}

export const CVPage: React.FC<CVPageProps> = ({ cv, onViewProject }) => {
    const { language } = useLanguage();

    return (
        <Section title={translations.cv[language]}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AnimateOnScroll animationClass="animate-fade-in-up" delay={0}>
                    <InfoCard title={translations.education[language]} icon={<AcademicCapIcon />}>
                        <ul className="space-y-3">
                            {cv.education.map((edu) => <li key={edu.id}><strong>{edu.degree[language]}</strong>, {edu.institution[language]}, {edu.year}</li>)}
                        </ul>
                    </InfoCard>
                </AnimateOnScroll>
                <AnimateOnScroll animationClass="animate-fade-in-up" delay={100}>
                    <InfoCard title={translations.experience[language]} icon={<BriefcaseIcon />}>
                        <ul className="space-y-3">
                            {cv.experience.map((exp) => <li key={exp.id}><strong>{exp.role[language]}</strong>, {exp.institution[language]}, {exp.period[language]}</li>)}
                        </ul>
                    </InfoCard>
                </AnimateOnScroll>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <AnimateOnScroll animationClass="animate-fade-in-up" delay={200}>
                    <InfoCard title={translations.projects[language]} icon={<ProjectIcon />}>
                        <ul className="space-y-2 list-disc list-inside">
                            {cv.projects.map((proj) => (
                                <li key={proj.id}>
                                    {proj.researchProjectId ? (
                                        <button onClick={() => onViewProject(proj.researchProjectId!)} className="text-teal-600 hover:underline">
                                            {proj.text[language]}
                                            <LinkIcon />
                                        </button>
                                    ) : (
                                        proj.text[language]
                                    )}
                                </li>
                            ))}
                        </ul>
                    </InfoCard>
                </AnimateOnScroll>
                <AnimateOnScroll animationClass="animate-fade-in-up" delay={300}>
                    <InfoCard title={translations.awards[language]} icon={<StarIcon />}>
                        <ul className="space-y-2 list-disc list-inside">
                            {cv.awards.map((award) => <li key={award.id}>{award.text[language]}</li>)}
                        </ul>
                    </InfoCard>
                </AnimateOnScroll>
                <AnimateOnScroll animationClass="animate-fade-in-up" delay={400}>
                    <InfoCard title={translations.skills[language]} icon={<CheckCircleIcon />}>
                        <ul className="space-y-2 list-disc list-inside">
                            {cv.skills.map((skill) => <li key={skill.id}>{skill.text[language]}</li>)}
                        </ul>
                    </InfoCard>
                </AnimateOnScroll>
            </div>
            <div className="mt-12 text-center">
                <a 
                    href={cvDownloadUrl} 
                    download={`CV_Elise_Dubois_${language}.txt`}
                    className="inline-flex items-center gap-2 bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors shadow-lg text-lg"
                >
                    <DownloadIcon />
                    {translations.downloadCV[language]}
                </a>
            </div>
        </Section>
    );
};