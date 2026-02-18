"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
}

export function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    return (
        <div ref={ref} className={cn("overflow-hidden inline-block align-bottom", className)}>
            <motion.div
                initial={{ y: "110%", rotateX: -20 }}
                animate={isInView ? { y: "0%", rotateX: 0 } : { y: "110%", rotateX: -20 }}
                transition={{
                    duration: 1,
                    delay,
                    ease: [0.21, 0.47, 0.32, 0.98]
                }}
                className="origin-top-left"
            >
                {children}
            </motion.div>
        </div>
    );
}
