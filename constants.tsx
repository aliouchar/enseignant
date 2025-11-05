import React from 'react';
import type { NewsItem, Publication, CV, Course, Supervision, ResearchProject, Testimonial, MultilingualString, GalleryImage, ResourceItem, MediaItem } from './types';

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
export const ToolIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
export const DatasetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4" /></svg>;
export const ResourceListIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>;
export const PodcastIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>;
export const VideoIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
export const ArticleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3h9M7 16h6M7 12h6M7 8h6" /></svg>;
export const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>;

// Header Info
export const headerInfo: { name: MultilingualString } = {
    name: {
        fr: "Dr. Élise Dubois",
        en: "Dr. Élise Dubois",
        ar: "الدكتورة إليز دوبوا"
    }
};

export const profilePicUrl = "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=300&auto=format&fit=crop";

// Create a dummy CV file URL
export const cvDownloadUrl = createDummyFileUrl('CV_Elise_Dubois', 'This is a placeholder for the full CV of Dr. Élise Dubois.');


// News Items
export const newsItems: NewsItem[] = [
    {
        year: 2024,
        date: { fr: "15 Juil", en: "Jul 15", ar: "15 يوليو" },
        title: { fr: "Publication de notre dernier article sur l'IA éthique", en: "Our latest paper on Ethical AI has been published", ar: "نشر ورقتنا الأخيرة حول الذكاء الاصطناعي الأخلاقي" },
        content: { fr: "Notre recherche sur les cadres pour une IA responsable est maintenant disponible dans le 'Journal of AI Ethics'.", en: "Our research on frameworks for responsible AI is now available in the 'Journal of AI Ethics'.", ar: "بحثنا حول أطر الذكاء الاصطناعي المسؤول متاح الآن في 'مجلة أخلاقيات الذكاء الاصطناعي'." },
        imageUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=400&auto=format&fit=crop',
        link: { type: 'publication', id: 1 }
    },
    {
        year: 2024,
        date: { fr: "20 Juin", en: "Jun 20", ar: "20 يونيو" },
        title: { fr: "Prix du meilleur article à la conférence AISTATS 2024", en: "Best Paper Award at AISTATS 2024 Conference", ar: "جائزة أفضل ورقة بحثية في مؤتمر AISTATS 2024" },
        content: { fr: "Notre article sur l'apprentissage fédéré a été récompensé pour sa contribution innovante.", en: "Our paper on federated learning has been awarded for its innovative contribution.", ar: "تم تكريم ورقتنا البحثية حول التعلم الفيدرالي لمساهمتها المبتكرة." },
        imageUrl: 'https://images.unsplash.com/photo-1587825140708-df876c1d384e?q=80&w=400&auto=format&fit=crop',
        link: { type: 'publication', id: 5 }
    },
    {
        year: 2024,
        date: { fr: "02 Juin", en: "Jun 02", ar: "02 يونيو" },
        title: { fr: "Lancement du projet 'AI for Good'", en: "'AI for Good' project launched", ar: "إطلاق مشروع 'الذكاء الاصطناعي من أجل الخير'" },
        content: { fr: "Nous avons démarré un nouveau projet passionnant visant à utiliser l'IA pour résoudre des problèmes sociétaux.", en: "We have started an exciting new project aimed at using AI to solve societal challenges.", ar: "لقد بدأنا مشروعًا جديدًا ومثيرًا يهدف إلى استخدام الذكاء الاصطناعي لحل التحديات المجتمعية." },
        imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=400&auto=format&fit=crop',
        link: { type: 'research', id: 101 }
    },
    {
        year: 2024,
        date: { fr: "05 Mai", en: "May 05", ar: "05 مايو" },
        title: { fr: "Soutenance de thèse de Chloé Lefèvre", en: "Thesis Defense of Chloé Lefèvre", ar: "مناقشة أطروحة كلوي لوفيفر" },
        content: { fr: "Félicitations à mon étudiante Chloé Lefèvre qui a brillamment soutenu sa thèse sur l'IA explicable.", en: "Congratulations to my student Chloé Lefèvre who successfully defended her thesis on Explainable AI.", ar: "تهانينا لطالبتي كلوي لوفيفر التي نجحت في الدفاع عن أطروحتها حول الذكاء الاصطناعي القابل للتفسير." },
        imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=400&auto=format&fit=crop',
    },
     {
        year: 2023,
        date: { fr: "10 Déc", en: "Dec 10", ar: "10 ديسمبر" },
        title: { fr: "Conférence principale à NeurIPS 2023", en: "Keynote at NeurIPS 2023", ar: "كلمة رئيسية في مؤتمر NeurIPS 2023" },
        content: { fr: "Présentation de nos travaux sur l'apprentissage par renforcement à la conférence NeurIPS 2023.", en: "Presented our work on reinforcement learning at the NeurIPS 2023 conference.", ar: "قدمنا عملنا حول التعلم المعزز في مؤتمر NeurIPS 2023." },
        imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400&auto=format&fit=crop',
    },
    {
        year: 2023,
        date: { fr: "1er Sep", en: "Sep 1", ar: "1 سبتمبر" },
        title: { fr: "Nouveau cours sur l'Apprentissage Profond Avancé", en: "New course on Advanced Deep Learning", ar: "دورة جديدة حول التعلم العميق المتقدم" },
        content: { fr: "Un nouveau cours de niveau Master 2 est désormais disponible, couvrant les dernières architectures et techniques en apprentissage profond.", en: "A new Master's level course is now available, covering the latest architectures and techniques in deep learning.", ar: "دورة جديدة على مستوى الماجستير متاحة الآن، وتغطي أحدث البنى والتقنيات في التعلم العميق." },
        imageUrl: 'https://images.unsplash.com/photo-1591115765321-04530094a979?q=80&w=400&auto=format&fit=crop',
    },
];

