"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ImageGroup {
    heading: string;
    images: string[];
}

interface Category {
    id: string;
    label: string;
    groups: ImageGroup[];
}

const categories: Category[] = [
    {
        id: "rd",
        label: "Rodinné domy",
        groups: [
            {
                heading: "Rodinné domy Most pri Bratislave časť Studené",
                images: Array.from({ length: 6 }, (_, i) => `/images/realizacie/rd-${i + 1}.webp`)
            },
            {
                heading: "Rodinný dom Matúšova ul. Bratislava",
                images: Array.from({ length: 2 }, (_, i) => `/images/realizacie/rd-${i + 7}.webp`)
            },
        ]
    },
    {
        id: "bd",
        label: "Bytové domy",
        groups: [
            {
                heading: "Bytový dom Panoráma Šaľa - Veča",
                images: Array.from({ length: 4 }, (_, i) => `/images/realizacie/bd-${i + 1}.webp`)
            },
            {
                heading: "Bytový dom Nová Dedinka",
                images: Array.from({ length: 4 }, (_, i) => `/images/realizacie/bd-${i + 5}.webp`)
            },
            {
                heading: "Bytové domy Dunajská Streda",
                images: Array.from({ length: 3 }, (_, i) => `/images/realizacie/bd-${i + 9}.webp`)
            },
        ]
    },
    {
        id: "admin",
        label: "Administratívne objekty",
        groups: [
            {
                heading: "Mestský úrad Šaľa",
                images: Array.from({ length: 2 }, (_, i) => `/images/realizacie/admin-${i + 1}.webp`)
            },
            {
                heading: "Krajské riaditeľstvo policajného zboru Nitra",
                images: Array.from({ length: 4 }, (_, i) => `/images/realizacie/admin-${i + 3}.webp`)
            },
            {
                heading: "PDÚ Rimavská Sobota",
                images: Array.from({ length: 4 }, (_, i) => `/images/realizacie/admin-${i + 7}.webp`)
            },
            {
                heading: "Administratívna budova spoločnosti Varexpres",
                images: Array.from({ length: 2 }, (_, i) => `/images/realizacie/admin-${i + 11}.webp`)
            },
        ]
    },
    {
        id: "ubyt",
        label: "Ubytovacie zariadenia",
        groups: [
            {
                heading: "Ubytovňa Sereď",
                images: Array.from({ length: 2 }, (_, i) => `/images/realizacie/ubyt-${i + 1}.webp`)
            },
            {
                heading: "Ubytovňa Šaľa",
                images: Array.from({ length: 2 }, (_, i) => `/images/realizacie/ubyt-${i + 3}.webp`)
            },
        ]
    },
    {
        id: "uzem",
        label: "Územné celky",
        groups: [
            {
                heading: "IBV Veľké Vozokany",
                images: Array.from({ length: 3 }, (_, i) => `/images/realizacie/uzem-${i + 1}.webp`)
            },
            {
                heading: "Kúria I, II, III",
                images: Array.from({ length: 2 }, (_, i) => `/images/realizacie/uzem-${i + 4}.webp`)
            },
            {
                heading: "Nitriansky Hrádok",
                images: Array.from({ length: 2 }, (_, i) => `/images/realizacie/uzem-${i + 6}.webp`)
            },
        ]
    },
    {
        id: "ver",
        label: "Verejno prospešné a spoločenské objekty",
        groups: [
            {
                heading: "Kultúrny dom Šaľa - Veča",
                images: Array.from({ length: 3 }, (_, i) => `/images/realizacie/ver-${i + 1}.webp`)
            },
            {
                heading: "Senior House Šaľa",
                images: Array.from({ length: 4 }, (_, i) => `/images/realizacie/ver-${i + 4}.webp`)
            },
            {
                heading: "NSP Šaľa",
                images: Array.from({ length: 3 }, (_, i) => `/images/realizacie/ver-${i + 8}.webp`)
            },
            {
                heading: "Technická odborná škola Zlaté Moravce",
                images: Array.from({ length: 4 }, (_, i) => `/images/realizacie/ver-${i + 11}.webp`)
            },
        ]
    },
    {
        id: "retail",
        label: "Retail centrá",
        groups: [
            {
                heading: "OC Šaľa Veča",
                images: Array.from({ length: 7 }, (_, i) => `/images/realizacie/retail-${i + 1}.webp`)
            },
            {
                heading: "OC Šamorín",
                images: Array.from({ length: 4 }, (_, i) => `/images/realizacie/retail-${i + 8}.webp`)
            },
            {
                heading: "OC Bernolákovo",
                images: Array.from({ length: 2 }, (_, i) => `/images/realizacie/retail-${i + 12}.webp`)
            },
            {
                heading: "OC Palárikovo",
                images: Array.from({ length: 2 }, (_, i) => `/images/realizacie/retail-${i + 14}.webp`)
            },
            {
                heading: "OC Šurany",
                images: Array.from({ length: 2 }, (_, i) => `/images/realizacie/retail-${i + 16}.webp`)
            },
            {
                heading: "OC Komjatice",
                images: Array.from({ length: 2 }, (_, i) => `/images/realizacie/retail-${i + 18}.webp`)
            },
        ]
    },
    {
        id: "od",
        label: "Obchodné domy",
        groups: [
            {
                heading: "XXXLutz Nitra",
                images: Array.from({ length: 6 }, (_, i) => `/images/realizacie/od-${i + 1}.webp`)
            },
            {
                heading: "OC Nové Zámky",
                images: Array.from({ length: 7 }, (_, i) => `/images/realizacie/od-${i + 7}.webp`)
            },
            {
                heading: "OC Lučenec",
                images: Array.from({ length: 3 }, (_, i) => `/images/realizacie/od-${i + 14}.webp`)
            },
        ]
    },
    {
        id: "sklad",
        label: "Skladové objekty",
        groups: [
            {
                heading: "Hagard hall Šaľa",
                images: Array.from({ length: 2 }, (_, i) => `/images/realizacie/sklad-${i + 1}.webp`)
            },
            {
                heading: "West rental Galanta",
                images: Array.from({ length: 8 }, (_, i) => `/images/realizacie/sklad-${i + 3}.webp`)
            },
            {
                heading: "MD mont Kráľová nad Váhom",
                images: Array.from({ length: 2 }, (_, i) => `/images/realizacie/sklad-${i + 11}.webp`)
            },
        ]
    },
    {
        id: "polno",
        label: "Poľnohospodárske objekty",
        groups: [
            {
                heading: "Hala pre chov moriek Ondrejovce",
                images: Array.from({ length: 3 }, (_, i) => `/images/realizacie/polno-${i + 1}.webp`)
            },
            {
                heading: "Hala pre chov moriek Horné Saliby",
                images: Array.from({ length: 3 }, (_, i) => `/images/realizacie/polno-${i + 4}.webp`)
            },
        ]
    },
    {
        id: "lin",
        label: "Líniové stavby",
        groups: [
            {
                heading: "Cyklo trasa do Dusla",
                images: Array.from({ length: 3 }, (_, i) => `/images/realizacie/lin-${i + 1}.webp`)
            },
            {
                heading: "Púpavija",
                images: Array.from({ length: 6 }, (_, i) => `/images/realizacie/lin-${i + 4}.webp`)
            },
        ]
    },
    {
        id: "ine",
        label: "Iné stavby",
        groups: [
            {
                heading: "Detské ihrisko Šaľa",
                images: Array.from({ length: 3 }, (_, i) => `/images/realizacie/ine-${i + 1}.webp`)
            },
            {
                heading: "Detské ihrisko Nové Zámky",
                images: Array.from({ length: 3 }, (_, i) => `/images/realizacie/ine-${i + 4}.webp`)
            },
            {
                heading: "Polopodzemné kontajnery Veča",
                images: Array.from({ length: 2 }, (_, i) => `/images/realizacie/ine-${i + 7}.webp`)
            },
        ]
    },
];

