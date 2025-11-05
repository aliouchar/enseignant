import React, { useState, useEffect, useMemo } from 'react';
import { Section } from '../Section';
import { AdminFormModal } from '../AdminFormModal';
import { ConfirmationModal } from '../ConfirmationModal';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import type { NewsItem, Publication, ResearchProject, Course, Supervision, Testimonial, GalleryImage, ResourceItem, MediaItem } from '../../types';

type AllData = {
    newsItems: NewsItem[];
    publications: Publication[];
    researchProjects: ResearchProject[];
    courses: Course[];
    supervisions: Supervision[];
    testimonials: Testimonial[];
    galleryImages: GalleryImage[];
    resources: ResourceItem[];
    mediaInterventions: MediaItem[];
};

type DataSetters = {
    newsItems: React.Dispatch<React.SetStateAction<NewsItem[]>>;
    publications: React.Dispatch<React.SetStateAction<Publication[]>>;
    researchProjects: React.Dispatch<React.SetStateAction<ResearchProject[]>>;
    courses: React.Dispatch<React.SetStateAction<Course[]>>;
    supervisions: React.Dispatch<React.SetStateAction<Supervision[]>>;
    testimonials: React.Dispatch<React.SetStateAction<Testimonial[]>>;
    galleryImages: React.Dispatch<React.SetStateAction<GalleryImage[]>>;
    resources: React.Dispatch<React.SetStateAction<ResourceItem[]>>;
    mediaInterventions: React.Dispatch<React.SetStateAction<MediaItem[]>>;
};

interface AdminPageProps {
    allData: AllData;
    dataSetters: DataSetters;
}

type DataKey = keyof AllData;

export const AdminPage: React.FC<AdminPageProps> = ({ allData, dataSetters }) => {
    const { language } = useLanguage();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [activeTab, setActiveTab] = useState<DataKey>('newsItems');

    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<{ item: any; key: DataKey } | null>(null);
    
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [deletingItem, setDeletingItem] = useState<{ item: any; key: DataKey } | null>(null);

    useEffect(() => {
        if (!isAuthenticated) {
            const password = prompt(translations.admin.loginPrompt[language]);
            if (password === 'admin123') {
                setIsAuthenticated(true);
            } else {
                alert(translations.admin.wrongPassword[language]);
                // Optional: redirect to home page or show an error message
            }
        }
    }, [isAuthenticated, language]);

    const handleEdit = (item: any, key: DataKey) => {
        setEditingItem({ item, key });
        setIsFormModalOpen(true);
    };

    const handleAdd = (key: DataKey) => {
        // Create a blank template item based on the first item in the array
        const template = allData[key][0];
        if (!template) {
            console.error("Cannot add to empty data type");
            return;
        }
        const newItem = Object.keys(template).reduce((acc, prop) => {
            if (prop === 'id') acc[prop] = Date.now();
            else if (typeof template[prop] === 'object' && template[prop] !== null && 'fr' in template[prop]) {
                 acc[prop] = { fr: '', en: '', ar: '' };
            } else if (Array.isArray(template[prop])) {
                 acc[prop] = [];
            } else if (typeof template[prop] === 'number') {
                 acc[prop] = 0;
            } else if (typeof template[prop] === 'string') {
                 acc[prop] = '';
            } else {
                 acc[prop] = undefined;
            }
            return acc;
        }, {} as any);

        setEditingItem({ item: newItem, key });
        setIsFormModalOpen(true);
    };
    
    const handleDelete = (item: any, key: DataKey) => {
        setDeletingItem({ item, key });
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = () => {
        if (!deletingItem) return;
        const { item, key } = deletingItem;
        const setter = dataSetters[key] as React.Dispatch<React.SetStateAction<any[]>>;
        setter(prev => prev.filter(i => i.id !== item.id));
        setIsDeleteModalOpen(false);
        setDeletingItem(null);
    };

    const handleSave = (updatedItem: any) => {
        if (!editingItem) return;
        const { key } = editingItem;
        const setter = dataSetters[key] as React.Dispatch<React.SetStateAction<any[]>>;
        
        setter(prev => {
            const itemExists = prev.some(i => i.id === updatedItem.id);
            if (itemExists) {
                return prev.map(i => (i.id === updatedItem.id ? updatedItem : i));
            } else {
                return [...prev, updatedItem];
            }
        });

        setIsFormModalOpen(false);
        setEditingItem(null);
    };

    const tabs: { key: DataKey; label: string }[] = useMemo(() => [
        { key: 'newsItems', label: 'Actualités' },
        { key: 'publications', label: 'Publications' },
        { key: 'researchProjects', label: 'Projets de Recherche' },
        { key: 'courses', label: 'Cours' },
        { key: 'supervisions', label: 'Encadrements' },
        { key: 'testimonials', label: 'Témoignages' },
        { key: 'galleryImages', label: 'Galerie' },
        { key: 'resources', label: 'Ressources' },
        { key: 'mediaInterventions', label: 'Médias' },
    ], []);

    const getItemTitle = (item: any): string => {
        if (item.title && typeof item.title === 'object') return item.title[language] || item.title['en'] || 'No Title';
        if (item.topic && typeof item.topic === 'object') return item.topic[language] || 'No Topic';
        if (item.quote && typeof item.quote === 'object') return `"${item.quote[language].substring(0, 50)}..."` || 'No Quote';
        if (item.alt && typeof item.alt === 'object') return item.alt[language] || 'No Alt Text';
        if (item.src) return item.src;
        return `Item ID: ${item.id}`;
    };

    if (!isAuthenticated) {
        return <div className="text-center p-8">Authenticating...</div>;
    }

    return (
        <Section title={translations.admin.title[language]}>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="border-b border-slate-200 mb-6">
                    <nav className="flex flex-wrap -mb-px" aria-label="Tabs">
                        {tabs.map(tab => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-base transition-colors
                                    ${activeTab === tab.key
                                        ? 'border-teal-500 text-teal-600'
                                        : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </div>

                <div>
                    <div className="text-right mb-4">
                        <button
                            onClick={() => handleAdd(activeTab)}
                            className="bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors"
                        >
                            {translations.admin.addNew[language]}
                        </button>
                    </div>

                    <ul className="space-y-3">
                        {allData[activeTab].map((item: any) => (
                            <li key={item.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                                <span className="text-slate-800 truncate">{getItemTitle(item)}</span>
                                <div className="flex gap-2 flex-shrink-0">
                                    <button
                                        onClick={() => handleEdit(item, activeTab)}
                                        className="bg-slate-200 text-slate-700 font-semibold py-1 px-3 rounded-md hover:bg-slate-300 transition-colors text-sm"
                                    >
                                        {translations.admin.edit[language]}
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item, activeTab)}
                                        className="bg-red-100 text-red-700 font-semibold py-1 px-3 rounded-md hover:bg-red-200 transition-colors text-sm"
                                    >
                                        {translations.admin.delete[language]}
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <AdminFormModal
                isOpen={isFormModalOpen}
                onClose={() => setIsFormModalOpen(false)}
                onSave={handleSave}
                item={editingItem?.item}
            />

            <ConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                title={translations.admin.deleteTitle[language]}
                message={translations.admin.deleteConfirmation[language]}
            />
        </Section>
    );
};