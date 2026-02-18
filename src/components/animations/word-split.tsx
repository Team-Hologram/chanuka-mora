"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface WordSplitProps {
    text: string;
    className?: string;
    delay?: number;
}

export function WordSplit({ text, className, delay = 0 }: WordSplitProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });
    const words = text.split(" ");

    return (
        <div ref={ref} className={cn("inline-block", className)}>
            {words.map((word, i) => (
                <div key={i} className="inline-block overflow-hidden mr-[0.25em] align-top">
                    <motion.span
                        initial={{ y: "110%" }}
                        animate={isInView ? { y: "0%" } : { y: "110%" }}
                        transition={{
                            duration: 0.8,
                            delay: delay + i * 0.05,
                            ease: [0.21, 0.47, 0.32, 0.98],
                        }}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                </div>
            ))}
        </div>
    );
}
