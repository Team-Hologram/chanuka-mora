"use client";

import { motion } from "framer-motion";
import { useUIStore } from "@/stores/ui-store";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { cn } from "@/lib/utils";

export function NavTrigger() {
    const { isMenuOpen, toggleMenu, setCursorVariant } = useUIStore();
    const scrollDirection = useScrollDirection();

    const isVisible = scrollDirection === "up" || scrollDirection === "initial" || isMenuOpen;

    return (
        <motion.button
            onClick={toggleMenu}
            onMouseEnter={() => setCursorVariant('button')}
            onMouseLeave={() => setCursorVariant('default')}
            className={cn(
                "fixed top-6 right-6 z-[100] flex items-center justify-center p-2 mix-blend-difference transition-opacity duration-500",
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
            aria-label="Toggle Menu"
        >
            <div className="flex flex-col gap-[6px] w-8 items-end">
                <motion.span
                    animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    className="h-[1px] w-full bg-white origin-center"
                />
                <motion.span
                    animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="h-[1px] w-full bg-white"
                />
                <motion.span
                    animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    className="h-[1px] w-full bg-white origin-center"
                />
            </div>
            <span className="sr-only">Menu</span>
        </motion.button>
    );
}
