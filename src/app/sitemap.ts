import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        "",
        "/about",
        "/music",
        "/collaborations",
        "/contact",
    ];

    return routes.map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
    }));
}
