"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface LetterStaggerProps {
    text: string;
    className?: string;
    delay?: number;
}

export function LetterStagger({ text, className, delay = 0 }: LetterStaggerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const letters = text.split("");

    return (
        <div ref={ref} className={cn("inline-flex flex-wrap", className)}>
            {letters.map((letter, i) => (
                <motion.span
                    key={i}
                    initial={{ y: 50, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                    transition={{
                        duration: 0.5,
                        delay: delay + i * 0.03,
                        ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="inline-block"
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </div>
    );
}
