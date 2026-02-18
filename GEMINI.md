\# 📁 SECTION 1: PROJECT ARCHITECTURE & FILE STRUCTURE

\#\# 1.1 Directory Structure

antigravity/  
├── .husky/                          \# Git hooks  
├── public/  
│   ├── fonts/                       \# Self-hosted fonts (woff2)  
│   ├── images/  
│   │   ├── og/                      \# Open Graph images (1200x630)  
│   │   ├── icons/                   \# Favicons, app icons  
│   │   └── assets/                  \# Static images  
│   ├── videos/                      \# Static video assets  
│   ├── lottie/                      \# Lottie animation JSON files  
│   ├── models/                      \# 3D models (glTF/GLB)  
│   ├── robots.txt  
│   ├── sitemap.xml  
│   └── manifest.json  
├── src/  
│   ├── app/                         \# Next.js App Router  
│   │   ├── (marketing)/             \# Marketing route group  
│   │   │   ├── page.tsx             \# Homepage  
│   │   │   ├── about/  
│   │   │   ├── contact/  
│   │   │   ├── pricing/  
│   │   │   └── layout.tsx  
│   │   ├── (dashboard)/             \# App route group  
│   │   │   ├── dashboard/  
│   │   │   ├── settings/  
│   │   │   └── layout.tsx  
│   │   ├── (auth)/                  \# Auth route group  
│   │   │   ├── login/  
│   │   │   ├── register/  
│   │   │   └── layout.tsx  
│   │   ├── api/                     \# API routes  
│   │   │   └── v1/  
│   │   ├── globals.css  
│   │   ├── layout.tsx               \# Root layout  
│   │   ├── loading.tsx              \# Root loading  
│   │   ├── error.tsx                \# Root error  
│   │   ├── not-found.tsx            \# Custom 404  
│   │   └── sitemap.ts              \# Dynamic sitemap  
│   ├── components/  
│   │   ├── ui/                      \# Primitive UI components  
│   │   │   ├── button.tsx  
│   │   │   ├── input.tsx  
│   │   │   ├── card.tsx  
│   │   │   ├── dialog.tsx  
│   │   │   ├── dropdown-menu.tsx  
│   │   │   ├── skeleton.tsx  
│   │   │   ├── toast.tsx  
│   │   │   ├── tooltip.tsx  
│   │   │   └── index.ts            \# Barrel export  
│   │   ├── layout/                  \# Layout components  
│   │   │   ├── header.tsx  
│   │   │   ├── footer.tsx  
│   │   │   ├── sidebar.tsx  
│   │   │   ├── navigation.tsx  
│   │   │   ├── mobile-nav.tsx  
│   │   │   └── page-wrapper.tsx  
│   │   ├── sections/                \# Page sections  
│   │   │   ├── hero.tsx  
│   │   │   ├── features.tsx  
│   │   │   ├── testimonials.tsx  
│   │   │   ├── cta.tsx  
│   │   │   └── faq.tsx  
│   │   ├── shared/                  \# Shared/common components  
│   │   │   ├── logo.tsx  
│   │   │   ├── theme-toggle.tsx  
│   │   │   ├── language-switcher.tsx  
│   │   │   ├── scroll-to-top.tsx  
│   │   │   ├── custom-cursor.tsx  
│   │   │   ├── page-transition.tsx  
│   │   │   ├── smooth-scroll.tsx  
│   │   │   ├── magnetic-button.tsx  
│   │   │   ├── text-reveal.tsx  
│   │   │   ├── parallax-wrapper.tsx  
│   │   │   ├── image-reveal.tsx  
│   │   │   ├── stagger-container.tsx  
│   │   │   └── noise-overlay.tsx  
│   │   ├── forms/                   \# Form components  
│   │   │   ├── contact-form.tsx  
│   │   │   ├── newsletter-form.tsx  
│   │   │   └── search-form.tsx  
│   │   ├── data-display/           \# Data visualization  
│   │   │   ├── stats-counter.tsx  
│   │   │   ├── chart-wrapper.tsx  
│   │   │   └── data-table.tsx  
│   │   └── three/                   \# 3D/WebGL components  
│   │       ├── scene.tsx  
│   │       ├── canvas-wrapper.tsx  
│   │       └── shaders/  
│   ├── hooks/                       \# Custom React hooks  
│   │   ├── use-media-query.ts  
│   │   ├── use-scroll-progress.ts  
│   │   ├── use-intersection.ts  
│   │   ├── use-smooth-scroll.ts  
│   │   ├── use-mouse-position.ts  
│   │   ├── use-debounce.ts  
│   │   ├── use-local-storage.ts  
│   │   ├── use-copy-to-clipboard.ts  
│   │   ├── use-keyboard-shortcut.ts  
│   │   ├── use-scroll-direction.ts  
│   │   ├── use-window-size.ts  
│   │   ├── use-reduced-motion.ts  
│   │   └── use-is-mounted.ts  
│   ├── lib/                         \# Utility libraries  
│   │   ├── utils.ts                 \# General utilities (cn, formatters)  
│   │   ├── fonts.ts                 \# Font configuration  
│   │   ├── metadata.ts             \# SEO metadata helpers  
│   │   ├── constants.ts            \# App-wide constants  
│   │   ├── validations.ts          \# Zod schemas  
│   │   ├── api.ts                  \# API client  
│   │   └── analytics.ts           \# Analytics helpers  
│   ├── config/                      \# Configuration  
│   │   ├── site.ts                 \# Site-wide config (name, URL, etc.)  
│   │   ├── navigation.ts          \# Navigation structure  
│   │   └── animations.ts          \# Animation presets  
│   ├── stores/                      \# State management (Zustand)  
│   │   ├── ui-store.ts  
│   │   ├── theme-store.ts  
│   │   └── app-store.ts  
│   ├── types/                       \# TypeScript types  
│   │   ├── index.ts  
│   │   ├── api.ts  
│   │   └── components.ts  
│   ├── styles/                      \# Additional styles  
│   │   ├── animations.css          \# Keyframe animations  
│   │   └── typography.css          \# Typography system  
│   └── providers/                   \# React context providers  
│       ├── theme-provider.tsx  
│       ├── smooth-scroll-provider.tsx  
│       ├── analytics-provider.tsx  
│       └── app-providers.tsx       \# Combined provider wrapper  
├── prisma/                          \# Database schema (if needed)  
├── tests/                           \# Tests  
│   ├── unit/  
│   ├── integration/  
│   └── e2e/  
├── scripts/                         \# Build/dev scripts  
├── .env.local  
├── .env.example  
├── .eslintrc.json  
├── .prettierrc  
├── next.config.ts  
├── tailwind.config.ts  
├── tsconfig.json  
├── postcss.config.js  
└── package.json

\#\# 1.2 File Naming Conventions

