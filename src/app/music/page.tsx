"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { featuredTracks } from "@/config/music-data";
import { TrackCard } from "@/components/music/track-card";
import { SignatureFooter } from "@/components/sections/signature-footer";
import { LyricsModal } from "@/components/music/lyrics-modal";
import { Track } from "@/types";
import { Filter } from "lucide-react";

export default function MusicPage() {
    const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
    const [lyricsOpen, setLyricsOpen] = useState(false);

    const openLyrics = (track: Track) => {
        setSelectedTrack(track);
        setLyricsOpen(true);
    };

    return (
        <div className="w-full min-h-screen bg-black-rich">
            {/* HEADER */}
            <section className="pt-40 pb-20 px-4 md:px-8 border-b border-white/5">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-8">
                    <div>
                        <motion.h1
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="font-serif text-[12vw] md:text-[8vw] leading-[0.8] tracking-tighter text-white"
                        >
                            MUSIC
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-6 text-white/50 max-w-md"
                        >
                            A collection of sonic journeys, from acoustic intimacies to cinematic soundscapes.
                        </motion.p>
                    </div>

                    {/* Filters (Visual only for now) */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-4 text-xs uppercase tracking-widest text-white/40"
                    >
                        <Filter className="w-4 h-4" />
                        <span>All Genres</span>
                        <span className="w-1 h-1 bg-white/20 rounded-full" />
                        <span>Latest</span>
                    </motion.div>
                </div>
            </section>

            {/* TRACK LIST */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto space-y-0">
                    {featuredTracks.map((track, index) => (
                        <div key={track.id} className="relative group">
                            <TrackCard
                                track={track}
                                layout="left" // Always left aligned list for consistency on this page
                                index={index}
                            />

                            {/* Lyrics Button Overlay (Custom addition to TrackCard logic could be cleaner, but overlay works) */}
                            <div className="absolute top-8 right-0 md:top-16 md:right-8 z-20">
                                <button
                                    onClick={() => openLyrics(track)}
                                    className="px-4 py-2 border border-white/10 rounded-full text-xs uppercase tracking-widest text-white/50 hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    Lyrics
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <LyricsModal
                track={selectedTrack}
                isOpen={lyricsOpen}
                onClose={() => setLyricsOpen(false)}
            />

            <SignatureFooter />
        </div>
    );
}
