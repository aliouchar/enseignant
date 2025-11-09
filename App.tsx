import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { NewsPage } from './components/pages/NewsPage';
import { CVPage } from './components/pages/CVPage';
import { ResearchPage } from './components/pages/ResearchPage';
import { PublicationsPage } from './components/pages/PublicationsPage';
import { TeachingPage } from './components/pages/TeachingPage';
import { SupervisionsPage } from './components/pages/SupervisionsPage';
import { ContactPage } from './components/pages/ContactPage';
import { AdminPage } from './components/pages/AdminPage';
import { PublicationDetailPage } from './components/pages/details/PublicationDetailPage';
import { ResearchDetailPage } from './components/pages/details/ResearchDetailPage';
import { CourseDetailPage } from './components/pages/details/CourseDetailPage';
import { SupervisionDetailPage } from './components/pages/details/SupervisionDetailPage';
import { ImageModal } from './components/ImageModal';
import { Chatbot } from './components/Chatbot';
import { ScrollToTop } from './components/ScrollToTop';
import * as initialData from './constants';
import type { Page, DetailView, NewsLink, NewsItem, Publication, CV, Course, Supervision, ResearchProject, Testimonial, GalleryImage, ResourceItem, MediaItem, User, SiteConfig, ContactMessage, NewsletterSubscriber, MultilingualString, UserAccount, Task } from './types';
import { TestimonialsPage } from './components/pages/TestimonialsPage';

const usePersistentState = <T,>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [state, setState] = useState<T>(() => {
        try {
            const storedValue = localStorage.getItem(key);
            if (storedValue) {
                return JSON.parse(storedValue);
            }
            // If no stored value, set the default value in localStorage
            localStorage.setItem(key, JSON.stringify(defaultValue));
            return defaultValue;
        } catch (error) {
            console.error(`Error reading localStorage key “${key}”:`, error);
            return defaultValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(state));
        } catch (error) {
            console.error(`Error setting localStorage key “${key}”:`, error);
        }
    }, [key, state]);

    return [state, setState];
};


