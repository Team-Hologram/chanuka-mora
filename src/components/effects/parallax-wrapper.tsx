"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxWrapperProps {
    children: React.ReactNode;
    className?: string;
    offset?: number;
}

export function ParallaxWrapper({
    children,
    className,
    offset = 50
}: ParallaxWrapperProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
    const ySpring = useSpring(y, { stiffness: 400, damping: 90 });

    return (
        <div ref={ref} className={cn(className)}>
            <motion.div style={{ y: ySpring }}>
                {children}
            </motion.div>
        </div>
    );
}
