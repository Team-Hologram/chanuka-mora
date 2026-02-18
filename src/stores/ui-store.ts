import { create } from 'zustand';

interface UIState {
    isMenuOpen: boolean;
    toggleMenu: () => void;
    closeMenu: () => void;

    isAudioPlaying: boolean;
    currentTrackId: string | null;
    playTrack: (id: string) => void;
    pauseTrack: () => void;

    cursorVariant: 'default' | 'text' | 'button' | 'view' | 'play';
    setCursorVariant: (variant: UIState['cursorVariant']) => void;
}

export const useUIStore = create<UIState>((set) => ({
    isMenuOpen: false,
    toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
    closeMenu: () => set({ isMenuOpen: false }),

    isAudioPlaying: false,
    currentTrackId: null,
    playTrack: (id) => set({ isAudioPlaying: true, currentTrackId: id }),
    pauseTrack: () => set({ isAudioPlaying: false }),

    cursorVariant: 'default',
    setCursorVariant: (variant) => set({ cursorVariant: variant }),
}));
