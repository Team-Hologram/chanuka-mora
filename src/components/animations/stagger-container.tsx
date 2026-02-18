"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    staggerDelay?: number;
}

export function StaggerContainer({
    children,
    className,
    delay = 0,
    staggerDelay = 0.1
}: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: delay,
                    },
                },
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}

export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
