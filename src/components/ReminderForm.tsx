"use client";

import { motion } from "framer-motion";
import { Bell, Calendar, User, Phone } from "lucide-react";

export default function ReminderForm() {
    return (
        <section className="py-24 px-6 bg-gold/10">
            <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 space-y-12">
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold border border-gold/30">
                        <Bell size={18} />
                        <span className="text-sm font-bold uppercase tracking-wider">Never Forget Your Special Day</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-reggae text-white leading-tight">
                        Register important dates and we will <br /> <span className="text-gold">remind you</span> before the celebration.
                    </h2>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-white/60 font-tenor ml-2">
                            <User size={16} /> Your Name
                        </label>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-brand text-white"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-white/60 font-tenor ml-2">
                            <User size={16} /> Loved One's Name
                        </label>
                        <input
                            type="text"
                            placeholder="Their Name"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-brand text-white"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-white/60 font-tenor ml-2">
                            <Calendar size={16} /> Special Date
                        </label>
                        <input
                            type="date"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-brand text-white"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="flex items-center gap-2 text-white/60 font-tenor ml-2">
                            <Phone size={16} /> WhatsApp Number
                        </label>
                        <input
                            type="tel"
                            placeholder="+977"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-gold transition-brand text-white"
                        />
                    </div>

                    <button className="md:col-span-2 py-5 rounded-2xl bg-gold text-white font-bold text-xl hover:scale-[1.02] active:scale-[0.98] transition-brand shadow-xl shadow-gold/20">
                        Set Reminder
                    </button>
                </form>
            </div>
        </section>
    );
}
