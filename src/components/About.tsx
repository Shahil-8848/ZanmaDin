"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-12 bg-white/5">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative rounded-2xl overflow-hidden glass p-8 flex flex-col justify-center gap-6"
                >
                    <h2 className="text-4xl md:text-5xl font-reggae text-gold">ABOUT US</h2>
                    <div className="space-y-4 text-lg font-tenor text-white/80 leading-relaxed">
                        <p>
                            Zanmadin was created with one simple belief — <strong>every celebration deserves to feel special</strong>.
                        </p>
                        <p>
                            We focus on beautifully designed surprise and gift packages that help people express love, appreciation, and happiness in meaningful ways.
                        </p>
                        <p>
                            At Zanmadin, we carefully prepare each celebration package with premium presentation, thoughtful details, and reliable service, so your special moments feel truly memorable.
                        </p>
                    </div>
                    <div className="w-20 h-1 bg-gold rounded-full mt-2" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <h3 className="text-3xl font-reggae">Gifts are Emotions</h3>
                        <p className="text-lg text-white/80 font-tenor leading-relaxed">
                            We believe gifts are not just products — they are emotions. At Zanmadin, we make every gift special by adding thoughtful surprises and creating beautiful emotional moments for your loved ones.
                        </p>
                    </div>

                    <div className="space-y-4 border-l-2 border-gold pl-6">
                        <p className="text-lg text-white/80 font-tenor leading-relaxed">
                            Whether you are in Nepal or in any corner of the world, we help you express your feelings through carefully prepared celebration packages delivered with care.
                        </p>
                        <p className="text-lg text-white/80 font-tenor leading-relaxed">
                            We understand that life often takes us far from the people who matter most. Different cities. Different countries. Sometimes even different time zones. But love, appreciation, and celebration should never feel far away.
                        </p>
                    </div>

                    <p className="text-2xl font-reggae text-gold mt-6 tracking-wide">
                        Zanmadin — <span className="text-white italic">Celebrate Beautifully</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
