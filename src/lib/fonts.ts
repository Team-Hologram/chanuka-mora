import { Instrument_Serif, Inter, Playfair_Display } from "next/font/google";

// Option B: Modern Editorial from the brief
export const fontSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-serif",
    display: "swap",
    adjustFontFallback: false,
});

export const fontSans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

// Using Playfair as a display alternate if needed, but sticking to Instrument Serif for main
export const fontDisplay = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-display",
    display: "swap",
    adjustFontFallback: false,
});
