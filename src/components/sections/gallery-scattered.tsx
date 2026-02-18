"use client";

import { useState } from "react";
import { galleryImages } from "@/config/music-data";
import { GalleryImage } from "@/components/gallery/gallery-image";
import { Lightbox } from "@/components/gallery/lightbox";
import { GalleryImage as GalleryImageType } from "@/types";
import { ParallaxWrapper } from "@/components/effects/parallax-wrapper";

export function GalleryScattered() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    return (
        <section className="relative py-32 md:py-48 px-4 md:px-8 bg-neutral-950 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-24 flex flex-col items-center text-center">
                    <ParallaxWrapper offset={-20}>
                        <h2 className="font-serif text-[15vw] md:text-[8vw] leading-[0.8] tracking-tighter text-white/5 uppercase select-none">
                            MOMENTS
                        </h2>
                    </ParallaxWrapper>
                    <p className="font-serif text-xl italic text-white/60 -mt-6 md:-mt-12 relative z-10">
                        "Captured in monochrome."
                    </p>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 auto-rows-min">
                    {galleryImages.map((image, index) => (
                        <div
                            key={image.id}
                            className={`
                ${index % 3 === 1 ? 'md:mt-24' : ''} 
                ${index % 3 === 2 ? 'md:mt-12' : ''}
                ${index % 2 === 0 ? 'lg:translate-y-12' : ''}
              `}
                        >
                            <GalleryImage
                                image={image}
                                index={index}
                                onClick={() => openLightbox(index)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Lightbox
                image={galleryImages[currentIndex]}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                onNext={nextImage}
                onPrev={prevImage}
            />
        </section>
    );
}
