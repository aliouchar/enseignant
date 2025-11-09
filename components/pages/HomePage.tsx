import React, { useState } from 'react';
import { Section } from '../Section';
import { ActionCard } from '../ActionCard';
import { TestimonialCard } from '../TestimonialCard';
import { Newsletter } from '../Newsletter';
import type { NewsItem, Publication, Testimonial, ResearchProject, Course, Page, GalleryImage, NewsLink, GalleryCategory, ResourceItem, MediaItem, SiteConfig } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { ToolIcon, DatasetIcon, ResourceListIcon, PodcastIcon, VideoIcon, ArticleIcon, LinkIcon } from '../../constants';
import { AnimateOnScroll } from '../AnimateOnScroll';

const ZoomIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m-3-3h6" />
    </svg>
);

interface HomePageProps {
    newsItems: NewsItem[];
    publications: Publication[];
    testimonials: Testimonial[];
    researchProjects: ResearchProject[];
    courses: Course[];
    galleryImages: GalleryImage[];
    siteConfigData: SiteConfig;
    resources: ResourceItem[];
    mediaInterventions: MediaItem[];
    setActivePage: (page: Page) => void;
    onNewsClick: (link: NewsLink) => void;
    onViewPublication: (id: number) => void;
    onOpenImageModal: (image: {src: string, alt: string}) => void;
    onViewProject: (id: number) => void;
    onViewCourse: (id: number) => void;
    onNewsletterSubscribe: (email: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
    newsItems, publications, testimonials, researchProjects, courses, galleryImages, siteConfigData, 
    resources, mediaInterventions,
    setActivePage, onNewsClick, onViewPublication, onOpenImageModal, onViewProject, onViewCourse,
    onNewsletterSubscribe
}) => {
    const { language } = useLanguage();
    const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'all'>('all');

    const filteredImages = galleryImages.filter(image => 
        activeCategory === 'all' || image.category === activeCategory
    );

    const categories: { key: GalleryCategory | 'all'; label: string }[] = [
        { key: 'all', label: translations.galleryCategories.all[language] },
        { key: 'research', label: translations.galleryCategories.research[language] },
        { key: 'conference', label: translations.galleryCategories.conference[language] },
        { key: 'teaching', label: translations.galleryCategories.teaching[language] },
        { key: 'lab', label: translations.galleryCategories.lab[language] },
    ];
    
    const renderResourceIcon = (icon: ResourceItem['icon']) => {
        switch (icon) {
            case 'tool': return <ToolIcon />;
            case 'dataset': return <DatasetIcon />;
            case 'list': return <ResourceListIcon />;
            default: return null;
        }
    };
    
    const renderMediaIcon = (type: MediaItem['type']) => {
        switch(type) {
            case 'podcast': return <PodcastIcon />;
            case 'video': return <VideoIcon />;
            case 'article': return <ArticleIcon />;
            default: return null;
        }
    };

    return (
        <>
            {/* Hero Section */}
            <section className="text-center py-16 md:py-24">
                 <AnimateOnScroll className="relative w-72 h-72 mx-auto mb-8">
                    <button
                        onClick={() => onOpenImageModal({ src: siteConfigData.profilePicUrl, alt: siteConfigData.authorName[language] })}
                        className="group block w-full h-full rounded-full focus:outline-none focus:ring-4 focus:ring-teal-500/50 focus:ring-offset-4 focus:ring-offset-slate-50"
                        aria-label={`View image of ${siteConfigData.authorName[language]}`}
                    >
                        <div className="absolute inset-0 rounded-full bg-teal-400 blur-3xl animate-pulse group-hover:blur-2xl transition-all" style={{ animationDuration: '4s' }}></div>
                        <div className="relative w-full h-full p-1.5 rounded-full bg-gradient-to-tr from-teal-400 via-cyan-500 to-emerald-500 shadow-2xl group-hover:shadow-cyan-400/50 transition-shadow">
                            <div className="bg-slate-50 p-1 rounded-full">
                                <img src={siteConfigData.profilePicUrl} alt={siteConfigData.authorName[language]} className="rounded-full w-full h-full object-cover shadow-inner" />
                            </div>
                        </div>
                    </button>
                 </AnimateOnScroll>
                 <AnimateOnScroll delay={100}>
                    <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 tracking-tight">
                        {siteConfigData.authorName[language]}
                    </h1>
                    <p className="mt-4 text-2xl text-slate-600 max-w-2xl mx-auto">
                        {siteConfigData.heroSubtitle[language]}
                    </p>
                 </AnimateOnScroll>
            </section>
            
            {/* Mission Section */}
            <section className="py-12 md:py-16">
                <AnimateOnScroll>
                    <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative">
                        <div className="absolute -top-4 left-0 rtl:left-auto rtl:right-0 w-12 h-12 text-teal-100 transform -translate-x-4 rtl:translate-x-4">
                            <svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14,12H9.5A6.5,6.5,0,0,0,3,18.5v5A2.5,2.5,0,0,0,5.5,26h5A2.5,2.5,0,0,0,13,23.5v-8A2.5,2.5,0,0,0,10.5,13H9V12Z"/><path d="M25.5,13H24V12h1.5A2.5,2.5,0,0,1,28,14.5v8A2.5,2.5,0,0,1,25.5,25H21a2.5,2.5,0,0,1-2.5-2.5v-5A6.5,6.5,0,0,1,25,11h.5Z"/></svg>
                        </div>
                        <p className="text-3xl md:text-4xl font-medium text-slate-700 italic leading-relaxed">
                            {translations.missionText[language].replace(/"/g, '')}
                        </p>
                        <div className="absolute -bottom-4 right-0 rtl:right-auto rtl:left-0 w-12 h-12 text-teal-100 transform translate-x-4 rtl:-translate-x-4 rotate-180">
                            <svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14,12H9.5A6.5,6.5,0,0,0,3,18.5v5A2.5,2.5,0,0,0,5.5,26h5A2.5,2.5,0,0,0,13,23.5v-8A2.5,2.5,0,0,0,10.5,13H9V12Z"/><path d="M25.5,13H24V12h1.5A2.5,2.5,0,0,1,28,14.5v8A2.5,2.5,0,0,1,25.5,25H21a2.5,2.5,0,0,1-2.5-2.5v-5A6.5,6.5,0,0,1,25,11h.5Z"/></svg>
                        </div>
                    </div>
                </AnimateOnScroll>
            </section>

            {/* Latest News */}
            <Section title={translations.news[language]}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.slice(0, 3).map((item, index) => (
                        <AnimateOnScroll key={index} delay={index * 100}>
                            <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full shadow-md">
                                <button
                                    onClick={() => onOpenImageModal({src: item.imageUrl, alt: item.title[language]})}
                                    className="relative group block focus:outline-none"
                                    aria-label={`Enlarge image for ${item.title[language]}`}
                                >
                                    <img src={item.imageUrl} alt={item.title[language]} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <ZoomIcon />
                                    </div>
                                </button>
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-base text-slate-500 mb-1">{item.date[language]}</p>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 flex-grow">{item.title[language]}</h3>
                                    {item.link && (
                                        <div className="mt-4 pt-4 border-t border-slate-200">
                                            <button
                                                onClick={() => onNewsClick(item.link!)}
                                                className="text-base text-teal-600 font-semibold hover:underline"
                                            >
                                                {translations.readMore[language]} &rarr;
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <button onClick={() => setActivePage('Actualités')} className="px-5 py-2 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 hover:text-slate-900 transition-colors">
                        {translations.viewAll[language]}
                    </button>
                </div>
            </Section>

            {/* Testimonials */}
            <Section title={translations.testimonials[language]}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <AnimateOnScroll key={index} animationClass="animate-fade-in-up" delay={index * 100}>
                            <TestimonialCard 
                                testimonial={testimonial} 
                                onImageClick={() => onOpenImageModal({src: testimonial.imageUrl, alt: testimonial.author[language]})}
                            />
                        </AnimateOnScroll>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <button onClick={() => setActivePage('Témoignages')} className="px-5 py-2 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 hover:text-slate-900 transition-colors">
                        {translations.viewAll[language]}
                    </button>
                </div>
            </Section>

            {/* Academic Activities Overview */}
            <Section title={translations.academicActivities[language]}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                     <AnimateOnScroll>
                        <ActionCard 
                            title={researchProjects[0].title[language]} 
                            description={researchProjects[0].summary[language]} 
                            onReadMore={() => onViewProject(researchProjects[0].id)}
                        />
                    </AnimateOnScroll>
                     <AnimateOnScroll delay={100}>
                         <ActionCard 
                            title={publications[0].title[language]} 
                            description={publications[0].authors.join(', ')} 
                            onReadMore={() => onViewPublication(publications[0].id)}
                        />
                    </AnimateOnScroll>
                     <AnimateOnScroll delay={200}>
                         <ActionCard 
                            title={courses[0].title[language]} 
                            description={courses[0].level[language]} 
                            onReadMore={() => onViewCourse(courses[0].id)}
                        />
                    </AnimateOnScroll>
                </div>
                <div className="mt-8 text-center">
                    <button onClick={() => setActivePage('CV')} className="px-5 py-2 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 hover:text-slate-900 transition-colors">
                        {translations.exploreMyWork[language]}
                    </button>
                </div>
            </Section>
            
            {/* Resources & Links */}
            <Section title={translations.resourcesAndLinks[language]}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {resources.map((item, index) => (
                        <AnimateOnScroll key={item.id} delay={index * 100}>
                           <div className="bg-white p-6 rounded-lg h-full shadow-md text-left rtl:text-right flex flex-col">
                               <div className="flex items-center gap-4 mb-3">
                                   <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 text-teal-600 border border-slate-200">
                                       {renderResourceIcon(item.icon)}
                                   </div>
                                   <h4 className="text-xl font-bold text-slate-900">{item.title[language]}</h4>
                               </div>
                               <p className="text-slate-600 mb-4 flex-grow">{item.description[language]}</p>
                               <div className="mt-auto">
                                   <a href={item.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-600 hover:underline">{translations.accessResource[language]} &rarr;</a>
                               </div>
                           </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Section>

            {/* Media & Interventions */}
            <Section title={translations.mediaAndInterventions[language]}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {mediaInterventions.map((item, index) => (
                        <AnimateOnScroll key={item.id} delay={index * 100}>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden text-left rtl:text-right flex flex-col h-full">
                                <button
                                    onClick={() => onOpenImageModal({src: item.imageUrl, alt: item.title[language]})}
                                    className="relative group w-full block focus:outline-none"
                                    aria-label={`Enlarge image for ${item.title[language]}`}
                                >
                                    <img src={item.imageUrl} alt={item.title[language]} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"/>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <ZoomIcon />
                                    </div>
                                </button>
                                <div className="p-4 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 text-sm text-slate-500 mb-2">
                                        <span className="text-teal-600">{renderMediaIcon(item.type)}</span>
                                        <span>{item.media[language]}</span>
                                        <span>&bull;</span>
                                        <span>{item.date[language]}</span>
                                    </div>
                                    <h4 className="font-bold text-slate-900 mb-3 flex-grow">{item.title[language]}</h4>
                                    <div className="mt-auto pt-3 border-t border-slate-200">
                                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-teal-600 hover:underline text-sm">{translations.viewMedia[language]} &rarr;</a>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Section>
            
            {/* Gallery */}
            <Section title={translations.gallery[language]}>
                <div className="flex justify-center flex-wrap gap-2 mb-8">
                    {categories.map(cat => (
                        <button 
                            key={cat.key} 
                            onClick={() => setActiveCategory(cat.key)}
                            className={`px-4 py-2 text-base font-semibold rounded-full transition-colors ${activeCategory === cat.key ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {filteredImages.map((image, index) => (
                        <AnimateOnScroll key={image.id} delay={index * 50}>
                            <div className="relative group overflow-hidden rounded-lg cursor-pointer shadow-lg" onClick={() => onOpenImageModal({ src: image.src, alt: image.alt[language] })}>
                                <img src={image.src} alt={image.alt[language]} className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-end">
                                    <p className="text-white text-sm p-2 truncate">{image.alt[language]}</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </Section>
            
            {/* Newsletter */}
            <Section title={translations.newsletterTitle[language]}>
                <AnimateOnScroll>
                    <Newsletter onSubscribe={onNewsletterSubscribe} />
                </AnimateOnScroll>
            </Section>
        </>
    );
};