"use client";

import { useState, useEffect } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollNavigation() {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [sections, setSections] = useState<HTMLElement[]>([]);

    useEffect(() => {
        // IDs of sections in the order they appear on the page
        const sectionIds = [
            "hero",
            "image-sequence",
            "about",
            "categories",
            "how-it-works",
            "why-choose-us",
            "gallery",
            "ReminderForm",
            "testimonials",
            "faq"
        ];

        const foundSections = sectionIds
            .map(id => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null);

        setSections(foundSections);

        const handleScroll = () => {
            const threshold = window.innerHeight / 2;
            let index = 0;

            for (let i = 0; i < foundSections.length; i++) {
                const rect = foundSections[i].getBoundingClientRect();
                // If the top of the section is above the middle of the viewport
                if (rect.top <= threshold) {
                    index = i;
                }
            }
            setCurrentSectionIndex(index);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (index: number) => {
        if (index >= 0 && index < sections.length) {
            sections[index].scrollIntoView({ behavior: "smooth" });
        }
    };

    const isAtTop = currentSectionIndex === 0;
    const isAtBottom = currentSectionIndex === sections.length - 1;

    return (
        <div className="fixed bottom-8 left-8 z-[100] flex flex-col gap-3">
            <AnimatePresence>
                {!isAtTop && (
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        onClick={() => scrollToSection(currentSectionIndex - 1)}
                        className="group p-3 rounded-full glass border border-gold/30 text-gold hover:bg-gold hover:text-white transition-all duration-300 shadow-lg backdrop-blur-md"
                        title="Previous Section"
                    >
                        <ChevronUp size={24} className="group-hover:scale-110 transition-transform" />
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {!isAtBottom && (
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        onClick={() => scrollToSection(currentSectionIndex + 1)}
                        className="group p-3 rounded-full glass border border-gold/30 text-gold hover:bg-gold hover:text-white transition-all duration-300 shadow-lg backdrop-blur-md"
                        title="Next Section"
                    >
                        <ChevronDown size={24} className="group-hover:scale-110 transition-transform" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}
