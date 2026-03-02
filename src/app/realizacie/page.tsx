"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const categories = [
    {
        id: "rd",
        label: "Rodinné domy",
        images: Array.from({ length: 8 }, (_, i) => `/images/realizacie/rd-${i + 1}.webp`)
    },
    {
        id: "bd",
        label: "Bytové domy",
        images: Array.from({ length: 11 }, (_, i) => `/images/realizacie/bd-${i + 1}.webp`)
    },
    {
        id: "admin",
        label: "Administratívne objekty",
        images: Array.from({ length: 12 }, (_, i) => `/images/realizacie/admin-${i + 1}.webp`)
    },
    {
        id: "ubyt",
        label: "Ubytovacie zariadenia",
        images: Array.from({ length: 4 }, (_, i) => `/images/realizacie/ubyt-${i + 1}.webp`)
    },
    {
        id: "uzem",
        label: "Územné celky",
        images: Array.from({ length: 7 }, (_, i) => `/images/realizacie/uzem-${i + 1}.webp`)
    },
    {
        id: "ver",
        label: "Verejno prospešné a spoločenské objekty",
        images: Array.from({ length: 14 }, (_, i) => `/images/realizacie/ver-${i + 1}.webp`)
    },
    {
        id: "retail",
        label: "Retail centrá",
        images: Array.from({ length: 19 }, (_, i) => `/images/realizacie/retail-${i + 1}.webp`)
    },
    {
        id: "od",
        label: "Obchodné domy",
        images: Array.from({ length: 16 }, (_, i) => `/images/realizacie/od-${i + 1}.webp`)
    },
    {
        id: "sklad",
        label: "Skladové objekty",
        images: Array.from({ length: 12 }, (_, i) => `/images/realizacie/sklad-${i + 1}.webp`)
    },
    {
        id: "polno",
        label: "Poľnohospodárske objekty",
        images: Array.from({ length: 6 }, (_, i) => `/images/realizacie/polno-${i + 1}.webp`)
    },
    {
        id: "lin",
        label: "Líniové stavby",
        images: Array.from({ length: 9 }, (_, i) => `/images/realizacie/lin-${i + 1}.webp`)
    },
    {
        id: "ine",
        label: "Iné stavby",
        images: Array.from({ length: 8 }, (_, i) => `/images/realizacie/ine-${i + 1}.webp`)
    },
];

export default function Realizacie() {
    const [activeCategory, setActiveCategory] = useState(categories[0].id);
    const [lightboxIndex, setLightboxIndex] = useState(-1);

    const activeImages = categories.find(c => c.id === activeCategory)?.images || [];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[48vh] flex items-center justify-center overflow-hidden pt-24">
                <Image
                    src="/images/services/hero-subpage.webp"
                    alt="Referencie"
                    fill
                    className="object-cover brightness-[0.4]"
                />
                <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-4 drop-shadow-xl flex items-center justify-center gap-4">
                        Naše Referencie
                    </h1>
                    <div className="w-24 h-1.5 bg-secondary mx-auto mb-8" />
                    <div className="flex items-center justify-center gap-2 text-sm uppercase tracking-widest opacity-80">
                        <a href="/" className="hover:text-secondary transition-colors">Domov</a>
                        <ChevronRight size={16} />
                        <span>Referencie</span>
                    </div>
                </div>
            </section>

            <section className="max-w-[1600px] mx-auto px-4 lg:px-6 py-16">
                <div className="flex flex-col lg:flex-row gap-6 mt-8">

                    {/* Sidebar with categories */}
                    <aside className="lg:w-1/5 xl:w-64 flex flex-col gap-2 bg-[#f8f9fa] p-6 rounded-none h-fit border border-gray-100 shadow-sm shrink-0">
                        <h3 className="text-primary font-black uppercase tracking-tighter text-2xl mb-6">Kategórie</h3>
                        <div className="flex flex-col gap-2 max-h-[600px] overflow-y-auto no-scrollbar pr-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`text-left py-3 px-5 rounded-lg transition-all font-bold uppercase tracking-wider text-[11px] md:text-xs leading-tight ${activeCategory === cat.id
                                        ? "bg-primary text-white shadow-md translate-x-1"
                                        : "text-dark/60 hover:bg-gray-100 hover:text-primary"
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* Dynamic Content Grid */}
                    <div className="flex-1 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3"
                            >
                                {activeImages.map((src, index) => (
                                    <motion.div
                                        key={src}
                                        onClick={() => setLightboxIndex(index)}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="group relative h-[250px] md:h-[300px] overflow-hidden rounded-none shadow-sm bg-gray-50 cursor-pointer"
                                    >
                                        <Image
                                            src={src}
                                            alt="Project Image"
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <div className="bg-white/90 p-4 rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            <Lightbox
                open={lightboxIndex >= 0}
                index={lightboxIndex}
                close={() => setLightboxIndex(-1)}
                slides={activeImages.map(src => ({ src }))}
            />

            <Footer />
        </main>
    );
}
