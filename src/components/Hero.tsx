"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ChevronDown, MessageCircle, ShoppingBag } from "lucide-react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const title1Ref = useRef<HTMLHeadingElement>(null);
    const title2Ref = useRef<HTMLHeadingElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    const btn1Ref = useRef<HTMLAnchorElement>(null);
    const btn2Ref = useRef<HTMLAnchorElement>(null);

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
            );
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative flex flex-col items-center justify-center min-h-[70vh] px-6 pt-32 pb-20 text-center overflow-hidden"
        >
            <div className="z-10 max-w-5xl space-y-8">
                <h1 className="flex flex-col gap-2 overflow-hidden text-5xl font-extrabold md:text-8xl font-reggae">
                    <span ref={title1Ref} className="block text-white leading-tight">
                        Beautifully Packaged
                    </span>
                    <span ref={title2Ref} className="block text-gold leading-tight">
                        Celebration Moments
                    </span>
                </h1>

                <p ref={textRef} className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 font-tenor">
                    Make your loved ones feel special with premium birthday and surprise packages.
                    Whether you are in Nepal or anywhere in the world, you are just one message away from sending love.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
                    <a
                        ref={btn1Ref}
                        href="#categories"
                        className="px-10 py-5 text-lg font-bold transition-brand bg-white text-primary rounded-full hover:bg-gold hover:text-white"
                    >
                        Explore Packages
                    </a>
                    <a
                        ref={btn2Ref}
                        href="https://wa.me/yournumber"
                        className="flex items-center gap-3 px-10 py-5 text-lg font-bold border-2 border-white/30 rounded-full glass hover:border-gold transition-brand"
                    >
                        <MessageCircle size={24} className="text-gold" />
                        Order on WhatsApp
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 animate-bounce">
                <ChevronDown size={32} className="text-white/50" />
            </div>
        </section>
    );
}
