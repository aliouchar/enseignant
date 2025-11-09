import React from 'react';
import type { NewsItem, Publication, CV, Course, Supervision, ResearchProject, Testimonial, MultilingualString, GalleryImage, ResourceItem, MediaItem, UserAccount, SiteConfig, ContactMessage, NewsletterSubscriber, Task } from './types';

// Helper for creating dummy file content and encoding it for download
const createDummyFileUrl = (title: string, content: string) => {
    const fileContent = `
        --- DUMMY DOCUMENT ---

        TITLE: ${title}

        CONTENT:
        ${content}

        --- END OF DOCUMENT ---
    `;
    try {
        const base64Content = btoa(fileContent);
        return `data:text/plain;base64,${base64Content}`;
    } catch (e) {
        return `data:text/plain,${encodeURIComponent(fileContent)}`;
    }
};

// User Accounts for Admin Panel
export const userAccounts: UserAccount[] = [
    { email: 'admin@portfolio.com', password: 'admin', role: 'admin' },
    { email: 'user@portfolio.com', password: 'user', role: 'user' },
];

// Site Configuration
export const initialSiteConfig: SiteConfig = {
    headerTitle: { fr: "E. Dubois | Portfolio IA", en: "E. Dubois | AI Portfolio", ar: "إ. دوبوا | ملف الذكاء الاصطناعي" },
    authorName: { fr: "Dr. Élise Dubois", en: "Dr. Élise Dubois", ar: "الدكتورة إليز دوبوا" },
    heroSubtitle: { fr: "Maître de conférences en IA | Université de la Sorbonne", en: "Lecturer in AI | Sorbonne University", ar: "محاضرة في الذكاء الاصطناعي | جامعة السوربون" },
    profilePicUrl: "https://images.unsplash.com/photo-1581093458791-9a6680c1bf10?q=80&w=400&auto=format&fit=crop",
    contactEmail: "elise.dubois@sorbonne.fr",
    contactPhone: "+33 1 23 45 67 89",
    contactOffice: { fr: "Bâtiment C, Bureau 203", en: "Building C, Office 203", ar: "مبنى C، مكتب 203" },
    socialLinks: {
        linkedin: "https://www.linkedin.com/",
        googleScholar: "https://scholar.google.com/",
        twitter: "https://twitter.com/",
        github: "https://github.com/",
        researchGate: "https://www.researchgate.net/"
    }
};

// Contact Form Messages
export const contactMessages: ContactMessage[] = [];

// Newsletter Subscribers
export const newsletterSubscribers: NewsletterSubscriber[] = [];

// Tasks
export const tasks: Task[] = [];


// SVG Icons
export const DownloadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>;
export const ReadMoreIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C3.732 4.943 9.522 3 10 3s6.268 1.943 9.542 7c-3.274 5.057-9.064 7-9.542 7S3.732 15.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>;
export const AcademicCapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" /></svg>;
export const BriefcaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
export const ProjectIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>;
export const StarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>;
export const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
export const LinkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="inline-block h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>;
export const BackIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>;
export const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
export const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
export const ChatbotIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
export const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
export const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
export const OfficeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
export const LinkedInIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
export const GoogleScholarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M5.242 13.769L0 9.5L12 0l12 9.5l-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a8 8 0 1 0 0 16a8 8 0 0 0 0-16z"/></svg>;
export const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.063c0 2.181 1.557 4.007 3.631 4.425-.67.18-1.37.207-2.063.076.586 1.834 2.279 3.121 4.287 3.155-1.547 1.221-3.498 1.947-5.621 1.947-.364 0-.722-.021-1.075-.063 1.999 1.282 4.378 2.025 6.954 2.025 8.355 0 12.92-6.924 12.92-12.928 0-.197-.004-.393-.012-.587.886-.641 1.657-1.446 2.274-2.363z"/></svg>;
export const GitHubIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>;
export const ResearchGateIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001.001C5.373.001 0 5.374 0 12.002c0 6.627 5.373 12.001 12.001 12.001 6.628 0 12.001-5.374 12.001-12.001C24.002 5.374 18.629.001 12.001.001zM8.28 17.154V9.33H5.617v7.824H8.28zm-1.332-8.91c.88 0 1.594-.68 1.594-1.522 0-.84-.714-1.522-1.594-1.522-.88 0-1.594.682-1.594 1.522 0 .842.714 1.522 1.594 1.522zm10.117 8.91h-2.664v-3.83c0-1.928-1.37-1.844-1.37-1.844s-1.33.084-1.33 1.844v3.83h-2.666V9.33h2.666v1.275c.002.002.625-1.275 2.664-1.275 2.664 0 2.664 3.03 2.664 3.03v4.794h.006z"/></svg>;
export const BookOpenIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
export const PencilIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>;
export const ToolIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0 3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
export const DatasetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4" /></svg>;
export const ResourceListIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>;
export const PodcastIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>;
export const VideoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
export const ArticleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3h9M7 16h6M7 12h6M7 8h6" /></svg>;
export const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>;

