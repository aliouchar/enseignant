import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { CloseIcon } from '../../constants';
import type { UserAccount } from '../../types';

interface UserFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (user: Partial<UserAccount>) => void;
    user: UserAccount | null; // null for new user, UserAccount object for editing
}

export const UserFormModal: React.FC<UserFormModalProps> = ({ isOpen, onClose, onSave, user }) => {
    const { language } = useLanguage();
    const [formData, setFormData] = useState<Partial<UserAccount>>({
        email: '',
        password: '',
        role: 'user',
    });

    useEffect(() => {
        if (user) {
            // When editing, we don't pre-fill the password for security.
            setFormData({
                email: user.email,
                password: '', // Password is only for setting a new one
                role: user.role,
            });
        } else {
            // For a new user, reset the form
            setFormData({
                email: '',
                password: '',
                role: 'user',
            });
        }
    }, [user, isOpen]);

    if (!isOpen) return null;

    const handleChange = (field: keyof typeof formData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.email) {
            alert('Email is required.');
            return;
        }

        if (!user && !formData.password) {
            alert('Password is required for new users.');
            return;
        }
        
        onSave(formData);
    };

    const title = user ? translations.admin.editUser[language] : translations.admin.addUser[language];

    return (
        <div 
            className="fixed inset-0 bg-black/50 z-[100] flex justify-center items-start py-10 overflow-y-auto" 
            aria-modal="true" 
            role="dialog" 
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-lg shadow-xl w-full max-w-md m-4" 
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
                    <button onClick={onClose} className="p-2 text-slate-500 hover:text-slate-900" aria-label="Close modal">
                        <CloseIcon />
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="p-6 space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-base font-medium text-slate-700">{translations.email[language]}</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm"
                            />
                        </div>
                         <div>
                            <label htmlFor="password" className="block text-base font-medium text-slate-700">{translations.admin.password[language]}</label>
                            <input
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={(e) => handleChange('password', e.target.value)}
                                required={!user} // Password required only for new users
                                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm"
                            />
                            {user && <p className="text-sm text-slate-500 mt-1">{translations.admin.passwordOptional[language]}</p>}
                        </div>
                        <div>
                            <label htmlFor="role" className="block text-base font-medium text-slate-700">{translations.admin.role[language]}</label>
                             <select
                                id="role"
                                value={formData.role}
                                onChange={(e) => handleChange('role', e.target.value as 'admin' | 'user')}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                            >
                                <option value="user">{translations.admin.user[language]}</option>
                                <option value="admin">{translations.admin.adminRole[language]}</option>
                            </select>
                        </div>
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