"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useCallback } from "react";
import { GalleryImage } from "@/types";
import { cn } from "@/lib/utils";

interface LightboxProps {
    image: GalleryImage | null;
    isOpen: boolean;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export function Lightbox({ image, isOpen, onClose, onNext, onPrev }: LightboxProps) {
    // Handle keyboard navigation
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (!isOpen) return;
        if (e.key === "Escape") onClose();
        if (e.key === "ArrowRight") onNext();
        if (e.key === "ArrowLeft") onPrev();
    }, [isOpen, onClose, onNext, onPrev]);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    console.log("image info: ", image);

    return (
        <AnimatePresence>
            {isOpen && image && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-md"
                    onClick={onClose}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[210] p-2"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {/* Navigation Buttons */}
                    <button
                        onClick={(e) => { e.stopPropagation(); onPrev(); }}
                        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-[210] p-4"
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); onNext(); }}
                        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-[210] p-4"
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>

                    {/* Image Container */}
                    <motion.div
                        layoutId={`image-${image.id}`}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-5xl h-[80vh] mx-4 md:mx-16 pointer-events-none"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-full overflow-hidden">

                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className={cn(
                                    "object-contain select-none",
                                    // Ken Burns effect active while viewing
                                    "animate-ken-burns"
                                )}
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Caption */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="absolute bottom-8 left-0 w-full text-center pointer-events-none"
                    >
                        <h3 className="text-white font-serif text-xl md:text-2xl">{image.event}</h3>
                        <p className="text-white/50 font-mono text-sm mt-2">{image.year} — {image.alt}</p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
