"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="h-screen w-full bg-neutral-950 flex items-center justify-center p-4">
            <div className="text-center space-y-8 max-w-md">
                <div className="flex justify-center mb-6">
                    <AlertCircle className="w-16 h-16 text-white/20" />
                </div>

                <h2 className="font-serif text-3xl md:text-5xl text-white">
                    Moment interrupted.
                </h2>

                <p className="text-white/50 leading-relaxed">
                    We encountered an unexpected issue while trying to render this experience.
                </p>

                <div className="flex flex-col md:flex-row gap-4 items-center justify-center pt-4">
                    <button
                        onClick={reset}
                        className="px-8 py-3 border border-white/20 rounded-full text-sm uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="text-sm uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                    >
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
