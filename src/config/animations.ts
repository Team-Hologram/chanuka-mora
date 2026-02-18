export const animations = {
    item: {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
    },
    container: {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    },
    fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
    },
    fadeInUp: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
    },
    slideUp: {
        initial: { y: "100%" },
        animate: { y: 0 },
        transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
    },
    slider: {
        initial: { x: "100%" }, // Slide from right
        animate: { x: "0%" },
        exit: { x: "-100%" }, // Slide out to left
        transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
    }
} as const;

export const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1.0] };