// Publications
export const publications: Publication[] = [
    {
        id: 1, year: 2024,
        type: { fr: "Article de Journal", en: "Journal Article", ar: "مقال في مجلة" },
        title: { fr: "Un Cadre pour l'IA Éthique et Responsable", en: "A Framework for Ethical and Responsible AI", ar: "إطار عمل للذكاء الاصطناعي الأخلاقي والمسؤول" },
        authors: ["E. Dubois", "J. Martin"],
        journal: { fr: "Journal of AI Ethics", en: "Journal of AI Ethics", ar: "مجلة أخلاقيات الذكاء الاصطناعي" },
        abstract: { fr: "Cet article propose un cadre complet pour le développement et le déploiement de systèmes d'IA éthiques. Nous abordons les questions de transparence, d'équité, de responsabilité et de confidentialité, en proposant des lignes directrices pratiques pour les chercheurs et les praticiens.", en: "This paper proposes a comprehensive framework for the development and deployment of ethical AI systems. We address issues of transparency, fairness, accountability, and privacy, offering practical guidelines for researchers and practitioners.", ar: "تقترح هذه الورقة إطارًا شاملاً لتطوير ونشر أنظمة الذكاء الاصطناعي الأخلاقية. نتناول قضايا الشفافية والإنصاف والمساءلة والخصوصية، ونقدم إرشادات عملية للباحثين والممارسين." },
        content: { fr: "Le contenu détaillé explore l'implémentation du cadre, y compris des études de cas dans les domaines de la santé et de la finance, et analyse les défis réglementaires et sociétaux.", en: "The detailed content explores the implementation of the framework, including case studies in healthcare and finance, and analyzes regulatory and societal challenges.", ar: "يستكشف المحتوى التفصيلي تنفيذ الإطار، بما في ذلك دراسات الحالة في الرعاية الصحية والتمويل، ويحلل التحديات التنظيمية والمجتمعية." },
        downloadUrl: createDummyFileUrl("Ethical_AI_Framework", "This is the content of the ethical AI framework paper."),
        researchProjectId: 101,
    },
    {
        id: 2, year: 2023,
        type: { fr: "Acte de Conférence", en: "Conference Paper", ar: "ورقة مؤتمر" },
        title: { fr: "Apprentissage par Renforcement Profond pour les Systèmes Complexes", en: "Deep Reinforcement Learning for Complex Systems", ar: "التعلم المعزز العميق للأنظمة المعقدة" },
        authors: ["E. Dubois", "A. Li", "S. Chen"],
        journal: { fr: "Proceedings of NeurIPS 2023", en: "Proceedings of NeurIPS 2023", ar: "وقائع مؤتمر NeurIPS 2023" },
        abstract: { fr: "Nous présentons un nouvel algorithme d'apprentissage par renforcement qui surpasse les méthodes existantes dans des environnements simulés complexes, démontrant une meilleure efficacité d'échantillonnage et une plus grande stabilité.", en: "We present a novel reinforcement learning algorithm that outperforms existing methods in complex simulated environments, demonstrating improved sample efficiency and stability.", ar: "نقدم خوارزمية تعلم معزز جديدة تتفوق على الطرق الحالية في بيئات محاكاة معقدة، وتظهر كفاءة عينة واستقرارًا محسنًا." },
        content: { fr: "L'article détaille l'architecture du modèle, les expériences menées sur plusieurs benchmarks, et une analyse approfondie des résultats obtenus.", en: "The paper details the model architecture, experiments conducted on multiple benchmarks, and a thorough analysis of the results.", ar: "تفصل الورقة بنية النموذج، والتجارب التي أجريت على معايير متعددة، وتحليلًا شاملاً للنتائج." },
        downloadUrl: createDummyFileUrl("Deep_RL_Paper", "This is the content of the Deep Reinforcement Learning paper."),
        researchProjectId: 102,
    },
    {
        id: 3, year: 2023,
        type: { fr: "Article d'Atelier", en: "Workshop Paper", ar: "ورقة ورشة عمل" },
        title: { fr: "Interprétabilité des Modèles de Traitement du Langage", en: "Interpretability of Language Models", ar: "قابلية تفسير نماذج اللغة" },
        authors: ["E. Dubois", "M. Garcia"],
        journal: { fr: "NeurIPS 2023 Workshop on Explainable AI", en: "NeurIPS 2023 Workshop on Explainable AI", ar: "ورشة عمل NeurIPS 2023 حول الذكاء الاصطناعي القابل للتفسير" },
        abstract: { fr: "Cette étude explore diverses techniques pour visualiser et comprendre les mécanismes d'attention dans les grands modèles de langage.", en: "This study explores various techniques for visualizing and understanding attention mechanisms in large language models.", ar: "تستكشف هذه الدراسة تقنيات مختلفة لتصور وفهم آليات الانتباه في نماذج اللغة الكبيرة." },
        content: { fr: "Nous appliquons des méthodes telles que LIME et SHAP aux transformeurs et discutons des implications pour la confiance et le débogage des modèles.", en: "We apply methods such as LIME and SHAP to transformers and discuss the implications for model trust and debugging.", ar: "نطبق طرقًا مثل LIME و SHAP على المحولات ونناقش الآثار المترتبة على ثقة النموذج وتصحيح الأخطاء." },
    },
    {
        id: 4, year: 2022,
        type: { fr: "Article de Journal", en: "Journal Article", ar: "مقال في مجلة" },
        title: { fr: "Génération d'Images de Haute Fidélité avec des Modèles de Diffusion", en: "High-Fidelity Image Generation with Diffusion Models", ar: "توليد صور عالية الدقة باستخدام نماذج الانتشار" },
        authors: ["E. Dubois", "L. Kim", "P. Schmidt"],
        journal: { fr: "Transactions on Pattern Analysis and Machine Intelligence (TPAMI)", en: "Transactions on Pattern Analysis and Machine Intelligence (TPAMI)", ar: "معاملات تحليل الأنماط والذكاء الآلي (TPAMI)" },
        abstract: { fr: "Nous proposons une nouvelle architecture de modèle de diffusion qui atteint des performances de pointe dans la génération d'images photoréalistes.", en: "We propose a novel diffusion model architecture that achieves state-of-the-art performance in photorealistic image generation.", ar: "نقترح بنية نموذج انتشار جديدة تحقق أداءً متطورًا في توليد الصور الواقعية." },
        content: { fr: "Le contenu couvre la formulation mathématique, les détails de l'implémentation, et des comparaisons qualitatives et quantitatives avec les GANs et les VAEs.", en: "The content covers the mathematical formulation, implementation details, and both qualitative and quantitative comparisons with GANs and VAEs.", ar: "يغطي المحتوى الصيغة الرياضية وتفاصيل التنفيذ ومقارنات نوعية وكمية مع شبكات GANs و VAEs." },
        researchProjectId: 102,
    },
     {
        id: 5, year: 2024,
        type: { fr: "Acte de Conférence", en: "Conference Paper", ar: "ورقة مؤتمر" },
        title: { fr: "Apprentissage Fédéré Robuste contre les Attaques par Empoisonnement", en: "Robust Federated Learning against Poisoning Attacks", ar: "التعلم الفيدرالي القوي ضد هجمات التسميم" },
        authors: ["E. Dubois", "T. Nguyen", "C. Lefèvre"],
        journal: { fr: "Proceedings of AISTATS 2024", en: "Proceedings of AISTATS 2024", ar: "وقائع مؤتمر AISTATS 2024" },
        abstract: { fr: "Cet article présente un mécanisme de défense pour l'apprentissage fédéré qui maintient la performance du modèle même en présence de clients malveillants.", en: "This paper introduces a defense mechanism for federated learning that maintains model performance even in the presence of malicious clients.", ar: "تقدم هذه الورقة آلية دفاع للتعلم الفيدرالي تحافظ على أداء النموذج حتى في وجود عملاء ضارين." },
        content: { fr: "Nous validons notre approche théoriquement et empiriquement sur plusieurs jeux de données, montrant sa supériorité par rapport aux méthodes de pointe existantes.", en: "We validate our approach theoretically and empirically on several datasets, showing its superiority over existing state-of-the-art methods.", ar: "نتحقق من صحة نهجنا نظريًا وتجريبيًا على مجموعات بيانات متعددة، مما يظهر تفوقه على الطرق الحالية المتطورة." },
        downloadUrl: createDummyFileUrl("Robust_Federated_Learning", "This is the content of the Robust Federated Learning paper."),
        researchProjectId: 103,
    }
];

