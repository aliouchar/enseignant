import React, { useState } from 'react';
import { Section } from '../Section';
import { InfoCard } from '../InfoCard';
import { ActionCard } from '../ActionCard';
import { TestimonialCard } from '../TestimonialCard';
import { Newsletter } from '../Newsletter';
import type { NewsItem, Publication, Testimonial, ResearchProject, Course, Page, GalleryImage, NewsLink, GalleryCategory, ResourceItem, MediaItem } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { headerInfo, ToolIcon, DatasetIcon, ResourceListIcon, PodcastIcon, VideoIcon, ArticleIcon, LinkIcon } from '../../constants';
import { AnimateOnScroll } from '../AnimateOnScroll';

interface HomePageProps {
    newsItems: NewsItem[];
    publications: Publication[];
    testimonials: Testimonial[];
    researchProjects: ResearchProject[];
    courses: Course[];
    galleryImages: GalleryImage[];
    profilePicUrl: string;
    resources: ResourceItem[];
    mediaInterventions: MediaItem[];
    setActivePage: (page: Page) => void;
    onNewsClick: (link: NewsLink) => void;
    onViewPublication: (id: number) => void;
    onOpenImageModal: (image: {src: string, alt: string}) => void;
    onViewProject: (id: number) => void;
    onViewCourse: (id: number) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ 
    newsItems, publications, testimonials, researchProjects, profilePicUrl, galleryImages,
    resources, mediaInterventions,
    setActivePage, onNewsClick, onViewPublication, onOpenImageModal, onViewProject
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

    return (
        <>
            {/* Hero Section */}
            <section className="text-center py-20 md:py-32">
                 <AnimateOnScroll className="relative w-72 h-72 mx-auto mb-8">
                    {/* Background glow */}
                    <div className="absolute inset-0 rounded-full bg-teal-400 blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
                    {/* Gradient border */}
                    <div className="relative w-full h-full p-1.5 rounded-full bg-gradient-to-tr from-teal-400 via-cyan-500 to-emerald-500 shadow-2xl">
                        {/* Inner border/padding */}
                        <div className="bg-slate-50 p-1 rounded-full">
                            <img src={profilePicUrl} alt={headerInfo.name[language]} className="rounded-full w-full h-full object-cover shadow-inner" />
                        </div>
                    </div>
                 </AnimateOnScroll>
                 <AnimateOnScroll delay={100}>
                    <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 tracking-tighter">{headerInfo.name[language]}</h1>
                 </AnimateOnScroll>
                 <AnimateOnScroll delay={200}>
                    <p className="mt-4 text-xl md:text-2xl text-teal-600">{translations.heroSubtitle[language]}</p>
                 </AnimateOnScroll>
            </section>
            
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Mission */}
                <AnimateOnScroll className="lg:col-span-2">
                    <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-8 rounded-2xl shadow-2xl h-full flex flex-col justify-center text-center text-white">
                        <h3 className="text-3xl font-bold mb-3 tracking-tight">{translations.myMission[language]}</h3>
                        <blockquote className="text-xl md:text-2xl font-light italic opacity-90">
                           <p>{translations.missionText[language]}</p>
                        </blockquote>
                    </div>
                </AnimateOnScroll>

                {/* News */}
                 <AnimateOnScroll>
                    <InfoCard title={translations.news[language]} className="h-full flex flex-col">
                        <ul className="space-y-4 flex-grow">
                            {newsItems.slice(0, 3).map((item, i) => (
                                <li key={i} className="text-base">
                                    {item.link ? (
                                        <button 
                                            onClick={() => onNewsClick(item.link!)} 
                                            className="text-left rtl:text-right group transition-colors duration-200"
                                        >
                                             <p className="text-slate-600 group-hover:text-teal-600">
                                                <span className="font-semibold text-slate-800 group-hover:text-teal-700">{item.date[language]}:</span> {item.title[language]}
                                             </p>
                                        </button>
                                    ) : (
                                        <p className="text-slate-600">
                                            <span className="font-semibold text-slate-800">{item.date[language]}:</span> {item.title[language]}
                                        </p>
                                    )}
                                </li>
                            ))}
                        </ul>
                         <div className="mt-auto pt-4 text-right rtl:text-left">
                            <button onClick={() => setActivePage('Actualités')} className="text-base font-semibold text-teal-600 hover:text-teal-800 transition-colors">
                                {translations.viewAll[language]} <span aria-hidden="true">&rarr;</span>
                            </button>
                        </div>
                    </InfoCard>
                </AnimateOnScroll>
                
                {/* Latest Publication */}
                {publications[0] && (
                    <AnimateOnScroll>
                        <ActionCard 
                            title={publications[0].title[language]} 
                            description={`${publications[0].authors.join(', ')} - ${publications[0].journal[language]} (${publications[0].year})`}
                            onReadMore={() => onViewPublication(publications[0].id)}
                            size="large"
                        />
                    </AnimateOnScroll>
                )}

                {/* Latest Project */}
                 {researchProjects[0] && (
                    <AnimateOnScroll>
                        <ActionCard 
                            title={researchProjects[0].title[language]} 
                            description={researchProjects[0].summary[language]}
                            onReadMore={() => onViewProject(researchProjects[0].id)}
                            size="large"
                        />
                    </AnimateOnScroll>
                )}
                
