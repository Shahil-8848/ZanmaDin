"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
    {
        name: "Sita Sharma",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
        review: "Amazing experience! The surprise package for my mom's birthday was absolutely beautiful. The premium packaging really made it feel special.",
    },
    {
        name: "Sameer Raut",
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
        review: "Ordering from abroad was so easy. Zanmadin handled everything with care. Highly recommended for anyone wanting to send love back home to Nepal.",
    },
    {
        name: "Preeti Thapa",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
        review: "The delivery was on time and the personalized touch was exactly what I wanted. Thank you for making our anniversary extra special!",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-reggae">Customer Stories</h2>
                    <p className="text-xl text-white/50 font-tenor">Real moments, real emotions.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((rev, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="relative p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6"
                        >
                            <Quote className="absolute top-6 right-8 text-gold/20 w-12 h-12" />

                            <div className="flex items-center gap-4">
                                <img src={rev.photo} alt={rev.name} className="w-16 h-16 rounded-full object-cover border-2 border-gold" />
                                <div>
                                    <h4 className="text-xl font-bold font-reggae">{rev.name}</h4>
                                    <div className="flex text-gold">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                    </div>
                                </div>
                            </div>

                            <p className="text-white/70 font-tenor italic relative z-10">"{rev.review}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
