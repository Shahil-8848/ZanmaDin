"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import feedback4 from "../assets/feedback/feedback4.jpeg"
import feedback3 from "../assets/feedback/feedback3.jpeg"
import feedback2 from "../assets/feedback/feedback2.jpeg"
import feedback1 from "../assets/feedback/feedback1.jpeg"
const reviews = [
    {
        name: "Reecha Ghimire",
        photo: feedback4,
        review: "Thankyou for your service 🙏🏻🙏🏻I am really grateful for what you did to make my mom’s birthday special🥰🥰🥰",
    },
    {
        name: "Samikshya sitoula",
        photo: feedback2,
        review: "Thank you so much making it possible in a such a short time 💗",
    },
    {
        name: "Aaisha",
        photo: feedback3,
        review: "Thank you so much sir,mam ❤️",
    },
    {
        name: "Neera thakuri",
        photo: feedback1,
        review: "thank you so much हजुरहरूको टिमलाई जति धन्यवाद भन्दापनि कम हुने हजुरहरूको सर्भिस एकदम राम्रो छिटोभन्दा छिटो पुर्याउनुभयो र मेरो छोरीको अनुहारमा जुन खुसी देखे मैले। हजुरहरूको सबभन्दा धेरै मेहनत छ यसमा मनदेखि नै धन्यवाद। सम्पूर्ण टिमलाई 🙏🏻🙏🏻🙏🏻❤️❤️",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 px-6">
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
                                <Image
                                    src={rev.photo}
                                    alt={rev.name}
                                    width={64}
                                    height={64}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-gold"
                                />
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
