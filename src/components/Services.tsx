"use client";

import { motion } from "framer-motion";
import { Hammer, ClipboardCheck, Ruler, Building2, HardHat, FileSearch } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
        title: "MANAGEMENT V STAVEBNÍCTVE",
        icon: <Building2 className="w-12 h-12" />,
        bg: "/images/services/management-v-stavebnictve.webp",
        href: "/management-v-stavebnictve"
    },
    {
        title: "STAVEBNÝ DOZOR",
        icon: <HardHat className="w-12 h-12" />,
        bg: "/images/services/Stavebny-dozor.webp",
        href: "/stavebny-dozor"
    },
    {
        title: "INŽINIERSKA ČINNOSŤ V STAVEBNÍCTVE",
        icon: <Ruler className="w-12 h-12" />,
        bg: "/images/services/Inzinierska-cinnost.webp",
        href: "/inzinierska-cinnost-v-stavebnictve"
    },
    {
        title: "VYHODNOTENIE ZÁVAD PO UKONČENÍ",
        icon: <FileSearch className="w-12 h-12" />,
        bg: "/images/services/Vyhodnotenie-zavad.webp",
        href: "/vyhodnotenie-zavad-po-ukonceni-realizacii"
    },
    {
        title: "PROJEKTOVÁ ČINNOSŤ",
        icon: <ClipboardCheck className="w-12 h-12" />,
        bg: "/images/services/Stavebny-dozor.webp",
        href: "/projektova-cinnost-stavebne-cenarstvo"
    },
];

export default function Services() {
    return (
        <section id="sluzby" className="bg-[#f8f9fa] py-24 scroll-mt-20">
            <div className="container mx-auto px-6 md:px-12 text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold uppercase text-primary tracking-widest mb-4"
                >
                    Naše služby
                </motion.h2>
                <div className="w-20 h-1.5 bg-secondary mx-auto" />
            </div>

            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link href={service.href} className="group relative w-full h-[400px] rounded-lg overflow-hidden flex flex-col items-center justify-end p-8 text-center block">
                            {/* Background avec Overlay */}
                            <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
                                <Image
                                    src={service.bg}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500 z-10" />
                            </div>

                            {/* Content */}
                            <div className="relative z-20 flex flex-col items-center gap-6 text-white transition-colors duration-500">
                                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full group-hover:bg-secondary/80 transition-all text-white">
                                    {service.icon}
                                </div>
                                <h3 className="font-bold text-xl uppercase tracking-tighter leading-[1.2]">
                                    {service.title}
                                </h3>
                                <span className="underline opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-sm font-bold uppercase tracking-widest inline-block">
                                    VIAC INFO
                                </span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section >
    );
}
