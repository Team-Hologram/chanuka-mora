import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDuration(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Simple easing function for JS animations
export const easings = {
    easeInOutQuad: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeOutExpo: (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
};

export const copyToClipboard = async (text: string) => {
    if (!navigator.clipboard) {
        return false;
    }
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (error) {
        console.error("Failed to copy text: ", error);
        return false;
    }
};
