"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Importing images from assets/whatsAppPics
import giftflower from "@/assets/whatsAppPics/giftflower.jpeg";
import giftset from "@/assets/whatsAppPics/giftset.jpeg";
import giftset2 from "@/assets/whatsAppPics/giftset2.jpeg";
import giftset3 from "@/assets/whatsAppPics/giftset3.jpeg";
import photo2 from "@/assets/whatsAppPics/photo2.png";
import photo3 from "@/assets/whatsAppPics/photo3.png";
import photo4 from "@/assets/whatsAppPics/photo4.png";
import photo5 from "@/assets/whatsAppPics/photo5.png";
import photo6 from "@/assets/whatsAppPics/photo6.png";
import photo7 from "@/assets/whatsAppPics/photo7.png";
import surpriseGift from "@/assets/whatsAppPics/surpriseGift_f.png";

const galleryImages = [
    { src: photo2, alt: "Customer surprise moment 1", size: "large" },
    { src: photo3, alt: "Customer surprise moment 2", size: "small" },
    { src: giftflower, alt: "Gift with flowers", size: "medium" },
    { src: photo4, alt: "Customer surprise moment 3", size: "small" },
    { src: giftset, alt: "Premium gift set", size: "large" },
    { src: photo5, alt: "Customer surprise moment 4", size: "medium" },
    { src: surpriseGift, alt: "Final surprise gift delivery", size: "large" },
    { src: photo6, alt: "Customer surprise moment 5", size: "small" },
    { src: giftset2, alt: "Gift set close up", size: "medium" },
    { src: photo7, alt: "Customer surprise moment 6", size: "small" },
    { src: giftset3, alt: "Gift set variety", size: "medium" },
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 px-6 md:px-12 bg-black/40 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-reggae text-white"
                    >
                        Moments of <span className="text-gold italic">Pure Joy</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/60 font-tenor max-w-2xl mx-auto"
                    >
                        Capturing the authentic smiles and emotional surprises we've delivered across Nepal.
                    </motion.p>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {galleryImages.map((image, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                            className="relative group rounded-3xl overflow-hidden glass border border-white/10 break-inside-avoid"
                        >
                            <div className="relative aspect-auto">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    layout="responsive"
                                    width={500}
                                    height={image.size === "large" ? 700 : image.size === "medium" ? 500 : 350}
                                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-gold font-reggae text-lg">{image.alt}</p>
                                    <div className="w-12 h-1 bg-gold mt-2 rounded-full" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center pt-8">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-gold text-white font-bold rounded-full shadow-lg shadow-gold/20 hover:shadow-gold/40 transition-brand"
                    >
                        Share Your Moment
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
