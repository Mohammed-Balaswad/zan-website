import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-6 left-6 z-50 flex items-center justify-center">
            <span className="absolute w-12 h-12 rounded-full bg-gold/15 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none"></span>

            <button
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="relative p-3 bg-navy/80 backdrop-blur-md text-gold border border-gold/40 rounded-full shadow-2xl hover:bg-gold hover:text-navy transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold group"
            >
                <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
        </div>
    );
}