import { HeroCinematic } from "@/components/sections/hero-cinematic";
import { FeaturedMusic } from "@/components/sections/featured-music";
import { CollaborationsPreview } from "@/components/sections/collaborations-preview";
import { GalleryScattered } from "@/components/sections/gallery-scattered";
import { SignatureFooter } from "@/components/sections/signature-footer";

export default function Home() {
    return (
        <div className="flex flex-col w-full">
            <HeroCinematic />
            <FeaturedMusic />
            <CollaborationsPreview />
            <GalleryScattered />
            <SignatureFooter />
        </div>
    );
}
