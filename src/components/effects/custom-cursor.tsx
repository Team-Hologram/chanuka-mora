"use client";

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useUIStore } from '@/stores/ui-store';
import { cn } from '@/lib/utils';

export function CustomCursor() {
    const { cursorVariant, isMenuOpen } = useUIStore();
    const [isVisible, setIsVisible] = useState(false);
    const [isCoarsePointer, setIsCoarsePointer] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(pointer: coarse)");
        const updatePointerType = () => setIsCoarsePointer(mediaQuery.matches);
        updatePointerType();

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener("change", updatePointerType);
        } else {
            mediaQuery.addListener(updatePointerType);
        }

        return () => {
            if (mediaQuery.removeEventListener) {
                mediaQuery.removeEventListener("change", updatePointerType);
            } else {
                mediaQuery.removeListener(updatePointerType);
            }
        };
    }, []);

    useEffect(() => {
        if (isCoarsePointer) {
            setIsVisible(false);
            return;
        }

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setIsVisible(true);
        };

        const hideCursor = () => setIsVisible(false);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseleave", hideCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseleave", hideCursor);
        };
    }, [cursorX, cursorY, isCoarsePointer]);

    if (isCoarsePointer || !isVisible || isMenuOpen) return null;

    return (
        <motion.div
            className={cn(
                "fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference",
                "flex items-center justify-center rounded-full bg-white"
            )}
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                translateX: "-50%",
                translateY: "-50%",
            }}
            variants={{
                default: { height: 16, width: 16 },
                text: { height: 60, width: 60, backgroundColor: "transparent", border: "1px solid white" },
                button: { height: 40, width: 40 },
                view: { height: 80, width: 80, backgroundColor: "transparent", border: "1px solid white" },
                play: { height: 80, width: 80, backgroundColor: "transparent", border: "1px solid white" },
            }}
            animate={cursorVariant}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
            {cursorVariant === 'view' && (
                <span className="text-[10px] uppercase font-bold text-white tracking-widest">View</span>
            )}
            {cursorVariant === 'play' && (
                <span className="text-[10px] uppercase font-bold text-white tracking-widest">Play</span>
            )}
        </motion.div>
    );
}