// Research Projects
export const researchProjects: ResearchProject[] = [
    {
        id: 101, year: 2024,
        title: { fr: "IA pour le Bien Social", en: "AI for Social Good", ar: "الذكاء الاصطناعي من أجل الخير الاجتماعي" },
        summary: { fr: "Ce projet vise à appliquer des techniques d'IA de pointe pour résoudre des problèmes urgents dans les domaines de la santé, de l'environnement et de l'éducation.", en: "This project aims to apply cutting-edge AI techniques to solve pressing issues in healthcare, environment, and education.", ar: "يهدف هذا المشروع إلى تطبيق تقنيات الذكاء الاصطناعي المتطورة لحل القضايا الملحة في مجالات الرعاية الصحية والبيئة والتعليم." },
        fullDescription: { fr: "Nous collaborons avec des ONG et des institutions publiques pour développer des modèles prédictifs pour la propagation des maladies, des systèmes pour optimiser la distribution des ressources et des outils d'apprentissage personnalisés. L'accent est mis sur la création de solutions éthiques, équitables et facilement déployables.", en: "We collaborate with NGOs and public institutions to develop predictive models for disease spread, systems to optimize resource allocation, and personalized learning tools. The focus is on creating ethical, fair, and easily deployable solutions.", ar: "نتعاون مع المنظمات غير الحكومية والمؤسسات العامة لتطوير نماذج تنبؤية لانتشار الأمراض، وأنظمة لتحسين تخصيص الموارد، وأدوات تعليمية مخصصة. يتم التركيز على إيجاد حلول أخلاقية وعادلة وسهلة النشر." },
        outcomes: [
            { fr: "Développement d'un modèle prédictif pour la santé publique.", en: "Developed a predictive model for public health.", ar: "تطوير نموذج تنبؤي للصحة العامة." },
            { fr: "Publication dans le Journal of AI Ethics.", en: "Publication in the Journal of AI Ethics.", ar: "نشر في مجلة أخلاقيات الذكاء الاصطناعي." },
            { fr: "Partenariat établi avec l'Organisation Mondiale de la Santé.", en: "Established partnership with the World Health Organization.", ar: "إقامة شراكة مع منظمة الصحة العالمية." }
        ],
        downloadUrl: createDummyFileUrl("AI_For_Good_Project", "This is the project description for AI for Social Good."),
    },
    {
        id: 102, year: 2022,
        title: { fr: "Modèles Génératifs Avancés", en: "Advanced Generative Models", ar: "النماذج التوليدية المتقدمة" },
        summary: { fr: "Recherche sur les nouvelles architectures pour la génération d'images, de textes et de données structurées, en se concentrant sur la qualité, la diversité et le contrôle.", en: "Research on novel architectures for generating images, text, and structured data, focusing on quality, diversity, and control.", ar: "بحث حول معماريات جديدة لتوليد الصور والنصوص والبيانات المهيكلة، مع التركيز على الجودة والتنوع والتحكم." },
        fullDescription: { fr: "Ce projet explore les fondements théoriques des modèles de diffusion, des transformeurs et des réseaux antagonistes génératifs (GANs). Nous cherchons à améliorer leur stabilité lors de l'entraînement, à réduire leurs biais et à permettre un contrôle plus fin sur les sorties générées, ouvrant la voie à de nouvelles applications créatives et scientifiques.", en: "This project explores the theoretical foundations of diffusion models, transformers, and generative adversarial networks (GANs). We aim to improve their training stability, reduce biases, and enable finer control over the generated outputs, paving the way for new creative and scientific applications.", ar: "يستكشف هذا المشروع الأسس النظرية لنماذج الانتشار والمحولات والشبكات التوليدية التنافسية (GANs). نهدف إلى تحسين استقرار تدريبها وتقليل التحيزات وتمكين تحكم أدق في المخرجات المولدة، مما يمهد الطريق لتطبيقات إبداعية وعلمية جديدة." },
        outcomes: [
             { fr: "Création d'une nouvelle architecture de modèle de diffusion (TPAMI 2022).", en: "Created a new diffusion model architecture (TPAMI 2022).", ar: "إنشاء بنية نموذج انتشار جديدة (TPAMI 2022)." },
             { fr: "Développement d'une bibliothèque open-source pour l'évaluation des modèles génératifs.", en: "Developed an open-source library for generative model evaluation.", ar: "تطوير مكتبة مفتوحة المصدر لتقييم النماذج التوليدية." }
        ],
    },
     {
        id: 103, year: 2023,
        title: { fr: "Apprentissage Fédéré et Confidentialité", en: "Federated Learning and Privacy", ar: "التعلم الفيدرالي والخصوصية" },
        summary: { fr: "Développer des algorithmes d'apprentissage fédéré qui préservent la confidentialité des données tout en garantissant la robustesse et l'efficacité des modèles.", en: "Developing federated learning algorithms that preserve data privacy while ensuring model robustness and efficiency.", ar: "تطوير خوارزميات التعلم الفيدرالي التي تحافظ على خصوصية البيانات مع ضمان قوة وكفاءة النماذج." },
        fullDescription: { fr: "Ce projet s'attaque au défi de l'entraînement de modèles d'IA sur des données décentralisées sans compromettre la vie privée des utilisateurs. Nous explorons des techniques de cryptographie, de confidentialité différentielle et des mécanismes de défense contre les attaques adverses dans le cadre de l'apprentissage fédéré.", en: "This project addresses the challenge of training AI models on decentralized data without compromising user privacy. We explore cryptographic techniques, differential privacy, and defense mechanisms against adversarial attacks within the federated learning framework.", ar: "يعالج هذا المشروع تحدي تدريب نماذج الذكاء الاصطناعي على بيانات لا مركزية دون المساس بخصوصية المستخدم. نستكشف تقنيات التشفير والخصوصية التفاضلية وآليات الدفاع ضد الهجمات العدائية في إطار التعلم الفيدرالي." },
        outcomes: [
             { fr: "Proposition d'un nouvel algorithme d'agrégation sécurisé.", en: "Proposed a new secure aggregation algorithm.", ar: "اقتراح خوارزمية تجميع آمنة جديدة." },
             { fr: "Publication primée à AISTATS 2024.", en: "Award-winning publication at AISTATS 2024.", ar: "نشر حائز على جائزة في AISTATS 2024." }
        ],
        downloadUrl: createDummyFileUrl("Federated_Learning_Privacy", "Project description for Federated Learning and Privacy."),
    }
];

