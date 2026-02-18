"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WaveformProps {
    playing: boolean;
    className?: string;
}

export function Waveform({ playing, className }: WaveformProps) {
    const bars = Array.from({ length: 40 }); // 40 bars

    return (
        <div className={cn("flex items-end gap-[2px] h-8", className)}>
            {bars.map((_, i) => (
                <motion.div
                    key={i}
                    className={cn(
                        "w-[2px] bg-white/40",
                        playing && "bg-accent-gold"
                    )}
                    animate={playing ? {
                        height: [
                            // Random heights for visualization effect
                            Math.random() * 100 + "%",
                            Math.random() * 100 + "%",
                            Math.random() * 100 + "%",
                        ]
                    } : {
                        height: "20%" // Idle state
                    }}
                    transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: i * 0.05
                    }}
                    style={{
                        height: `${Math.max(20, Math.random() * 100)}%`
                    }}
                />
            ))}
        </div>
    );
}
