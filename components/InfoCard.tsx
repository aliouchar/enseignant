import React, { ReactNode } from 'react';

interface InfoCardProps {
    title: string;
    children: ReactNode;
    icon?: ReactNode;
    className?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, children, icon, className = '' }) => {
    return (
        <div className={`bg-white p-6 rounded-lg h-full shadow-md ${className}`}>
            <div className="flex items-center gap-4 mb-4">
                {icon && 
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 border border-slate-200">
                        <span className="text-teal-600">{icon}</span>
                    </div>
                }
                <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
            </div>
            <div className="text-slate-600 text-left rtl:text-right">{children}</div>
        </div>
    );
};