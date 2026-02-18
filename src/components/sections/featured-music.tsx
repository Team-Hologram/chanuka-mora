"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { featuredTracks } from "@/config/music-data";
import type { Track } from "@/types";

export function FeaturedMusic() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRailRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });
    const [maxTranslateX, setMaxTranslateX] = useState(0);

    useEffect(() => {
        const measureOverflow = () => {
            const rail = scrollRailRef.current;
            const viewport = rail?.parentElement;

            if (!rail || !viewport) {
                return;
            }

            const railWidth = rail.getBoundingClientRect().width;
            const viewportWidth = viewport.getBoundingClientRect().width;
            setMaxTranslateX(Math.max(0, railWidth - viewportWidth));
        };

        measureOverflow();

        const observer =
            typeof ResizeObserver !== "undefined"
                ? new ResizeObserver(() => measureOverflow())
                : null;
        if (observer && scrollRailRef.current) {
            observer.observe(scrollRailRef.current);
        }
        if (observer && scrollRailRef.current?.parentElement) {
            observer.observe(scrollRailRef.current.parentElement);
        }

        window.addEventListener("resize", measureOverflow);

        return () => {
            observer?.disconnect();
            window.removeEventListener("resize", measureOverflow);
        };
    }, []);

    const x = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -maxTranslateX]
    );

    const smoothX = useSpring(x, {
        stiffness: 100,
        damping: 30,
        mass: 1
    });

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-neutral-900/50">
            <div className="sticky top-0 h-screen flex flex-col overflow-hidden perspective-1000">

                {/* Background Elements */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

                <div className="relative w-full max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col h-full pt-12 md:pt-10 pb-8 md:pb-10">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 md:mb-8 flex items-end justify-between shrink-0"
                    >
                        <div>
                            <h2 className="font-serif text-5xl md:text-7xl text-white mb-3 leading-[0.95]">
                                Featured Music
                            </h2>
                            <p className="text-white/60 text-base md:text-lg max-w-lg font-light">
                                A curated selection of sonic journeys and emotional landscapes.
                            </p>
                        </div>
                        <div className="hidden md:flex items-center gap-4 text-white/40 uppercase tracking-widest text-sm">
                            <span>Scroll to Explore</span>
                            <div className="w-16 h-[1px] bg-white/20" />
                        </div>
                    </motion.div>

                    {/* Horizontal Scroll Track */}
                    <div className="relative w-full flex-1 min-h-0 flex items-start">
                        <motion.div
                            ref={scrollRailRef}
                            style={{ x: smoothX }}
                            className="flex w-max items-start gap-8 px-2"
                        >
                            {featuredTracks.map((track, index) => (
                                <MusicCard3D
                                    key={track.id}
                                    track={track}
                                    index={index}
                                />
                            ))}

                            {/* View All Card */}
                            <motion.div
                                className="w-[300px] h-[350px] md:h-[400px] flex-shrink-0 flex items-center justify-center border border-white/10 rounded-2xl group hover:border-white/30 transition-colors bg-white/5 backdrop-blur-sm"
                            >
                                <Link href="/music" className="flex flex-col items-center gap-6 text-center">
                                    <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                                        <ArrowRight className="w-8 h-8" />
                                    </div>
                                    <span className="text-2xl font-serif text-white">View Full Discography</span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function MusicCard3D({ track, index }: { track: Track, index: number }) {
    // Note: In a real implementation we would pass the scroll progress to create
    // individual 3D rotations based on center proximity.
    // For now we just reuse the track card but wrap it in a fixed width container

    return (
        <motion.div
            className="w-[280px] md:w-[340px] lg:w-[360px] flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ margin: "-10%" }}
        >
            {/* We customize the TrackCard rendering slightly via props if needed, 
                 or wrap it to constrain it properly */}
            <div className="h-[min(66vh,560px)] bg-neutral-900/40 backdrop-blur-md border border-white/5 rounded-3xl p-5 md:p-6 hover:border-white/20 transition-colors duration-500 group flex flex-col">
                {/* Reusing existing logic but stripping layout props for this view */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden mb-5 border border-white/10 shrink-0">
                    <img
                        src={track.coverImage}
                        alt={track.title}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="space-y-3 flex-1 flex flex-col min-h-0">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-3xl font-serif text-white mb-1">{track.title}</h3>
                            <p className="text-white/50 text-sm uppercase tracking-wider">{track.album}</p>
                        </div>
                        <span className="text-white/30 font-mono text-sm">{track.year}</span>
                    </div>

                    <p className="text-white/70 line-clamp-2 text-sm leading-relaxed">
                        {track.description}
                    </p>

                    <div className="mt-auto pt-3 flex items-center justify-between border-t border-white/5">
                        <span className="text-xs uppercase tracking-widest text-white/40">
                            {track.duration}
                        </span>
                        <Link
                            href={`/music/${track.id}`}
                            className="text-sm text-white hover:text-accent-gold transition-colors"
                        >
                            Listen Now
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
