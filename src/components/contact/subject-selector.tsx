"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface SubjectSelectorProps {
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

const subjects = [
    "Booking & Events",
    "Collaboration",
    "Media & Press",
    "Brand Partnership",
    "Just Saying Hello"
];

export function SubjectSelector({ value, onChange, error }: SubjectSelectorProps) {
    return (
        <div className="space-y-4">
            <label className="text-xs uppercase tracking-widest text-white/40 block">
                I'm reaching out about...
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {subjects.map((subject) => (
                    <button
                        key={subject}
                        type="button"
                        onClick={() => onChange(subject)}
                        className={cn(
                            "text-left px-4 py-3 border rounded-lg transition-all duration-300 flex items-center justify-between",
                            value === subject
                                ? "border-accent-gold bg-accent-gold/10 text-white"
                                : "border-white/10 text-white/60 hover:border-white/30 hover:bg-white/5"
                        )}
                    >
                        <span className="text-sm">{subject}</span>
                        {value === subject && <Check className="w-4 h-4 text-accent-gold" />}
                    </button>
                ))}
            </div>
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
}
