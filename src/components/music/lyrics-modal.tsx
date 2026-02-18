"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { Track } from "@/types";

interface LyricsModalProps {
    track: Track | null;
    isOpen: boolean;
    onClose: () => void;
}

export function LyricsModal({ track, isOpen, onClose }: LyricsModalProps) {
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && track && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div className="max-w-2xl w-full h-full overflow-y-auto no-scrollbar text-center py-12">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h2 className="font-serif text-3xl md:text-5xl text-white mb-2">{track.title}</h2>
                            {track.titleSinhala && (
                                <h3 className="font-serif text-xl text-white/50 mb-12">{track.titleSinhala}</h3>
                            )}

                            <div className="space-y-8 font-serif text-lg md:text-2xl text-white/80 leading-relaxed max-w-lg mx-auto">
                                <p>
                                    (Lyrics would be dynamically loaded here based on the track ID)
                                </p>
                                <p>
                                    Verse 1<br />
                                    In the silence of the night<br />
                                    Where shadows dance in pale moonlight<br />
                                    I hear the whispers of the past<br />
                                    Memories that were built to last
                                </p>
                                <p>
                                    Chorus<br />
                                    Oh, the way you looked at me<br />
                                    Like the stars upon the sea<br />
                                    Forever in this melody<br />
                                    You will always be with me
                                </p>
                                <p className="text-sm text-white/30 italic mt-16">
                                    Written by Chanuka Mora
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