\- Files/folders: kebab-case (e.g., \`custom-cursor.tsx\`)  
\- Components: PascalCase exports (e.g., \`export function CustomCursor()\`)  
\- Hooks: camelCase with "use" prefix (e.g., \`use-media-query.ts\` → \`useMediaQuery\`)  
\- Types: PascalCase with descriptive suffix (e.g., \`ButtonProps\`, \`UserResponse\`)  
\- Constants: SCREAMING\_SNAKE\_CASE (e.g., \`MAX\_FILE\_SIZE\`)  
\- Utilities: camelCase (e.g., \`formatCurrency\`)

\#\# 1.3 Import Order (enforced by ESLint)

1\. React/Next.js imports  
2\. Third-party library imports  
3\. Internal aliases (@/components, @/hooks, etc.)  
4\. Relative imports  
5\. Type imports  
6\. Style imports

Always use path alias \`@/\` for src directory.

\# 🎨 SECTION 2: UI/UX DESIGN SYSTEM & CREATIVE DIRECTION

\#\# 2.1 Creative Direction — Award-Winning Aesthetic

The visual language of Antigravity should evoke:  
\- \*\*Sophistication\*\*: Clean, editorial layouts with generous whitespace  
\- \*\*Motion\*\*: Fluid, physics-based animations that feel alive  
\- \*\*Depth\*\*: Layered compositions with parallax and dimensional effects  
\- \*\*Precision\*\*: Pixel-perfect alignment and mathematical spacing  
\- \*\*Delight\*\*: Unexpected micro-interactions that reward exploration

Reference sites for creative direction:  
\- awwwards.com top winners  
\- Linear.app (precision \+ clarity)  
\- Stripe.com (visual storytelling)  
\- Apple.com (typography \+ whitespace)  
\- Vercel.com (dark elegance)

\#\# 2.2 Color System

Use CSS custom properties for theming. Support light \+ dark mode.

\`\`\`css  
:root {  
  /\* ── Brand Colors ── \*/  
  \--color-primary: 250 100% 65%;        /\* Vibrant primary \*/  
  \--color-primary-hover: 250 100% 58%;  
  \--color-primary-subtle: 250 100% 95%;  
  \--color-secondary: 280 80% 60%;  
  \--color-accent: 170 90% 50%;

  /\* ── Neutral Scale (12 steps) ── \*/  
  \--color-neutral-50: 0 0% 98%;  
  \--color-neutral-100: 0 0% 96%;  
  \--color-neutral-200: 0 0% 90%;  
  \--color-neutral-300: 0 0% 83%;  
  \--color-neutral-400: 0 0% 64%;  
  \--color-neutral-500: 0 0% 45%;  
  \--color-neutral-600: 0 0% 32%;  
  \--color-neutral-700: 0 0% 25%;  
  \--color-neutral-800: 0 0% 15%;  
  \--color-neutral-900: 0 0% 9%;  
  \--color-neutral-950: 0 0% 4%;

  /\* ── Semantic Colors ── \*/  
  \--color-success: 142 76% 36%;  
  \--color-warning: 38 92% 50%;  
  \--color-error: 0 84% 60%;  
  \--color-info: 217 91% 60%;

  /\* ── Surface & Background ── \*/  
  \--color-background: 0 0% 100%;  
  \--color-foreground: 0 0% 4%;  
  \--color-surface: 0 0% 98%;  
  \--color-surface-elevated: 0 0% 100%;  
  \--color-border: 0 0% 90%;  
  \--color-border-hover: 0 0% 80%;

  /\* ── Glass/Blur Effects ── \*/  
  \--glass-background: rgba(255, 255, 255, 0.72);  
  \--glass-border: rgba(255, 255, 255, 0.18);  
  \--glass-blur: 20px;  
}

.dark {  
  \--color-background: 0 0% 3%;  
  \--color-foreground: 0 0% 98%;  
  \--color-surface: 0 0% 7%;  
  \--color-surface-elevated: 0 0% 10%;  
  \--color-border: 0 0% 15%;  
  \--color-border-hover: 0 0% 25%;  
  \--glass-background: rgba(0, 0, 0, 0.72);  
  \--glass-border: rgba(255, 255, 255, 0.08);  
}  
\`\`\`

Rules:  
\- NEVER use raw hex/rgb colors. Always use design tokens.  
\- Every color must pass WCAG 2.1 AA contrast (4.5:1 for text, 3:1 for UI).  
\- Dark mode is MANDATORY — every component must be themed.  
\- Use \`hsl()\` format for all color tokens to enable alpha manipulation.  
\- Gradients should be subtle and purposeful, not decorative noise.

\#\# 2.3 Typography System

\`\`\`typescript  
// src/lib/fonts.ts  
import { Inter, Instrument\_Serif, JetBrains\_Mono } from "next/font/google";  
// Or use next/font/local for self-hosted fonts (preferred for performance)

export const fontSans \= Inter({  
  subsets: \["latin"\],  
  variable: "--font-sans",  
  display: "swap",  
});

export const fontSerif \= Instrument\_Serif({  
  subsets: \["latin"\],  
  weight: "400",  
  variable: "--font-serif",  
  display: "swap",  
});

export const fontMono \= JetBrains\_Mono({  
  subsets: \["latin"\],  
  variable: "--font-mono",  
  display: "swap",  
});  
\`\`\`

Typography Scale (use Tailwind's config):  
\`\`\`  
text-xs:    12px / 16px  — Captions, labels  
text-sm:    14px / 20px  — Secondary text, metadata  
text-base:  16px / 24px  — Body text (default)  
text-lg:    18px / 28px  — Lead paragraphs  
text-xl:    20px / 28px  — Card titles  
text-2xl:   24px / 32px  — Section subtitles  
text-3xl:   30px / 36px  — Section titles  
text-4xl:   36px / 40px  — Page titles  
text-5xl:   48px / 48px  — Hero subtitles  
text-6xl:   60px / 60px  — Hero titles  
text-7xl:   72px / 72px  — Display (desktop hero)  
text-8xl:   96px / 96px  — Statement text  
text-9xl:   128px/128px  — Giant display  
\`\`\`

Rules:  
\- Body text: \`font-sans\`, 16px base, line-height 1.6, max-width 680px  
\- Headings: Use \`font-serif\` or \`font-sans\` with tight tracking (-0.02em to \-0.04em)  
\- Display text (hero): Letter-spacing \-0.04em, font-weight 600-800  
\- NEVER go below 14px for any readable text  
\- Use \`text-balance\` or \`text-pretty\` on headings for better line breaks  
\- Use \`font-display: swap\` on ALL fonts  
\- Self-host fonts when possible (avoid Google Fonts CDN in production)  
\- Limit to 3 font families maximum  
\- Use fluid typography with clamp() for responsive sizing:  
  \`\`\`css  
  .hero-title {  
    font-size: clamp(2.5rem, 5vw \+ 1rem, 7rem);  
  }  
  \`\`\`

\#\# 2.4 Spacing System

Use an 8px base grid. All spacing should be multiples of 4px.

\`\`\`  
spacing-0:    0px  
spacing-px:   1px  
spacing-0.5:  2px  
spacing-1:    4px  
spacing-1.5:  6px  
spacing-2:    8px  
spacing-3:    12px  
spacing-4:    16px  
spacing-5:    20px  
spacing-6:    24px  
spacing-8:    32px  
spacing-10:   40px  
spacing-12:   48px  
spacing-16:   64px  
spacing-20:   80px  
spacing-24:   96px  
spacing-32:   128px  
spacing-40:   160px  
spacing-48:   192px  
spacing-64:   256px  
\`\`\`

Section spacing:  
\- Between major sections: 120px-200px (responsive)  
\- Between section title and content: 48px-64px  
\- Between cards/items: 24px-32px  
\- Inside cards: 24px-32px padding  
\- Page horizontal padding: 16px (mobile), 24px (tablet), 32px-64px (desktop)

\#\# 2.5 Layout & Grid

\`\`\`css  
/\* Global container \*/  
.container {  
  width: 100%;  
  max-width: 1440px;       /\* Max container width \*/  
  margin: 0 auto;  
  padding: 0 clamp(1rem, 4vw, 4rem);  
}

/\* Content container (for text-heavy sections) \*/  
.container-content {  
  max-width: 768px;  
  margin: 0 auto;  
}

/\* Wide container (for visual sections) \*/  
.container-wide {  
  max-width: 1600px;  
  margin: 0 auto;  
}  
\`\`\`

Grid system:  
\- Use CSS Grid for page-level layouts  
\- 12-column grid on desktop, 6 on tablet, 4 on mobile  
\- Column gap: 24px (desktop), 16px (mobile)  
\- Use Flexbox for component-level alignment  
\- Breakpoints:  
  \`\`\`  
  sm:  640px   — Large phones  
  md:  768px   — Tablets  
  lg:  1024px  — Small laptops  
  xl:  1280px  — Desktops  
  2xl: 1536px  — Large screens  
  \`\`\`

\#\# 2.6 Elevation & Depth

\`\`\`css  
/\* Shadow scale \*/  
\--shadow-xs:    0 1px 2px rgba(0,0,0,0.04);  
\--shadow-sm:    0 2px 4px rgba(0,0,0,0.06);  
\--shadow-md:    0 4px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);  
\--shadow-lg:    0 8px 24px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.04);  
\--shadow-xl:    0 16px 48px rgba(0,0,0,0.16), 0 4px 8px rgba(0,0,0,0.04);  
\--shadow-2xl:   0 24px 64px rgba(0,0,0,0.24);  
\--shadow-inner: inset 0 2px 4px rgba(0,0,0,0.06);

/\* Glow effects \*/  
\--glow-primary: 0 0 40px rgba(var(--color-primary), 0.3);  
\--glow-accent:  0 0 40px rgba(var(--color-accent), 0.3);  
\`\`\`

Rules:  
\- Use shadows purposefully to create hierarchy  
\- Interactive elements should elevate on hover (shadow transition)  
\- Cards: shadow-sm default → shadow-lg on hover  
\- Modals/dialogs: shadow-2xl  
\- Never mix shadow scales randomly  
\- In dark mode, use subtle border glow instead of shadows

\#\# 2.7 Border Radius System

\`\`\`  
radius-none:  0px  
radius-sm:    4px     — Small elements (badges, chips)  
radius-md:    8px     — Inputs, small cards  
radius-lg:    12px    — Cards, containers  
radius-xl:    16px    — Large cards, modals  
radius-2xl:   24px    — Hero cards, feature blocks  
radius-3xl:   32px    — Floating elements  
radius-full:  9999px  — Circles, pills  
\`\`\`

Rules:  
\- Stay consistent — pick 2-3 radius values and use them everywhere  
\- Nested elements: inner radius \= outer radius \- padding  
\- Buttons: radius-lg for default, radius-full for pill variant  
\- Cards: radius-xl default  
\- Inputs: radius-md or radius-lg (match buttons)

\# ✨ SECTION 3: ANIMATION & MOTION DESIGN

\#\# 3.1 Animation Philosophy

Motion in Antigravity must feel:  
\- \*\*Intentional\*\*: Every animation serves a purpose (guide attention, provide feedback, create continuity)  
\- \*\*Physical\*\*: Animations should respect physics — ease-out for entrances, ease-in for exits  
\- \*\*Subtle\*\*: Default to understated. Save dramatic motion for hero moments  
\- \*\*Performant\*\*: ONLY animate transform and opacity. Never animate layout properties

\#\# 3.2 Animation Presets

\`\`\`typescript  
// src/config/animations.ts  
export const animations \= {  
  // ── Easings ──  
  easing: {  
    default:    \[0.25, 0.1, 0.25, 1.0\],    // CSS ease equivalent  
    smooth:     \[0.4, 0.0, 0.2, 1.0\],       // Material smooth  
    snappy:     \[0.2, 0.0, 0.0, 1.0\],       // Quick & responsive  
    bounce:     \[0.34, 1.56, 0.64, 1.0\],     // Playful overshoot  
    gentle:     \[0.4, 0.0, 0.6, 1.0\],        // Slow & elegant  
    spring:     { type: "spring", stiffness: 300, damping: 30 },  
    springBouncy: { type: "spring", stiffness: 400, damping: 25 },  
    springGentle: { type: "spring", stiffness: 200, damping: 40 },  
  },

  // ── Duration Scale ──  
  duration: {  
    instant:    0.1,    // Micro-feedback (button press)  
    fast:       0.2,    // Hover states, toggles  
    normal:     0.35,   // Standard transitions  
    slow:       0.5,    // Entrances, exits  
    slower:     0.8,    // Complex animations  
    slowest:    1.2,    // Hero animations  
    cinematic:  2.0,    // Dramatic reveals  
  },

  // ── Entrance Presets (Framer Motion) ──  
  fadeIn: {  
    initial: { opacity: 0 },  
    animate: { opacity: 1 },  
    transition: { duration: 0.5 },  
  },

  fadeInUp: {  
    initial: { opacity: 0, y: 24 },  
    animate: { opacity: 1, y: 0 },  
    transition: { duration: 0.6, ease: \[0.4, 0.0, 0.2, 1.0\] },  
  },

  fadeInDown: {  
    initial: { opacity: 0, y: \-24 },  
    animate: { opacity: 1, y: 0 },  
    transition: { duration: 0.6, ease: \[0.4, 0.0, 0.2, 1.0\] },  
  },

  fadeInLeft: {  
    initial: { opacity: 0, x: \-24 },  
    animate: { opacity: 1, x: 0 },  
    transition: { duration: 0.6, ease: \[0.4, 0.0, 0.2, 1.0\] },  
  },

  fadeInRight: {  
    initial: { opacity: 0, x: 24 },  
    animate: { opacity: 1, x: 0 },  
    transition: { duration: 0.6, ease: \[0.4, 0.0, 0.2, 1.0\] },  
  },

  scaleIn: {  
    initial: { opacity: 0, scale: 0.95 },  
    animate: { opacity: 1, scale: 1 },  
    transition: { duration: 0.4, ease: \[0.4, 0.0, 0.2, 1.0\] },  
  },

  slideInFromBottom: {  
    initial: { y: "100%" },  
    animate: { y: "0%" },  
    transition: { duration: 0.6, ease: \[0.4, 0.0, 0.2, 1.0\] },  
  },

  // ── Stagger Children ──  
  staggerContainer: {  
    animate: {  
      transition: {  
        staggerChildren: 0.08,  
        delayChildren: 0.1,  
      },  
    },  
  },

  staggerItem: {  
    initial: { opacity: 0, y: 20 },  
    animate: { opacity: 1, y: 0 },  
    transition: { duration: 0.5, ease: \[0.4, 0.0, 0.2, 1.0\] },  
  },

  // ── Scroll-triggered ──  
  scrollReveal: {  
    initial: { opacity: 0, y: 60 },  
    whileInView: { opacity: 1, y: 0 },  
    viewport: { once: true, margin: "-10%" },  
    transition: { duration: 0.7, ease: \[0.4, 0.0, 0.2, 1.0\] },  
  },

  // ── Text Reveal ──  
  textReveal: {  
    initial: { y: "110%", rotateX: \-80 },  
    animate: { y: "0%", rotateX: 0 },  
    transition: { duration: 0.8, ease: \[0.4, 0.0, 0.2, 1.0\] },  
  },

  // ── Image/Card Reveal ──  
  clipReveal: {  
    initial: { clipPath: "inset(100% 0 0 0)" },  
    animate: { clipPath: "inset(0% 0 0 0)" },  
    transition: { duration: 1.0, ease: \[0.4, 0.0, 0.2, 1.0\] },  
  },

  // ── Hover Effects ──  
  hoverLift: {  
    whileHover: { y: \-4, transition: { duration: 0.2 } },  
  },

  hoverScale: {  
    whileHover: { scale: 1.02, transition: { duration: 0.2 } },  
    whileTap: { scale: 0.98 },  
  },

  magneticHover: {  
    // Implemented via custom hook useMousePosition  
    // Button follows cursor within bounds  
  },  
} as const;  
\`\`\`

\#\# 3.3 Animation Rules

\- ALWAYS check \`prefers-reduced-motion\` and provide instant alternatives:  
  \`\`\`typescript  
  const prefersReducedMotion \= useReducedMotion();  
  const animation \= prefersReducedMotion  
    ? { opacity: 1 }  
    : { opacity: 1, y: 0 };  
  \`\`\`  
\- Scroll-triggered animations: Use \`viewport: { once: true }\` — animate in ONCE  
\- Stagger delay: 60-100ms between items. Never exceed 150ms  
\- Page transitions: Fade \+ subtle slide. Duration 300-500ms  
\- Loading → Content: Use layout animations (Framer Motion \`layoutId\`)  
\- NEVER animate \`width\`, \`height\`, \`top\`, \`left\`, \`margin\`, \`padding\`  
\- ALWAYS use \`will-change\` sparingly and remove after animation  
\- Hero section: Can use more dramatic animation (parallax, 3D, particle effects)  
\- Below-the-fold: Use intersection observer to trigger animations  
\- Mobile: Reduce animation complexity. Simpler/shorter animations  
\- Interactive elements: Response time \< 100ms for hover/tap feedback

\#\# 3.4 Page Transitions

\`\`\`typescript  
// Use Framer Motion AnimatePresence for route transitions  
// Keep transitions fast (300-400ms) and simple  
// Pattern: current page fades/slides out → new page fades/slides in

const pageVariants \= {  
  initial: { opacity: 0, y: 8 },  
  enter: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },  
  exit: { opacity: 0, y: \-8, transition: { duration: 0.2, ease: "easeIn" } },  
};  
\`\`\`

\#\# 3.5 Micro-Interactions Checklist

Every project MUST include these micro-interactions:  
\- \[ \] Button hover: subtle lift \+ shadow increase \+ color shift  
\- \[ \] Button press: scale down to 0.97-0.98  
\- \[ \] Link hover: underline animation (grow from left or center)  
\- \[ \] Card hover: lift \+ shadow \+ subtle border color change  
\- \[ \] Input focus: border color transition \+ subtle glow  
\- \[ \] Checkbox/toggle: smooth state transition with spring physics  
\- \[ \] Navigation: active indicator slides between items  
\- \[ \] Scroll progress: thin bar at top of viewport  
\- \[ \] Toast notification: slide in from top/bottom with spring  
\- \[ \] Modal: backdrop fade \+ content scale/slide in  
\- \[ \] Accordion: smooth height animation with content fade  
\- \[ \] Tab switch: indicator slides \+ content crossfade  
\- \[ \] Counter/numbers: count-up animation on scroll into view  
\- \[ \] Image load: blur-to-sharp reveal (blur hash / placeholder)  
\- \[ \] Cursor: custom cursor that morphs on interactive elements (optional, desktop only)

\# 🧩 SECTION 4: COMPONENT DEVELOPMENT STANDARDS

\#\# 4.1 Component Architecture

Every component MUST follow this structure:

\`\`\`typescript  
// src/components/ui/button.tsx  
"use client"; // Only if component uses hooks/browser APIs

import \* as React from "react";  
import { cva, type VariantProps } from "class-variance-authority";  
import { cn } from "@/lib/utils";

// ── Variants Definition ──  
const buttonVariants \= cva(  
  // Base styles  
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-\[0.98\]",  
  {  
    variants: {  
      variant: {  
        primary: "bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow-md",  
        secondary: "bg-surface border border-border hover:border-border-hover hover:bg-surface-elevated",  
        ghost: "hover:bg-surface",  
        destructive: "bg-error text-white hover:bg-error/90",  
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto",  
      },  
      size: {  
        sm: "h-9 px-3 text-sm",  
        md: "h-11 px-5 text-sm",  
        lg: "h-12 px-6 text-base",  
        xl: "h-14 px-8 text-base",  
        icon: "h-10 w-10",  
      },  
    },  
    defaultVariants: {  
      variant: "primary",  
      size: "md",  
    },  
  }  
);

// ── Types ──  
interface ButtonProps  
  extends React.ButtonHTMLAttributes\<HTMLButtonElement\>,  
    VariantProps\<typeof buttonVariants\> {  
  isLoading?: boolean;  
  leftIcon?: React.ReactNode;  
  rightIcon?: React.ReactNode;  
}

// ── Component ──  
const Button \= React.forwardRef\<HTMLButtonElement, ButtonProps\>(  
  ({ className, variant, size, isLoading, leftIcon, rightIcon, children, disabled, ...props }, ref) \=\> {  
    return (  
      \<button  
        ref={ref}  
        className={cn(buttonVariants({ variant, size }), className)}  
        disabled={disabled || isLoading}  
        {...props}  
      \>  
        {isLoading ? (  
          \<svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24"\>  
            {/\* spinner SVG \*/}  
          \</svg\>  
        ) : leftIcon}  
        {children}  
        {rightIcon}  
      \</button\>  
    );  
  }  
);  
Button.displayName \= "Button";

export { Button, buttonVariants };  
export type { ButtonProps };  
\`\`\`

\#\# 4.2 Component Rules

1\. \*\*TypeScript\*\*: Every component must have explicit prop types. No \`any\`.  
2\. \*\*Ref Forwarding\*\*: All UI primitives must use \`React.forwardRef\`  
3\. \*\*Variants\*\*: Use \`class-variance-authority\` (CVA) for variant management  
4\. \*\*Styling\*\*: Use \`cn()\` utility (clsx \+ tailwind-merge) for class merging  
5\. \*\*Composition\*\*: Prefer composition over configuration. Use compound components for complex UI  
6\. \*\*Server vs Client\*\*:  
   \- Default to Server Components  
   \- Add \`"use client"\` ONLY when component needs: hooks, event handlers, browser APIs, or state  
7\. \*\*Children Pattern\*\*: Accept \`children\` prop for flexible content composition  
8\. \*\*Default Props\*\*: Always provide sensible defaults via \`defaultVariants\` or default parameter values  
9\. \*\*Accessibility\*\*: Every component must include proper ARIA attributes (see Section 6\)

\#\# 4.3 Required UI States for Every Component

\`\`\`  
┌─────────────┬──────────────────────────────────────────────┐  
│ State       │ Implementation                               │  
├─────────────┼──────────────────────────────────────────────┤  
│ Default     │ Base appearance                               │  
│ Hover       │ Visual feedback (color, shadow, transform)    │  
│ Focus       │ Visible ring/outline for keyboard navigation  │  
│ Active      │ Scale down / pressed state                    │  
│ Disabled    │ Reduced opacity (50%), no pointer events      │  
│ Loading     │ Spinner or skeleton, disabled interactions    │  
│ Error       │ Red border/text, error message                │  
│ Success     │ Green indicator, success message              │  
│ Empty       │ Illustration \+ helpful text \+ CTA             │  
│ Skeleton    │ Animated placeholder matching content shape   │  
└─────────────┴──────────────────────────────────────────────┘  
\`\`\`

\#\# 4.4 Mandatory Components for Award-Winning Sites

\#\#\# Layout:  
\- \[ \] SmoothScroll wrapper (Lenis)  
\- \[ \] PageTransition wrapper (Framer Motion)  
\- \[ \] Responsive Header with scroll-aware behavior (hide/show/blur)  
\- \[ \] Full-screen mobile navigation with staggered animations  
\- \[ \] Footer with newsletter, links, social, and legal

\#\#\# Hero Sections:  
\- \[ \] At least 3 hero variants (centered, split, full-bleed video/3D)  
\- \[ \] Animated headline with word/letter-level reveals  
\- \[ \] Floating/parallax decorative elements  
\- \[ \] Scroll indicator (animated arrow or mouse icon)

\#\#\# Content Sections:  
\- \[ \] Feature grid with icon/illustration \+ hover effects  
\- \[ \] Bento grid layout for feature showcase  
\- \[ \] Testimonial carousel or masonry grid  
\- \[ \] Stats/numbers with count-up animation  
\- \[ \] Timeline/process visualization  
\- \[ \] Comparison table (if SaaS)  
\- \[ \] FAQ accordion with smooth height animation  
\- \[ \] CTA section with gradient background

\#\#\# Interactive Elements:  
\- \[ \] Magnetic buttons (follows cursor on hover)  
\- \[ \] Cursor follower with context-aware morphing (desktop)  
\- \[ \] Image reveal on hover (show image following cursor on link hover)  
\- \[ \] Smooth scroll-to-section with URL hash updates  
\- \[ \] Scroll-triggered text highlights  
\- \[ \] Parallax images/cards  
\- \[ \] Marquee/infinite scroll ticker

\#\#\# Feedback:  
\- \[ \] Toast notification system (Sonner)  
\- \[ \] Form validation with inline errors  
\- \[ \] Success/error states for all actions  
\- \[ \] Skeleton loaders for every data-fetching component  
\- \[ \] Optimistic UI updates

\# ⚡ SECTION 5: PERFORMANCE OPTIMIZATION

\#\# 5.1 Core Web Vitals Targets

\`\`\`  
┌─────────────────────────────────────────────────────────────┐  
│ Metric                    │ Target      │ Maximum           │  
├───────────────────────────┼─────────────┼───────────────────┤  
│ LCP (Largest Contentful)  │ \< 1.5s      │ \< 2.5s            │  
│ FID (First Input Delay)   │ \< 50ms      │ \< 100ms           │  
│ INP (Interaction to Next) │ \< 100ms     │ \< 200ms           │  
│ CLS (Cumulative Layout)   │ \< 0.05      │ \< 0.1             │  
│ TTFB (Time to First Byte) │ \< 200ms     │ \< 600ms           │  
│ FCP (First Contentful)    │ \< 1.0s      │ \< 1.8s            │  
│ TTI (Time to Interactive) │ \< 2.5s      │ \< 3.8s            │  
│ Total Bundle Size (JS)    │ \< 150KB gz  │ \< 250KB gz        │  
│ Lighthouse Score          │ 95+         │ 90+               │  
└─────────────────────────────────────────────────────────────┘  
\`\`\`

\#\# 5.2 Image Optimization Rules

\`\`\`typescript  
// ALWAYS use next/image — NEVER use \<img\> tags  
import Image from "next/image";

// ✅ Correct usage  
\<Image  
  src="/images/hero.webp"  
  alt="Descriptive alt text for accessibility and SEO"  
  width={1200}  
  height={630}  
  priority                    // For above-the-fold images (LCP)  
  quality={85}               // Balance quality vs size  
  placeholder="blur"         // Show blurHash while loading  
  blurDataURL="data:image/..."  // Base64 blur placeholder  
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"  
  className="object-cover"  
/\>

// For fill mode (responsive container)  
\<div className="relative aspect-video overflow-hidden rounded-xl"\>  
  \<Image  
    src="/images/feature.webp"  
    alt="Feature description"  
    fill  
    sizes="(max-width: 768px) 100vw, 50vw"  
    className="object-cover"  
  /\>  
\</div\>  
\`\`\`

Image Rules:  
\- Use WebP or AVIF format (Next.js auto-converts with default loader)  
\- Set \`priority\` on LCP image (usually hero image) — MAX 2 priority images per page  
\- ALWAYS provide \`width\` \+ \`height\` OR \`fill\` to prevent CLS  
\- ALWAYS include descriptive \`alt\` text (not "image", not empty unless decorative)  
\- ALWAYS include \`sizes\` attribute for responsive images  
\- Use \`placeholder="blur"\` for better perceived performance  
\- Lazy load all below-the-fold images (default behavior)  
\- Optimize source images: max 2000px wide, compress before upload  
\- Use \`\<picture\>\` element with art direction only for complex responsive images  
\- Use SVG for icons, logos, and illustrations (inline or as components)

\#\# 5.3 Font Optimization

\`\`\`typescript  
// ✅ Use next/font (self-hosting, no external requests)  
import localFont from "next/font/local";

const fontSans \= localFont({  
  src: \[  
    { path: "../public/fonts/Inter-Regular.woff2", weight: "400", style: "normal" },  
    { path: "../public/fonts/Inter-Medium.woff2", weight: "500", style: "normal" },  
    { path: "../public/fonts/Inter-SemiBold.woff2", weight: "600", style: "normal" },  
    { path: "../public/fonts/Inter-Bold.woff2", weight: "700", style: "normal" },  
  \],  
  variable: "--font-sans",  
  display: "swap",  
  preload: true,  
});  
\`\`\`

Font Rules:  
\- Use WOFF2 format ONLY (best compression)  
\- Limit font weights to what you actually use (typically 400, 500, 600, 700\)  
\- Use \`font-display: swap\` to prevent FOIT  
\- Subset fonts to include only needed character sets  
\- Self-host fonts via \`next/font/local\` (preferred) or \`next/font/google\`  
\- Preload critical fonts (above-the-fold)

\#\# 5.4 JavaScript Optimization

\`\`\`typescript  
// ── Dynamic Imports for Heavy Components ──  
import dynamic from "next/dynamic";

const HeavyChart \= dynamic(() \=\> import("@/components/chart"), {  
  loading: () \=\> \<Skeleton className="h-\[400px\] w-full" /\>,  
  ssr: false,     // Don't SSR if component needs browser APIs  
});

const ThreeScene \= dynamic(() \=\> import("@/components/three/scene"), {  
  loading: () \=\> \<div className="h-screen bg-neutral-950" /\>,  
  ssr: false,  
});

// ── Code Splitting Best Practices ──  
// \- Split by route (automatic with App Router)  
// \- Dynamic import for: modals, charts, 3D, maps, rich text editors  
// \- Use React.lazy for client-side only code splitting  
// \- Analyze bundle with: \`npx @next/bundle-analyzer\`  
\`\`\`

JavaScript Rules:  
\- Server Components by default — minimize client-side JS  
\- \`"use client"\` ONLY when absolutely necessary  
\- Dynamic import all components \> 50KB  
\- Dynamic import all below-the-fold interactive components  
\- Tree-shake imports: \`import { Button } from "@/components/ui"\` not \`import \* as UI\`  
\- Avoid barrel files (\`index.ts\`) for large component libraries (breaks tree-shaking)  
\- Use \`React.memo\` for expensive components that receive stable props  
\- Use \`useMemo\` / \`useCallback\` only for actual performance bottlenecks (don't premature optimize)  
\- Debounce: search inputs (300ms), resize handlers (150ms), scroll handlers (16ms/rAF)  
\- Throttle: scroll-linked animations to requestAnimationFrame  
\- Remove all \`console.log\` in production (use ESLint rule)

\#\# 5.5 Data Fetching & Caching

\`\`\`typescript  
// ── Server-Side Data Fetching (preferred) ──  
// app/blog/page.tsx (Server Component)  
async function BlogPage() {  
  const posts \= await fetch("https://api.example.com/posts", {  
    next: {  
      revalidate: 3600, // ISR: Revalidate every hour  
      tags: \["posts"\],  // Tag-based revalidation  
    },  
  }).then(res \=\> res.json());

  return \<PostList posts={posts} /\>;  
}

// ── Client-Side Data Fetching (when needed) ──  
// Use TanStack Query (React Query) for client-side fetching:  
// \- Automatic caching & deduplication  
// \- Background refetching  
// \- Optimistic updates  
// \- Infinite scroll pagination  
\`\`\`

Data Fetching Rules:  
\- Fetch data in Server Components whenever possible  
\- Use \`fetch()\` with \`next: { revalidate }\` for ISR  
\- Use \`unstable\_cache\` for database queries caching  
\- Use \`generateStaticParams\` for static page generation  
\- Client-side: Use TanStack Query, never raw \`useEffect\` \+ \`fetch\`  
\- Always handle: loading, error, empty states  
\- Implement optimistic updates for mutations  
\- Use \`Suspense\` boundaries strategically for streaming SSR

\#\# 5.6 Rendering Strategy Per Page

\`\`\`  
┌──────────────────────────────────────────────────────────────┐  
│ Page Type        │ Strategy    │ Reason                      │  
├──────────────────┼─────────────┼─────────────────────────────┤  
│ Homepage         │ SSG \+ ISR   │ Content changes infrequently│  
│ Blog listing     │ ISR (1hr)   │ New posts periodically      │  
│ Blog post        │ SSG         │ Static content              │  
│ Dashboard        │ SSR/CSR     │ Real-time user data         │  
│ Auth pages       │ SSR         │ No caching of auth state    │  
│ Marketing pages  │ SSG         │ Fully static                │  
│ Search results   │ SSR         │ Dynamic based on query      │  
│ User profile     │ SSR         │ Dynamic user data           │  
│ Settings         │ CSR         │ Client-side interactions    │  
│ 404/500          │ SSG         │ Static error pages          │  
└──────────────────────────────────────────────────────────────┘  
\`\`\`

\#\# 5.7 Third-Party Script Management

\`\`\`typescript  
// ── Use next/script with proper strategy ──  
import Script from "next/script";

// Analytics: Load after page interactive  
\<Script  
  src="https://analytics.example.com/script.js"  
  strategy="afterInteractive"  // Load after hydration  
/\>

// Non-critical: Load when browser is idle  
\<Script  
  src="https://widget.example.com/widget.js"  
  strategy="lazyOnload"  // Load when idle  
/\>

// Critical: Load in \<head\> (rare, only if truly blocking)  
\<Script  
  src="https://critical.example.com/critical.js"  
  strategy="beforeInteractive"  
/\>  
\`\`\`

Rules:  
\- Load analytics \`afterInteractive\`  
\- Load chat widgets, feedback tools \`lazyOnload\`  
\- Self-host analytics if possible (Plausible, Umami)  
\- Audit third-party scripts quarterly — remove unused ones  
\- Use \`dns-prefetch\` and \`preconnect\` for critical third-party domains

\# ♿ SECTION 6: ACCESSIBILITY (WCAG 2.1 AA+)

\#\# 6.1 Core Accessibility Rules

\#\#\# Semantic HTML:  
\- Use \`\<header\>\`, \`\<nav\>\`, \`\<main\>\`, \`\<section\>\`, \`\<article\>\`, \`\<aside\>\`, \`\<footer\>\`  
\- Use heading hierarchy: One \`\<h1\>\` per page, sequential \`\<h2\>\` → \`\<h6\>\`  
\- Use \`\<button\>\` for actions, \`\<a\>\` for navigation — NEVER div/span with onClick  
\- Use \`\<ul\>\`/\`\<ol\>\` for lists, \`\<table\>\` for tabular data  
\- Use \`\<dialog\>\` or \`role="dialog"\` for modals

\#\#\# Keyboard Navigation:  
\- Every interactive element reachable via Tab key  
\- Focus order follows visual layout (logical tab sequence)  
\- \`Escape\` closes modals/dropdowns/popups  
\- \`Enter\`/\`Space\` activates buttons  
\- Arrow keys navigate within composite widgets (tabs, menus, listboxes)  
\- Skip navigation link as first focusable element:  
  \`\`\`html  
  \<a href="\#main-content" className="sr-only focus:not-sr-only focus:absolute ..."\>  
    Skip to main content  
  \</a\>  
  \`\`\`

\#\#\# Focus Management:  
\- Visible focus indicator on ALL interactive elements:  
  \`\`\`css  
  focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2  
  \`\`\`  
\- Trap focus inside modals/dialogs when open  
\- Return focus to trigger element when modal closes  
\- Auto-focus first input when form/modal opens

\#\#\# ARIA:  
\- Add \`aria-label\` to icon-only buttons  
\- Add \`aria-expanded\` to toggle buttons  
\- Add \`aria-describedby\` for form error messages  
\- Add \`aria-live="polite"\` for dynamic content updates (toasts, counters)  
\- Add \`role="status"\` for loading indicators  
\- Add \`aria-current="page"\` for current navigation item  
\- NEVER use ARIA when native HTML provides the semantics

\#\#\# Color & Contrast:  
\- Normal text contrast: minimum 4.5:1  
\- Large text contrast (18px+): minimum 3:1  
\- UI elements (borders, icons): minimum 3:1  
\- Never use color alone to convey information (add icon/text)  
\- Test all color combinations in both light and dark mode

\#\#\# Screen Reader:  
\- All images have descriptive \`alt\` text (or \`alt=""\` for decorative)  
\- Form inputs have visible \`\<label\>\` elements (or \`aria-label\`)  
\- Error messages are announced (aria-live or aria-describedby)  
\- Loading states are announced ("Loading...", role="status")  
\- Use \`sr-only\` class for visually hidden but screen-reader-accessible text

\#\#\# Motion:  
\- Respect \`prefers-reduced-motion\`:  
  \`\`\`css  
  @media (prefers-reduced-motion: reduce) {  
    \*, \*::before, \*::after {  
      animation-duration: 0.01ms \!important;  
      animation-iteration-count: 1 \!important;  
      transition-duration: 0.01ms \!important;  
      scroll-behavior: auto \!important;  
    }  
  }  
  \`\`\`

\#\# 6.2 Utility Classes

\`\`\`css  
/\* Visually hidden but accessible to screen readers \*/  
.sr-only {  
  position: absolute;  
  width: 1px;  
  height: 1px;  
  padding: 0;  
  margin: \-1px;  
  overflow: hidden;  
  clip: rect(0, 0, 0, 0);  
  white-space: nowrap;  
  border-width: 0;  
}

/\* Visible only on focus (for skip links) \*/  
.sr-only-focusable:focus {  
  position: static;  
  width: auto;  
  height: auto;  
  padding: inherit;  
  margin: inherit;  
  overflow: visible;  
  clip: auto;  
  white-space: normal;  
}  
\`\`\`

\# 🔍 SECTION 7: SEO & METADATA

\#\# 7.1 Metadata Configuration

\`\`\`typescript  
// src/config/site.ts  
export const siteConfig \= {  
  name: "Antigravity",  
  description: "Your compelling site description for SEO (120-160 chars)",  
  url: "https://antigravity.com",  
  ogImage: "https://antigravity.com/images/og/default.jpg",  
  creator: "Antigravity Team",  
  authors: \[{ name: "Antigravity", url: "https://antigravity.com" }\],  
  keywords: \["keyword1", "keyword2", "keyword3"\],  
  locale: "en\_US",  
  themeColor: \[  
    { media: "(prefers-color-scheme: light)", color: "\#ffffff" },  
    { media: "(prefers-color-scheme: dark)", color: "\#0a0a0a" },  
  \],  
  links: {  
    twitter: "https://twitter.com/antigravity",  
    github: "https://github.com/antigravity",  
  },  
};  
\`\`\`

\`\`\`typescript  
// src/app/layout.tsx — Root Metadata  
import type { Metadata, Viewport } from "next";  
import { siteConfig } from "@/config/site";

export const viewport: Viewport \= {  
  themeColor: siteConfig.themeColor,  
  width: "device-width",  
  initialScale: 1,  
  maximumScale: 5,  
};

export const metadata: Metadata \= {  
  metadataBase: new URL(siteConfig.url),  
  title: {  
    default: siteConfig.name,  
    template: \`%s — ${siteConfig.name}\`,  // "About — Antigravity"  
  },  
  description: siteConfig.description,  
  keywords: siteConfig.keywords,  
  authors: siteConfig.authors,  
  creator: siteConfig.creator,

  // ── Open Graph ──  
  openGraph: {  
    type: "website",  
    locale: siteConfig.locale,  
    url: siteConfig.url,  
    title: siteConfig.name,  
    description: siteConfig.description,  
    siteName: siteConfig.name,  
    images: \[  
      {  
        url: siteConfig.ogImage,  
        width: 1200,  
        height: 630,  
        alt: siteConfig.name,  
        type: "image/jpeg",  
      },  
    \],  
  },

  // ── Twitter Card ──  
  twitter: {  
    card: "summary\_large\_image",  
    title: siteConfig.name,  
    description: siteConfig.description,  
    images: \[siteConfig.ogImage\],  
    creator: "@antigravity",  
  },

  // ── Robots ──  
  robots: {  
    index: true,  
    follow: true,  
    googleBot: {  
      index: true,  
      follow: true,  
      "max-video-preview": \-1,  
      "max-image-preview": "large",  
      "max-snippet": \-1,  
    },  
  },

  // ── Icons ──  
  icons: {  
    icon: \[  
      { url: "/images/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },  
      { url: "/images/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },  
    \],  
    apple: \[  
      { url: "/images/icons/apple-touch-icon.png", sizes: "180x180" },  
    \],  
    other: \[  
      { rel: "mask-icon", url: "/images/icons/safari-pinned-tab.svg", color: "\#5046e6" },  
    \],  
  },

  // ── Manifest ──  
  manifest: "/manifest.json",

  // ── Verification ──  
  verification: {  
    google: "your-google-verification-code",  
    // yandex: "your-yandex-code",  
    // yahoo: "your-yahoo-code",  
  },

  // ── Alternate Languages (i18n) ──  
  alternates: {  
    canonical: siteConfig.url,  
    languages: {  
      "en-US": "/en",  
      "es-ES": "/es",  
      "fr-FR": "/fr",  
    },  
  },

  // ── Category ──  
  category: "technology",  
};  
\`\`\`

\#\# 7.2 Per-Page Metadata Pattern

\`\`\`typescript  
// src/app/(marketing)/about/page.tsx  
import type { Metadata } from "next";  
import { siteConfig } from "@/config/site";

export const metadata: Metadata \= {  
  title: "About Us",  // Renders as "About Us — Antigravity"  
  description: "Learn about Antigravity's mission, team, and story. We're building...",  
  openGraph: {  
    title: "About Us — Antigravity",  
    description: "Learn about Antigravity's mission, team, and story.",  
    url: \`${siteConfig.url}/about\`,  
    images: \[  
      {  
        url: \`${siteConfig.url}/images/og/about.jpg\`,  
        width: 1200,  
        height: 630,  
        alt: "About Antigravity",  
      },  
    \],  
  },  
};

export default function AboutPage() {  
  return (/\* ... \*/);  
}  
\`\`\`

\#\# 7.3 Dynamic OG Images

\`\`\`typescript  
// src/app/api/og/route.tsx  
import { ImageResponse } from "next/og";

export const runtime \= "edge";

export async function GET(request: Request) {  
  const { searchParams } \= new URL(request.url);  
  const title \= searchParams.get("title") ?? "Antigravity";

  return new ImageResponse(  
    (  
      \<div style={{  
        height: "100%",  
        width: "100%",  
        display: "flex",  
        flexDirection: "column",  
        alignItems: "center",  
        justifyContent: "center",  
        backgroundColor: "\#0a0a0a",  
        color: "\#ffffff",  
        fontFamily: "Inter",  
      }}\>  
        \<h1 style={{ fontSize: 64, fontWeight: 700 }}\>{title}\</h1\>  
        \<p style={{ fontSize: 24, color: "\#a0a0a0" }}\>antigravity.com\</p\>  
      \</div\>  
    ),  
    { width: 1200, height: 630 }  
  );  
}  
\`\`\`

\#\# 7.4 Structured Data (JSON-LD)

\`\`\`typescript  
// src/components/shared/json-ld.tsx  
interface JsonLdProps {  
  data: Record\<string, unknown\>;  
}

export function JsonLd({ data }: JsonLdProps) {  
  return (  
    \<script  
      type="application/ld+json"  
      dangerouslySetInnerHTML={{ \_\_html: JSON.stringify(data) }}  
    /\>  
  );  
}

// Usage in page:  
\<JsonLd data={{  
  "@context": "https://schema.org",  
  "@type": "Organization",  
  name: "Antigravity",  
  url: "https://antigravity.com",  
  logo: "https://antigravity.com/logo.png",  
  sameAs: \[  
    "https://twitter.com/antigravity",  
    "https://linkedin.com/company/antigravity",  
  \],  
}} /\>

// For blog posts:  
\<JsonLd data={{  
  "@context": "https://schema.org",  
  "@type": "Article",  
  headline: post.title,  
  description: post.excerpt,  
  datePublished: post.publishedAt,  
  dateModified: post.updatedAt,  
  author: {  
    "@type": "Person",  
    name: post.author.name,  
  },  
  image: post.coverImage,  
}} /\>

// For FAQ pages:  
\<JsonLd data={{  
  "@context": "https://schema.org",  
  "@type": "FAQPage",  
  mainEntity: faqs.map(faq \=\> ({  
    "@type": "Question",  
    name: faq.question,  
    acceptedAnswer: {  
      "@type": "Answer",  
      text: faq.answer,  
    },  
  })),  
}} /\>  
\`\`\`

\#\# 7.5 Sitemap & Robots

\`\`\`typescript  
// src/app/sitemap.ts  
import { MetadataRoute } from "next";  
import { siteConfig } from "@/config/site";

export default async function sitemap(): Promise\<MetadataRoute.Sitemap\> {  
  const staticPages \= \[  
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },  
    { url: \`${siteConfig.url}/about\`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },  
    { url: \`${siteConfig.url}/pricing\`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },  
    { url: \`${siteConfig.url}/contact\`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },  
    { url: \`${siteConfig.url}/blog\`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },  
  \];

  // Dynamic pages (blog posts, etc.)  
  const posts \= await getBlogPosts();  
  const dynamicPages \= posts.map(post \=\> ({  
    url: \`${siteConfig.url}/blog/${post.slug}\`,  
    lastModified: post.updatedAt,  
    changeFrequency: "monthly" as const,  
    priority: 0.6,  
  }));

  return \[...staticPages, ...dynamicPages\];  
}  
\`\`\`

\`\`\`typescript  
// src/app/robots.ts  
import { MetadataRoute } from "next";  
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {  
  return {  
    rules: \[  
      {  
        userAgent: "\*",  
        allow: "/",  
        disallow: \["/api/", "/dashboard/", "/admin/", "/auth/"\],  
      },  
    \],  
    sitemap: \`${siteConfig.url}/sitemap.xml\`,  
  };  
}  
\`\`\`

\#\# 7.6 SEO Content Rules

\- Every page MUST have a unique \`\<title\>\` (50-60 characters)  
\- Every page MUST have a unique \`\<meta description\>\` (120-160 characters)  
\- Every page MUST have an OG image (1200x630px)  
\- Use semantic heading hierarchy (h1 → h2 → h3, never skip levels)  
\- ONE \`\<h1\>\` per page containing primary keyword  
\- Include internal links between related pages  
\- Use descriptive link text (never "click here")  
\- All images have descriptive \`alt\` attributes containing relevant keywords  
\- URLs should be clean, descriptive, and kebab-case: \`/blog/building-award-winning-sites\`  
\- Implement breadcrumbs for deep pages with structured data  
\- Use \`\<time\>\` element for dates with \`datetime\` attribute  
\- Implement canonical URLs to prevent duplicate content

\# 🛡️ SECTION 8: ERROR HANDLING & RESILIENCE

\#\# 8.1 Error Boundary Architecture

\`\`\`  
app/  
├── error.tsx          \# Root error (catches all unhandled errors)  
├── not-found.tsx      \# Root 404  
├── (marketing)/  
│   ├── error.tsx      \# Marketing-specific error  
│   └── blog/  
│       ├── error.tsx  \# Blog-specific error  
│       └── not-found.tsx  \# Blog 404  
├── (dashboard)/  
│   ├── error.tsx      \# Dashboard-specific error  
│   └── loading.tsx    \# Dashboard loading  
\`\`\`

\#\# 8.2 Error Page Template

\`\`\`typescript  
// src/app/error.tsx  
"use client";

import { useEffect } from "react";  
import { Button } from "@/components/ui/button";  
import { motion } from "framer-motion";

export default function Error({  
  error,  
  reset,  
}: {  
  error: Error & { digest?: string };  
  reset: () \=\> void;  
}) {  
  useEffect(() \=\> {  
    // Log to error reporting service  
    console.error(error);  
  }, \[error\]);

  return (  
    \<div className="flex min-h-\[60vh\] flex-col items-center justify-center px-4 text-center"\>  
      \<motion.div  
        initial={{ opacity: 0, y: 20 }}  
        animate={{ opacity: 1, y: 0 }}  
        transition={{ duration: 0.5 }}  
      \>  
        {/\* Animated illustration or icon \*/}  
        \<div className="mb-8 text-8xl"\>🫠\</div\>

        \<h1 className="mb-4 text-4xl font-bold tracking-tight"\>  
          Something went wrong  
        \</h1\>  
        \<p className="mb-8 max-w-md text-lg text-neutral-500"\>  
          We encountered an unexpected error. Our team has been notified.  
        \</p\>

        \<div className="flex gap-4 justify-center"\>  
          \<Button onClick={reset} variant="primary"\>  
            Try Again  
          \</Button\>  
          \<Button onClick={() \=\> window.location.href \= "/"} variant="secondary"\>  
            Go Home  
          \</Button\>  
        \</div\>  
      \</motion.div\>  
    \</div\>  
  );  
}  
\`\`\`

\#\# 8.3 404 Page

\`\`\`typescript  
// src/app/not-found.tsx  
// Make this DELIGHTFUL — it's a chance to show personality  
// Include: creative illustration/animation, search, popular links, home button  
\`\`\`

\#\# 8.4 Loading States

Every route group should have a \`loading.tsx\`:

\`\`\`typescript  
// src/app/(marketing)/loading.tsx  
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {  
  return (  
    \<div className="container py-20"\>  
      \<Skeleton className="h-12 w-3/4 mb-6" /\>  
      \<Skeleton className="h-6 w-1/2 mb-12" /\>  
      \<div className="grid grid-cols-1 md:grid-cols-3 gap-8"\>  
        {Array.from({ length: 6 }).map((\_, i) \=\> (  
          \<div key={i} className="space-y-4"\>  
            \<Skeleton className="aspect-video w-full rounded-xl" /\>  
            \<Skeleton className="h-5 w-3/4" /\>  
            \<Skeleton className="h-4 w-1/2" /\>  
          \</div\>  
        ))}  
      \</div\>  
    \</div\>  
  );  
}  
\`\`\`

Rules:  
\- Skeleton shapes MUST match the actual content layout  
\- Use subtle shimmer animation on skeletons  
\- Loading states must appear within 200ms of navigation  
\- Never show a blank white screen — always show structure

\# 🔒 SECTION 9: SECURITY BEST PRACTICES

\#\# 9.1 Security Rules

\- Validate ALL user input server-side using Zod schemas  
\- Sanitize HTML content before rendering (DOMPurify for user-generated content)  
\- Use \`Content-Security-Policy\` headers in \`next.config.ts\`  
\- Enable \`X-Frame-Options: DENY\` to prevent clickjacking  
\- Set \`HttpOnly\`, \`Secure\`, \`SameSite=Strict\` on all cookies  
\- Use environment variables for ALL secrets — NEVER hardcode  
\- Rate limit API routes (use middleware or upstash/ratelimit)  
\- Implement CSRF protection for mutations  
\- Use \`next-safe-action\` for type-safe server actions with validation  
\- Audit dependencies regularly: \`npm audit\`, \`npx depcheck\`

\#\# 9.2 Headers Configuration

\`\`\`typescript  
// next.config.ts  
const securityHeaders \= \[  
  { key: "X-DNS-Prefetch-Control", value: "on" },  
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },  
  { key: "X-Frame-Options", value: "DENY" },  
  { key: "X-Content-Type-Options", value: "nosniff" },  
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },  
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },  
\];  
\`\`\`

\# 🧪 SECTION 10: TESTING STRATEGY

\#\# 10.1 Testing Pyramid

\`\`\`  
                    ┌────────────┐  
                    │    E2E     │  Playwright (critical paths)  
                   ┌┴────────────┴┐  
                   │ Integration  │  Testing Library (component interactions)  
                  ┌┴──────────────┴┐  
                  │    Unit Tests   │  Vitest (utilities, hooks, pure functions)  
                  └────────────────┘  
\`\`\`

\#\# 10.2 What to Test

\`\`\`  
┌─────────────────────────────────────────────────────────────────┐  
│ Layer          │ What to Test                                    │  
├────────────────┼─────────────────────────────────────────────────┤  
│ Unit           │ Utility functions, formatters, validators,      │  
│                │ Zod schemas, custom hooks (with renderHook)     │  
├────────────────┼─────────────────────────────────────────────────┤  
│ Integration    │ Form submissions, component interactions,       │  
│                │ API route handlers, data display components     │  
├────────────────┼─────────────────────────────────────────────────┤  
│ E2E            │ Sign up/login flow, checkout, critical CTA,     │  
│                │ navigation, responsive layout                   │  
├────────────────┼─────────────────────────────────────────────────┤  
│ Visual         │ Storybook \+ Chromatic for visual regression     │  
├────────────────┼─────────────────────────────────────────────────┤  
│ Accessibility  │ axe-core integration in tests, Lighthouse CI   │  
├────────────────┼─────────────────────────────────────────────────┤  
│ Performance    │ Lighthouse CI in pipeline, bundle size checks   │  
└─────────────────────────────────────────────────────────────────┘  
\`\`\`

\# 📦 SECTION 11: RECOMMENDED TECH STACK

\#\# 11.1 Core Stack

\`\`\`  
┌──────────────────────────────────────────────────────────────┐  
│ Category            │ Technology               │ Why         │  
├─────────────────────┼──────────────────────────┼─────────────┤  
│ Framework           │ Next.js 14+ (App Router) │ Standard    │  
│ Language            │ TypeScript (strict)      │ Safety      │  
│ Styling             │ Tailwind CSS 3.4+        │ Speed       │  
│ Component System    │ shadcn/ui \+ Radix UI     │ A11y \+ DX   │  
│ Animation           │ Framer Motion 11+        │ Power       │  
│ Smooth Scroll       │ Lenis                    │ Smoothness  │  
│ State Management    │ Zustand                  │ Simplicity  │  
│ Forms               │ React Hook Form \+ Zod    │ DX \+ Valid  │  
│ Data Fetching       │ TanStack Query           │ Caching     │  
│ Icons               │ Lucide React             │ Consistency │  
│ Toasts              │ Sonner                   │ Beautiful   │  
│ Date Handling       │ date-fns                 │ Tree-shake  │  
│ Analytics           │ Vercel Analytics/Plausible│ Privacy    │  
│ Deployment          │ Vercel                   │ Optimized   │  
│ Database            │ Prisma \+ PostgreSQL      │ Type safety │  
│ Auth                │ NextAuth.js / Clerk      │ Security    │  
│ CMS (if needed)     │ Sanity / Contentlayer    │ Flexibility │  
│ Email               │ React Email \+ Resend     │ Beautiful   │  
│ File Upload         │ UploadThing              │ Simple      │  
│ Monitoring          │ Sentry                   │ Observability│  
│ Testing             │ Vitest \+ Playwright      │ Speed       │  
│ Linting             │ ESLint \+ Prettier        │ Consistency │  
│ 3D (if needed)      │ Three.js \+ R3F \+ Drei    │ WebGL       │  
│ Video               │ Mux                      │ Optimized   │  
│ Search              │ Algolia / Meilisearch    │ Speed       │  
└──────────────────────────────────────────────────────────────┘  
\`\`\`

\# 📝 SECTION 12: CODE STYLE & CONVENTIONS

\#\# 12.1 TypeScript Rules

\- Strict mode enabled (\`"strict": true\` in tsconfig)  
\- No \`any\` type — use \`unknown\` when type is truly unknown  
\- Prefer \`interface\` for object shapes, \`type\` for unions/intersections  
\- Use \`as const\` for constant values  
\- Export types separately: \`export type { ButtonProps }\`  
\- Use discriminated unions for state management  
\- Avoid enums — use const objects with \`as const\`

\`\`\`typescript  
// ✅ Good  
const STATUS \= {  
  IDLE: "idle",  
  LOADING: "loading",  
  SUCCESS: "success",  
  ERROR: "error",  
} as const;

type Status \= (typeof STATUS)\[keyof typeof STATUS\];

// ❌ Bad  
enum Status { IDLE, LOADING, SUCCESS, ERROR }  
\`\`\`

\#\# 12.2 React Patterns

\`\`\`typescript  
// ── Server Component (default) ──  
// No "use client", no hooks, no event handlers  
// Can be async, can fetch data directly  
async function ServerComponent() {  
  const data \= await fetchData();  
  return \<div\>{data.title}\</div\>;  
}

// ── Client Component (when needed) ──  
"use client";  
// Has "use client" at top  
// Uses hooks, event handlers, browser APIs  
function ClientComponent() {  
  const \[state, setState\] \= useState(false);  
  return \<button onClick={() \=\> setState(true)}\>Click\</button\>;  
}

// ── Composition Pattern (preferred) ──  
// Server component wraps client component, passes data as props  
async function Page() {  
  const data \= await fetchData();  
  return \<InteractiveWidget data={data} /\>; // Client component  
}  
\`\`\`

\#\# 12.3 CSS/Tailwind Conventions

\`\`\`typescript  
// ✅ Use cn() for conditional classes  
import { cn } from "@/lib/utils";

\<div className={cn(  
  "flex items-center gap-4 rounded-lg p-4",           // Base  
  "bg-surface border border-border",                    // Colors  
  "transition-colors duration-200",                     // Transitions  
  "hover:bg-surface-elevated hover:border-border-hover", // Hover  
  isActive && "bg-primary/10 border-primary",           // Conditional  
  className                                              // External override  
)} /\>

// ✅ Order Tailwind classes consistently:  
// 1\. Layout (flex, grid, position)  
// 2\. Sizing (w, h, max-w)  
// 3\. Spacing (p, m, gap)  
// 4\. Typography (text, font, tracking)  
// 5\. Colors (bg, text, border colors)  
// 6\. Effects (shadow, opacity, blur)  
// 7\. Borders (border, rounded)  
// 8\. Transitions (transition, duration)  
// 9\. States (hover:, focus:, active:, disabled:)  
// 10\. Responsive (sm:, md:, lg:, xl:)

// ❌ Never do  
// \- Inline styles (style={{}}) unless truly dynamic (e.g., calculated transforms)  
// \- @apply in CSS files (defeats purpose of utility-first)  
// \- \!important (fix specificity issues properly)  
// \- Custom CSS classes when Tailwind utilities exist  
\`\`\`

\#\# 12.4 Git Conventions

\`\`\`  
Commit Message Format:  
\<type\>(\<scope\>): \<description\>

Types:  
feat:     New feature  
fix:      Bug fix  
style:    UI/styling changes (no logic change)  
refactor: Code refactoring  
perf:     Performance improvement  
a11y:     Accessibility improvement  
seo:      SEO improvement  
docs:     Documentation  
test:     Tests  
chore:    Build/config changes

Examples:  
feat(hero): add parallax scroll effect with Framer Motion  
fix(nav): resolve mobile menu not closing on route change  
style(cards): improve hover state transitions  
perf(images): add blur placeholders and proper sizes attribute  
a11y(forms): add aria-describedby for error messages  
seo(blog): implement JSON-LD structured data for articles  
\`\`\`

\# 🌐 SECTION 13: INTERNATIONALIZATION (i18n)

\#\# 13.1 i18n Setup (next-intl recommended)

\`\`\`  
src/  
├── app/  
│   └── \[locale\]/              \# Locale-based routing  
│       ├── layout.tsx  
│       ├── page.tsx  
│       └── ...  
├── i18n/  
│   ├── config.ts             \# Supported locales config  
│   ├── request.ts            \# Server-side locale detection  
│   └── routing.ts            \# Routing configuration  
├── messages/                  \# Translation files  
│   ├── en.json  
│   ├── es.json  
│   ├── fr.json  
│   ├── de.json  
│   ├── ja.json  
│   └── ar.json               \# RTL language  
\`\`\`

\#\# 13.2 i18n Rules

\- Use \`next-intl\` for App Router i18n support  
\- Keep translation keys descriptive: \`hero.title\`, \`nav.about\`, \`cta.getStarted\`  
\- Support RTL layouts for Arabic/Hebrew (use \`dir="rtl"\` and logical CSS properties)  
\- Use \`Intl\` API for number/date/currency formatting  
\- Implement locale-aware SEO (hreflang tags, per-locale sitemaps)  
\- Implement language switcher in header  
\- Detect user's preferred language from Accept-Language header  
\- Store language preference in cookie  
\- Use logical CSS properties for RTL support:  
  \`\`\`css  
  /\* ✅ Use logical properties \*/  
  margin-inline-start: 1rem;   /\* instead of margin-left \*/  
  padding-inline-end: 1rem;    /\* instead of padding-right \*/  
  \`\`\`

\# 📊 SECTION 14: ANALYTICS & MONITORING

\#\# 14.1 Analytics Setup

\`\`\`typescript  
// Track these events minimum:  
const ANALYTICS\_EVENTS \= {  
  // ── Navigation ──  
  PAGE\_VIEW: "page\_view",  
  SCROLL\_DEPTH: "scroll\_depth",        // 25%, 50%, 75%, 100%

  // ── Engagement ──  
  CTA\_CLICK: "cta\_click",              // { location, text, url }  
  FEATURE\_INTERACTION: "feature\_interact", // { feature\_name }  
  VIDEO\_PLAY: "video\_play",  
  EXTERNAL\_LINK: "external\_link\_click",

  // ── Conversion ──  
  SIGNUP\_START: "signup\_start",  
  SIGNUP\_COMPLETE: "signup\_complete",  
  FORM\_SUBMIT: "form\_submit",          // { form\_name }  
  PRICING\_VIEW: "pricing\_view",

  // ── UX Quality ──  
  ERROR\_BOUNDARY: "error\_boundary\_hit", // { error, page }  
  SLOW\_RENDER: "slow\_render",          // { component, duration }  
  CLS\_SHIFT: "cls\_shift",             // { score }  
};  
\`\`\`

\#\# 14.2 Performance Monitoring

\- Use Vercel Speed Insights for real-user monitoring  
\- Set up Sentry for error tracking with source maps  
\- Monitor Core Web Vitals in production  
\- Set up alerts for performance regressions  
\- Run Lighthouse CI in pull request pipeline

\# 🏆 SECTION 15: AWARD-WINNING CHECKLIST

\#\# 15.1 What Judges Look For (Awwwards, CSSDA, FWA)

\`\`\`  
┌──────────────────────────────────────────────────────────────┐  
│ Criteria              │ Weight │ How to Excel                │  
├───────────────────────┼────────┼─────────────────────────────┤  
│ Design                │ 40%    │ Unique visual identity,     │  
│                       │        │ stunning typography,        │  
│                       │        │ cohesive color system,      │  
│                       │        │ editorial-quality layouts   │  
├───────────────────────┼────────┼─────────────────────────────┤  
│ Creativity            │ 25%    │ Novel interactions,         │  
│                       │        │ scroll-based storytelling,  │  
│                       │        │ 3D/WebGL elements,          │  
│                       │        │ custom cursor, sound design │  
├───────────────────────┼────────┼─────────────────────────────┤  
│ Usability             │ 20%    │ Intuitive navigation,       │  
│                       │        │ fast load times,            │  
│                       │        │ clear hierarchy,            │  
│                       │        │ mobile-first responsive     │  
├───────────────────────┼────────┼─────────────────────────────┤  
│ Content               │ 15%    │ Compelling copy,            │  
│                       │        │ high-quality imagery,       │  
│                       │        │ video content,              │  
│                       │        │ storytelling through scroll │  
└──────────────────────────────────────────────────────────────┘  
\`\`\`

\#\# 15.2 Award-Winning Feature Checklist

\#\#\# 🎨 Visual Excellence  
\- \[ \] Custom design system (not default Bootstrap/Material look)  
\- \[ \] Unique grid/layout that breaks conventions purposefully  
\- \[ \] High-quality custom illustrations or 3D renders  
\- \[ \] Cinematic hero section with movement  
\- \[ \] Sophisticated dark mode with appropriate contrast  
\- \[ \] Custom iconography system  
\- \[ \] Grain/noise/texture overlay for depth (subtle)  
\- \[ \] Gradient meshes or aurora effects for backgrounds  
\- \[ \] Mix of editorial serif \+ clean sans-serif typography

\#\#\# ✨ Creative Interactions  
\- \[ \] Custom cursor that morphs based on context  
\- \[ \] Magnetic hover effects on buttons/links  
\- \[ \] Text reveal animations (letter-by-letter, line-by-line, or mask reveal)  
\- \[ \] Image reveal animations (clip-path, parallax, or scale)  
\- \[ \] Scroll-driven narrative (content transforms as you scroll)  
\- \[ \] Horizontal scroll section (on desktop)  
\- \[ \] Infinite marquee/ticker for logos, testimonials, or keywords  
\- \[ \] Parallax depth layers  
\- \[ \] 3D elements (Three.js / Spline) if appropriate  
\- \[ \] Smooth page transitions between routes  
\- \[ \] Interactive elements that respond to mouse position  
\- \[ \] Easter eggs or hidden interactions  
\- \[ \] Sound design for key interactions (optional, with toggle)

\#\#\# 📱 Technical Excellence  
\- \[ \] 95+ Lighthouse score (all categories)  
\- \[ \] Sub-2s load time on 3G  
\- \[ \] Zero CLS (no layout shifts)  
\- \[ \] Instant page transitions (prefetching)  
\- \[ \] Works offline (service worker, if appropriate)  
\- \[ \] Works without JavaScript (progressive enhancement)  
\- \[ \] Full keyboard accessibility  
\- \[ \] Screen reader tested  
\- \[ \] Perfect responsive design (no breakpoint bugs)  
\- \[ \] Reduced motion support  
\- \[ \] RTL language support  
\- \[ \] Print stylesheet (if content-heavy)

\#\#\# 📝 Content & UX  
\- \[ \] Clear value proposition in first viewport  
\- \[ \] Compelling storytelling through scroll  
\- \[ \] Social proof (testimonials, logos, stats)  
\- \[ \] Clear CTAs with visual hierarchy  
\- \[ \] Helpful 404 page with personality  
\- \[ \] Contact form with great validation UX  
\- \[ \] Beautiful email templates (React Email)  
\- \[ \] Micro-copy that shows personality

\# ⚙️ SECTION 16: NEXT.JS CONFIGURATION

\`\`\`typescript  
// next.config.ts  
import type { NextConfig } from "next";

const nextConfig: NextConfig \= {  
  // ── Performance ──  
  reactStrictMode: true,  
  poweredByHeader: false,

  // ── Images ──  
  images: {  
    formats: \["image/avif", "image/webp"\],  
    deviceSizes: \[640, 750, 828, 1080, 1200, 1920, 2048\],  
    imageSizes: \[16, 32, 48, 64, 96, 128, 256, 384\],  
    remotePatterns: \[  
      {  
        protocol: "https",  
        hostname: "\*\*.your-cdn.com",  
      },  
    \],  
  },

  // ── Experimental Features ──  
  experimental: {  
    optimizePackageImports: \[  
      "lucide-react",  
      "framer-motion",  
      "date-fns",  
      "@radix-ui/react-icons",  
    \],  
  },

  // ── Security Headers ──  
  async headers() {  
    return \[  
      {  
        source: "/(.\*)",  
        headers: \[  
          { key: "X-DNS-Prefetch-Control", value: "on" },  
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },  
          { key: "X-Frame-Options", value: "DENY" },  
          { key: "X-Content-Type-Options", value: "nosniff" },  
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },  
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },  
        \],  
      },  
    \];  
  },

  // ── Redirects ──  
  async redirects() {  
    return \[  
      // Add your redirects here  
    \];  
  },

  // ── Webpack customization (if needed) ──  
  webpack: (config) \=\> {  
    // GLSL shader support (for Three.js)  
    config.module.rules.push({  
      test: /\\.(glsl|vs|fs|vert|frag)$/,  
      use: \["raw-loader", "glslify-loader"\],  
    });

    // SVG as React components  
    config.module.rules.push({  
      test: /\\.svg$/,  
      use: \["@svgr/webpack"\],  
    });

    return config;  
  },  
};

export default nextConfig;  
\`\`\`

\# 🚫 SECTION 17: ABSOLUTE DON'TS (RED FLAGS)

NEVER DO ANY OF THESE:

\#\#\# Code Quality  
\- ❌ Use \`any\` type in TypeScript  
\- ❌ Use \`var\` — always \`const\` or \`let\`  
\- ❌ Use \`==\` — always \`===\`  
\- ❌ Leave \`console.log\` in production  
\- ❌ Use \`index\` as key in mapped lists (use unique ID)  
\- ❌ Mutate state directly  
\- ❌ Use \`dangerouslySetInnerHTML\` without sanitization  
\- ❌ Ignore TypeScript errors with \`@ts-ignore\` (use \`@ts-expect-error\` with comment if truly needed)  
\- ❌ Write components over 300 lines (decompose them)

\#\#\# UI/UX  
\- ❌ Use \`alert()\`, \`confirm()\`, or \`prompt()\` — use custom UI  
\- ❌ Use browser default form validation UI — use custom validation  
\- ❌ Block the UI without a loading indicator  
\- ❌ Use placeholder text as form labels  
\- ❌ Have buttons with vague labels ("Click Here", "Submit")  
\- ❌ Use low-contrast text (below WCAG AA)  
\- ❌ Auto-play video/audio without user consent  
\- ❌ Use horizontal scroll on mobile (unless intentional carousel)  
\- ❌ Stack more than 3 modals/overlays  
\- ❌ Remove focus outlines without replacement  
\- ❌ Use text in images (not accessible, not translatable)

\#\#\# Performance  
\- ❌ Import entire libraries (\`import \_ from "lodash"\`)  
\- ❌ Use \`\<img\>\` tags — use \`next/image\`  
\- ❌ Use \`\<a\>\` tags for internal links — use \`next/link\`  
\- ❌ Load fonts from external CDN in production  
\- ❌ Use unoptimized images (\>500KB)  
\- ❌ Add \`"use client"\` to components that don't need it  
\- ❌ Fetch data in \`useEffect\` (use Server Components or TanStack Query)  
\- ❌ Create layout shifts (always set dimensions on images/videos)  
\- ❌ Use CSS \`@import\` (blocks parallel loading)  
\- ❌ Bundle moment.js (use date-fns instead)

\#\#\# SEO  
\- ❌ Have duplicate \`\<title\>\` or \`\<meta description\>\` across pages  
\- ❌ Use generic alt text ("image", "photo", "screenshot")  
\- ❌ Forget OG images on any page  
\- ❌ Have pages with no \`\<h1\>\`  
\- ❌ Skip heading levels (h1 → h3, missing h2)  
\- ❌ Use JavaScript-only navigation (must work without JS)  
\- ❌ Block search engine crawling of important pages

\# ✅ SECTION 18: PR/CODE REVIEW CHECKLIST

Before any code is merged, verify:

\#\#\# Functionality  
\- \[ \] Feature works as specified  
\- \[ \] Edge cases handled (empty, error, overflow, max-length)  
\- \[ \] No regressions in existing features

\#\#\# UI Quality  
\- \[ \] Matches design system (colors, spacing, typography from tokens)  
\- \[ \] All interactive states implemented (hover, focus, active, disabled, loading)  
\- \[ \] Responsive at all breakpoints (375, 768, 1024, 1280, 1536\)  
\- \[ \] Dark mode works correctly  
\- \[ \] Animations respect prefers-reduced-motion  
\- \[ \] No layout shifts (CLS \= 0\)

\#\#\# Code Quality  
\- \[ \] TypeScript strict — no type errors  
\- \[ \] No ESLint warnings  
\- \[ \] Components under 250 lines  
\- \[ \] Proper error boundaries  
\- \[ \] Loading/error/empty states for data-dependent UI  
\- \[ \] No hardcoded strings (use constants or i18n)

\#\#\# Accessibility  
\- \[ \] Keyboard navigable  
\- \[ \] Screen reader tested (or semantic HTML verified)  
\- \[ \] Color contrast passes WCAG AA  
\- \[ \] Focus indicators visible  
\- \[ \] ARIA attributes correct

\#\#\# Performance  
\- \[ \] Images use next/image with proper sizes  
\- \[ \] Heavy components are dynamically imported  
\- \[ \] No unnecessary "use client"  
\- \[ \] Bundle size impact assessed  
\- \[ \] Lighthouse score maintained at 95+

\#\#\# SEO  
\- \[ \] Page has unique title and description  
\- \[ \] OG metadata present  
\- \[ \] Semantic heading hierarchy  
\- \[ \] Structured data where applicable