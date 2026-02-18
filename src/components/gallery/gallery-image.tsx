"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { GalleryImage as GalleryImageType } from "@/types";

interface GalleryImageProps {
    image: GalleryImageType;
    onClick: () => void;
    index: number;
}

export function GalleryImage({ image, onClick, index }: GalleryImageProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    // Decide aspect ratio class
    const aspectClass = {
        "16:9": "aspect-video col-span-2",
        "3:4": "aspect-[3/4] col-span-1",
        "4:3": "aspect-[4/3] col-span-2 md:col-span-1",
        "1:1": "aspect-square col-span-1",
    }[image.aspect] || "aspect-square col-span-1";

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={cn("relative group cursor-zoom-in overflow-hidden bg-neutral-900", aspectClass)}
            onClick={onClick}
        >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 translate-y-2 group-hover:translate-y-0">
                <p className="text-white text-sm font-serif">{image.event}</p>
                <p className="text-white/60 text-xs font-mono">{image.year}</p>
            </div>
        </motion.div>
    );
}