export default function Realizacie() {
    const [activeCategory, setActiveCategory] = useState(categories[0].id);
    const [lightboxIndex, setLightboxIndex] = useState(-1);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const activeCat = categories.find(c => c.id === activeCategory)!;

    // Flatten all images for lightbox
    const allImages = activeCat.groups.flatMap(g => g.images);

    // Close dropdown on outside click
    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    }, []);

    // Calculate cumulative image index for lightbox
    function getGlobalIndex(groupIdx: number, imageIdx: number) {
        let count = 0;
        for (let i = 0; i < groupIdx; i++) {
            count += activeCat.groups[i].images.length;
        }
        return count + imageIdx;
    }

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
                <div className="w-[90%] md:container mx-auto md:px-12 relative z-10 text-center text-white">
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

            <section className="w-[90%] md:w-auto max-w-[1600px] mx-auto md:px-6 py-16">
                <div className="flex flex-col lg:flex-row gap-6 mt-8">

                    {/* Mobile dropdown category selector */}
                    <div className="lg:hidden relative" ref={dropdownRef}>
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="w-full flex items-center justify-between bg-primary text-white py-4 px-6 rounded-lg font-bold uppercase tracking-wider text-sm"
                        >
                            {activeCat.label}
                            <ChevronDown size={20} className={`transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                            {dropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute z-50 top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden max-h-[60vh] overflow-y-auto"
                                >
                                    {categories.map((cat) => (
                                        <button
                                            key={cat.id}
                                            onClick={() => {
                                                setActiveCategory(cat.id);
                                                setDropdownOpen(false);
                                            }}
                                            className={`w-full text-left py-3.5 px-6 transition-all font-bold uppercase tracking-wider text-xs border-b border-gray-50 last:border-0 ${activeCategory === cat.id
                                                ? "bg-primary/10 text-primary"
                                                : "text-dark/60 hover:bg-gray-50 hover:text-primary"
                                                }`}
                                        >
                                            {cat.label}
                                        </button>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Desktop sidebar with categories */}
                    <aside className="hidden lg:flex lg:w-1/5 xl:w-64 flex-col gap-2 bg-[#f8f9fa] p-6 rounded-none h-fit border border-gray-100 shadow-sm shrink-0">
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

                    {/* Dynamic Content Grid with grouped headings */}
                    <div className="flex-1 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col gap-10"
                            >
                                {activeCat.groups.map((group, groupIdx) => (
                                    <div key={group.heading}>
                                        <h3 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-wider mb-4 pb-2 border-b-2 border-secondary/30">
                                            {group.heading}
                                        </h3>
                                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3">
                                            {group.images.map((src, imgIdx) => (
                                                <motion.div
                                                    key={src}
                                                    onClick={() => setLightboxIndex(getGlobalIndex(groupIdx, imgIdx))}
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: imgIdx * 0.05 }}
                                                    className="group relative h-[180px] md:h-[300px] overflow-hidden rounded-none shadow-sm bg-gray-50 cursor-pointer"
                                                >
                                                    <Image
                                                        src={src}
                                                        alt={group.heading}
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
                                        </div>
                                    </div>
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
                slides={allImages.map(src => ({ src }))}
            />

            <Footer />
        </main>
    );
}
