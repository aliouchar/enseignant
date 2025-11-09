import React, { useState, useEffect, useMemo } from 'react';
import { Section } from '../Section';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import type { NewsItem, Publication, ResearchProject, Course, Supervision, Testimonial, GalleryImage, ResourceItem, MediaItem, CV, User, SiteConfig, ContactMessage, NewsletterSubscriber, UserAccount, MultilingualString, Task } from '../../types';
import { AdminFormModal } from '../admin/AdminFormModal';
import { ConfirmationModal } from '../ConfirmationModal';
import { UserManagementPage } from '../admin/UserManagementPage';
import { SiteSettings } from '../admin/SiteSettings';
import { AdminSection } from '../admin/AdminSection';
import { getTabConfig } from '../admin/config';
import { TasksPage } from './TasksPage';


type AllArrayData = {
    newsItems: NewsItem[];
    publications: Publication[];
    researchProjects: ResearchProject[];
    courses: Course[];
    supervisions: Supervision[];
    testimonials: Testimonial[];
    galleryImages: GalleryImage[];
    resources: ResourceItem[];
    mediaInterventions: MediaItem[];
    contactMessages: ContactMessage[];
    newsletterSubscribers: NewsletterSubscriber[];
    tasks: Task[];
};

type ArrayDataSetters = {
    newsItems: React.Dispatch<React.SetStateAction<NewsItem[]>>;
    publications: React.Dispatch<React.SetStateAction<Publication[]>>;
    researchProjects: React.Dispatch<React.SetStateAction<ResearchProject[]>>;
    courses: React.Dispatch<React.SetStateAction<Course[]>>;
    supervisions: React.Dispatch<React.SetStateAction<Supervision[]>>;
    testimonials: React.Dispatch<React.SetStateAction<Testimonial[]>>;
    galleryImages: React.Dispatch<React.SetStateAction<GalleryImage[]>>;
    resources: React.Dispatch<React.SetStateAction<ResourceItem[]>>;
    mediaInterventions: React.Dispatch<React.SetStateAction<MediaItem[]>>;
    contactMessages: React.Dispatch<React.SetStateAction<ContactMessage[]>>;
    newsletterSubscribers: React.Dispatch<React.SetStateAction<NewsletterSubscriber[]>>;
    tasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

interface AdminPageProps {
    allArrayData: AllArrayData;
    arrayDataSetters: ArrayDataSetters;
    cvData: CV;
    setCvData: React.Dispatch<React.SetStateAction<CV>>;
    currentUser: User | null;
    onLogin: (email: string, password: string) => boolean;
    onLogout: () => void;
    siteConfigData: SiteConfig;
    setSiteConfigData: React.Dispatch<React.SetStateAction<SiteConfig>>;
    userAccountsData: UserAccount[];
    setUserAccountsData: React.Dispatch<React.SetStateAction<UserAccount[]>>;
    onAddTask: (taskText: MultilingualString) => void;
    onDeleteTask: (taskId: number) => void;
    onViewProject: (id: number) => void;
}

type ArrayDataKey = keyof AllArrayData;
type CVDataKey = keyof CV;
type TabKey = ArrayDataKey | `cv_${CVDataKey}` | 'siteSettings' | 'userManagement' | 'tasks';

const AdminLoginPage: React.FC<{ onLogin: (email: string, password: string) => boolean; }> = ({ onLogin }) => {
    const { language } = useLanguage();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const success = onLogin(email, password);
        if (!success) {
            setError(translations.admin.loginFailed[language]);
        }
    };

    return (
        <Section title={translations.admin.title[language]}>
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-slate-900 text-center">{translations.admin.loginTitle[language]}</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-base font-medium text-slate-700">{translations.email[language]}</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-base text-slate-900"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-base font-medium text-slate-700">{translations.admin.password[language]}</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-base text-slate-900"
                        />
                    </div>
                    {error && <p className="text-red-600 text-sm">{error}</p>}
                    <div>
                        <button
                            type="submit"
                            className="w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                        >
                            {translations.admin.loginButton[language]}
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-center">
                    <a href="https://mail27.lwspanel.com/roundcube/" target="_blank" rel="noopener noreferrer" className="text-sm text-teal-600 hover:underline">
                        {translations.admin.webmailLink[language]}
                    </a>
                </div>
            </div>
        </Section>
    );
};