// Create a dummy CV file URL
export const cvDownloadUrl = createDummyFileUrl('CV_Elise_Dubois', 'This is a placeholder for the full CV of Dr. Élise Dubois.');


// News Items
export const newsItems: NewsItem[] = [
    {
        id: 1, year: 2024,
        date: { fr: "15 Juil", en: "Jul 15", ar: "15 يوليو" },
        title: { fr: "Publication de notre dernier article sur l'IA éthique", en: "Our latest paper on Ethical AI has been published", ar: "نشر ورقتنا الأخيرة حول الذكاء الاصطناعي الأخلاقي" },
        content: { fr: "Notre recherche sur les cadres pour une IA responsable est maintenant disponible dans le 'Journal of AI Ethics'.", en: "Our research on frameworks for responsible AI is now available in the 'Journal of AI Ethics'.", ar: "بحثنا حول أطر الذكاء الاصطناعي المسؤول متاح الآن في 'مجلة أخلاقيات الذكاء الاصطناعي'." },
        imageUrl: 'https://images.unsplash.com/photo-1678097337328-5f045c61b9ea?q=80&w=400&auto=format&fit=crop',
        link: { type: 'publication', id: 1 }
    },
    {
        id: 2, year: 2024,
        date: { fr: "20 Juin", en: "Jun 20", ar: "20 يونيو" },
        title: { fr: "Prix du meilleur article à la conférence AISTATS 2024", en: "Best Paper Award at AISTATS 2024 Conference", ar: "جائزة أفضل ورقة بحثية في مؤتمر AISTATS 2024" },
        content: { fr: "Notre article sur l'apprentissage fédéré a été récompensé pour sa contribution innovante.", en: "Our paper on federated learning has been awarded for its innovative contribution.", ar: "تم تكريم ورقتنا البحثية حول التعلم الفيدرالي لمساهمتها المبتكرة." },
        imageUrl: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=400&auto=format&fit=crop',
        link: { type: 'publication', id: 5 }
    },
    {
        id: 3, year: 2024,
        date: { fr: "02 Juin", en: "Jun 02", ar: "02 يونيو" },
        title: { fr: "Lancement du projet 'AI for Good'", en: "'AI for Good' project launched", ar: "إطلاق مشروع 'الذكاء الاصطناعي من أجل الخير'" },
        content: { fr: "Nous avons démarré un nouveau projet passionnant visant à utiliser l'IA pour résoudre des problèmes sociétaux.", en: "We have started an exciting new project aimed at using AI to solve societal challenges.", ar: "لقد بدأنا مشروعًا جديدًا ومثيرًا يهدف إلى استخدام الذكاء الاصطناعي لحل التحديات المجتمعية." },
        imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=400&auto=format&fit=crop',
        link: { type: 'research', id: 101 }
    },
    {
        id: 4, year: 2024,
        date: { fr: "05 Mai", en: "May 05", ar: "05 مايو" },
        title: { fr: "Soutenance de thèse de Chloé Lefèvre", en: "Thesis Defense of Chloé Lefèvre", ar: "مناقشة أطروحة كلوي لوفيفر" },
        content: { fr: "Félicitations à mon étudiante Chloé Lefèvre qui a brillamment soutenu sa thèse sur l'IA explicable.", en: "Congratulations to my student Chloé Lefèvre who successfully defended her thesis on Explainable AI.", ar: "تهانينا لطالبتي كلوي لوفيفر التي نجحت في الدفاع عن أطروحتها حول الذكاء الاصطناعي القابل للتفسير." },
        imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&auto=format&fit=crop',
    },
     {
        id: 5, year: 2023,
        date: { fr: "10 Déc", en: "Dec 10", ar: "10 ديسمبر" },
        title: { fr: "Conférence principale à NeurIPS 2023", en: "Keynote at NeurIPS 2023", ar: "كلمة رئيسية في مؤتمر NeurIPS 2023" },
        content: { fr: "Présentation de nos travaux sur l'apprentissage par renforcement à la conférence NeurIPS 2023.", en: "Presented our work on reinforcement learning at the NeurIPS 2023 conference.", ar: "قدمنا عملنا حول التعلم المعزز في مؤتمر NeurIPS 2023." },
        imageUrl: 'https://images.unsplash.com/photo-1543269664-7e949942a45a?q=80&w=400&auto=format&fit=crop',
    },
    {
        id: 6, year: 2023,
        date: { fr: "1er Sep", en: "Sep 1", ar: "1 سبتمبر" },
        title: { fr: "Nouveau cours sur l'Apprentissage Profond Avancé", en: "New course on Advanced Deep Learning", ar: "دورة جديدة حول التعلم العميق المتقدم" },
        content: { fr: "Un nouveau cours de niveau Master 2 est désormais disponible, couvrant les dernières architectures de réseaux de neurones.", en: "A new Master's level course is now available, covering the latest neural network architectures.", ar: "دورة جديدة على مستوى الماجستير متاحة الآن، تغطي أحدث معماريات الشبكات العصبية." },
        imageUrl: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=400&auto=format&fit=crop',
    }
];

