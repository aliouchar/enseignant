import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { CloseIcon } from '../constants';
import type { MultilingualString } from '../types';

interface AdminFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (item: any) => void;
    item: any;
}

const isMultilingualString = (obj: any): obj is MultilingualString => {
    return obj && typeof obj === 'object' && 'fr' in obj && 'en' in obj && 'ar' in obj;
};

export const AdminFormModal: React.FC<AdminFormModalProps> = ({ isOpen, onClose, onSave, item }) => {
    const { language } = useLanguage();
    const [formData, setFormData] = useState<any | null>(null);

    useEffect(() => {
        // Deep copy of the item to avoid modifying the original state directly
        setFormData(item ? JSON.parse(JSON.stringify(item)) : null);
    }, [item]);

    if (!isOpen || !formData) return null;

    const handleChange = (field: string, value: any) => {
        setFormData((prev: any) => ({ ...prev, [field]: value }));
    };

    const handleMultilingualChange = (field: string, lang: keyof MultilingualString, value: string) => {
        setFormData((prev: any) => ({
            ...prev,
            [field]: { ...prev[field], [lang]: value },
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    const title = item.id ? translations.admin.editItem[language] : translations.admin.addItem[language];

    const renderField = (key: string, value: any) => {
        if (key === 'id') return null; // Don't show ID field

        if (isMultilingualString(value)) {
            return (
                <div key={key} className="space-y-2 p-3 bg-slate-50 rounded-md border">
                    <label className="block text-base font-medium text-slate-700 capitalize">{key}</label>
                    {(['fr', 'en', 'ar'] as const).map(lang => (
                        <div key={lang}>
                            <label htmlFor={`${key}-${lang}`} className="block text-sm font-medium text-slate-500">{lang.toUpperCase()}</label>
                            <textarea
                                id={`${key}-${lang}`}
                                value={value[lang]}
                                onChange={(e) => handleMultilingualChange(key, lang, e.target.value)}
                                rows={2}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-base"
                            />
                        </div>
                    ))}
                </div>
            );
        }
        
        if (typeof value === 'string') {
            const isLongText = value.length > 100 || key.toLowerCase().includes('description') || key.toLowerCase().includes('content') || key.toLowerCase().includes('abstract');
            if(isLongText) {
                return (
                    <div key={key}>
                        <label htmlFor={key} className="block text-base font-medium text-slate-700 capitalize">{key}</label>
                        <textarea
                            id={key}
                            value={value}
                            onChange={(e) => handleChange(key, e.target.value)}
                            rows={4}
                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-base"
                        />
                    </div>
                );
            }
             return (
                <div key={key}>
                    <label htmlFor={key} className="block text-base font-medium text-slate-700 capitalize">{key}</label>
                    <input
                        type="text"
                        id={key}
                        value={value}
                        onChange={(e) => handleChange(key, e.target.value)}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-base"
                    />
                </div>
            );
        }
        
        if (typeof value === 'number') {
             return (
                <div key={key}>
                    <label htmlFor={key} className="block text-base font-medium text-slate-700 capitalize">{key}</label>
                    <input
                        type="number"
                        id={key}
                        value={value}
                        onChange={(e) => handleChange(key, Number(e.target.value))}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-base"
                    />
                </div>
            );
        }
        
        // Add more complex type handlers like arrays (e.g., authors, outcomes) if needed
        return null;
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