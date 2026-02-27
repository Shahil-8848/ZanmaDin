"use client";

import { motion } from "framer-motion";
import { Package, Truck, Smile, ShieldCheck } from "lucide-react";

const reasons = [
    {
        icon: <Package className="w-10 h-10 text-gold" />,
        title: "Premium Packaging",
        description: "Every gift is wrapped with luxury materials to ensure a wow effect.",
    },
    {
        icon: <Truck className="w-10 h-10 text-gold" />,
        title: "On-Time Delivery",
        description: "We value your time and emotions, ensuring surprises arrive exactly when planned.",
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-gold" />,
        title: "Trusted Service",
        description: "Thousands of happy customers trust us with their most precious moments.",
    },
    {
        icon: <Smile className="w-10 h-10 text-gold" />,
        title: "Personalized Touch",
        description: "We add custom notes and thoughtful details to every package.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 px-6 bg-white/5">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-reggae">Why Choose Zanmadin</h2>
                    <p className="text-xl text-white/50 font-tenor">Providing excellence in every celebration.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {reasons.map((reason, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/5 hover:bg-gold/10 hover:border-gold transition-brand text-center space-y-6"
                        >
                            <div className="flex justify-center transform transition-transform group-hover:scale-110">
                                {reason.icon}
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-2xl font-reggae text-white">{reason.title}</h3>
                                <p className="text-white/60 font-tenor leading-relaxed">{reason.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
