"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const allPartners = [
    "/images/partners_full/hlavnyparnteriprerealizacie.webp",
    "/images/partners_full/partneri-projekcia.webp",
    "/images/partners_full/partnerinaspolupracu.webp",
    "/images/partners_full/partnerinaspolupracu2.webp",
    "/images/partners_full/parrtneriinvestori.webp",
    "/images/XXXLutz_logo.svg.png",
    "/images/partners_full/parrtneriinvestori3.webp",
    "/images/partners_full/parrtneriinvestori4.webp",
    "/images/partners_full/partnerisamospravy.webp",
    "/images/partners_full/partnerisamospravy2.webp",
    "/images/partners_full/partnerisamospravy3.webp",
    "/images/partners_full/partnerisamospravy4.webp",
    "/images/partners_full/partneriuzemnecelky.webp",
    "/images/partners_full/parnteriuzemnecelky2.webp",
    "/images/partners_full/uzemnecelky3.webp",
    "/images/partners_full/zhotovitelia1.webp",
    "/images/partners_full/zhotovitelia2.webp",
    "/images/partners_full/zhotovitelia3.webp",
    "/images/partners_full/zhotovitelia4.webp",
    "/images/partners_full/zhotovitelia5.webp",
    "/images/partners_full/zhotovitelia6.webp",
    "/images/partners_full/zhotovitelia7.webp",
];

export default function Partners() {
    return (
        <section className="bg-white py-12 border-b border-gray-100 overflow-hidden relative">
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex w-full whitespace-nowrap">
                <motion.div
                    className="flex items-center gap-12 md:gap-24 pl-12 md:pl-24"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 40,
                    }}
                >
                    {[...allPartners, ...allPartners].map((src, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 flex-shrink-0"
                        >
                            <Image
                                src={src}
                                alt={`Partner ${index}`}
                                width={180}
                                height={80}
                                className="w-auto h-12 md:h-16 object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
