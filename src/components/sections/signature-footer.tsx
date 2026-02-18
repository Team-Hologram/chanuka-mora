"use client";

import Link from "next/link";
import { socialLinks } from "@/config/navigation";

export function SignatureFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-black-rich pt-32 pb-12 px-4 md:px-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h3 className="font-serif text-2xl text-white">Chanuka Mora</h3>
                        <p className="text-white/40 text-sm max-w-xs leading-relaxed">
                            Singer, Songwriter, Artist based in Colombo, Sri Lanka.
                            Creating timeless music for the soul.
                        </p>
                    </div>

                    {/* SItemap */}
                    <div className="space-y-6">
                        <h4 className="text-xs uppercase tracking-widest text-white/30">Menu</h4>
                        <div className="flex flex-col gap-3">
                            <Link href="/about" className="text-white/60 hover:text-white transition-colors text-sm">About</Link>
                            <Link href="/music" className="text-white/60 hover:text-white transition-colors text-sm">Music</Link>
                            <Link href="/collaborations" className="text-white/60 hover:text-white transition-colors text-sm">Collaborations</Link>
                            <Link href="/contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact</Link>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="space-y-6">
                        <h4 className="text-xs uppercase tracking-widest text-white/30">Follow</h4>
                        <div className="flex flex-col gap-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/60 hover:text-white transition-colors text-sm"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter / Contact Tiny */}
                    <div className="space-y-6">
                        <h4 className="text-xs uppercase tracking-widest text-white/30">Contact</h4>
                        <a href="mailto:hello@chanukamora.com" className="text-white/60 hover:text-white transition-colors text-sm">
                            hello@chanukamora.com
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
                    <p className="text-white/20 text-xs">
                        © {currentYear} Chanuka Mora. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <span className="text-white/20 text-xs text-right">
                            <span className="hidden md:inline">Design & Development by </span>
                            <a href="https://www.wideech.com" target="_blank" rel="noopener noreferrer" className="hover:text-white/40 transition-colors">Wideech</a>
                        </span>
                    </div>
                </div>
            </div>

            {/* Big Signature overlay */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.1]">
                <h1 className="font-serif text-[20vw] bg-clip-text text-transparent bg-gradient-to-t from-white to-transparent text-center leading-none select-none">
                    MORA
                </h1>
            </div>
        </footer>
    );
}
