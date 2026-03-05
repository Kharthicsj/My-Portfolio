/**
 * Shared Framer Motion variants.
 * Import these wherever you need consistent animation behaviour.
 */

/* ─────────────────────────────────────────────
   PRELOADER
───────────────────────────────────────────── */

/** Each character of the preloader name types in sequentially */
export const preloaderChar = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0 },
};

/** Wrapper that staggers the characters then exits the overlay */
export const preloaderContainer = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.065, delayChildren: 0.4 },
    },
    exit: {
        opacity: 0,
        y: '-8%',
        transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
};

/** Full-screen overlay exit (curtain sweeps up) */
export const preloaderOverlay = {
    initial: { opacity: 1 },
    exit: {
        opacity: 0,
        transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1], delay: 0.15 },
    },
};

/* ─────────────────────────────────────────────
   SHARED PAGE VARIANTS
───────────────────────────────────────────── */

/** Stagger container — wrap children to animate them in sequence */
export const staggerContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.13,
            delayChildren: 0.1,
        },
    },
};

/** General fade-up for hero / section children */
export const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
};

/** Fade in only (no movement) */
export const fadeIn = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { duration: 0.7, ease: 'easeOut' },
    },
};

/** Slide in from the left (About section) */
export const slideInLeft = {
    hidden: { opacity: 0, x: -55 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

/** Slide in from the right */
export const slideInRight = {
    hidden: { opacity: 0, x: 55 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

/** Card reveal for grids */
export const cardReveal = {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

/** Infinite floating animation for decorative elements */
export const floatAnimation = {
    y: [0, -16, 0],
    transition: {
        duration: 7,
        repeat: Infinity,
        ease: 'easeInOut',
    },
};
