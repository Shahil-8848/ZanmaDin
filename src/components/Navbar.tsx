"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MessageCircle, Menu, X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/photos/janmadinlogo.png";

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        gsap.fromTo(
            navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.5 }
        );
    }, []);

    const navLinks = [
        { name: "About Us", href: "#about" },
        { name: "Surprises", href: "#categories" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Moments", href: "#gallery" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav
                ref={navRef}
                className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 py-4 mx-4 mt-6 rounded-full glass border border-white/10"
            >
                <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full">
                        <Image
                            src={logo}
                            alt="Zanmadin Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span
                        className="text-2xl md:text-5xl font-black tracking-[-0.05em] font-playfair text-[#FDE68A] uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
                    >
                        Zanmadin
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8 font-medium">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="hover:text-gold transition-colors font-tenor tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    <a
                        href="https://wa.me/9779810123220"
                        className="flex items-center gap-2 px-4 md:px-6 py-2 rounded-full bg-gold text-white font-bold hover:scale-105 active:scale-95 transition-brand text-sm md:text-base"
                    >
                        <MessageCircle size={18} />
                        <span className="hidden sm:inline">Order Now</span>
                    </a>

                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 text-white hover:text-gold transition-colors"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 md:hidden bg-primary/95 backdrop-blur-xl flex flex-col items-center justify-center pt-20"
                    >
                        <div className="flex flex-col items-center gap-8">
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-3xl font-reggae text-white hover:text-gold transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
