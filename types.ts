export type Language = 'fr' | 'en' | 'ar';

export interface MultilingualString {
    fr: string;
    en: string;
    ar: string;
}

export type NewsLink = { type: 'publication'; id: number } | { type: 'research'; id: number };

export interface NewsItem {
    year: number;
    date: MultilingualString;
    title: MultilingualString;
    content: MultilingualString;
    imageUrl: string;
    link?: NewsLink;
}

export interface Publication {
    id: number;
    year: number;
    type: MultilingualString;
    title: MultilingualString;
    authors: string[];
    journal: MultilingualString;
    abstract: MultilingualString;
    content: MultilingualString;
    downloadUrl?: string;
    researchProjectId?: number;
}

export interface CVContent {
    degree: MultilingualString;
    institution: MultilingualString;
    year: number;
}

export interface ExperienceContent {
    role: MultilingualString;
    institution: MultilingualString;
    period: MultilingualString;
}

export interface CVProject {
    text: MultilingualString;
    researchProjectId?: number;
}
export interface CV {
    education: CVContent[];
    experience: ExperienceContent[];
    projects: CVProject[];
    awards: MultilingualString[];
    skills: MultilingualString[];
}

export interface Course {
    id: number;
    title: MultilingualString;
    level: MultilingualString;
    description: MultilingualString;
    year: number;
    syllabus: MultilingualString[];
    objectives: MultilingualString[];
    downloadUrl?: string;
}

export interface Supervision {
    level: MultilingualString;
    topic: MultilingualString;
    year: number;
    researchProjectId?: number;
}

export interface ResearchProject {
    id: number;
    title: MultilingualString;
    summary: MultilingualString;
    fullDescription: MultilingualString;
    outcomes: MultilingualString[];
    year: number;
    downloadUrl?: string;
}

export interface Testimonial {
    quote: MultilingualString;
    author: MultilingualString;
    imageUrl: string;
}

export type GalleryCategory = 'research' | 'conference' | 'teaching' | 'lab';

export interface GalleryImage {
    src: string;
    alt: MultilingualString;
    category: GalleryCategory;
}

export interface ResourceItem {
    id: number;
    title: MultilingualString;
    description: MultilingualString;
    url: string;
    icon: 'tool' | 'dataset' | 'list';
}

export interface MediaItem {
    id: number;
    title: MultilingualString;
    media: MultilingualString;
    date: MultilingualString;
    url: string;
    imageUrl: string;
    type: 'article' | 'video' | 'podcast';
}

export type Page = 'Accueil' | 'Actualités' | 'CV' | 'Recherches' | 'Enseignements' | 'Publications' | 'Contact' | 'Encadrements' | 'Admin';

export type DetailView = 
    | { type: 'publication'; id: number }
    | { type: 'research'; id: number }
    | { type: 'course'; id: number };

export interface SubNavLink {
    name: MultilingualString;
    page: Page;
}

export interface NavLink {
    name: MultilingualString;
    page?: Page;
    subLinks?: SubNavLink[];
}

export interface RawNavLink {
    name: MultilingualString;
    page?: Page;
    subLinks?: { name: MultilingualString; page: Page }[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

// Fix: Add missing Task type.
export interface Task {
    id: number;
    text: MultilingualString;
    researchProjectId?: number;
}