// CV Data
export const cv: CV = {
    education: [
        { degree: { fr: "Doctorat en Intelligence Artificielle", en: "PhD in Artificial Intelligence", ar: "دكتوراه في الذكاء الاصطناعي" }, institution: { fr: "Université de la Sorbonne", en: "Sorbonne University", ar: "جامعة السوربون" }, year: 2018 },
        { degree: { fr: "Master en Informatique", en: "M.Sc. in Computer Science", ar: "ماجستير في علوم الحاسب" }, institution: { fr: "ENS Paris", en: "ENS Paris", ar: "المدرسة العليا للأساتذة بباريس" }, year: 2015 },
        { degree: { fr: "Licence en Mathématiques et Informatique", en: "B.Sc. in Mathematics and Computer Science", ar: "بكالوريوس في الرياضيات وعلوم الحاسب" }, institution: { fr: "Université Pierre et Marie Curie", en: "Pierre and Marie Curie University", ar: "جامعة بيير وماري كوري" }, year: 2013 },
    ],
    experience: [
        { role: { fr: "Maître de conférences", en: "Lecturer", ar: "محاضر" }, institution: { fr: "Université de la Sorbonne", en: "Sorbonne University", ar: "جامعة السوربون" }, period: { fr: "2018 - Présent", en: "2018 - Present", ar: "2018 - حتى الآن" } },
        { role: { fr: "Chercheur invité", en: "Visiting Researcher", ar: "باحث زائر" }, institution: { fr: "MIT CSAIL", en: "MIT CSAIL", ar: "معهد ماساتشوستس للتكنولوجيا CSAIL" }, period: { fr: "2022 (6 mois)", en: "2022 (6 months)", ar: "2022 (6 أشهر)" } },
        { role: { fr: "Stagiaire de recherche", en: "Research Intern", ar: "متدرب باحث" }, institution: { fr: "Google AI, Paris", en: "Google AI, Paris", ar: "Google AI، باريس" }, period: { fr: "Été 2017", en: "Summer 2017", ar: "صيف 2017" } },
    ],
    projects: [
        { text: { fr: "IA pour le Bien Social", en: "AI for Social Good", ar: "الذكاء الاصطناعي من أجل الخير الاجتماعي" }, researchProjectId: 101 },
        { text: { fr: "Modèles Génératifs Avancés", en: "Advanced Generative Models", ar: "النماذج التوليدية المتقدمة" }, researchProjectId: 102 },
        { text: { fr: "Apprentissage Fédéré et Confidentialité", en: "Federated Learning and Privacy", ar: "التعلم الفيدرالي والخصوصية" }, researchProjectId: 103 },
    ],
    awards: [
        { fr: "Prix du Meilleur Article, AISTATS 2024", en: "Best Paper Award, AISTATS 2024", ar: "جائزة أفضل ورقة بحثية، AISTATS 2024" },
        { fr: "Bourse d'Excellence Doctorale 'L'Oréal-UNESCO Pour les Femmes et la Science'", en: "'L'Oréal-UNESCO For Women in Science' Doctoral Fellowship", ar: "زمالة الدكتوراه 'لوريال-يونسكو للمرأة في العلوم'" },
        { fr: "Meilleur Article Étudiant, Conférence ICML 2018", en: "Best Student Paper, ICML Conference 2018", ar: "جائزة أفضل ورقة طالب، مؤتمر ICML 2018" },
    ],
    skills: [
        { fr: "Apprentissage Profond (TensorFlow, PyTorch, JAX)", en: "Deep Learning (TensorFlow, PyTorch, JAX)", ar: "التعلم العميق (TensorFlow, PyTorch, JAX)" },
        { fr: "Traitement du Langage Naturel (NLP)", en: "Natural Language Processing (NLP)", ar: "معالجة اللغات الطبيعية (NLP)" },
        { fr: "Apprentissage Fédéré", en: "Federated Learning", ar: "التعلم الفيدرالي" },
        { fr: "IA Explicable (XAI)", en: "Explainable AI (XAI)", ar: "الذكاء الاصطناعي القابل للتفسير (XAI)" },
        { fr: "Python, C++, Java", en: "Python, C++, Java", ar: "Python, C++, Java" },
    ]
};

