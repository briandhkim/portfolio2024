import { useEffect, useRef, useState } from 'react';

export const useOnScreen = (ref, threshold = 0.65) => {
    const [isOnScreen, setIsOnScreen] = useState(false);
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            ([entry]) => setIsOnScreen(entry.isIntersecting),
            {
                threshold,
            }
        );
    }, []);

    useEffect(() => {
        observerRef.current.observe(ref.current);

        return () => {
            observerRef.current.disconnect();
        };
    }, [ref]);

    return isOnScreen;
};
