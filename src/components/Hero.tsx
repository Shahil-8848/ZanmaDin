"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ChevronDown, MessageCircle } from "lucide-react";

// Import local assets
// import giftMen from "@/assets/photos/giftmen.png";
import flower from "@/assets/photos/flower.png";
import MainBoard from "@/assets/photos/MainBoard.jpeg";
import giftGirl from "@/assets/photos/giftGirl.png";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const title1Ref = useRef<HTMLHeadingElement>(null);
    const title2Ref = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const btn1Ref = useRef<HTMLAnchorElement>(null);
    const btn2Ref = useRef<HTMLAnchorElement>(null);
    const bgImageRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            bgImageRef.current,
            { opacity: 0 },
            { opacity: 0.7, duration: 2, ease: "power2.inOut" },
            0
        )
            .fromTo(
                badgeRef.current,
                { y: -20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
                0.3
            )
            .fromTo(
                [title1Ref.current, title2Ref.current],
                { y: 60, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.1, ease: "power4.out", stagger: 0.18 },
                0.5
            )
            .fromTo(
                textRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                "-=0.5"
            )
            .fromTo(
                [btn1Ref.current, btn2Ref.current],
                { scale: 0.85, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.55, ease: "back.out(1.7)", stagger: 0.12 },
                "-=0.4"
            )
            .fromTo(
                imagesRef.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: "power4.out" },
                "-=0.8"
            );
    }, []);

    return (
        <section
            id="hero"
            ref={containerRef}
            className="relative flex flex-col md:flex-row items-center justify-center min-h-screen overflow-hidden bg-primary"
        >
            {/* Background Layer */}
            <div
                ref={bgImageRef}
                className="absolute inset-0 z-0 select-none mix-blend-overlay"
            >
                <Image
                    src={MainBoard}
                    alt="Celebration"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Gradient Veil */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-primary/95 via-primary/80 to-primary/95 pointer-events-none" />
            <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,68,35,0.5)_100%)] pointer-events-none" />

            {/* ─── MOBILE LAYOUT (flex-col, full width) ─── */}
            <div className="relative z-10 w-full max-w-7xl px-5 pt-16 pb-8 flex flex-col md:hidden gap-8">

                {/* Top: Text Content */}
                <div className="flex flex-col gap-4">
                    <div
                        ref={badgeRef}
                        className="inline-flex self-start px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] uppercase border border-gold/40 rounded-full backdrop-blur-sm bg-white/5 text-gold"
                    >
                        Premium Surprises
                    </div>

                    <h1 className="flex flex-col gap-1 overflow-hidden">
                        <span
                            ref={title1Ref}
                            className="block text-white leading-[1.05] font-reggae text-[clamp(2.4rem,13vw,3.5rem)] drop-shadow-2xl"
                        >
                            Beautifully<br />Packaged
                        </span>
                        <span
                            ref={title2Ref}
                            className="block text-gold leading-[1.1] italic font-reggae text-[clamp(2.4rem,13vw,3.5rem)]"
                        >
                            Celebration
                        </span>
                    </h1>

                    <p
                        ref={textRef}
                        className="text-base text-white/75 font-tenor leading-relaxed max-w-xs"
                    >
                        Crafting unforgettable moments through lovely gifts and birthday surprises.
                    </p>

                    <div className="flex flex-row gap-3 pt-1">
                        <a
                            ref={btn1Ref}
                            href="#categories"
                            className="group relative flex-1 px-5 py-3.5  text-sm font-bold transition-all duration-500 bg-white text-primary rounded-full hover:bg-gold hover:text-white active:scale-95 shadow-lg text-center overflow-hidden"
                        >
                            <span className="relative z-10">Explore</span>
                            <div className="absolute inset-0 rounded-full bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                        </a>
                        <a
                            ref={btn2Ref}
                            href="#ReminderForm"
                            className="group flex-1 flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold border border-white/25 rounded-full backdrop-blur-sm bg-white/5 hover:border-gold/50 transition-all duration-500 active:scale-95"
                        >
                            <MessageCircle size={16} className="text-gold group-hover:scale-110 transition-transform shrink-0" />
                            <span className="text-white/90 group-hover:text-white">Remind Me</span>
                        </a>
                    </div>
                </div>

                {/* Bottom: Images — side by side, full width, no overlap */}
                <div
                    ref={imagesRef}
                    className="relative w-full flex flex-row items-end justify-center gap-3 px-2"
                >
                    {/* Decorative glow */}
                    <div className="absolute top-0 right-4 w-40 h-40 bg-gold/15 rounded-full blur-2xl pointer-events-none" />

                    {/* Man with gifts — slightly taller */}
                    <div className="relative w-[48%] flex-shrink-0">
                        <div className="absolute inset-2 border border-white/10 rounded-2xl z-[-1]" />
                        <Image
                            width={300}
                            height={380}
                            src={flower}
                            alt="Flower"
                            className="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.65)]"
                            priority
                        />
                    </div>

                    {/* Girl with gifts — slightly shorter for visual rhythm */}
                    <div className="relative w-[44%] flex-shrink-0 mb-4">
                        <div className="absolute inset-2 border border-white/10 rounded-2xl z-[-1]" />
                        <Image
                            width={300}
                            height={350}
                            src={giftGirl}
                            alt="Gift Girl"
                            className="w-full h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.65)]"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* ─── DESKTOP LAYOUT (unchanged side-by-side) ─── */}
            <div className="relative z-10 w-full max-w-7xl  px-6 py-20 hidden md:flex flex-row items-center justify-between gap-12 lg:gap-20">

                {/* Content Block */}
                <div className="flex-1 space-y-10 pt-10 text-left">


                    <h1 className="flex flex-col gap-3 overflow-hidden text-5xl md:text-8xl lg:text-9xl font-reggae tracking-tight">
                        <span ref={title1Ref} className="block text-white leading-[1.1] drop-shadow-2xl ml-40">
                            Beautifully <br /> Packaged
                        </span>
                        <span ref={title2Ref} className="block text-gold text-8xl leading-[1.1] italic ml-40">
                            Celebration
                        </span>
                    </h1>
                    <div className="relative w-full max-w-[500px] z-20">
                        <div className="absolute inset-4   -top-10 -left-20 z-[-1] " />
                        <Image
                            width={300}
                            height={400}
                            src={flower}
                            alt="Gift Man"
                            className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)] absolute -top-100 -left-20"
                            priority
                        />
                    </div>
                    <p ref={textRef} className="text-xl align-center ml-40 md:text-2xl text-white/80 font-tenor leading-relaxed font-light">
                        Crafting unforgettable moments through lovely gifts and birthday surprises.
                    </p>

                    <div className="flex flex-row items-center gap-6 pt-2">
                        <a
                            ref={btn1Ref}
                            href="#categories"
                            className="group relative px-10 py-5 text-lg ml-40 font-bold transition-all duration-500 bg-white text-primary rounded-full hover:bg-gold hover:text-white hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] text-center overflow-hidden"
                        >
                            <span className="relative z-10">Explore</span>
                            <div className="absolute inset-0 rounded-full bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                        </a>
                        <a
                            ref={btn2Ref}
                            href="#ReminderForm"
                            className="group flex items-center gap-2 px-10 py-5 text-lg font-bold border border-white/20 rounded-full backdrop-blur-sm bg-white/5 hover:border-gold/50 transition-all duration-500 hover:bg-white/5 active:scale-95"
                        >
                            <MessageCircle size={22} className="text-gold group-hover:scale-110 transition-transform" />
                            <span className="text-white/90 group-hover:text-white">Remind Me</span>
                        </a>
                    </div>
                </div>

                {/* Visual Element */}
                <div
                    ref={imagesRef}
                    className="relative flex-1 flex justify-end items-center"
                >
                    <div className="absolute -top-10 -right-10 w-74 h-64 bg-gold/10 rounded-full blur-3xl animate-blob" />
                    <div className="relative w-full flex justify-end transform md:rotate-2 hover:rotate-0 transition-transform duration-700 pr-2">
                        {/* <div className="relative w-full max-w-[500px] z-20">
                            <div className="absolute inset-4 border border-white/10 rounded-[2rem] -top-100 -left-20 z-[-1] " />
                            <Image
                                width={300}
                                height={400}
                                src={flower}
                                alt="Gift Man"
                                className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)] absolute -top-100 -left-20"
                                priority
                            />
                        </div> */}
                        <div className="absolute w-full max-w-[600px] -top-70 -left-20 z-10">
                            <div className="absolute inset-4 border border-white/10 rounded-[2rem] z-[-1]" />
                            <Image
                                width={900}
                                height={750}
                                src={giftGirl}
                                alt="Gift Girl"
                                className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-30 hover:opacity-100 transition-opacity cursor-pointer z-10">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white">Scroll</span>
                <ChevronDown size={20} className="text-gold animate-bounce" />
            </div>
        </section>
    );
}