                {/* Call to Action */}
                <AnimateOnScroll>
                     <div className="bg-white p-6 rounded-lg h-full shadow-md flex flex-col items-center justify-center text-center">
                        <h3 className="text-3xl font-bold text-slate-900">{translations.exploreMyWork[language]}</h3>
                        <div className="flex flex-wrap gap-4 mt-4">
                            <button onClick={() => setActivePage('Publications')} className="bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors">{translations.publications[language]}</button>
                            <button onClick={() => setActivePage('Recherches')} className="bg-slate-100 text-slate-700 font-semibold py-2 px-4 rounded-lg hover:bg-slate-200 transition-colors">{translations.research[language]}</button>
                        </div>
                    </div>
                </AnimateOnScroll>

                {/* Gallery Section */}
                <AnimateOnScroll className="lg:col-span-3">
                    <Section title={translations.gallery[language]}>
                        <div className="flex justify-center flex-wrap gap-2 mb-8">
                            {categories.map(({ key, label }) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveCategory(key)}
                                    className={`px-4 py-2 text-base font-semibold rounded-full transition-colors ${
                                        activeCategory === key
                                            ? 'bg-teal-600 text-white'
                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                    }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {filteredImages.map((image, index) => (
                                <AnimateOnScroll key={image.src + index} delay={index * 50}>
                                    <button 
                                        onClick={() => onOpenImageModal({src: image.src, alt: image.alt[language]})}
                                        className="block w-full h-48 rounded-lg overflow-hidden group relative shadow-md focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50"
                                    >
                                        <img 
                                            src={image.src} 
                                            alt={image.alt[language]} 
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                        <div className="absolute bottom-0 left-0 rtl:right-0 p-2 text-left rtl:text-right">
                                            <p className="text-white text-sm font-semibold">{image.alt[language]}</p>
                                        </div>
                                    </button>
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </Section>
                </AnimateOnScroll>
                
                {/* Resources & Links Section */}
                <AnimateOnScroll className="lg:col-span-3">
                    <Section title={translations.resourcesAndLinks[language]}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {resources.map((resource, index) => (
                                <AnimateOnScroll key={resource.id} delay={index * 100}>
                                    <div className="bg-white p-6 rounded-lg h-full shadow-md text-left rtl:text-right flex flex-col">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 border border-slate-200">
                                                <span className="text-teal-600">{renderResourceIcon(resource.icon)}</span>
                                            </div>
                                            <h4 className="text-xl font-bold text-slate-900">{resource.title[language]}</h4>
                                        </div>
                                        <p className="text-slate-600 mb-4 flex-grow">{resource.description[language]}</p>
                                        <div className="mt-auto">
                                            <a href={resource.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-base bg-slate-100 text-slate-700 font-semibold py-2 px-4 rounded-lg hover:bg-slate-200 hover:text-slate-900 transition-colors">
                                                {translations.accessResource[language]} <LinkIcon />
                                            </a>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </Section>
                </AnimateOnScroll>

                {/* Media & Interventions Section */}
                <AnimateOnScroll className="lg:col-span-3">
                    <Section title={translations.mediaAndInterventions[language]}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {mediaInterventions.map((item, index) => (
                                <AnimateOnScroll key={item.id} delay={index * 100}>
                                    <div className="bg-white rounded-lg overflow-hidden flex flex-col h-full shadow-md">
                                        <div className="relative">
                                            <img src={item.imageUrl} alt={item.title[language]} className="w-full h-48 object-cover" />
                                            <div className="absolute top-2 right-2 rtl:right-auto rtl:left-2 bg-black/50 text-white rounded-full p-2">
                                                {item.type === 'podcast' && <PodcastIcon />}
                                                {item.type === 'video' && <VideoIcon />}
                                                {item.type === 'article' && <ArticleIcon />}
                                            </div>
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow text-left rtl:text-right">
                                            <p className="text-sm text-slate-500 mb-1">{item.media[language]} - {item.date[language]}</p>
                                            <h4 className="text-xl font-bold text-slate-900 mb-4 flex-grow">{item.title[language]}</h4>
                                            <div className="mt-auto">
                                                <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-base text-teal-600 font-semibold hover:text-teal-800 transition-colors">
                                                    {translations.viewMedia[language]} <span aria-hidden="true">&rarr;</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </Section>
                </AnimateOnScroll>

                {/* Testimonials */}
                <AnimateOnScroll className="lg:col-span-3">
                    <Section title={translations.testimonials[language]}>
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {testimonials.slice(0, 3).map((testimonial, index) => (
                                <AnimateOnScroll key={index} delay={index * 100}>
                                    <TestimonialCard 
                                        testimonial={testimonial} 
                                        onImageClick={() => onOpenImageModal({src: testimonial.imageUrl, alt: testimonial.author[language]})}
                                    />
                                </AnimateOnScroll>
                            ))}
                        </div>
                    </Section>
                </AnimateOnScroll>

                 {/* Newsletter */}
                <AnimateOnScroll className="lg:col-span-3">
                    <Section title={translations.newsletterTitle[language]}>
                        <Newsletter />
                    </Section>
                </AnimateOnScroll>
            </div>
        </>
    );
};