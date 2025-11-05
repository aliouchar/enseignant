import React from 'react';

interface ScrollToTopProps {
    show: boolean;
    onClick: () => void;
}

const UpArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
);

export const ScrollToTop: React.FC<ScrollToTopProps> = ({ show, onClick }) => {
    return (
        <button
            onClick={onClick}
            aria-label="Scroll to top"
            className={`fixed bottom-6 right-6 rtl:right-auto rtl:left-6 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 z-50 ${
                show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
        >
            <UpArrowIcon />
        </button>
    );
};