// Courses Data
export const courses: Course[] = [
    {
        id: 201, year: 2024,
        title: { fr: "Introduction à l'Apprentissage Automatique", en: "Introduction to Machine Learning", ar: "مقدمة في تعلم الآلة" },
        level: { fr: "Master 1", en: "Master 1st Year", ar: "ماجستير سنة أولى" },
        description: { fr: "Un cours fondamental sur les concepts, techniques et algorithmes clés de l'apprentissage automatique.", en: "A foundational course on the key concepts, techniques, and algorithms of machine learning.", ar: "مقرر أساسي حول المفاهيم والتقنيات والخوارزميات الرئيسية لتعلم الآلة." },
        objectives: [
            {fr: "Comprendre les différences entre apprentissage supervisé, non supervisé et par renforcement.", en: "Understand the differences between supervised, unsupervised, and reinforcement learning.", ar: "فهم الفروق بين التعلم الخاضع للإشراف وغير الخاضع للإشراف والتعلم المعزز."},
            {fr: "Implémenter des algorithmes classiques comme la régression, les SVM et les arbres de décision.", en: "Implement classic algorithms like regression, SVMs, and decision trees.", ar: "تنفيذ الخوارزميات الكلاسيكية مثل الانحدار وآلات المتجهات الداعمة وأشجار القرار."},
            {fr: "Évaluer et comparer les performances des modèles.", en: "Evaluate and compare model performance.", ar: "تقييم ومقارنة أداء النماذج."},
        ],
        syllabus: [
            {fr: "Semaine 1-2: Régression Linéaire et Logistique", en: "Week 1-2: Linear and Logistic Regression", ar: "الأسبوع 1-2: الانحدار الخطي واللوجستي"},
            {fr: "Semaine 3: Machines à Vecteurs de Support (SVM)", en: "Week 3: Support Vector Machines (SVM)", ar: "الأسبوع 3: آلات المتجهات الداعمة (SVM)"},
            {fr: "Semaine 4: Arbres de Décision et Forêts Aléatoires", en: "Week 4: Decision Trees and Random Forests", ar: "الأسبوع 4: أشجار القرار والغابات العشوائية"},
            {fr: "Semaine 5: Clustering (K-Means, DBSCAN)", en: "Week 5: Clustering (K-Means, DBSCAN)", ar: "الأسبوع 5: التجميع (K-Means, DBSCAN)"},
        ],
        downloadUrl: createDummyFileUrl("Intro_ML_Syllabus", "Syllabus for Introduction to Machine Learning."),
    },
    {
        id: 202, year: 2023,
        title: { fr: "Apprentissage Profond Avancé", en: "Advanced Deep Learning", ar: "التعلم العميق المتقدم" },
        level: { fr: "Master 2", en: "Master 2nd Year", ar: "ماجستير سنة ثانية" },
        description: { fr: "Ce cours explore les architectures de réseaux de neurones de pointe et leurs applications.", en: "This course explores state-of-the-art neural network architectures and their applications.", ar: "يستكشف هذا المقرر معماريات الشبكات العصبية المتطورة وتطبيقاتها." },
        objectives: [
            {fr: "Maîtriser les architectures de type Transformer.", en: "Master Transformer architectures.", ar: "إتقان معماريات المحولات."},
            {fr: "Comprendre et implémenter des modèles génératifs (GANs, VAEs, Diffusion).", en: "Understand and implement generative models (GANs, VAEs, Diffusion).", ar: "فهم وتنفيذ النماذج التوليدية (GANs, VAEs, Diffusion)."},
            {fr: "Explorer l'apprentissage auto-supervisé.", en: "Explore self-supervised learning.", ar: "استكشاف التعلم ذاتي الإشراف."},
        ],
        syllabus: [
            {fr: "Module 1: Transformers et Mécanismes d'Attention", en: "Module 1: Transformers and Attention Mechanisms", ar: "الوحدة 1: المحولات وآليات الانتباه"},
            {fr: "Module 2: Modèles Génératifs", en: "Module 2: Generative Models", ar: "الوحدة 2: النماذج التوليدية"},
            {fr: "Module 3: Apprentissage par Graphes Neuronaux", en: "Module 3: Graph Neural Networks", ar: "الوحدة 3: شبكات الرسوم البيانية العصبية"},
        ],
        downloadUrl: createDummyFileUrl("Advanced_DL_Syllabus", "Syllabus for Advanced Deep Learning."),
    },
     {
        id: 203, year: 2024,
        title: { fr: "Python pour la Science des Données", en: "Python for Data Science", ar: "بايثون لعلوم البيانات" },
        level: { fr: "Licence 3", en: "Bachelor 3rd Year", ar: "بكالوريوس سنة ثالثة" },
        description: { fr: "Un cours pratique axé sur la maîtrise de l'écosystème Python pour l'analyse et la visualisation de données.", en: "A practical course focused on mastering the Python ecosystem for data analysis and visualization.", ar: "دورة عملية تركز على إتقان نظام بايثون البيئي لتحليل البيانات وتصورها." },
        objectives: [
            {fr: "Manipuler des données avec Pandas et NumPy.", en: "Manipulate data with Pandas and NumPy.", ar: "التعامل مع البيانات باستخدام Pandas و NumPy."},
            {fr: "Créer des visualisations avec Matplotlib et Seaborn.", en: "Create visualizations with Matplotlib and Seaborn.", ar: "إنشاء تصورات باستخدام Matplotlib و Seaborn."},
            {fr: "Introduction à Scikit-learn pour le machine learning.", en: "Introduction to Scikit-learn for machine learning.", ar: "مقدمة إلى Scikit-learn لتعلم الآلة."},
        ],
        syllabus: [
            {fr: "Partie 1: Fondamentaux de Python et NumPy", en: "Part 1: Python and NumPy Fundamentals", ar: "الجزء 1: أساسيات بايثON و NumPy"},
            {fr: "Partie 2: Analyse de Données avec Pandas", en: "Part 2: Data Analysis with Pandas", ar: "الجزء 2: تحليل البيانات باستخدام Pandas"},
            {fr: "Partie 3: Visualisation de Données", en: "Part 3: Data Visualization", ar: "الجزء 3: تصور البيانات"},
        ],
    },
];

