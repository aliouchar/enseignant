import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import { UserAccount } from '../../types';
import { ConfirmationModal } from '../ConfirmationModal';
import { UserFormModal } from './UserFormModal';

interface UserManagementPageProps {
    users: UserAccount[];
    setUsers: React.Dispatch<React.SetStateAction<UserAccount[]>>;
}

export const UserManagementPage: React.FC<UserManagementPageProps> = ({ users, setUsers }) => {
    const { language } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<UserAccount | null>(null);
    const [deletingUser, setDeletingUser] = useState<UserAccount | null>(null);
    const [notification, setNotification] = useState('');

    const handleAddNew = () => {
        setEditingUser(null); // Clear any previous editing state
        setIsModalOpen(true);
    };

    const handleEdit = (user: UserAccount) => {
        setEditingUser(user);
        setIsModalOpen(true);
    };

    const handleDelete = (user: UserAccount) => {
        if (user.email === 'admin@portfolio.com') {
            setNotification(translations.admin.cannotDeleteAdmin[language]);
            setTimeout(() => setNotification(''), 3000);
            return;
        }
        setDeletingUser(user);
    };

    const handleSaveUser = (submittedData: Partial<UserAccount>) => {
        setUsers(prevUsers => {
            if (editingUser) { // It's an edit
                // Check for email collision
                if (prevUsers.some(u => u.email === submittedData.email && u.email !== editingUser.email)) {
                    alert("User with this email already exists.");
                    return prevUsers;
                }
                return prevUsers.map(u => {
                    if (u.email === editingUser.email) {
                        return {
                            ...u,
                            ...submittedData,
                            password: submittedData.password || u.password, // keep old pass if new is empty
                        } as UserAccount;
                    }
                    return u;
                });
            } else { // It's a new user
                if (prevUsers.some(u => u.email === submittedData.email)) {
                    alert("User with this email already exists.");
                    return prevUsers;
                }
                return [...prevUsers, submittedData as UserAccount];
            }
        });
        setIsModalOpen(false);
        setEditingUser(null);
    };

    const handleConfirmDelete = () => {
        if (!deletingUser) return;
        setUsers(prevUsers => prevUsers.filter(u => u.email !== deletingUser.email));
        setDeletingUser(null);
    };

    return (
        <div>
            {notification && <div className="mb-4 p-3 bg-yellow-100 text-yellow-800 rounded-lg">{notification}</div>}
            <div className="flex justify-end mb-4">
                <button onClick={handleAddNew} className="px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">
                    {translations.admin.addUser[language]}
                </button>
            </div>
            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="w-full text-left rtl:text-right">
                    <thead className="bg-slate-100">
                        <tr>
                            <th className="p-3 text-sm font-semibold text-slate-600 uppercase tracking-wider">{translations.email[language]}</th>
                            <th className="p-3 text-sm font-semibold text-slate-600 uppercase tracking-wider">{translations.admin.role[language]}</th>
                            <th className="p-3 text-sm font-semibold text-slate-600 uppercase tracking-wider text-right rtl:text-left">{translations.admin.actions[language]}</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {users.map(user => (
                            <tr key={user.email} className="hover:bg-slate-50">
                                <td className="p-3 text-slate-700">{user.email}</td>
                                <td className="p-3 text-slate-700 capitalize">{user.role}</td>
                                <td className="p-3 text-right rtl:text-left">
                                    <div className="flex justify-end gap-2">
                                        <button onClick={() => handleEdit(user)} className="px-3 py-1 bg-slate-200 text-slate-800 text-sm font-semibold rounded hover:bg-slate-300">{translations.admin.edit[language]}</button>
                                        <button onClick={() => handleDelete(user)} className="px-3 py-1 bg-red-100 text-red-800 text-sm font-semibold rounded hover:bg-red-200">{translations.admin.delete[language]}</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <UserFormModal
                    isOpen={isModalOpen}
                    onClose={() => { setIsModalOpen(false); setEditingUser(null); }}
                    onSave={handleSaveUser}
                    user={editingUser}
                />
            )}

            <ConfirmationModal
                isOpen={!!deletingUser}
                onClose={() => setDeletingUser(null)}
                onConfirm={handleConfirmDelete}
                title={translations.admin.deleteUserTitle[language]}
                message={translations.admin.deleteUserMessage[language]}
            />
        </div>
    );
};