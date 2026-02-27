"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Send, PackageOpen } from "lucide-react";

export default function HowItWorks() {
    const steps = [
        {
            title: "Choose Your Package",
            icon: <span className="text-4xl">1</span>,
            description: "Select from our curated range of birthday, romantic, or family surprise packages.",
        },
        {
            title: "Send Details on WhatsApp",
            icon: <span className="text-4xl">2</span>,
            description: "Tell us the date, location, and any special details you want to add.",
        },
        {
            title: "We Prepare & Deliver",
            icon: <span className="text-4xl">3</span>,
            description: "Relax! We meticulously prepare and deliver your surprise with premium care.",
        },
    ];

    return (
        <section id="how-it-works" className="py-24 px-6 bg-[#074423]">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-reggae">How It Works</h2>
                    <p className="text-xl text-white/50 font-tenor">Simple. Fast. Reliable.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {/* Connecting line */}
                    <div className="hidden md:block absolute top-[25%] left-[20%] right-[20%] h-[2px] border-t-2 border-dashed border-gold/30 z-0" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="relative group flex flex-col items-center text-center space-y-6 z-10"
                        >
                            <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center text-white font-reggae shadow-lg shadow-gold/20 group-hover:scale-110 transition-brand">
                                {step.icon}
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-reggae text-white">{step.title}</h3>
                                <p className="text-white/60 font-tenor leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