// Supervisions Data
export const supervisions: Supervision[] = [
    {
        year: 2023,
        level: { fr: "Thèse de Doctorat", en: "PhD Thesis", ar: "أطروحة دكتوراه" },
        topic: { fr: "IA Explicable pour le Diagnostic Médical", en: "Explainable AI for Medical Diagnosis", ar: "الذكاء الاصطناعي القابل للتفسير للتشخيص الطبي" },
        researchProjectId: 101,
    },
    {
        year: 2024,
        level: { fr: "Thèse de Doctorat", en: "PhD Thesis", ar: "أطروحة دكتوراه" },
        topic: { fr: "Défenses Certifiées contre les Attaques par Empoisonnement en Apprentissage Fédéré", en: "Certified Defenses Against Poisoning Attacks in Federated Learning", ar: "دفاعات معتمدة ضد هجمات التسميم في التعلم الفيدرالي" },
        researchProjectId: 103,
    },
    {
        year: 2022,
        level: { fr: "Thèse de Master", en: "Master Thesis", ar: "رسالة ماجستير" },
        topic: { fr: "Génération de Musique Symbolique avec des Transformers", en: "Symbolic Music Generation with Transformers", ar: "توليد الموسيقى الرمزية باستخدام المحولات" },
        researchProjectId: 102,
    },
];

// Research Domains
export const researchDomains: MultilingualString[] = [
    { fr: "IA de Confiance", en: "Trustworthy AI", ar: "الذكاء الاصطناعي الجدير بالثقة" },
    { fr: "Apprentissage par Renforcement", en: "Reinforcement Learning", ar: "التعلم المعزز" },
    { fr: "Traitement du Langage Naturel", en: "Natural Language Processing", ar: "معالجة اللغات الطبيعية" },
    { fr: "Vision par Ordinateur", en: "Computer Vision", ar: "رؤية الحاسوب" },
    { fr: "Modèles Génératifs", en: "Generative Models", ar: "النماذج التوليدية" },
    { fr: "Apprentissage Fédéré", en: "Federated Learning", ar: "التعلم الفيدرالي" },
];

