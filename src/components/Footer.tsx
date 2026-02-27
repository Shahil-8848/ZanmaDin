"use client";

import { motion } from "framer-motion";
import { Instagram, Twitch, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-24 px-6 bg-primary border-t border-white/5">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
                <div className="md:col-span-2 space-y-8">
                    <h2 className="text-4xl font-bold font-reggae text-gold tracking-tighter">ZANMADIN</h2>
                    <p className="max-w-md text-white/50 font-tenor text-lg leading-relaxed">
                        Beautifully packaged celebration moments delivered with love.
                        Helping you express your feelings through carefully prepared
                        surprise packages, no matter where you are.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://instagram.com" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-gold transition-brand">
                            <Instagram size={20} />
                        </a>
                        <a href="https://tiktok.com" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-gold transition-brand">
                            <Twitch size={20} /> {/* Using Twitch as a TikTok placeholder if TikTok icon isn't in Lucide */}
                        </a>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-xl font-bold font-reggae text-white">Quick Links</h3>
                    <ul className="space-y-4 text-white/50 font-tenor">
                        <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
                        <li><a href="#categories" className="hover:text-gold transition-colors">Celebration Categories</a></li>
                        <li><a href="#how-it-works" className="hover:text-gold transition-colors">How It Works</a></li>
                    </ul>
                </div>

                <div className="space-y-6">
                    <h3 className="text-xl font-bold font-reggae text-white">Contact Info</h3>
                    <ul className="space-y-4 text-white/50 font-tenor">
                        <li className="flex items-center gap-2"><MapPin size={18} className="text-gold" /> Kathmandu, Nepal</li>
                        <li className="flex items-center gap-2"><Phone size={18} className="text-gold" /> +977 98XXXXXXX</li>
                        <li className="flex items-center gap-2"><Mail size={18} className="text-gold" /> contact@zanmadin.com</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-6xl mx-auto pt-16 mt-16 border-t border-white/5 text-center text-white/30 text-sm font-tenor">
                © {new Date().getFullYear()} Zanmadin. All rights reserved. Celebrate Beautifully.
            </div>
        </footer>
    );
}
