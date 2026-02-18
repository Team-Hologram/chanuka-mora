"use client";

import { useState, useEffect, useRef } from "react";
import { useUIStore } from "@/stores/ui-store";

interface AudioPlayerState {
    playing: boolean;
    duration: number;
    currentTime: number;
    volume: number;
    muted: boolean;
}

export function useAudioPlayer(src: string, trackId: string) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [state, setState] = useState<AudioPlayerState>({
        playing: false,
        duration: 0,
        currentTime: 0,
        volume: 1,
        muted: false,
    });

    const { currentTrackId, isAudioPlaying, playTrack, pauseTrack } = useUIStore();

    // Initialize audio object
    useEffect(() => {
        const audio = new Audio(src);
        audioRef.current = audio;

        // Add event listeners
        const setAudioData = () => {
            setState(prev => ({ ...prev, duration: audio.duration }));
        };

        const setAudioTime = () => {
            setState(prev => ({ ...prev, currentTime: audio.currentTime }));
        };

        const setAudioEnded = () => {
            setState(prev => ({ ...prev, playing: false }));
            if (currentTrackId === trackId) {
                pauseTrack();
            }
        };

        audio.addEventListener('loadedmetadata', setAudioData);
        audio.addEventListener('timeupdate', setAudioTime);
        audio.addEventListener('ended', setAudioEnded);

        return () => {
            audio.pause();
            audio.removeEventListener('loadedmetadata', setAudioData);
            audio.removeEventListener('timeupdate', setAudioTime);
            audio.removeEventListener('ended', setAudioEnded);
        };
    }, [src, trackId, currentTrackId, pauseTrack]);

    // Sync with global store
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (currentTrackId === trackId && isAudioPlaying) {
            audio.play().catch(e => console.error("Playback failed", e));
            setState(prev => ({ ...prev, playing: true }));
        } else {
            audio.pause();
            setState(prev => ({ ...prev, playing: false }));
        }
    }, [currentTrackId, isAudioPlaying, trackId]);

    const toggle = () => {
        if (state.playing) {
            pauseTrack();
        } else {
            playTrack(trackId);
        }
    };

    const seek = (time: number) => {
        const audio = audioRef.current;
        if (audio) {
            audio.currentTime = time;
            setState(prev => ({ ...prev, currentTime: time }));
        }
    };

    return {
        playing: state.playing,
        duration: state.duration,
        currentTime: state.currentTime,
        toggle,
        seek,
    };
}