export const publications: Publication[] = [
    {
        id: 1, year: 2024,
        type: { fr: "Article de journal", en: "Journal Article", ar: "مقال صحفي" },
        title: { fr: "Cadres pour une IA Responsable", en: "Frameworks for Responsible AI", ar: "أطر للذكاء الاصطناعي المسؤول" },
        authors: ["Dr. Élise Dubois", "Dr. Jean Dupont"],
        journal: { fr: "Journal of AI Ethics", en: "Journal of AI Ethics", ar: "مجلة أخلاقيات الذكاء الاصطناعي" },
        abstract: { fr: "Cet article propose un nouveau cadre pour développer des systèmes d'IA éthiques et responsables...", en: "This paper proposes a new framework for developing ethical and responsible AI systems...", ar: "تقترح هذه الورقة إطارًا جديدًا لتطوير أنظمة ذكاء اصطناعي أخلاقية ومسؤولة..." },
        content: { fr: "Contenu détaillé de l'article sur les cadres pour une IA responsable.", en: "Detailed content of the paper on frameworks for responsible AI.", ar: "محتوى مفصل للورقة حول أطر الذكاء الاصطناعي المسؤول." },
        downloadUrl: createDummyFileUrl('Responsible_AI_Frameworks', 'Full content of the publication on responsible AI frameworks.'),
        researchProjectId: 101,
    },
    {
        id: 5, year: 2024,
        type: { fr: "Article de conférence", en: "Conference Paper", ar: "ورقة مؤتمر" },
        title: { fr: "Apprentissage Fédéré Efficace", en: "Efficient Federated Learning", ar: "التعلم الفيدرالي الفعال" },
        authors: ["Dr. Élise Dubois", "Chloé Lefèvre"],
        journal: { fr: "AISTATS 2024", en: "AISTATS 2024", ar: "AISTATS 2024" },
        abstract: { fr: "Nous présentons une nouvelle méthode pour optimiser l'apprentissage fédéré...", en: "We present a new method for optimizing federated learning...", ar: "نقدم طريقة جديدة لتحسين التعلم الفيدرالي..." },
        content: { fr: "Contenu détaillé de l'article sur l'apprentissage fédéré.", en: "Detailed content of the paper on federated learning.", ar: "محتوى مفصل للورقة حول التعلم الفيدرالي." },
        downloadUrl: createDummyFileUrl('Federated_Learning', 'Full content of the publication on federated learning.'),
    }
];

