"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";
import { SignatureFooter } from "@/components/sections/signature-footer";

export default function ContactPage() {
    return (
        <div className="w-full min-h-screen bg-black-rich">
            <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 md:pt-48 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
                    {/* Left Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <ContactInfo />
                    </motion.div>

                    {/* Right Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>

            <SignatureFooter />
        </div>
    );
}
