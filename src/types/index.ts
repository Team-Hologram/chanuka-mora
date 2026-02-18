export interface NavItem {
    title: string;
    href: string;
    number: string;
    image?: string;
}

export interface Track {
    id: string;
    title: string;
    titleSinhala?: string;
    album: string;
    year: number;
    duration: string;
    genre: string;
    coverImage: string;
    audioPreview: string;
    description: string;
    streamingLinks: {
        spotify?: string;
        youtube?: string;
        appleMusic?: string;
        soundcloud?: string;
    };
    featured: boolean;
}

export interface Collaboration {
    id: string;
    collaborator: string;
    project: string;
    type: string;
    year: number;
    image: string;
    description: string;
}

export interface GalleryImage {
    id: string;
    src: string;
    alt: string;
    aspect: string;
    event: string;
    year: number;
}
