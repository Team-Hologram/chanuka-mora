"use client";

import { usePathname } from "next/navigation";
import { navigation } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { useUIStore } from "@/stores/ui-store";

export function PageIndicator() {
    const pathname = usePathname();
    const scrollDirection = useScrollDirection();
    const { isMenuOpen } = useUIStore();

    const currentPage = navigation.find(item => item.href === pathname) || navigation[0];
    const isVisible = !isMenuOpen; // Only hide when menu is open

    return (
        <div
            className={cn(
                "fixed bottom-6 left-6 z-40 transition-opacity duration-500 mix-blend-difference",
                isVisible ? "opacity-100" : "opacity-0"
            )}
        >
            <span className="font-serif text-xs uppercase tracking-[0.15em] text-white">
                {currentPage.number} <span className="mx-2 text-white/50">/</span> {navigation.length.toString().padStart(2, '0')} — {currentPage.title}
            </span>
        </div>
    );
}