export const AdminPage: React.FC<AdminPageProps> = ({ 
    allArrayData, arrayDataSetters, cvData, setCvData, 
    currentUser, onLogin, onLogout, 
    siteConfigData, setSiteConfigData,
    userAccountsData, setUserAccountsData,
    onAddTask, onDeleteTask, onViewProject,
}) => {
    const { language } = useLanguage();
    const [activeTab, setActiveTab] = useState<TabKey>('newsItems');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<any | null>(null);
    const [deletingItem, setDeletingItem] = useState<any | null>(null);

    const adminGroups: Record<string, { title: string; tabs: TabKey[]; adminOnly?: boolean; }> = useMemo(() => ({
        mainContent: {
            title: translations.admin.adminGroups.mainContent[language],
            tabs: ['newsItems', 'publications', 'researchProjects', 'mediaInterventions', 'contactMessages']
        },
        teachingActivities: {
            title: translations.admin.adminGroups.teachingActivities[language],
            tabs: ['courses', 'supervisions']
        },
        cvManagement: {
            title: translations.admin.adminGroups.cvManagement[language],
            tabs: ['cv_education', 'cv_experience', 'cv_projects', 'cv_awards', 'cv_skills']
        },
        additionalContent: {
            title: translations.admin.adminGroups.additionalContent[language],
            tabs: ['testimonials', 'galleryImages', 'resources', 'newsletterSubscribers']
        },
        siteManagement: {
            title: translations.admin.adminGroups.siteManagement[language],
            tabs: ['siteSettings', 'userManagement', 'tasks'],
            adminOnly: true,
        },
    }), [language]);

    const tabConfig = useMemo(() => getTabConfig(language), [language]);
    
     useEffect(() => {
        if (currentUser?.role !== 'admin') {
            setActiveTab('newsItems');
        }
    }, [currentUser]);

    const handleAddNew = () => {
        const newItem: { [key: string]: any } = { id: Date.now() }; // Temporary ID
        if (activeTab.startsWith('cv_')) {
             const key = activeTab.replace('cv_', '') as CVDataKey;
             const firstItem = cvData[key][0];
             Object.keys(firstItem).forEach(prop => {
                if(prop !== 'id') newItem[prop] = firstItem[prop] ? '' : undefined;
             });
        } else {
            const key = activeTab as ArrayDataKey;
            const firstItem = allArrayData[key][0];
            if (firstItem) {
                Object.keys(firstItem).forEach(prop => {
                    if (prop !== 'id') {
                        const value = firstItem[prop as keyof typeof firstItem];
                        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                             newItem[prop] = Object.keys(value).reduce((acc, k) => ({...acc, [k]: ''}), {});
                        } else if (Array.isArray(value)) {
                            newItem[prop] = [];
                        } else {
                            newItem[prop] = '';
                        }
                    }
                });
            }
        }
        setEditingItem(newItem);
        setIsModalOpen(true);
    };

    const handleEdit = (item: any) => {
        setEditingItem(item);
        setIsModalOpen(true);
    };

    const handleDelete = (item: any) => {
        setDeletingItem(item);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
        setEditingItem(null);
    };

    const handleSave = (itemToSave: any) => {
        if (activeTab.startsWith('cv_')) {
            const key = activeTab.replace('cv_', '') as CVDataKey;
            setCvData(prev => {
                const list = prev[key] as any[];
                const index = list.findIndex((i: any) => i.id === itemToSave.id);
                const newList = [...list];
                if (index > -1) {
                    newList[index] = itemToSave;
                } else {
                    newList.push(itemToSave);
                }
                return { ...prev, [key]: newList };
            });
        } else if (Object.keys(arrayDataSetters).includes(activeTab)) {
            const key = activeTab as ArrayDataKey;
            const setter = arrayDataSetters[key] as React.Dispatch<React.SetStateAction<any[]>>;
            setter(prev => {
                const index = prev.findIndex((i: any) => i.id === itemToSave.id);
                const newList = [...prev];
                if (index > -1) {
                    newList[index] = itemToSave;
                } else {
                    newList.push(itemToSave);
                }
                return newList;
            });
        }
        closeModal();
    };

    const handleConfirmDelete = () => {
        if (!deletingItem) return;
        if (activeTab.startsWith('cv_')) {
            const key = activeTab.replace('cv_', '') as CVDataKey;
            setCvData(prev => ({
                ...prev,
                [key]: (prev[key] as any[]).filter((i: any) => i.id !== deletingItem.id),
            }));
        } else if (Object.keys(arrayDataSetters).includes(activeTab)) {
             const key = activeTab as ArrayDataKey;
            const setter = arrayDataSetters[key] as React.Dispatch<React.SetStateAction<any[]>>;
            setter(prev => prev.filter((i: any) => i.id !== deletingItem.id));
        }
        setDeletingItem(null);
    };

    const getTitleForTab = (tab: TabKey): string => {
        const tabNameMap = {
            newsItems: translations.news[language],
            publications: translations.publications[language],
            researchProjects: translations.researchProjects[language],
            courses: translations.teaching[language],
            supervisions: translations.supervisions[language],
            testimonials: translations.testimonials[language],
            galleryImages: translations.gallery[language],
            resources: translations.resourcesAndLinks[language],
            mediaInterventions: translations.mediaAndInterventions[language],
            contactMessages: translations.messages[language],
            newsletterSubscribers: translations.newsletterSubscribers[language],
            tasks: translations.tasks[language],
            cv_education: translations.admin.cvEducation[language],
            cv_experience: translations.admin.cvExperience[language],
            cv_projects: translations.admin.cvProjects[language],
            cv_awards: translations.admin.cvAwards[language],
            cv_skills: translations.admin.cvSkills[language],
            siteSettings: translations.admin.siteSettings[language],
            userManagement: translations.admin.userManagement[language],
        };
        return tabNameMap[tab as keyof typeof tabNameMap] || tab;
    };

    const renderContent = () => {
        if (activeTab === 'userManagement') {
            return <UserManagementPage users={userAccountsData} setUsers={setUserAccountsData} />;
        }

        if (activeTab === 'siteSettings') {
            return <SiteSettings siteConfigData={siteConfigData} setSiteConfigData={setSiteConfigData} />;
        }

        if (activeTab === 'tasks') {
            return <TasksPage 
                        tasks={allArrayData.tasks} 
                        researchProjects={allArrayData.researchProjects}
                        onAddTask={onAddTask}
                        onDeleteTask={onDeleteTask}
                        onViewProject={onViewProject}
                    />;
        }

        const dataKey = activeTab.startsWith('cv_') ? activeTab.replace('cv_', '') as CVDataKey : activeTab as ArrayDataKey;
        const data = activeTab.startsWith('cv_') ? cvData[dataKey as CVDataKey] : allArrayData[dataKey as ArrayDataKey];
        const config = tabConfig[activeTab as keyof typeof tabConfig];

        if (!config || !data) return <p>No configuration for this tab.</p>;
        
        const isReadOnly = ['contactMessages', 'newsletterSubscribers'].includes(activeTab);

        return (
            <AdminSection
                data={data as any[]}
                config={config}
                onAddNew={handleAddNew}
                onEdit={handleEdit}
                onDelete={handleDelete}
                isReadOnly={isReadOnly}
            />
        );
    };

    if (!currentUser) {
        return <AdminLoginPage onLogin={onLogin} />;
    }

    return (
        <Section title={translations.admin.title[language]}>
            <div className="bg-white rounded-lg shadow-lg p-4">
                <header className="flex justify-between items-center mb-6 pb-4 border-b">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">
                            {translations.admin.title[language]} - <span className="text-teal-600">{getTitleForTab(activeTab)}</span>
                        </h2>
                        <p className="text-slate-500">Welcome, {currentUser.email} ({currentUser.role})</p>
                    </div>
                     <div className="flex items-center gap-4">
                        <a href="https://mail27.lwspanel.com/roundcube/" target="_blank" rel="noopener noreferrer" className="text-sm text-teal-600 hover:underline">
                            {translations.admin.webmailLink[language]}
                        </a>
                        <button onClick={onLogout} className="px-4 py-2 bg-slate-600 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors">
                            {translations.admin.logoutButton[language]}
                        </button>
                     </div>
                </header>
                <div className="flex flex-col md:flex-row gap-8">
                    <aside className="w-full md:w-1/4 lg:w-1/5 flex-shrink-0">
                        <nav className="space-y-4">
                            {Object.values(adminGroups).map((group, index) => {
                                if (group.adminOnly && currentUser.role !== 'admin') return null;
                                return (
                                    <div key={index}>
                                        <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2 px-2">{group.title}</h3>
                                        <ul className="space-y-1">
                                            {group.tabs.map((tabKey) => (
                                                <li key={tabKey}>
                                                    <button
                                                        onClick={() => setActiveTab(tabKey as TabKey)}
                                                        className={`w-full text-left rtl:text-right px-3 py-2 rounded-md font-medium transition-colors ${
                                                            activeTab === tabKey
                                                                ? 'bg-teal-100 text-teal-800'
                                                                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                                        }`}
                                                    >
                                                        {getTitleForTab(tabKey as TabKey)}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                );
                            })}
                        </nav>
                    </aside>
                    <main className="flex-1 overflow-x-auto">
                        {renderContent()}
                    </main>
                </div>
            </div>
            
            <AdminFormModal
                isOpen={isModalOpen}
                onClose={closeModal}
                onSave={handleSave}
                item={editingItem}
                researchProjects={allArrayData.researchProjects}
            />

            <ConfirmationModal
                isOpen={!!deletingItem}
                onClose={() => setDeletingItem(null)}
                onConfirm={handleConfirmDelete}
                title={translations.admin.deleteTitle[language]}
                message={translations.admin.deleteConfirmation[language]}
            />
        </Section>
    );
};