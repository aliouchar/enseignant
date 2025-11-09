import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { CloseIcon } from '../../constants';
import type { MultilingualString, ResearchProject, GalleryCategory, MediaItem } from '../../types';

interface AdminFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (item: any) => void;
    item: any;
    researchProjects?: ResearchProject[];
}

// Helper functions
const isMultilingualString = (obj: any): obj is MultilingualString => {
    return obj && typeof obj === 'object' && 'fr' in obj && 'en' in obj && 'ar' in obj;
};

const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = error => reject(error);
    });
};

// Main component
export const AdminFormModal: React.FC<AdminFormModalProps> = ({ isOpen, onClose, onSave, item, researchProjects }) => {
    const { language } = useLanguage();
    const [formData, setFormData] = useState<any | null>(null);

    useEffect(() => {
        // Deep copy the item to avoid mutating the original state directly
        setFormData(item ? JSON.parse(JSON.stringify(item)) : null);
    }, [item]);

    if (!isOpen || !formData) return null;

    // Handlers
    const handleChange = (field: string, value: any) => {
        setFormData((prev: any) => ({ ...prev, [field]: value }));
    };

    const handleMultilingualChange = (field: string, lang: keyof MultilingualString, value: string) => {
        setFormData((prev: any) => ({
            ...prev,
            [field]: { ...(prev[field] || {}), [lang]: value },
        }));
    };
    
    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        const file = e.target.files?.[0];
        if (file) {
            try {
                const base64 = await fileToBase64(file);
                handleChange(field, base64);
            } catch (error) {
                console.error("Error converting file to Base64:", error);
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    const title = 'id' in item && item.id.toString().length > 5 ? translations.admin.editItem[language] : translations.admin.addItem[language];

    // Field Rendering Logic
    const renderField = (key: string, value: any) => {
        if (key === 'id') return null;

        const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');

        if (isMultilingualString(value)) {
            return (
                <div key={key}>
                    <label className="block text-base font-medium text-slate-700">{label}</label>
                    {(['fr', 'en', 'ar'] as const).map(lang => (
                        <div key={lang} className="mt-1">
                             <label className="block text-sm font-medium text-slate-500">{lang.toUpperCase()}</label>
                            <textarea
                                value={value[lang]}
                                onChange={e => handleMultilingualChange(key, lang, e.target.value)}
                                rows={key === 'content' || key === 'abstract' || key === 'description' || key === 'quote' ? 3 : 1}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm"
                            />
                        </div>
                    ))}
                </div>
            );
        }

        if (key.toLowerCase().includes('url') && typeof value === 'string') {
            if (key === 'imageUrl' || key === 'src') {
                return (
                    <div key={key}>
                        <label className="block text-base font-medium text-slate-700">{label}</label>
                        <div className="flex items-center gap-4 mt-1">
                            {value && <img src={value} alt="preview" className="h-16 w-16 object-cover rounded" />}
                            <input type="file" accept="image/*" onChange={e => handleFileChange(e, key)}
                                className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100" />
                        </div>
                    </div>
                );
            }
            if (key === 'downloadUrl') {
                 return (
                    <div key={key}>
                        <label className="block text-base font-medium text-slate-700">{label}</label>
                        {value && <p className="text-sm text-slate-500 mt-1">{translations.admin.currentFile[language]}: {value.substring(0, 30)}...</p>}
                        <input type="file" onChange={e => handleFileChange(e, key)}
                                className="mt-1 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100" />
                    </div>
                );
            }
            return (
                <div key={key}>
                    <label className="block text-base font-medium text-slate-700">{label}</label>
                    <input type="url" value={value} onChange={e => handleChange(key, e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm" />
                </div>
            );
        }

        if (Array.isArray(value)) {
            return (
                <div key={key}>
                    <label className="block text-base font-medium text-slate-700">{label}</label>
                    <textarea
                        rows={3}
                        value={value.join('\n')}
                        onChange={e => handleChange(key, e.target.value.split('\n'))}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm"
                        placeholder="Un élément par ligne"
                    />
                </div>
            );
        }
        
        if (key === 'researchProjectId' && researchProjects) {
            return (
                <div key={key}>
                    <label className="block text-base font-medium text-slate-700">{label}</label>
                    <select value={value || ''} onChange={e => handleChange(key, parseInt(e.target.value, 10) || undefined)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm">
                        <option value="">None</option>
                        {researchProjects.map(p => <option key={p.id} value={p.id}>{p.title[language]}</option>)}
                    </select>
                </div>
            );
        }
        
        if (key === 'category') {
             const categories: GalleryCategory[] = ['research', 'conference', 'teaching', 'lab'];
            return (
                <div key={key}>
                    <label className="block text-base font-medium text-slate-700">{label}</label>
                     <select value={value} onChange={e => handleChange(key, e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm">
                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>
            );
        }

        if (key === 'type' && 'media' in item) { // specific to MediaItem
            const types: MediaItem['type'][] = ['article', 'video', 'podcast'];
            return (
                <div key={key}>
                    <label className="block text-base font-medium text-slate-700">{label}</label>
                     <select value={value} onChange={e => handleChange(key, e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm">
                        {types.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                </div>
            );
        }
        
        if (typeof value === 'string' && value.length > 100) {
            return (
                <div key={key}>
                    <label className="block text-base font-medium text-slate-700">{label}</label>
                    <textarea
                        rows={5}
                        value={value}
                        onChange={e => handleChange(key, e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm"
                    />
                </div>
            );
        }
        
        if (typeof value === 'number') {
             return (
                <div key={key}>
                    <label className="block text-base font-medium text-slate-700">{label}</label>
                    <input type="number" value={value} onChange={e => handleChange(key, parseInt(e.target.value, 10))}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm" />
                </div>
            );
        }

        // Default text input
        return (
            <div key={key}>
                <label className="block text-base font-medium text-slate-700">{label}</label>
                <input
                    type="text"
                    value={value}
                    onChange={e => handleChange(key, e.target.value)}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm"
                />
            </div>
        );
    };

    return (
        <div 
            className="fixed inset-0 bg-black/50 z-[100] flex justify-center items-start py-10 overflow-y-auto" 
            aria-modal="true" 
            role="dialog" 
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-lg shadow-xl w-full max-w-2xl m-4" 
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
                    <button onClick={onClose} className="p-2 text-slate-500 hover:text-slate-900" aria-label="Close modal">
                        <CloseIcon />
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                        {Object.entries(formData).map(([key, value]) => renderField(key, value))}
                    </div>
                    <div className="p-4 bg-slate-50 flex justify-end gap-4 border-t">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-slate-200 text-slate-700 font-semibold rounded-lg hover:bg-slate-300 transition-colors"
                        >
                            {translations.admin.cancel[language]}
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
                        >
                            {translations.admin.save[language]}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};