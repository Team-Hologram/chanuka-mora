"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { collaborations } from "@/config/music-data";
import { cn } from "@/lib/utils";

export function CollaborationsPreview() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Only show first 5 collaborations
    const displayCollabs = collaborations.slice(0, 5);

    return (
        <section className="relative py-32 md:py-48 px-0 overflow-hidden bg-black-void">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="mb-24 flex items-end justify-between border-b border-white/10 pb-8">
                    <h2 className="font-serif text-4xl md:text-6xl text-white">Collaborations</h2>
                    <span className="hidden md:block text-xs uppercase tracking-widest text-white/40">
                        Selected Works 2022 — 2024
                    </span>
                </div>

                <div className="flex flex-col">
                    {displayCollabs.map((collab, index) => (
                        <motion.div
                            key={collab.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="group relative border-b border-white/10 py-8 md:py-12 cursor-pointer transition-colors duration-500 hover:bg-white/5 px-4 md:px-8 -mx-4 md:-mx-8"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 z-10 relative">
                                <div className="flex items-baseline gap-8 md:gap-16">
                                    <span className="font-mono text-xs text-white/30 hidden md:block">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </span>
                                    <h3 className="font-serif text-2xl md:text-4xl text-white group-hover:text-accent-gold transition-colors duration-300">
                                        {collab.collaborator}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-8 md:gap-16 text-sm md:text-base text-white/50">
                                    <span className="w-32">{collab.type}</span>
                                    <span className="font-mono">{collab.year}</span>
                                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent-gold" />
                                </div>
                            </div>

                            {/* Hover Image Reveal - Floating */}
                            <AnimatePresence>
                                {hoveredIndex === index && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 2 }}
                                        exit={{ opacity: 0, scale: 0.8, rotate: -2 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[300px] aspect-[4/3] pointer-events-none z-0 hidden lg:block overflow-hidden rounded-lg grayscale"
                                    >
                                        <Image
                                            src={collab.image}
                                            alt={collab.project}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-accent-gold/10 mix-blend-overlay" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link
                        href="/collaborations"
                        className="inline-block text-sm uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-300 border-b border-white/20 hover:border-white pb-1"
                    >
                        View All Collaborations
                    </Link>
                </div>
            </div>
        </section>
    );
}
