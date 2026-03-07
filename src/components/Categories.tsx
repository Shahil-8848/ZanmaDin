"use client";

import { motion } from "framer-motion";
import { Heart, Gift, Users, Star } from "lucide-react";
import Image from "next/image";
import giftset from "../assets/whatsAppPics/giftset.jpeg";
import giftset2 from "../assets/whatsAppPics/giftset2.jpeg";
import giftset3 from "../assets/whatsAppPics/giftset3.jpeg";
import giftflower from "../assets/whatsAppPics/giftflower.jpeg";
const categories = [
    {
        title: "Birthday Surprises",
        description: "Beautiful birthday packages with cake, gifts, and premium packaging.",
        icon: <Gift className="w-8 h-8 text-gold" />,
        img: giftset,
    },
    {
        title: "Romantic Surprises",
        description: "Festival gift hampers with Special celebration packaging",
        icon: <Heart className="w-8 h-8 text-gold" />,
        img: giftflower,
    },
    {
        title: "For Mom & Family",
        description: "Thoughtful appreciation gifts for family celebrations.",
        icon: <Users className="w-8 h-8 text-gold" />,
        img: giftset2,
    },
    {
        title: "Festival Hampers",
        description: "Special festive celebration gift packages.",
        icon: <Star className="w-8 h-8 text-gold" />,
        img: giftset3,
    },
];

export default function Categories() {
    return (
        <section id="categories" className="py-24 px-6">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-reggae">Our Celebration Categories</h2>
                    <p className="text-xl text-white/60 font-tenor">Choose the perfect package for your special moment.</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative flex flex-col bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-gold transition-brand"
                        >
                            <div className="aspect-[4/5] relative overflow-hidden">
                                <Image
                                    src={cat.img}
                                    alt={cat.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 md:grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-6 left-6 p-4 rounded-2xl glass backdrop-blur-sm z-10">
                                    {cat.icon}
                                </div>
                            </div>

                            <div className="p-8 space-y-2">
                                <h3 className="text-2xl font-reggae text-gold">{cat.title}</h3>
                                <p className="text-white/70 font-tenor leading-relaxed">{cat.description}</p>
                                <button className="pt-4 text-sm font-bold uppercase tracking-widest text-white hover:text-gold transition-colors">
                                    Explore Details →
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