export const cv: CV = {
    education: [
        { id: 1, degree: { fr: "Doctorat en Intelligence Artificielle", en: "PhD in Artificial Intelligence", ar: "دكتوراه في الذكاء الاصطناعي" }, institution: { fr: "Sorbonne Université", en: "Sorbonne University", ar: "جامعة السوربون" }, year: 2018 },
        { id: 2, degree: { fr: "Master en Informatique", en: "Master in Computer Science", ar: "ماجستير في علوم الحاسوب" }, institution: { fr: "ENS Paris", en: "ENS Paris", ar: "المدرسة العليا للأساتذة بباريس" }, year: 2015 },
    ],
    experience: [
        { id: 1, role: { fr: "Maître de conférences", en: "Lecturer", ar: "محاضر" }, institution: { fr: "Sorbonne Université", en: "Sorbonne University", ar: "جامعة السوربون" }, period: { fr: "2020 - Présent", en: "2020 - Present", ar: "2020 - حتى الآن" } },
        { id: 2, role: { fr: "Chercheur postdoctoral", en: "Postdoctoral Researcher", ar: "باحث ما بعد الدكتوراه" }, institution: { fr: "MIT", en: "MIT", ar: "معهد ماساتشوستس للتكنولوجيا" }, period: { fr: "2018 - 2020", en: "2018 - 2020", ar: "2018 - 2020" } },
    ],
    projects: [
        { id: 1, text: { fr: "Projet 'AI for Good'", en: "'AI for Good' Project", ar: "مشروع 'الذكاء الاصطناعي من أجل الخير'" }, researchProjectId: 101 },
        { id: 2, text: { fr: "Interprétabilité des Modèles d'Apprentissage Profond", en: "Interpretability of Deep Learning Models", ar: "قابلية تفسير نماذج التعلم العميق" }, researchProjectId: 102 },
    ],
    awards: [
        { id: 1, text: { fr: "Prix du meilleur article, AISTATS 2024", en: "Best Paper Award, AISTATS 2024", ar: "جائزة أفضل ورقة بحثية، AISTATS 2024" } },
        { id: 2, text: { fr: "Bourse d'excellence doctorale", en: "Doctoral Excellence Scholarship", ar: "منحة الدكتوراه للتميز" } },
    ],
    skills: [
        { id: 1, text: { fr: "Python, PyTorch, TensorFlow", en: "Python, PyTorch, TensorFlow", ar: "بايثون، باي تورش، تينسرفلو" } },
        { id: 2, text: { fr: "Apprentissage par renforcement, NLP, Vision par ordinateur", en: "Reinforcement Learning, NLP, Computer Vision", ar: "التعلم المعزز، معالجة اللغات الطبيعية، رؤية الحاسوب" } },
    ],
};

export const courses: Course[] = [
    {
        id: 1, year: 2024,
        title: { fr: "Introduction à l'Intelligence Artificielle", en: "Introduction to Artificial Intelligence", ar: "مقدمة في الذكاء الاصطناعي" },
        level: { fr: "Licence 3", en: "Undergraduate (Year 3)", ar: "بكالوريوس سنة ثالثة" },
        description: { fr: "Ce cours couvre les concepts fondamentaux de l'IA.", en: "This course covers the fundamental concepts of AI.", ar: "يغطي هذا المقرر المفاهيم الأساسية للذكاء الاصطناعي." },
        syllabus: [{ fr: "Agents intelligents", en: "Intelligent Agents", ar: "الوكلاء الأذكياء" }],
        objectives: [{ fr: "Comprendre les bases de l'IA", en: "Understand the basics of AI", ar: "فهم أساسيات الذكاء الاصطناعي" }],
        downloadUrl: createDummyFileUrl('Intro_AI_Syllabus', 'Full syllabus for the Introduction to AI course.'),
    },
    {
        id: 2, year: 2023,
        title: { fr: "Apprentissage Profond Avancé", en: "Advanced Deep Learning", ar: "التعلم العميق المتقدم" },
        level: { fr: "Master 2", en: "Graduate (Master Year 2)", ar: "ماجستير سنة ثانية" },
        description: { fr: "Un cours sur les dernières architectures de réseaux de neurones.", en: "A course on the latest neural network architectures.", ar: "دورة حول أحدث معماريات الشبكات العصبية." },
        syllabus: [{ fr: "Transformers", en: "Transformers", ar: "المحولات" }, { fr: "GANs", en: "GANs", ar: "شبكات الخصومة التوليدية" }],
        objectives: [{ fr: "Maîtriser les architectures modernes", en: "Master modern architectures", ar: "إتقان المعماريات الحديثة" }],
        downloadUrl: createDummyFileUrl('Advanced_DL_Syllabus', 'Full syllabus for the Advanced Deep Learning course.'),
    }
];

