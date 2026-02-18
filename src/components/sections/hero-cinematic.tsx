"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { cn } from "@/lib/utils";

export function HeroCinematic() {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax effects
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const opacity = useTransform(scrollY, [0, 800], [1, 0]);
    const textY = useTransform(scrollY, [0, 1000], [0, 200]);

    return (
        <div ref={containerRef} className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center">
            {/* Background Layer */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black-rich via-transparent to-transparent z-20" />
                <div className="vignette absolute inset-0 z-20 pointer-events-none" />

                {/* Placeholder for video/image - using a solid color for now until assets are provided */}
                <div className="w-full h-full bg-neutral-900 relative">
                    {/* If audio/video assets were available:
          <video 
            src="/videos/hero.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover grayscale opacity-80"
          /> 
          */}
                    <Image
                        src="/images/gallery/portrait-01.jpg" // Placeholder path, needs to be updated by user
                        alt="Chanuka Mora"
                        fill
                        className="object-cover object-top grayscale"
                        priority
                    />
                </div>
            </motion.div>

            {/* Content Layer */}
            <motion.div
                style={{ y: textY, opacity }}
                className="relative z-30 flex flex-col items-center justify-center text-center px-4"
            >
                {/* Animated Name */}
                <h1 className="flex flex-col md:block font-serif text-[15vw] leading-[0.8] tracking-tighter text-white mix-blend-overlay">
                    <motion.span
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="inline-block"
                    >
                        CHANUKA
                    </motion.span>
                    <motion.span
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                        className="inline-block md:ml-[0.2em]"
                    >
                        MORA
                    </motion.span>
                </h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-8 md:mt-12 flex flex-col items-center gap-4"
                >
                    <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/70">
                        Singer · Songwriter · Artist
                    </p>
                    <div className="h-[1px] w-12 bg-accent-gold" />
                    <p className="text-lg md:text-xl font-serif italic text-white/50">
                        "The Voice of a Generation"
                    </p>
                </motion.div>
            </motion.div>

            {/* Scroll Hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-pulse" />
            </motion.div>
        </div>
    );
}
