"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { useState } from "react";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Kontakt() {
    const [isMapActive, setIsMapActive] = useState(false);

    return (
        <main className="min-h-screen bg-[#f8f9fa]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[48vh] flex items-center justify-center overflow-hidden pt-24">
                <Image
                    src="/images/services/hero-subpage.webp"
                    alt="Kontakt"
                    fill
                    className="object-cover brightness-[0.4]"
                />
                <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-4 drop-shadow-xl flex items-center justify-center gap-4">
                        Kontaktujte nás
                    </h1>
                    <div className="w-24 h-1.5 bg-secondary mx-auto mb-8" />
                    <div className="flex items-center justify-center gap-2 text-sm uppercase tracking-widest opacity-80">
                        <a href="/" className="hover:text-secondary transition-colors">Domov</a>
                        <ChevronRight size={16} />
                        <span>Kontakt</span>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 md:px-12 py-16">
                <div className="flex flex-col items-center mb-16 text-center mt-8">
                    <p className="text-dark/60 text-lg max-w-2xl mx-auto italic">
                        Máte otázky? Neváhajte nás kontaktovať. Odpovieme Vám v čo najkratšom čase.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-32 items-start">

                    {/* Contact Details Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-12 bg-white p-12 rounded-2xl shadow-xl border border-gray-100"
                    >
                        <div className="flex flex-col gap-10">
                            <div className="flex items-start gap-6 group">
                                <div className="p-5 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-all text-primary">
                                    <MapPin size={32} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-primary font-bold uppercase text-xs tracking-widest mb-1 opacity-60">Sídlo spoločnosti</span>
                                    <p className="text-dark text-xl font-bold">SAFI SK s.r.o.</p>
                                    <p className="text-dark/70 text-lg">Šaľa, Slovensko</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-5 bg-primary/10 rounded-xl group-hover:bg-secondary group-hover:text-white transition-all text-primary group-hover:text-white">
                                    <Phone size={32} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-primary font-bold uppercase text-xs tracking-widest mb-1 opacity-60">Zavolajte nám</span>
                                    <div className="flex flex-col gap-1">
                                        <a href="tel:+421918328940" className="text-dark text-xl font-bold hover:text-secondary transition-colors underline underline-offset-4 decoration-primary/20 hover:decoration-secondary">+421 918 328 940</a>
                                        <a href="tel:+421905234020" className="text-dark text-xl font-bold hover:text-secondary transition-colors underline underline-offset-4 decoration-primary/20 hover:decoration-secondary">+421 905 234 020</a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="p-5 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:text-white transition-all text-primary">
                                    <Mail size={32} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-primary font-bold uppercase text-xs tracking-widest mb-1 opacity-60">Napíšte nám</span>
                                    <a href="mailto:dozor.safi@gmail.com" className="text-dark text-xl font-bold hover:text-primary transition-colors underline underline-offset-4 decoration-primary/20 hover:decoration-primary">dozor.safi@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Map iframe */}
                        <div className="w-full h-[400px] bg-gray-200 rounded-xl relative overflow-hidden flex items-center justify-center group" onMouseLeave={() => setIsMapActive(false)}>
                            {!isMapActive && (
                                <div
                                    className="absolute inset-0 bg-transparent z-10 flex items-center justify-center cursor-pointer"
                                    onClick={() => setIsMapActive(true)}
                                >
                                    <span className="bg-white/90 text-dark px-4 py-2 rounded-lg font-[--font-sans] font-bold shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                                        Kliknite pre interakciu s mapou
                                    </span>
                                </div>
                            )}
                            <iframe
                                src="https://maps.google.com/maps?q=SAFI%20SK%20stavebn%C3%BD%20dozor&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy">
                            </iframe>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <ContactForm />
                    </motion.div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
