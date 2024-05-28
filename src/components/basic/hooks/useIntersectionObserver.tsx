import { useEffect, useState, useRef, RefObject } from 'react';

const useIntersectionObserver = (): { ref: RefObject<HTMLDivElement>, isVisible: boolean } => {
    const [isVisible, setIsVisible] = useState(true);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return { ref, isVisible };
};

export default useIntersectionObserver;
