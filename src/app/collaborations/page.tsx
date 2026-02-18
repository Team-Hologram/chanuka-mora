"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { collaborations } from "@/config/music-data";
import { SignatureFooter } from "@/components/sections/signature-footer";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowUpRight } from "lucide-react";

export default function CollaborationsPage() {
    const [selectedCollab, setSelectedCollab] = useState<string | null>(null);

    return (
        <div className="w-full min-h-screen bg-black-rich">
            {/* HEADER */}
            <section className="pt-40 pb-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="font-serif text-[10vw] md:text-[6vw] leading-[0.9] text-white max-w-4xl"
                    >
                        SHARED VISIONS
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 text-white/50 max-w-md text-lg"
                    >
                        Creative partnerships with artists, brands, and visionaries.
                    </motion.p>
                </div>
            </section>

            {/* LIST */}
            <section className="pb-32 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col">
                        {collaborations.map((collab, index) => (
                            <motion.div
                                key={collab.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                onClick={() => setSelectedCollab(selectedCollab === collab.id ? null : collab.id)}
                                className="group border-t border-white/10 py-12 md:py-16 cursor-pointer hover:bg-white/[0.02] transition-colors"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                                    {/* Number */}
                                    <div className="col-span-1 md:col-span-1 font-mono text-white/30 text-sm pt-2">
                                        {(index + 1).toString().padStart(2, '0')}
                                    </div>

                                    {/* Main Info */}
                                    <div className="col-span-1 md:col-span-5">
                                        <h2 className="font-serif text-3xl md:text-5xl text-white group-hover:text-accent-gold transition-colors duration-300">
                                            {collab.collaborator}
                                        </h2>
                                        <p className="mt-2 text-white/50">{collab.project}</p>``
                                    </div>

                                    {/* Meta */}
                                    <div className="col-span-1 md:col-span-3 flex flex-col gap-2 pt-2">
                                        <span className="text-sm uppercase tracking-widest text-white/70">{collab.type}</span>
                                        <span className="font-mono text-xs text-white/30">{collab.year}</span>
                                    </div>

                                    {/* Arrow */}
                                    <div className="col-span-1 md:col-span-3 flex justify-end pt-2">
                                        <ArrowUpRight className={`w-6 h-6 text-white/30 transition-transform duration-500 ${selectedCollab === collab.id ? 'rotate-45 text-accent-gold' : 'group-hover:-translate-y-1 group-hover:translate-x-1'}`} />
                                    </div>
                                </div>

                                {/* Expanded Details */}
                                <AnimatePresence>
                                    {selectedCollab === collab.id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-12 grid grid-cols-1 md:grid-cols-12 gap-8">
                                                <div className="md:col-span-1" />
                                                <div className="md:col-span-6">
                                                    <p className="text-white/80 text-lg leading-relaxed">
                                                        {collab.description}
                                                    </p>
                                                    <div className="mt-8">
                                                        <button className="text-sm uppercase tracking-widest border-b border-white/20 hover:border-white pb-1 transition-colors">
                                                            View Project Case Study
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="md:col-span-5 relative aspect-video rounded-lg overflow-hidden grayscale">
                                                    <Image
                                                        src={collab.image}
                                                        alt={collab.project}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <SignatureFooter />
        </div>
    );
}
