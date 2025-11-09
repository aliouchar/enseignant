import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { translations } from '../../translations';
import type { ColumnConfig, Item } from './config';

interface AdminSectionProps<T extends Item> {
    data: T[];
    config: { columns: ColumnConfig<T>[] };
    onAddNew: () => void;
    onEdit: (item: T) => void;
    onDelete: (item: T) => void;
    isReadOnly?: boolean;
}

export const AdminSection = <T extends Item>({ data, config, onAddNew, onEdit, onDelete, isReadOnly = false }: AdminSectionProps<T>) => {
    const { language } = useLanguage();

    return (
        <div>
            {!isReadOnly && (
                <div className="flex justify-end mb-4">
                    <button onClick={onAddNew} className="px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors">
                        {translations.admin.addNew[language]}
                    </button>
                </div>
            )}
             <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="w-full text-left rtl:text-right">
                    <thead className="bg-slate-100">
                        <tr>
                            {config.columns.map(col => <th key={col.header} className="p-3 text-sm font-semibold text-slate-600 uppercase tracking-wider">{col.header}</th>)}
                            <th className="p-3 text-sm font-semibold text-slate-600 uppercase tracking-wider text-right rtl:text-left">{translations.admin.actions[language]}</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {data.map((item, index) => (
                            <tr key={item.id || index} className="hover:bg-slate-50">
                                {config.columns.map(col => <td key={`${col.header}-${item.id || index}`} className="p-3 text-slate-700">{col.render(item)}</td>)}
                                <td className="p-3 text-right rtl:text-left">
                                    <div className="flex justify-end gap-2">
                                        {!isReadOnly && (
                                            <button onClick={() => onEdit(item)} className="px-3 py-1 bg-slate-200 text-slate-800 text-sm font-semibold rounded hover:bg-slate-300">{translations.admin.edit[language]}</button>
                                        )}
                                        <button onClick={() => onDelete(item)} className="px-3 py-1 bg-red-100 text-red-800 text-sm font-semibold rounded hover:bg-red-200">{translations.admin.delete[language]}</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};