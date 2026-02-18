"use client";

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] bg-neutral-950 flex items-center justify-center">
            <div className="flex flex-col items-center gap-8">
                {/* Animated Brand Mark */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center relative"
                >
                    <div className="absolute inset-0 rounded-full border-t border-white/80 animate-spin transition-all duration-[2s]" />
                    <span className="font-serif text-2xl text-white">M</span>
                </motion.div>

                {/* Text */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xs uppercase tracking-[0.3em] text-white/40 animate-pulse"
                >
                    Loading Experience
                </motion.p>
            </div>
        </div>
    );
}
