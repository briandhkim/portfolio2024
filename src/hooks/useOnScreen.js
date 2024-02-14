import { useEffect, useRef, useState } from 'react';

export const useOnScreen = ref => {
    const [isOnScreen, setIsOnScreen] = useState(false);
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            ([entry]) => setIsOnScreen(entry.isIntersecting),
            {
                threshold: 0.65,
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
