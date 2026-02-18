"use client";

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

interface SmoothScrollProviderProps {
    children: React.ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Only run on client and check for touch capability if needed
        // The brief says disable on touch devices
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        if (isTouch) {
            return;
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),



            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        let reqId: number;

        function raf(time: number) {
            lenis.raf(time);
            reqId = requestAnimationFrame(raf);
        }

        reqId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(reqId);
            try {
                lenis.destroy();
            } catch (e) {
                console.error("Error destroying Lenis:", e);
            }
        };
    }, []);

    return <>{children}</>;
}
