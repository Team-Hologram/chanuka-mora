"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
    to: number;
    from?: number;
    duration?: number; // in seconds
    className?: string;
    suffix?: string;
    prefix?: string;
}

export function CountUp({ to, from = 0, duration = 2, className, suffix = "", prefix = "" }: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(from);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });

    useEffect(() => {
        if (isInView) {
            motionValue.set(to);
        }
    }, [isInView, to, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${prefix}${latest.toFixed(0)}${suffix}`;
            }
        });
    }, [springValue, prefix, suffix]);

    return <span ref={ref} className={className} />;
}