export const supervisions: Supervision[] = [
    { 
        id: 1, 
        level: { fr: "Thèse", en: "PhD Thesis", ar: "أطروحة دكتوراه" }, 
        studentName: { fr: "Chloé Lefèvre", en: "Chloé Lefèvre", ar: "كلوي لوفيفر" },
        topic: { fr: "IA Explicable pour le Diagnostic Médical", en: "Explainable AI for Medical Diagnosis", ar: "الذكاء الاصطناعي القابل للتفسير للتشخيص الطبي" }, 
        description: { fr: "Cette thèse se concentre sur le développement de nouvelles méthodes pour rendre les modèles d'apprentissage profond utilisés dans l'imagerie médicale plus transparents et interprétables par les cliniciens.", en: "This thesis focuses on developing new methods to make deep learning models used in medical imaging more transparent and interpretable for clinicians.", ar: "تركز هذه الأطروحة على تطوير أساليب جديدة لجعل نماذج التعلم العميق المستخدمة في التصوير الطبي أكثر شفافية وقابلية للتفسير من قبل الأطباء." },
        year: 2024 
    },
    { 
        id: 2, 
        level: { fr: "Master", en: "Master's Thesis", ar: "رسالة ماجستير" }, 
        studentName: { fr: "Lucas Moreau", en: "Lucas Moreau", ar: "لوكاس مورو" },
        topic: { fr: "Détection d'Anomalies dans les Séries Temporelles Financières", en: "Anomaly Detection in Financial Time Series", ar: "كشف الشذوذ في السلاسل الزمنية المالية" }, 
        description: { fr: "Le projet explore l'utilisation de modèles basés sur les Transformers pour la détection en temps réel d'anomalies sur les marchés financiers, en lien avec le projet sur l'interprétabilité des modèles.", en: "The project explores the use of Transformer-based models for real-time anomaly detection in financial markets, linked to the project on model interpretability.", ar: "يستكشف المشروع استخدام النماذج القائمة على المحولات للكشف عن الحالات الشاذة في الأسواق المالية في الوقت الفعلي، ويرتبط بمشروع قابلية تفسير النماذج." },
        year: 2023, 
        researchProjectId: 102 
    },
];

export const researchProjects: ResearchProject[] = [
    {
        id: 101, year: 2024,
        title: { fr: "Projet 'AI for Good'", en: "'AI for Good' Project", ar: "مشروع 'الذكاء الاصطناعي من أجل الخير'" },
        summary: { fr: "Utiliser l'IA pour résoudre des problèmes sociétaux.", en: "Using AI to solve societal challenges.", ar: "استخدام الذكاء الاصطناعي لحل التحديات المجتمعية." },
        fullDescription: { fr: "Description complète du projet 'AI for Good'.", en: "Full description of the 'AI for Good' project.", ar: "الوصف الكامل لمشروع 'الذكاء الاصطناعي من أجل الخير'." },
        outcomes: [{ fr: "Publication dans le Journal of AI Ethics", en: "Publication in the Journal of AI Ethics", ar: "نشر في مجلة أخلاقيات الذكاء الاصطناعي" }],
        downloadUrl: createDummyFileUrl('AI_for_Good', 'Full details of the AI for Good project.'),
    },
    {
        id: 102, year: 2023,
        title: { fr: "Interprétabilité des Modèles", en: "Model Interpretability", ar: "قابلية تفسير النماذج" },
        summary: { fr: "Développer des méthodes pour rendre les modèles d'IA plus transparents.", en: "Developing methods to make AI models more transparent.", ar: "تطوير أساليب لجعل نماذج الذكاء الاصطناعي أكثر شفافية." },
        fullDescription: { fr: "Description complète du projet sur l'interprétabilité.", en: "Full description of the interpretability project.", ar: "الوصف الكامل لمشروع قابلية التفسير." },
        outcomes: [{ fr: "Nouvel algorithme LIME", en: "New LIME algorithm", ar: "خوارزمية LIME جديدة" }],
    }
];