// Testimonials
export const testimonials: Testimonial[] = [
    {
        quote: { fr: "Élise est une chercheuse brillante et une excellente collaboratrice. Son travail sur l'IA éthique est novateur.", en: "Élise is a brilliant researcher and an excellent collaborator. Her work on ethical AI is groundbreaking.", ar: "إليز باحثة لامعة ومتعاونة ممتازة. عملها في مجال الذكاء الاصطناعي الأخلاقي رائد." },
        author: { fr: "Prof. Jean Martin, Collaborateur Académique", en: "Prof. Jean Martin, Academic Collaborator", ar: "البروفيسور جان مارتن، متعاون أكاديمي" },
        imageUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    },
    {
        quote: { fr: "La collaboration avec Dr. Dubois sur notre projet d'IA a été extrêmement fructueuse. Sa capacité à traduire des concepts de recherche complexes en solutions industrielles pratiques est remarquable.", en: "Collaborating with Dr. Dubois on our AI project has been extremely fruitful. Her ability to translate complex research concepts into practical industry solutions is remarkable.", ar: "كان التعاون مع الدكتورة دوبوا في مشروعنا للذكاء الاصطناعي مثمرًا للغاية. قدرتها على ترجمة مفاهيم البحث المعقدة إلى حلول صناعية عملية أمر رائع." },
        author: { fr: "Dr. David Chen, Chef de la R&D, Innovatech", en: "Dr. David Chen, Head of R&D, Innovatech", ar: "الدكتور ديفيد تشين، رئيس البحث والتطوير، Innovatech" },
        imageUrl: "https://i.pravatar.cc/150?u=a042581f4e29026707e"
    },
    {
        quote: { fr: "Le cours du Dr. Dubois sur l'apprentissage profond a été le plus enrichissant de mon master. Elle a une vraie passion pour l'enseignement.", en: "Dr. Dubois's course on deep learning was the most enriching of my master's. She has a real passion for teaching.", ar: "كان مقرر الدكتورة دوبوا حول التعلم العميق الأكثر إثراءً في درجة الماجستير. لديها شغف حقيقي بالتدريس." },
        author: { fr: "Alexandre Dupont, Ancien Étudiant, maintenant Ingénieur IA chez Google", en: "Alexandre Dupont, Former Student, now AI Engineer at Google", ar: "ألكسندر دوبون، طالب سابق، الآن مهندس ذكاء اصطناعي في جوجل" },
        imageUrl: "https://i.pravatar.cc/150?u=a042581f4e29026705d"
    },
    {
        quote: { fr: "Son encadrement a été déterminant pour ma thèse. Elle est toujours disponible, pleine de bons conseils et elle m'a poussé à atteindre l'excellence.", en: "Her supervision was crucial for my thesis. She is always available, full of good advice, and pushed me to achieve excellence.", ar: "كان إشرافها حاسماً لأطروحتي. هي دائما متاحة، مليئة بالنصائح الجيدة، ودفعتني لتحقيق التميز." },
        author: { fr: "Chloé Lefèvre, Doctorante", en: "Chloé Lefèvre, PhD Student", ar: "كلوي لوفيفر، طالبة دكتوراه" },
        imageUrl: "https://i.pravatar.cc/150?u=a042581f4e29026706d"
    },
];

