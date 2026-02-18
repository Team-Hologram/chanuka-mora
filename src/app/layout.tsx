import type { Metadata, Viewport } from "next";
import { fontSans, fontSerif } from "@/lib/fonts";
import { siteConfig } from "@/config/site";
import { AppProviders } from "@/providers/app-providers";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
        creator: "@chanukamora",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/images/icons/icon-192.png",
    },
    manifest: "/manifest.json",
};

export const viewport: Viewport = {
    themeColor: "#0A0A0A",
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="dark scroll-smooth">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased overflow-x-hidden",
                    fontSans.variable,
                    fontSerif.variable
                )}
            >
                <AppProviders>{children}</AppProviders>
            </body>
        </html>
    );
}
