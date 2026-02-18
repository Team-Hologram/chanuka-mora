"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { useUIStore } from "@/stores/ui-store";

export function NavLogo() {
    const scrollDirection = useScrollDirection();
    const { isMenuOpen } = useUIStore();

    // Show if scrolling up, or at top, or if menu is open
    const isVisible = scrollDirection === "up" || scrollDirection === "initial" || isMenuOpen;

    return (
        <div
            className={cn(
                "fixed top-6 left-6 z-[100] transition-opacity duration-500 mix-blend-difference",
                isVisible ? "opacity-100" : "opacity-0"
            )}
        >
            <Link href="/" className="block">
                <span className="font-serif text-xs uppercase tracking-[0.3em] text-white">
                    Chanuka Mora
                </span>
            </Link>
        </div>
    );
}
