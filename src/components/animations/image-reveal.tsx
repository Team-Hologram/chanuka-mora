"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}

export function ImageReveal({
    children,
    className,
    delay = 0,
    duration = 1.2
}: ImageRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <div ref={ref} className={cn("overflow-hidden relative", className)}>
            <motion.div
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={isInView ? { clipPath: "inset(0% 0 0 0)" } : { clipPath: "inset(100% 0 0 0)" }}
                transition={{
                    duration,
                    delay,
                    ease: [0.25, 0.1, 0.25, 1.0]
                }}
                className="relative w-full h-full"
            >
                <motion.div
                    initial={{ scale: 1.2 }}
                    animate={isInView ? { scale: 1 } : { scale: 1.2 }}
                    transition={{
                        duration: duration * 1.2,
                        delay,
                        ease: [0.25, 0.1, 0.25, 1.0]
                    }}
                    className="w-full h-full"
                >
                    {children}
                </motion.div>
            </motion.div>
        </div>
    );
}
