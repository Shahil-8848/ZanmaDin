"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ImageSequenceProps {
    frameCount: number;
    directory: string;
}

export default function ImageSequence({ frameCount, directory }: ImageSequenceProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const text1Ref = useRef<HTMLDivElement>(null);
    const text2Ref = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            const frameNumber = i.toString().padStart(3, "0");
            img.src = `${directory}/frame_${frameNumber}_delay-0.041s.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setImages(loadedImages);
                }
            };
            loadedImages.push(img);
        }
    }, [frameCount, directory]);

    useEffect(() => {
        if (images.length !== frameCount || !canvasRef.current || !containerRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        if (!context) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const sequence = { frame: 0 };

        const render = () => {
            const img = images[sequence.frame];
            if (img) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
                const x = (canvas.width / 2) - (img.width / 2) * scale;
                const y = (canvas.height / 2) - (img.height / 2) * scale;
                context.drawImage(img, x, y, img.width * scale, img.height * scale);
            }
        };

        render();

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=600%", // Focused scroll distance
                scrub: 4, // High smoothness as requested
                pin: true,
                anticipatePin: 1,
            },
        });

        tl.to(sequence, {
            frame: frameCount - 1,
            snap: "frame",
            ease: "none",
            onUpdate: render,
            duration: 5,
        });

        // Instant text transitions
        // Section 1: Precious Moments
        tl.fromTo(text1Ref.current,
            { opacity: 0, y: 30, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" },
            "0.1"
        );
        tl.to(text1Ref.current, { opacity: 0, y: -30, duration: 0.6, ease: "power2.in" }, "1.2");

        // Section 2: Celebrate Beautifully (Fast reveal on white transition)
        tl.fromTo(text2Ref.current,
            { opacity: 0, y: 30, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power2.out" },
            "1.8"
        );

        // Transition to WHITE background
        tl.to("#ending-bg", { opacity: 1, duration: 1, ease: "sine.inOut" }, "2");

        // Canvas fade out simultaneously
        tl.to(canvasRef.current, { opacity: 0, duration: 1.5, ease: "sine.inOut" }, "2.2");

        // Hold text 2 on the clean white background, then clear for the next section
        tl.to(text2Ref.current, { opacity: 0, y: -20, duration: 0.8, ease: "power1.in" }, "4");
        tl.to("#ending-bg", { opacity: 0, duration: 0.5 }, "5"); // Clean exit

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [images, frameCount]);

    return (
        <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-primary">
            {/* The white background overlay that appears at the end */}
            <div className="absolute inset-0 bg-white opacity-0 z-0" id="ending-bg" />

            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover opacity-60 z-1" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-transparent to-primary/40 pointer-events-none z-1" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-6">
                <div ref={text1Ref} className="max-w-4xl opacity-0 transform">
                    <h2 className="text-6xl md:text-9xl font-reggae text-white leading-tight">
                        Precious <span className="text-gold">Moments</span>
                    </h2>
                    <p className="text-2xl md:text-4xl font-tenor text-white/90 mt-8">
                        Handled with care, delivered with love.
                    </p>
                </div>

                <div ref={text2Ref} className="max-w-4xl opacity-0 absolute transform">
                    <h2 className="text-5xl md:text-8xl font-reggae text-primary leading-tight">
                        Celebrate <br /> <span className="text-gold">Beautifully</span>
                    </h2>
                    <p className="text-xl md:text-2xl font-tenor text-primary/80 mt-6 max-w-xl mx-auto">
                        Zanmadin creates emotional memories that last a lifetime.
                    </p>
                </div>
            </div>
        </div>
    );
}
