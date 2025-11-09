import React from 'react';
import type { NewsItem, Publication, ResearchProject, Course, Supervision, Testimonial, GalleryImage, ResourceItem, MediaItem, ContactMessage, NewsletterSubscriber, CV } from '../../types';
import type { Language } from '../../contexts/LanguageContext';

type CVItem = CV[keyof CV][0];
export type Item = NewsItem | Publication | ResearchProject | Course | Supervision | Testimonial | GalleryImage | ResourceItem | MediaItem | ContactMessage | NewsletterSubscriber | CVItem;

export interface ColumnConfig<T extends Item> {
    header: string;
    render: (item: T) => React.ReactNode;
}

export const getTabConfig = (language: Language) => ({
    newsItems: {
        columns: [
            { header: 'Image', render: (item: NewsItem) => React.createElement('img', { src: item.imageUrl, alt: "", className: "h-12 w-16 object-cover rounded" }) },
            { header: 'Title', render: (item: NewsItem) => item.title[language] },
            { header: 'Date', render: (item: NewsItem) => item.date[language] },
        ],
    },
    publications: {
        columns: [
            { header: 'Title', render: (item: Publication) => item.title[language] },
            { header: 'Journal', render: (item: Publication) => item.journal[language] },
            { header: 'Year', render: (item: Publication) => item.year },
        ],
    },
    researchProjects: {
         columns: [
            { header: 'Title', render: (item: ResearchProject) => item.title[language] },
            { header: 'Year', render: (item: ResearchProject) => item.year },
        ],
    },
    courses: {
        columns: [
            { header: 'Title', render: (item: Course) => item.title[language] },
            { header: 'Level', render: (item: Course) => item.level[language] },
            { header: 'Year', render: (item: Course) => item.year },
        ],
    },
    supervisions: {
        columns: [
            { header: 'Topic', render: (item: Supervision) => item.topic[language] },
            { header: 'Student', render: (item: Supervision) => item.studentName[language] },
            { header: 'Level', render: (item: Supervision) => item.level[language] },
            { header: 'Year', render: (item: Supervision) => item.year },
        ],
    },
    testimonials: {
        columns: [
            { header: 'Image', render: (item: Testimonial) => React.createElement('img', { src: item.imageUrl, alt: "", className: "h-12 w-12 object-cover rounded-full" }) },
            { header: 'Author', render: (item: Testimonial) => item.author[language] },
            { header: 'Quote', render: (item: Testimonial) => `${item.quote[language].substring(0, 50)}...` },
        ],
    },
    galleryImages: {
         columns: [
            { header: 'Image', render: (item: GalleryImage) => React.createElement('img', { src: item.src, alt: "", className: "h-12 w-16 object-cover rounded" }) },
            { header: 'Alt Text', render: (item: GalleryImage) => item.alt[language] },
            { header: 'Category', render: (item: GalleryImage) => item.category },
        ],
    },
    resources: {
        columns: [
            { header: 'Title', render: (item: ResourceItem) => item.title[language] },
            { header: 'URL', render: (item: ResourceItem) => React.createElement('a', { href: item.url, target: '_blank', rel: 'noopener noreferrer', className: 'text-teal-600 hover:underline' }, 'Link') },
        ],
    },
    mediaInterventions: {
         columns: [
            { header: 'Image', render: (item: MediaItem) => React.createElement('img', { src: item.imageUrl, alt: "", className: "h-12 w-16 object-cover rounded" }) },
            { header: 'Title', render: (item: MediaItem) => item.title[language] },
            { header: 'Media', render: (item: MediaItem) => item.media[language] },
            { header: 'Date', render: (item: MediaItem) => item.date[language] },
        ],
    },
    contactMessages: {
        columns: [
            { header: 'Timestamp', render: (item: ContactMessage) => new Date(item.timestamp).toLocaleString() },
            { header: 'Name', render: (item: ContactMessage) => item.name },
            { header: 'Email', render: (item: ContactMessage) => item.email },
            { header: 'Message', render: (item: ContactMessage) => `${item.message.substring(0, 50)}...` },
        ],
    },
    newsletterSubscribers: {
        columns: [
            { header: 'Subscription Date', render: (item: NewsletterSubscriber) => new Date(item.timestamp).toLocaleString() },
            { header: 'Email', render: (item: NewsletterSubscriber) => item.email },
        ],
    },
    cv_education: {
        columns: [
            { header: 'Degree', render: (item: CV['education'][0]) => item.degree[language] },
            { header: 'Institution', render: (item: CV['education'][0]) => item.institution[language] },
            { header: 'Year', render: (item: CV['education'][0]) => item.year },
        ],
    },
    cv_experience: {
        columns: [
            { header: 'Role', render: (item: CV['experience'][0]) => item.role[language] },
            { header: 'Institution', render: (item: CV['experience'][0]) => item.institution[language] },
            { header: 'Period', render: (item: CV['experience'][0]) => item.period[language] },
        ],
    },
    cv_projects: { columns: [{ header: 'Text', render: (item: CV['projects'][0]) => item.text[language] }] },
    cv_awards: { columns: [{ header: 'Text', render: (item: CV['awards'][0]) => item.text[language] }] },
    cv_skills: { columns: [{ header: 'Text', render: (item: CV['skills'][0]) => item.text[language] }] },
});