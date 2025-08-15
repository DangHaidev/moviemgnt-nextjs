'use client';
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 200) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        visible && (
            <button
                onClick={scrollToTop}
                style={{
                    position: 'fixed',
                    bottom: '40px',
                    right: '60px',
                    padding: '10px 15px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    background: 'linear-gradient(to right, #2f2f2f, #3e3a36)',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                    zIndex: 1000,
                }}
            >
                ^
            </button>
        )
    );
};

export default ScrollToTopButton;
