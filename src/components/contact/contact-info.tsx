"use client";

import { socialLinks } from "@/config/navigation";
import { Copy } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";

export function ContactInfo() {
    const [copiedText, copy] = useCopyToClipboard();

    const handleCopy = (text: string) => {
        copy(text);
    };

    return (
        <div className="space-y-12 md:space-y-20">
            <div>
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
                    Let's Create Something <span className="italic text-white/50">Beautiful</span>
                </h2>
                <p className="text-white/60 leading-relaxed max-w-md">
                    Whether for a collaboration, event booking, or just to say hello, I'm always open to new conversations.
                </p>
            </div>

            <div className="space-y-8">
                <div className="group">
                    <p className="text-xs uppercase tracking-widest text-white/30 mb-2">Email</p>
                    <button
                        onClick={() => handleCopy("hello@chanukamora.com")}
                        className="flex items-center gap-4 text-xl md:text-2xl text-white hover:text-accent-gold transition-colors font-serif"
                    >
                        hello@chanukamora.com
                        <span className={cn(
                            "text-xs font-sans tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-white/50",
                            copiedText === "hello@chanukamora.com" && "text-green-500"
                        )}>
                            <Copy className="w-3 h-3" />
                            {copiedText === "hello@chanukamora.com" ? "COPIED" : "COPY"}
                        </span>
                    </button>
                </div>

                <div>
                    <p className="text-xs uppercase tracking-widest text-white/30 mb-2">Management</p>
                    <a href="mailto:management@chanukamora.com" className="text-xl md:text-2xl text-white hover:text-accent-gold transition-colors font-serif block">
                        management@chanukamora.com
                    </a>
                </div>

                <div>
                    <p className="text-xs uppercase tracking-widest text-white/30 mb-2">Location</p>
                    <p className="text-xl text-white font-serif">Colombo, Sri Lanka 🇱🇰</p>
                </div>
            </div>

            <div>
                <p className="text-xs uppercase tracking-widest text-white/30 mb-4">Connect</p>
                <div className="flex gap-6">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/60 hover:text-white transition-colors text-sm uppercase tracking-widest"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
