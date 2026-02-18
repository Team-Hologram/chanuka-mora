"use client";

import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { cn } from "@/lib/utils";
import { useScroll, motion, useSpring } from "framer-motion";
import { useUIStore } from "@/stores/ui-store";

export function ScrollIndicator() {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const scrollDirection = useScrollDirection();
    const { isMenuOpen } = useUIStore();
    const isVisible = !isMenuOpen; // Hide when menu is open

    return (
        <div
            className={cn(
                "fixed bottom-0 right-6 z-40 h-24 w-[1px] bg-white/10 hidden md:block transition-opacity duration-500 mix-blend-difference",
                isVisible ? "opacity-100" : "opacity-0"
            )}
        >
            <motion.div style={{ scaleY }} className="w-full bg-white origin-top h-full" />
        </div>
    );
}
