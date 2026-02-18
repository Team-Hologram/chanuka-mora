/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.unsplash.com", "plus.unsplash.com"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    experimental: {
        // serverActions: true, // Enabled by default in Next.js 14
    }
};

export default nextConfig;