const App: React.FC = () => {
    const [activePage, setActivePage] = useState<Page>('Accueil');
    const [detailView, setDetailView] = useState<DetailView | null>(null);
    const [selectedImage, setSelectedImage] = useState<{src: string; alt: string} | null>(null);
    const [showScroll, setShowScroll] = useState(false);
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    // Site config state
    const [siteConfigData, setSiteConfigData] = usePersistentState<SiteConfig>('siteConfigData', initialData.initialSiteConfig);

    // Data states
    const [userAccountsData, setUserAccountsData] = usePersistentState<UserAccount[]>('userAccountsData', initialData.userAccounts);
    const [newsData, setNewsData] = usePersistentState<NewsItem[]>('newsData', initialData.newsItems);
    const [publicationsData, setPublicationsData] = usePersistentState<Publication[]>('publicationsData', initialData.publications);
    const [cvData, setCvData] = usePersistentState<CV>('cvData', initialData.cv);
    const [coursesData, setCoursesData] = usePersistentState<Course[]>('coursesData', initialData.courses);
    const [supervisionsData, setSupervisionsData] = usePersistentState<Supervision[]>('supervisionsData', initialData.supervisions);
    const [researchProjectsData, setResearchProjectsData] = usePersistentState<ResearchProject[]>('researchProjectsData', initialData.researchProjects);
    const [testimonialsData, setTestimonialsData] = usePersistentState<Testimonial[]>('testimonialsData', initialData.testimonials);
    const [galleryImagesData, setGalleryImagesData] = usePersistentState<GalleryImage[]>('galleryImagesData', initialData.galleryImages);
    const [resourcesData, setResourcesData] = usePersistentState<ResourceItem[]>('resourcesData', initialData.resources);
    const [mediaInterventionsData, setMediaInterventionsData] = usePersistentState<MediaItem[]>('mediaInterventionsData', initialData.mediaInterventions);
    const [contactMessagesData, setContactMessagesData] = usePersistentState<ContactMessage[]>('contactMessagesData', initialData.contactMessages);
    const [newsletterSubscribersData, setNewsletterSubscribersData] = usePersistentState<NewsletterSubscriber[]>('newsletterSubscribersData', initialData.newsletterSubscribers);
    const [tasksData, setTasksData] = usePersistentState<Task[]>('tasksData', initialData.tasks);


    const arrayDataSetters = {
        newsItems: setNewsData,
        publications: setPublicationsData,
        researchProjects: setResearchProjectsData,
        courses: setCoursesData,
        supervisions: setSupervisionsData,
        testimonials: setTestimonialsData,
        galleryImages: setGalleryImagesData,
        resources: setResourcesData,
        mediaInterventions: setMediaInterventionsData,
        contactMessages: setContactMessagesData,
        newsletterSubscribers: setNewsletterSubscribersData,
        tasks: setTasksData,
    };

    const handleLogin = (email: string, password: string): boolean => {
        const account = userAccountsData.find(u => u.email === email && u.password === password);
        if (account) {
            const { password, ...userToStore } = account;
            setCurrentUser(userToStore);
            return true;
        }
        return false;
    };

    const handleLogout = () => {
        setCurrentUser(null);
    };

    const handleContactSubmit = (name: string, email: string, message: string): void => {
        const newMessage: ContactMessage = {
            id: Date.now(),
            name,
            email,
            message,
            timestamp: new Date().toISOString(),
        };
        setContactMessagesData(prev => [...prev, newMessage]);
    };
    
    const handleNewsletterSubscribe = (email: string): void => {
        const newSubscriber: NewsletterSubscriber = {
            id: Date.now(),
            email,
            timestamp: new Date().toISOString(),
        };
        setNewsletterSubscribersData(prev => [...prev, newSubscriber]);
    };

    const handleAddTask = (taskText: MultilingualString) => {
        const newTask: Task = {
            id: Date.now(),
            text: taskText,
        };
        setTasksData(prev => [...prev, newTask]);
    };

    const handleDeleteTask = (taskId: number) => {
        setTasksData(prev => prev.filter(task => task.id !== taskId));
    };

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showScroll && window.pageYOffset > 400){
                setShowScroll(true);
            } else if (showScroll && window.pageYOffset <= 400){
                setShowScroll(false);
            }
        };
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showScroll]);

    const scrollTop = () => window.scrollTo({top: 0, behavior: 'smooth'});
    
    const openImageModal = (image: {src: string; alt: string}) => {
        let largeSrc = image.src;
        if (largeSrc.includes('unsplash.com')) largeSrc = largeSrc.replace(/(\?|&)w=\d+/g, '');
        else if (largeSrc.includes('pravatar.cc')) largeSrc = largeSrc.replace('/150', '/300');
        else if (largeSrc.includes('picsum.photos')) largeSrc = largeSrc.replace('/id/1027/400/400', '/id/1027/800/800');
        setSelectedImage({ src: largeSrc, alt: image.alt });
    };

    const closeImageModal = () => setSelectedImage(null);
    const handleBackToList = () => setDetailView(null);

    const handlePageChange = (page: Page) => {
        setDetailView(null);
        setActivePage(page);
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    const handleViewDetail = (type: 'publication' | 'research' | 'course' | 'supervision', id: number) => {
        setDetailView({ type, id });
        window.scrollTo({top: 0, behavior: 'smooth'});
    };
    
    const handleViewPublication = (id: number) => handleViewDetail('publication', id);
    const handleViewProject = (id: number) => handleViewDetail('research', id);
    const handleViewCourse = (id: number) => handleViewDetail('course', id);
    const handleViewSupervision = (id: number) => handleViewDetail('supervision', id);

    const handleNewsClick = (link: NewsLink) => {
        if (link.type === 'publication') handleViewPublication(link.id);
        else if (link.type === 'research') handleViewProject(link.id);
    };

    const renderDetailPage = () => {
        if (!detailView) return null;
        switch (detailView.type) {
            case 'publication': {
                const publication = publicationsData.find(p => p.id === detailView.id);
                return publication ? <PublicationDetailPage publication={publication} onBack={handleBackToList} researchProjects={researchProjectsData} onViewProject={handleViewProject} /> : null;
            }
            case 'research': {
                const project = researchProjectsData.find(p => p.id === detailView.id);
                return project ? <ResearchDetailPage project={project} onBack={handleBackToList} publications={publicationsData} onViewPublication={handleViewPublication} /> : null;
            }
            case 'course': {
                const course = coursesData.find(c => c.id === detailView.id);
                return course ? <CourseDetailPage course={course} onBack={handleBackToList} /> : null;
            }
            case 'supervision': {
                const supervision = supervisionsData.find(s => s.id === detailView.id);
                return supervision ? <SupervisionDetailPage supervision={supervision} onBack={handleBackToList} researchProjects={researchProjectsData} onViewProject={handleViewProject} /> : null;
            }
            default: return null;
        }
    };

    const renderListPage = () => {
        const homeProps = { 
            newsItems: newsData, publications: publicationsData, testimonials: testimonialsData, 
            researchProjects: researchProjectsData, courses: coursesData, galleryImages: galleryImagesData, 
            setActivePage: handlePageChange, onNewsClick: handleNewsClick, onViewPublication: handleViewPublication, 
            onOpenImageModal: openImageModal, onViewProject: handleViewProject, onViewCourse: handleViewCourse, 
            siteConfigData: siteConfigData, resources: resourcesData, mediaInterventions: mediaInterventionsData,
            onNewsletterSubscribe: handleNewsletterSubscribe,
        };

        switch (activePage) {
            case 'Accueil': return <HomePage {...homeProps} />;
            case 'Actualités': return <NewsPage newsItems={newsData} onNewsClick={handleNewsClick} />;
            case 'CV': return <CVPage cv={cvData} onViewProject={handleViewProject} />;
            case 'Recherches': return <ResearchPage researchDomains={initialData.researchDomains} researchProjects={researchProjectsData} onViewProject={handleViewProject} />;
            case 'Publications': return <PublicationsPage publications={publicationsData} onViewPublication={handleViewPublication} />;
            case 'Enseignements': return <TeachingPage courses={coursesData} onViewCourse={handleViewCourse} />;
            case 'Encadrements': return <SupervisionsPage supervisions={supervisionsData} onViewSupervision={handleViewSupervision} />;
            case 'Contact': return <ContactPage siteConfigData={siteConfigData} onContactSubmit={handleContactSubmit} />;
            case 'Témoignages': return <TestimonialsPage testimonials={testimonialsData} onBack={() => handlePageChange('Accueil')} onOpenImageModal={openImageModal} />;
            case 'Admin': return <AdminPage 
                                    allArrayData={{ 
                                        newsItems: newsData, publications: publicationsData, researchProjects: researchProjectsData, 
                                        courses: coursesData, supervisions: supervisionsData, testimonials: testimonialsData, 
                                        galleryImages: galleryImagesData, resources: resourcesData, mediaInterventions: mediaInterventionsData,
                                        contactMessages: contactMessagesData,
                                        newsletterSubscribers: newsletterSubscribersData,
                                        tasks: tasksData,
                                    }} 
                                    arrayDataSetters={arrayDataSetters} 
                                    cvData={cvData}
                                    setCvData={setCvData}
                                    currentUser={currentUser}
                                    onLogin={handleLogin}
                                    onLogout={handleLogout}
                                    siteConfigData={siteConfigData}
                                    setSiteConfigData={setSiteConfigData}
                                    userAccountsData={userAccountsData}
                                    setUserAccountsData={setUserAccountsData}
                                    onAddTask={handleAddTask}
                                    onDeleteTask={handleDeleteTask}
                                    onViewProject={handleViewProject}
                                />;
            default: return <HomePage {...homeProps} />;
        }
    };

    return (
        <div className="bg-slate-50 text-slate-700 min-h-screen">
            <Header activePage={activePage} setActivePage={handlePageChange} siteConfigData={siteConfigData} />
            <main className="container mx-auto px-4 md:px-8 py-8 relative z-10">
                {detailView ? renderDetailPage() : renderListPage()}
            </main>
            <Footer setActivePage={handlePageChange} siteConfigData={siteConfigData} />
            <ImageModal isOpen={!!selectedImage} onClose={closeImageModal} imageSrc={selectedImage?.src || ''} imageAlt={selectedImage?.alt || ''} />
            <Chatbot />
            <ScrollToTop show={showScroll} onClick={scrollTop} />
        </div>
    );
};

export default App;