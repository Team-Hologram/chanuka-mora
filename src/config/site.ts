export const siteConfig = {
    name: "Chanuka Mora",
    description: "Official portfolio of Sri Lankan singer, songwriter, and artist Chanuka Mora.",
    url: "https://chanukamora.com",
    ogImage: "https://chanukamora.com/og.jpg",
    links: {
        twitter: "https://twitter.com/chanukamora",
        github: "https://github.com/chanukamora",
    },
    keywords: [
        "Chanuka Mora",
        "Sri Lankan Singer",
        "Sinhala Pop",
        "Musician",
        "Artist Portfolio",
    ],
    author: "Chanuka Mora",
} as const;

export type SiteConfig = typeof siteConfig;
