"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ParallaxWrapper } from "@/components/effects/parallax-wrapper";
import { FadeIn } from "@/components/animations/fade-in";
import { CountUp } from "@/components/animations/count-up";
import { artistStats } from "@/config/music-data";
import { SignatureFooter } from "@/components/sections/signature-footer";

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const headerScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

    return (
        <div ref={containerRef} className="relative w-full">
            {/* 1. OPENING HEADER */}
            <section className="relative h-screen min-h-[800px] w-full overflow-hidden flex items-center justify-center">
                <motion.div
                    style={{ opacity: headerOpacity, scale: headerScale }}
                    className="relative z-10 text-center px-4"
                >
                    <h1 className="font-serif text-[15vw] leading-[0.8] tracking-tighter text-white mix-blend-overlay">
                        THE STORY
                    </h1>
                    <p className="mt-8 text-sm md:text-base uppercase tracking-widest text-white/60">
                        Beyond the Melodies
                    </p>
                </motion.div>

                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/gallery/portrait-01.jpg" // Placeholder
                        alt="Chanuka Mora Portrait"
                        fill
                        className="object-cover object-center grayscale opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black-rich" />
                </div>
            </section>

            {/* 2. THE NARRATIVE */}
            <section className="relative py-32 px-4 md:px-8 bg-black-rich">
                <div className="max-w-3xl mx-auto">
                    <FadeIn>
                        <p className="font-serif text-2xl md:text-4xl leading-relaxed text-white/90 drop-cap">
                            <span className="float-left text-7xl md:text-9xl leading-[0.8] pr-4 font-serif">M</span>
                            usic has never been just about sound for me. It is a language of the soul, a way to translate the unspoken emotions that define our human experience into something tangible, something shared.
                        </p>
                    </FadeIn>

                    <div className="my-24 md:my-32">
                        <ParallaxWrapper offset={50}>
                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-1000">
                                <Image
                                    src="/images/gallery/concert-01.jpg" // Placeholder
                                    alt="Live Performance"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </ParallaxWrapper>
                        <p className="mt-4 text-xs font-mono text-white/30 text-right">
                            Live at Nelum Pokuna, 2024
                        </p>
                    </div>

                    <FadeIn delay={0.2}>
                        <p className="text-lg md:text-xl leading-loose text-white/70 mb-12">
                            Born and raised in Sri Lanka, my journey began not on a stage, but in the quiet corners of my room, where melodies would come to me in the silence of the night. Over the years, this personal solace transformed into a public expression, connecting with thousands of hearts across the globe.
                        </p>
                        <p className="text-lg md:text-xl leading-loose text-white/70">
                            My work is an exploration of contrast — the balance between traditional Sinhala melodies and contemporary global sounds, between the intimate whisper of a recording studio and the roaring energy of a live arena.
                        </p>
                    </FadeIn>

                    {/* PULL QUOTE */}
                    <div className="my-24 md:my-32 border-y border-white/10 py-16">
                        <FadeIn>
                            <blockquote className="font-serif text-3xl md:text-5xl text-center italic leading-tight text-white/90">
                                "To create is to be vulnerable. To perform is to be free."
                            </blockquote>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.2}>
                        <p className="text-lg md:text-xl leading-loose text-white/70">
                            Today, as I continue to evolve as an artist, my mission remains unchanged: to create music that resonates with truth, to tell stories that matter, and to leave a legacy of art that outlasts the moment.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* 3. ACHIEVEMENTS / STATS */}
            <section className="py-24 bg-neutral-900 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
                        {artistStats.map((stat, i) => (
                            <div key={i} className="text-center">
                                <FadeIn delay={i * 0.1}>
                                    <div className="font-serif text-5xl md:text-8xl text-white mb-4">
                                        <CountUp to={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <p className="text-xs md:text-sm uppercase tracking-widest text-white/40">
                                        {stat.label}
                                    </p>
                                </FadeIn>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <SignatureFooter />
        </div>
    );
}
