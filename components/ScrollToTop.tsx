import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Find the element with the ID matching the hash
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                // If the element exists, scroll to it smoothly
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If no hash, scroll to top of page
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
