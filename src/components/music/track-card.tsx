"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { Track } from "@/types";
import { useAudioPlayer } from "@/hooks/use-audio-player"; // Note: Hook needs updating to handle external play calls better
import { useUIStore } from "@/stores/ui-store";
import { Waveform } from "./waveform";
import { cn, formatDuration } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";

interface TrackCardProps {
    track: Track;
    layout?: "left" | "right";
    index?: number;
}

export function TrackCard({ track, layout = "left", index = 0 }: TrackCardProps) {
    const { currentTrackId, isAudioPlaying, playTrack, pauseTrack } = useUIStore();
    const isPlaying = currentTrackId === track.id && isAudioPlaying;

    // Audio handling
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        const audio = new Audio(track.audioPreview);
        audioRef.current = audio;

        const updateTime = () => setCurrentTime(audio.currentTime);
        const updateDuration = () => setDuration(audio.duration);
        const handleEnded = () => pauseTrack();

        audio.addEventListener("timeupdate", updateTime);
        audio.addEventListener("loadedmetadata", updateDuration);
        audio.addEventListener("ended", handleEnded);

        return () => {
            audio.pause();
            audio.removeEventListener("timeupdate", updateTime);
            audio.removeEventListener("loadedmetadata", updateDuration);
            audio.removeEventListener("ended", handleEnded);
        };
    }, [track.audioPreview, pauseTrack]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play().catch(() => { });
        } else {
            audioRef.current?.pause();
        }
    }, [isPlaying]);

    const togglePlay = () => {
        if (isPlaying) {
            pauseTrack();
        } else {
            playTrack(track.id);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={cn(
                "flex flex-col md:flex-row gap-8 md:gap-16 items-center py-16 border-b border-white/10 last:border-0",
                layout === "right" && "md:flex-row-reverse"
            )}
        >
            {/* Cover Art */}
            <div className="relative group w-full max-w-md aspect-square md:w-[400px] flex-shrink-0">
                <div className={cn(
                    "absolute inset-0 rounded-full border border-white/10 scale-95 transition-transform duration-700",
                    isPlaying && "animate-spin-slow duration-[10s] border-accent-gold/30"
                )} />

                <div className="relative w-full h-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 bg-neutral-900">
                    <Image
                        src={track.coverImage}
                        alt={track.title}
                        fill
                        className={cn(
                            "object-cover transition-transform duration-700",
                            isPlaying ? "scale-105" : "group-hover:scale-105"
                        )}
                    />

                    {/* Overlay Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={togglePlay}
                            className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform duration-300"
                        >
                            {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 ml-1 fill-current" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Track Info */}
            <div className="flex-1 space-y-6 w-full text-center md:text-left">
                <div className="space-y-2">
                    <h3 className="font-serif text-4xl md:text-6xl text-white">{track.title}</h3>
                    {track.titleSinhala && (
                        <p className="text-lg md:text-xl text-white/40 font-serif tracking-wide">{track.titleSinhala}</p>
                    )}
                </div>

                <div className="flex items-center justify-center md:justify-start gap-4 text-sm uppercase tracking-widest text-white/50">
                    <span>{track.album}</span>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span>{track.year}</span>
                </div>

                <p className="text-white/70 max-w-xl mx-auto md:mx-0 leading-relaxed">
                    {track.description}
                </p>

                {/* Audio Player Controls */}
                <div className="pt-4 space-y-4">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={togglePlay}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-300"
                        >
                            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 ml-1 fill-current" />}
                        </button>

                        <div className="flex-1 h-8 flex items-center">
                            {isPlaying ? (
                                <Waveform playing={true} className="h-full w-full opacity-50" />
                            ) : (
                                <div className="w-full h-[1px] bg-white/10" />
                            )}
                        </div>

                        <span className="text-xs font-mono text-white/40 min-w-[3rem] text-right">
                            {isPlaying ? formatDuration(currentTime) : track.duration}
                        </span>
                    </div>

                    <div className="flex items-center gap-6 text-xs uppercase tracking-widest pt-2 justify-center md:justify-start">
                        <span className="text-white/30">Listen on</span>
                        {track.streamingLinks.spotify && (
                            <a href={track.streamingLinks.spotify} target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors underline-offset-4 hover:underline">
                                Spotify
                            </a>
                        )}
                        {track.streamingLinks.youtube && (
                            <a href={track.streamingLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors underline-offset-4 hover:underline">
                                YouTube
                            </a>
                        )}
                        {track.streamingLinks.appleMusic && (
                            <a href={track.streamingLinks.appleMusic} target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors underline-offset-4 hover:underline">
                                Apple Music
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
