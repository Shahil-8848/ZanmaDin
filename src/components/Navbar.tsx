"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MessageCircle, ShoppingBag } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/photos/janmadinlogo.png";

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.fromTo(
            navRef.current,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.5 }
        );
    }, []);

    return (
        <nav
            ref={navRef}

            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 mx-4 mt-6 rounded-full glass transition-brand"
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
                <a href="#about" className="hover:text-gold transition-colors">About Us</a>
                <a href="#categories" className="hover:text-gold transition-colors">Surprises</a>
                <a href="#how-it-works" className="hover:text-gold transition-colors">How It Works</a>
            </div>

            <div className="flex items-center gap-4">
                <a
                    href="https://wa.me/yournumber"
                    className="flex items-center gap-2 px-6 py-2 rounded-full bg-gold text-white font-bold hover:scale-105 active:scale-95 transition-brand"
                >
                    <MessageCircle size={18} />
                    <span className="hidden sm:inline">Order Now</span>
                </a>
            </div>
        </nav>
    );
}
