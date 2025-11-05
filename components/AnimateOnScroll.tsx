import React, { ReactNode, useRef, useEffect, useState } from 'react';

interface AnimateOnScrollProps {
    children: ReactNode;
    animationClass?: string;
    delay?: number;
    threshold?: number;
    triggerOnce?: boolean;
    className?: string;
}

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({ 
    children, 
    animationClass = "animate-fade-in-up", 
    delay = 0,
    threshold = 0.1, 
    triggerOnce = true,
    className = ''
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (triggerOnce && domRef.current) {
                            observer.unobserve(domRef.current);
                        }
                    }
                });
            },
            { threshold }
        );

        const { current } = domRef;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, [threshold, triggerOnce]);

    const style = {
        animationDelay: `${delay}ms`,
        transition: 'opacity 0.5s, transform 0.5s',
        transitionDelay: `${delay}ms`
    };

    return (
        <div 
            ref={domRef} 
            className={`${className} ${isVisible ? animationClass : 'opacity-0'}`}
            style={isVisible ? style : { opacity: 0 }}
        >
            {children}
        </div>
    );
};