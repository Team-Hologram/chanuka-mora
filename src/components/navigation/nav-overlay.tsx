"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUIStore } from "@/stores/ui-store";
import { navigation, socialLinks } from "@/config/navigation";
import { cn } from "@/lib/utils";

const overlayVariants = {
    closed: {
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    },
    open: {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
};

const containerVariants = {
    closed: { opacity: 0 },
    open: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
};

const itemVariants = {
    closed: { opacity: 0, y: 48 },
    open: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
};

export function NavOverlay() {
    const { isMenuOpen, closeMenu } = useUIStore();
    const pathname = usePathname();

    return (
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={overlayVariants}
                    className="fixed inset-0 z-[90] bg-zinc-950 p-4 md:p-8 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-[-1]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,208,115,0.08),transparent_45%)] z-[-1]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20 z-[-1]" />

                    <motion.div
                        variants={containerVariants}
                        className="w-full h-full max-w-7xl mx-auto grid md:grid-cols-[minmax(0,1fr)_240px] lg:grid-cols-[minmax(0,1fr)_280px] gap-6 md:gap-10 pt-14 md:pt-16 pb-6 md:pb-8 overflow-hidden"
                    >
                        <div className="min-h-0 flex flex-col justify-center">
                            <motion.p
                                variants={itemVariants}
                                className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-white/40 mb-2 md:mb-4"
                            >
                                Site Navigation
                            </motion.p>

                            <nav className="flex flex-col gap-[clamp(0.1rem,0.7vh,0.45rem)]">
                            {navigation.map((item) => (
                                <div key={item.href} className="overflow-hidden">
                                    <motion.div variants={itemVariants}>
                                        <Link
                                            href={item.href}
                                            onClick={closeMenu}
                                            className={cn(
                                                "group relative grid grid-cols-[30px_auto] md:grid-cols-[42px_auto] items-end gap-3 md:gap-5 py-1 md:py-1.5 border-b border-white/10",
                                                pathname === item.href ? "text-white" : "text-white/55 hover:text-white"
                                            )}
                                        >
                                            <span className={cn(
                                                "text-[10px] md:text-xs font-mono tracking-[0.2em] transition-colors duration-300",
                                                pathname === item.href ? "text-accent-gold" : "text-white/35 group-hover:text-accent-gold"
                                            )}>
                                                {item.number}
                                            </span>
                                            <span className="font-serif text-[clamp(2.1rem,7.2vh,5.2rem)] lg:text-[clamp(2.4rem,6.2vw,6.4rem)] leading-[0.9] tracking-tight">
                                                {item.title}
                                            </span>
                                        </Link>
                                    </motion.div>
                                </div>
                            ))}
                            </nav>
                        </div>

                        <motion.div
                            variants={itemVariants}
                            className="hidden md:flex flex-col justify-end border-l border-white/10 pl-8"
                        >
                            <p className="text-[10px] uppercase tracking-[0.28em] text-white/40 mb-4">
                                Connect
                            </p>
                            <div className="flex flex-col gap-2">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm uppercase tracking-[0.22em] text-white/55 hover:text-accent-gold transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="md:hidden mt-8 flex flex-wrap gap-x-6 gap-y-3"
                        >
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs uppercase tracking-[0.2em] text-white/55 hover:text-accent-gold transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
