"use client";

import { useEffect, useState } from "react";

export function useScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const currentScroll = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                setScrollProgress(Number((currentScroll / scrollHeight).toFixed(2)));
            }
        };

        window.addEventListener("scroll", updateScrollProgress);

        return () => window.removeEventListener("scroll", updateScrollProgress);
    }, []);

    return scrollProgress;
}