export const testimonials: Testimonial[] = [
    { id: 1, quote: { fr: "Une enseignante passionnée qui rend les concepts complexes faciles à comprendre.", en: "A passionate teacher who makes complex concepts easy to understand.", ar: "معلمة شغوفة تجعل المفاهيم المعقدة سهلة الفهم." }, author: { fr: "Alexandre Martin, Ancien étudiant", en: "Alexandre Martin, Former Student", ar: "ألكسندر مارتن، طالب سابق" }, imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" },
    { id: 2, quote: { fr: "Sa direction de recherche a été déterminante pour ma carrière.", en: "Her research supervision was instrumental to my career.", ar: "كان إشرافها البحثي حاسماً في مسيرتي المهنية." }, author: { fr: "Dr. Chloé Lefèvre, Collaboratrice", en: "Dr. Chloé Lefèvre, Collaborator", ar: "الدكتورة كلوي لوفيفر، متعاونة" }, imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
];

export const researchDomains: MultilingualString[] = [
    { fr: "IA éthique et responsable", en: "Ethical and Responsible AI", ar: "الذكاء الاصطناعي الأخلاقي والمسؤول" },
    { fr: "Apprentissage par renforcement", en: "Reinforcement Learning", ar: "التعلم المعزز" },
    { fr: "Traitement du langage naturel", en: "Natural Language Processing", ar: "معالجة اللغات الطبيعية" },
    { fr: "Vision par ordinateur", en: "Computer Vision", ar: "رؤية الحاسوب" },
];

export const galleryImages: GalleryImage[] = [
    { id: 1, src: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?q=80&w=400&auto=format&fit=crop', alt: { fr: "Session de brainstorming en laboratoire", en: "Lab brainstorming session", ar: "جلسة عصف ذهني في المختبر" }, category: 'lab' },
    { id: 2, src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=400&auto=format&fit=crop', alt: { fr: "Présentation à une conférence", en: "Presenting at a conference", ar: "عرض في مؤتمر" }, category: 'conference' },
    { id: 3, src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop', alt: { fr: "Cours en amphithéâtre", en: "Lecture in an amphitheater", ar: "محاضرة في المدرج" }, category: 'teaching' },
    { id: 4, src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop', alt: { fr: "Analyse de données de recherche", en: "Analyzing research data", ar: "تحليل بيانات البحث" }, category: 'research' },
];

export const resources: ResourceItem[] = [
    { id: 1, title: { fr: "Boîte à outils d'IA Éthique", en: "Ethical AI Toolkit", ar: "مجموعة أدوات الذكاء الاصطناعي الأخلاقي" }, description: { fr: "Une collection d'outils pour l'audit et l'évaluation de l'équité des modèles.", en: "A collection of tools for auditing and evaluating model fairness.", ar: "مجموعة من الأدوات لمراجعة وتقييم عدالة النماذج." }, url: '#', icon: 'tool' },
    { id: 2, title: { fr: "Jeu de données sur le sentiment", en: "Sentiment Analysis Dataset", ar: "مجموعة بيانات تحليل المشاعر" }, description: { fr: "Un grand jeu de données pour l'analyse des sentiments dans les médias sociaux.", en: "A large-scale dataset for sentiment analysis in social media.", ar: "مجموعة بيانات واسعة النطاق لتحليل المشاعر في وسائل التواصل الاجتماعي." }, url: '#', icon: 'dataset' },
    { id: 3, title: { fr: "Liste de lecture sur l'IA", en: "AI Reading List", ar: "قائمة قراءة الذكاء الاصطناعي" }, description: { fr: "Une liste organisée d'articles et de livres essentiels sur l'IA.", en: "A curated list of essential papers and books on AI.", ar: "قائمة منسقة بالأوراق والكتب الأساسية حول الذكاء الاصطناعي." }, url: '#', icon: 'list' },
];

export const mediaInterventions: MediaItem[] = [
    { id: 1, title: { fr: "L'avenir de l'IA est-il éthique ?", en: "Is the future of AI ethical?", ar: "هل مستقبل الذكاء الاصطناعي أخلاقي؟" }, media: { fr: "France Culture", en: "France Culture", ar: "فرانس كولتور" }, date: { fr: "10 Mai 2024", en: "May 10, 2024", ar: "10 مايو 2024" }, url: '#', imageUrl: 'https://images.unsplash.com/photo-1590602847991-f97431de3a35?q=80&w=400&auto=format&fit=crop', type: 'podcast' },
    { id: 2, title: { fr: "Démystifier l'apprentissage profond", en: "Demystifying Deep Learning", ar: "إزالة الغموض عن التعلم العميق" }, media: { fr: "Le Monde", en: "Le Monde", ar: "لوموند" }, date: { fr: "22 Avr 2024", en: "Apr 22, 2024", ar: "22 أبريل 2024" }, url: '#', imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=400&auto=format&fit=crop', type: 'article' },
    { id: 3, title: { fr: "Table ronde sur l'IA et la société", en: "Panel on AI and Society", ar: "حلقة نقاش حول الذكاء الاصطناعي والمجتمع" }, media: { fr: "Conférence AISTATS", en: "AISTATS Conference", ar: "مؤتمر AISTATS" }, date: { fr: "01 Fév 2024", en: "Feb 01, 2024", ar: "01 فبراير 2024" }, url: '#', imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=400&auto=format&fit=crop', type: 'video' },
];