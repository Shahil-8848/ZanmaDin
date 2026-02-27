"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SecondaryBackground() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const particles: HTMLDivElement[] = [];
        const particleCount = 20;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("div");
            particle.className = "absolute rounded-full bg-gold/10 pointer-events-none";
            const size = Math.random() * 300 + 100;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.filter = "blur(100px)";

            containerRef.current.appendChild(particle);
            particles.push(particle);

            // Random initial position
            gsap.set(particle, {
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
            });

            // Continuous floating animation
            gsap.to(particle, {
                x: "+=" + (Math.random() * 400 - 200),
                y: "+=" + (Math.random() * 400 - 200),
                duration: Math.random() * 10 + 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        }

        return () => {
            particles.forEach(p => p.remove());
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-primary opacity-50"
        />
    );
}
