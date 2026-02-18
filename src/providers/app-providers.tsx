"use client";

import { ThemeProvider } from "next-themes";
import { SmoothScrollProvider } from "@/components/effects/smooth-scroll-provider";
import { CustomCursor } from "@/components/effects/custom-cursor";
import { GrainOverlay } from "@/components/effects/grain-overlay";
import { PageTransition } from "@/components/effects/page-transition";
import { NavOverlay } from "@/components/navigation/nav-overlay";
import { NavTrigger } from "@/components/navigation/nav-trigger";
import { NavLogo } from "@/components/navigation/nav-logo";
import { PageIndicator } from "@/components/navigation/page-indicator";
import { ScrollIndicator } from "@/components/navigation/scroll-indicator";

export function AppProviders({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            forcedTheme="dark"
            disableTransitionOnChange
        >
            <SmoothScrollProvider>
                <div className="relative min-h-screen bg-black-rich text-white-soft selection:bg-accent-gold selection:text-black-void">
                    <GrainOverlay />
                    <CustomCursor />

                    <header>
                        <NavLogo />
                        <NavTrigger />
                        <NavOverlay />
                    </header>

                    <main className="relative z-10">
                        <PageTransition>
                            {children}
                        </PageTransition>
                    </main>

                    <footer>
                        <PageIndicator />
                        <ScrollIndicator />
                    </footer>
                </div>
            </SmoothScrollProvider>
        </ThemeProvider>
    );
}
