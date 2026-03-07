"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "How do I place an order?",
        answer: "It's simple! Choose your package and click 'Order on WhatsApp' to send us the details. We'll handle the rest.",
    },
    {
        question: "How long does delivery take?",
        answer: "We usually need 24-48 hours notice for custom packages, but we also offer same-day delivery for select items in Kathmandu valley.",
    },
    {
        question: "Can I pay from abroad?",
        answer: "Yes! We accept various international payment methods, including credit cards and wire transfers, making it easy for you to send gifts from anywhere.",
    },
    {
        question: "Do you offer personalized notes?",
        answer: "Absolutely! Every package comes with a beautifully handwritten or printed note of your choice to add that personal touch.",
    },
    {
        question: "Delivery Area for the packages?",
        answer: "Currently, we deliver packages to all parts of Jhapa, Nepal.",
    },
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 px-6 bg-white/5">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-reggae">Frequently Asked Questions</h2>
                    <p className="text-xl text-white/50 font-tenor">Everything you need to know about our service.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border-b border-white/10">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full py-6 flex items-center justify-between text-left group"
                            >
                                <span className="text-xl font-bold font-tenor group-hover:text-gold transition-colors">{faq.question}</span>
                                <Plus className={`w-6 h-6 text-gold transition-transform duration-300 ${openIndex === idx ? "rotate-45" : ""}`} />
                            </button>
                            {openIndex === idx && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    className="pb-6"
                                >
                                    <p className="text-white/60 font-tenor leading-relaxed">{faq.answer}</p>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
