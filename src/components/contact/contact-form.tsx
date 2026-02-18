"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { SubjectSelector } from "./subject-selector";
import { cn } from "@/lib/utils";

export function ContactForm() {
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    const subject = watch("subject");

    const onSubmit = async (data: ContactFormData) => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Failed to send message");

            setIsSuccess(true);
            reset();

            // Reset success state after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000);
        } catch (error) {
            console.error(error);
            // Ideally show a toast error here
        }
    };

    return (
        <div className="relative">
            <AnimatePresence mode="wait">
                {isSuccess ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex flex-col items-center justify-center py-20 text-center space-y-6 bg-white/5 rounded-lg border border-white/10"
                    >
                        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                            <CheckCircle2 className="w-8 h-8 text-green-500" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-serif text-white">Message Sent</h3>
                            <p className="text-white/50 mt-2">Thank you for reaching out. I'll get back to you soon.</p>
                        </div>
                        <button
                            onClick={() => setIsSuccess(false)}
                            className="mt-8 text-sm uppercase tracking-widest text-white/40 hover:text-white transition-colors"
                        >
                            Send Another
                        </button>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-12"
                    >
                        {/* Name Input */}
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs uppercase tracking-widest text-white/40 block">
                                Your Name
                            </label>
                            <input
                                id="name"
                                {...register("name")}
                                className="w-full bg-transparent border-b border-white/10 py-4 text-xl md:text-2xl text-white font-serif placeholder:text-white/10 focus:outline-none focus:border-white transition-colors"
                                placeholder="John Doe"
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                        </div>

                        {/* Email Input */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs uppercase tracking-widest text-white/40 block">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                {...register("email")}
                                className="w-full bg-transparent border-b border-white/10 py-4 text-xl md:text-2xl text-white font-serif placeholder:text-white/10 focus:outline-none focus:border-white transition-colors"
                                placeholder="john@example.com"
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                        </div>

                        {/* Subject Selector */}
                        <SubjectSelector
                            value={subject}
                            onChange={(val) => setValue("subject", val, { shouldValidate: true })}
                            error={errors.subject?.message}
                        />

                        {/* Message Input */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs uppercase tracking-widest text-white/40 block">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                {...register("message")}
                                rows={4}
                                className="w-full bg-transparent border-b border-white/10 py-4 text-lg text-white/80 placeholder:text-white/10 focus:outline-none focus:border-white transition-colors resize-none"
                                placeholder="Tell me about your project..."
                            />
                            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group w-full md:w-auto flex items-center gap-4 py-4 pr-8 border-b border-white/20 hover:border-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="text-sm uppercase tracking-widest text-white group-hover:text-accent-gold transition-colors">
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </span>
                            {isSubmitting ? (
                                <Loader2 className="w-4 h-4 text-white animate-spin" />
                            ) : (
                                <ArrowRight className="w-4 h-4 text-white group-hover:text-accent-gold group-hover:translate-x-1 transition-all" />
                            )}
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
