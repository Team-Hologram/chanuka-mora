"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    fullWidth?: boolean;
}

export function FadeIn({
    children,
    className,
    delay = 0,
    duration = 0.5,
    direction = "up",
    fullWidth = false
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const getDirectionOffset = () => {
        switch (direction) {
            case "up": return { y: 40, x: 0 };
            case "down": return { y: -40, x: 0 };
            case "left": return { x: 40, y: 0 };
            case "right": return { x: -40, y: 0 };
            case "none": return { x: 0, y: 0 };
        }
    };

    const initial = { opacity: 0, ...getDirectionOffset() };
    const animate = isInView ? { opacity: 1, x: 0, y: 0 } : initial;

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={animate}
            transition={{
                duration,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98]
            }}
            className={cn(fullWidth ? "w-full" : "inline-block", className)}
        >
            {children}
        </motion.div>
    );
}
