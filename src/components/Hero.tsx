"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const heroBgImages = [
    "/images/gallery-home-3.webp",
    "/images/realizacie/admin-1.webp",
    "/images/realizacie/bd-5.webp",
    "/images/realizacie/bd-9.webp",
    "/images/realizacie/lin-9.webp"
];

export default function Hero() {
    const [currentBg, setCurrentBg] = useState(0);
    const { scrollY } = useScroll();
    const yTransform = useTransform(scrollY, [0, 800], ["0%", "15%"]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % heroBgImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden group">
            {/* Background with zoom effect */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentBg}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0 overflow-hidden"
                >
                    <motion.div style={{ y: yTransform }} className="absolute -inset-[15%] scale-[1.1]">
                        <Image
                            src={heroBgImages[currentBg]}
                            alt="Safi Constructor Hero"
                            fill
                            priority={currentBg === 0}
                            quality={90}
                            className="object-cover object-center"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-black/40 z-10" />
                </motion.div>
            </AnimatePresence>

            <div className="container mx-auto px-6 md:px-12 relative z-20 text-white flex flex-col items-start justify-center w-full">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight mb-8 drop-shadow-lg text-left"
                >
                    Dlhoročné skúsenosti <br className="hidden md:block" />
                    <span className="text-white/90">v oblasti manažmentu stavieb.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-lg md:text-xl font-medium tracking-wide mb-10 opacity-90 text-left max-w-2xl"
                >
                    Od roku 2015 zabezpečujeme komplexný servis pre Vaše stavby.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 self-start"
                >
                    <Link
                        href="/#sluzby"
                        className="bg-white text-dark px-10 py-4 rounded-md font-bold hover:bg-white/90 transition-all uppercase tracking-widest text-center"
                    >
                        NAŠE SLUŽBY
                    </Link>
                    <Link
                        href="/kontakt"
                        className="bg-secondary text-white px-10 py-4 rounded-md font-bold hover:bg-secondary/90 transition-all uppercase tracking-widest text-center"
                    >
                        KONTAKTUJTE NÁS
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