// Gallery Images
export const galleryImages: GalleryImage[] = [
    { src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400', alt: {fr: 'Session de brainstorming en laboratoire', en: 'Lab brainstorming session', ar: 'جلسة عصف ذهني في المختبر'}, category: 'lab' },
    { src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400', alt: {fr: 'Présentation à la conférence NeurIPS', en: 'Presenting at the NeurIPS conference', ar: 'تقديم في مؤتمر NeurIPS'}, category: 'conference' },
    { src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400', alt: {fr: "Atelier d'enseignement sur l'IA", en: 'Teaching an AI workshop', ar: 'تدريس ورشة عمل حول الذكاء الاصطناعي'}, category: 'teaching' },
    { src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400', alt: {fr: 'Discussion de recherche avec des doctorants', en: 'Research discussion with PhD students', ar: 'مناقشة بحثية مع طلاب الدكتوراه'}, category: 'research' },
    { src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400', alt: { fr: "Événement de réseautage de l'industrie", en: 'Industry networking event', ar: 'حدث تواصل صناعي' }, category: 'conference' },
    { src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400', alt: {fr: 'Session de codage en groupe', en: 'Group coding session', ar: 'جلسة برمجة جماعية'}, category: 'lab' },
    { src: 'https://picsum.photos/id/1027/400/400', alt: {fr: 'Notre cluster de calcul', en: 'Our compute cluster', ar: 'مجموعة الحوسبة لدينا'}, category: 'lab' },
    { src: 'https://picsum.photos/id/10/400/400', alt: {fr: "Session de posters à ICML", en: "Poster session at ICML", ar: "جلسة ملصقات في ICML"}, category: 'conference' },
    { src: 'https://images.unsplash.com/photo-1531482615713-2c6577eda07c?w=400', alt: { fr: 'Cours magistral en amphithéâtre', en: 'Lecture in an amphitheater', ar: 'محاضرة في مدرج' }, category: 'teaching' },
];

// Resources
export const resources: ResourceItem[] = [
    {
        id: 301,
        title: { fr: "Bibliothèque GenAI", en: "GenAI Library", ar: "مكتبة GenAI" },
        description: { fr: "Une bibliothèque open-source pour l'évaluation des modèles génératifs.", en: "An open-source library for evaluating generative models.", ar: "مكتبة مفتوحة المصدر لتقييم النماذج التوليدية." },
        url: "#",
        icon: 'tool'
    },
    {
        id: 302,
        title: { fr: "Jeu de données sur l'IA Éthique", en: "Ethical AI Dataset", ar: "مجموعة بيانات الذكاء الاصطناعي الأخلاقي" },
        description: { fr: "Un ensemble de données complet pour la recherche sur l'équité et les biais dans l'IA.", en: "A comprehensive dataset for research on fairness and bias in AI.", ar: "مجموعة بيانات شاملة للبحث في الإنصاف والتحيز في الذكاء الاصطناعي." },
        url: "#",
        icon: 'dataset'
    },
    {
        id: 303,
        title: { fr: "Awesome XAI Papers", en: "Awesome XAI Papers", ar: "أوراق XAI الرائعة" },
        description: { fr: "Une liste organisée d'articles de recherche sur l'IA Explicable.", en: "A curated list of research papers on Explainable AI.", ar: "قائمة منسقة بأوراق البحث حول الذكاء الاصطناعي القابل للتفسير." },
        url: "#",
        icon: 'list'
    },
    {
        id: 304,
        title: { fr: "Mon Dépôt GitHub", en: "My GitHub Repository", ar: "مستودع GitHub الخاص بي" },
        description: { fr: "Code source de mes projets de recherche et bibliothèques.", en: "Source code for my research projects and libraries.", ar: "الكود المصدري لمشاريعي البحثية ومكتباتي." },
        url: "#",
        icon: 'tool'
    },
    {
        id: 305,
        title: { fr: "Hugging Face Datasets", en: "Hugging Face Datasets", ar: "مجموعات بيانات Hugging Face" },
        description: { fr: "Une collection de datasets que j'utilise et que je recommande pour la recherche en NLP.", en: "A collection of datasets I use and recommend for NLP research.", ar: "مجموعة من مجموعات البيانات التي أستخدمها وأوصي بها لأبحاث معالجة اللغات الطبيعية." },
        url: "#",
        icon: 'dataset'
    },
    {
        id: 306,
        title: { fr: "Documentation PyTorch", en: "PyTorch Documentation", ar: "وثائق PyTorch" },
        description: { fr: "Un lien essentiel vers la documentation officielle de PyTorch, mon framework de prédilection.", en: "An essential link to the official PyTorch documentation, my framework of choice.", ar: "رابط أساسي إلى وثائق PyTorch الرسمية، إطار العمل المفضل لدي." },
        url: "#",
        icon: 'list'
    }
];

// Media Interventions
export const mediaInterventions: MediaItem[] = [
    {
        id: 401,
        title: { fr: "L'avenir de l'IA Responsable", en: "The Future of Responsible AI", ar: "مستقبل الذكاء الاصطناعي المسؤول" },
        media: { fr: "AI Forward Podcast", en: "AI Forward Podcast", ar: "بودكاست AI Forward" },
        date: { fr: "Mai 2024", en: "May 2024", ar: "مايو 2024" },
        url: "#",
        imageUrl: 'https://images.unsplash.com/photo-1590602848952-e543b9549acc?q=80&w=400&auto=format&fit=crop',
        type: 'podcast'
    },
    {
        id: 402,
        title: { fr: "Keynote à la Conférence Devoxx", en: "Keynote at Devoxx Conference", ar: "كلمة رئيسية في مؤتمر Devoxx" },
        media: { fr: "YouTube", en: "YouTube", ar: "يوتيوب" },
        date: { fr: "Avril 2024", en: "April 2024", ar: "أبريل 2024" },
        url: "#",
        imageUrl: 'https://images.unsplash.com/photo-1556155092-490a194239a4?q=80&w=400&auto=format&fit=crop',
        type: 'video'
    },
    {
        id: 403,
        title: { fr: "Comment l'IA transforme la science", en: "How AI is Transforming Science", ar: "كيف يغير الذكاء الاصطناعي العلوم" },
        media: { fr: "Tech Journal", en: "Tech Journal", ar: "مجلة التكنولوجيا" },
        date: { fr: "Février 2024", en: "February 2024", ar: "فبراير 2024" },
        url: "#",
        imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=400&auto=format&fit=crop',
        type: 'article'
    },
    {
        id: 404,
        title: { fr: "Les biais dans les algorithmes : un défi pour la société", en: "Bias in algorithms: a challenge for society", ar: "التحيز في الخوارزميات: تحد للمجتمع" },
        media: { fr: "Le Monde", en: "Le Monde", ar: "لوموند" },
        date: { fr: "Juin 2024", en: "June 2024", ar: "يونيو 2024" },
        url: "#",
        imageUrl: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=400&auto=format&fit=crop',
        type: 'article'
    },
    {
        id: 405,
        title: { fr: "Table ronde sur l'avenir du travail à l'ère de l'IA", en: "Panel discussion on the future of work in the age of AI", ar: "حلقة نقاش حول مستقبل العمل في عصر الذكاء الاصطناعي" },
        media: { fr: "VivaTech 2024", en: "VivaTech 2024", ar: "فيفا تك 2024" },
        date: { fr: "Mai 2024", en: "May 2024", ar: "مايو 2024" },
        url: "#",
        imageUrl: 'https://images.unsplash.com/photo-1573496773905-f5b17e76b254?q=80&w=400&auto=format&fit=crop',
        type: 'video'
    },
    {
        id: 406,
        title: { fr: "L'impact de l'IA sur la créativité humaine", en: "The Impact of AI on Human Creativity", ar: "تأثير الذكاء الاصطناعي على الإبداع البشري" },
        media: { fr: "Science Pop Podcast", en: "Science Pop Podcast", ar: "بودكاست Science Pop" },
        date: { fr: "Mars 2024", en: "March 2024", ar: "مارس 2024" },
        url: "#",
        imageUrl: 'https://images.unsplash.com/photo-1554215286-9f2de25a3d7e?q=80&w=400&auto=format&fit=crop',
        type: 'podcast'
    }
];