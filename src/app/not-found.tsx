import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-screen w-full bg-neutral-950 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Text */}
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[40vw] text-white/[0.02] select-none pointer-events-none">
                404
            </h1>

            <div className="relative z-10 text-center space-y-8">
                <p className="text-xs uppercase tracking-widest text-white/40">
                    Page Not Found
                </p>

                <h2 className="font-serif text-4xl md:text-6xl text-white max-w-lg mx-auto">
                    The melody you're looking for has faded.
                </h2>

                <div className="pt-8">
                    <Link
                        href="/"
                        className="inline-block px-8 py-3 bg-white text-black rounded-full text-sm uppercase tracking-widest hover:scale-105 transition-transform duration-300"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
