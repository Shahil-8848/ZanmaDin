"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ChevronDown, MessageCircle } from "lucide-react";

// Import local assets
import giftMen from "@/assets/photos/giftmen.png";
import giftWomen from "@/assets/photos/giftWomen.jpg";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const title1Ref = useRef<HTMLHeadingElement>(null);
    const title2Ref = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const btn1Ref = useRef<HTMLAnchorElement>(null);
    const btn2Ref = useRef<HTMLAnchorElement>(null);
    const bgImageRef = useRef<HTMLDivElement>(null);
    const menImageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            [title1Ref.current, title2Ref.current],
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", stagger: 0.2 }
        )
            .fromTo(
                textRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                "-=0.6"
            )
            .fromTo(
                [btn1Ref.current, btn2Ref.current],
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)", stagger: 0.1 },
                "-=0.4"
            )
            .fromTo(
                bgImageRef.current,
                { opacity: 0 },
                { opacity: 0.7, duration: 2, ease: "power2.inOut" },
                0
            )
            .fromTo(
                menImageRef.current,
                { x: typeof window !== "undefined" && window.innerWidth < 768 ? 50 : 100, opacity: 0 },
                { x: 0, opacity: 1, duration: 1.5, ease: "power4.out" },
                "-=1"
            );
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative flex items-center justify-center min-h-screen px-6 py-20 overflow-hidden bg-primary"
        >
            {/* Background Layer: Subtle & Deep */}
            <div
                ref={bgImageRef}
                className="absolute inset-0 z-0 select-none opacity-40 mix-blend-overlay"
            >
                <Image
                    src={giftWomen}
                    alt="Celebration"
                    fill
                    className="object-cover scale-110 blur-[2px]"
                    priority
                />
            </div>

            {/* Sophisticated Gradient Veil */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-primary/95 via-primary/80 to-primary pointer-events-none" />
            <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,68,35,0.4)_100%)]" />

            <div className="relative z-10 w-full max-w-7xl pt-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Content Block: Elegant & Focused */}
                    <div className="flex-1 space-y-8 md:space-y-10 text-center md:text-left">
                        <div className="inline-block px-4 py-1.5 mb-2 text-xs md:text-sm font-bold tracking-[0.2em] uppercase border border-gold/30 rounded-full glass text-gold animate-pulse">
                            Premium Surprises
                        </div>

                        <h1 className="flex flex-col gap-1 md:gap-3 overflow-hidden text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-reggae tracking-tight">
                            <span ref={title1Ref} className="block text-white leading-[1.1] drop-shadow-2xl">
                                Beautifully <br className="hidden md:block" /> Packaged
                            </span>
                            <span ref={title2Ref} className="block text-gold leading-[1.1] italic">
                                Celebration
                            </span>
                        </h1>

                        <p ref={textRef} className="max-w-md mx-auto md:mx-0 text-lg md:text-2xl text-white/80 font-tenor leading-relaxed font-light">
                            Crafting unforgettable moments through handcrafted gift collections and luxury surprises.
                        </p>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center md:justify-start gap-5 md:gap-8 pt-4">
                            <a
                                ref={btn1Ref}
                                href="#categories"
                                className="group relative px-10 py-5 text-lg font-bold transition-all duration-500 bg-white text-primary rounded-full hover:bg-gold hover:text-white hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] text-center"
                            >
                                <span className="relative z-10">Explore Collection</span>
                                <div className="absolute inset-0 rounded-full bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                            </a>
                            <a
                                ref={btn2Ref}
                                href="https://wa.me/yournumber"
                                className="group flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold border border-white/20 rounded-full glass hover:border-gold/50 transition-all duration-500 hover:bg-white/5 active:scale-95 text-center"
                            >
                                <MessageCircle size={24} className="text-gold group-hover:scale-110 transition-transform" />
                                <span className="text-white/90 group-hover:text-white">Order via WhatsApp</span>
                            </a>
                        </div>
                    </div>

                    {/* Visual Element: Artistic & Dynamic */}
                    <div
                        ref={menImageRef}
                        className="relative w-full md:w-[45%] lg:w-[40%] flex justify-center md:justify-end items-center"
                    >
                        {/* Decorative Rings/Blobs for Depth */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-blob" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl animate-blob animation-delay-2000" />

                        <div className="relative w-full aspect-[4/5] max-w-[340px] sm:max-w-[400px] md:max-w-none transform md:rotate-2 hover:rotate-0 transition-transform duration-700">
                            {/* Premium Frame Effect */}
                            <div className="absolute inset-4 border border-white/10 rounded-[2rem] z-[-1]" />
                            <Image
                                src={giftMen}
                                alt="Gift Surprise"
                                className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)] z-10"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 hover:opacity-100 transition-opacity cursor-pointer">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Scroll</span>
                <ChevronDown size={24} className="text-gold animate-bounce" />
            </div>
        </section>
    );
}
