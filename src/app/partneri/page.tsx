"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const partnerCategories = [
    {
        title: "Hlavný partner pre realizácie",
        partners: [
            { name: "HSF System", img: "/images/partners_full/hlavnyparnteriprerealizacie.webp", href: "https://www.stauman.sk/#" }
        ]
    },
    {
        title: "Partneri projekcia",
        partners: [
            { name: "Projekcia", img: "/images/partners_full/partneri-projekcia.webp", href: "https://www.hrproject.sk/" }
        ]
    },
    {
        title: "Partneri na spoluprácu",
        partners: [
            { name: "Spolupráca 1", img: "/images/partners_full/partnerinaspolupracu.webp", href: "https://renovactive.sk/hladame-projektantov-renovactive" },
            { name: "Spolupráca 2", img: "/images/partners_full/partnerinaspolupracu2.webp", href: "https://renovactive.sk/hladame-projektantov-renovactive" }
        ]
    },
    {
        title: "Partneri investori",
        partners: [
            { name: "Investor 1", img: "/images/partners_full/parrtneriinvestori.webp" },
            { name: "XXXLutz", img: "/images/XXXLutz_logo.svg.png" },
            { name: "Investor 3", img: "/images/partners_full/parrtneriinvestori3.webp" },
            { name: "Investor 4", img: "/images/partners_full/parrtneriinvestori4.webp" }
        ]
    },
    {
        title: "Partneri samosprávy",
        partners: [
            { name: "Samospráva 1", img: "/images/partners_full/partnerisamospravy.webp" },
            { name: "Samospráva 2", img: "/images/partners_full/partnerisamospravy2.webp" },
            { name: "Samospráva 3", img: "/images/partners_full/partnerisamospravy3.webp" },
            { name: "Samospráva 4", img: "/images/partners_full/partnerisamospravy4.webp" }
        ]
    },
    {
        title: "Partneri územné celky",
        partners: [
            { name: "Územný celok 1", img: "/images/partners_full/partneriuzemnecelky.webp", href: "https://www.kuria2.sk/" },
            { name: "Územný celok 2", img: "/images/partners_full/parnteriuzemnecelky2.webp", href: "https://www.pozemky-surany.sk/" },
            { name: "Územný celok 3", img: "/images/partners_full/uzemnecelky3.webp", href: "https://novastvrt.sk/" }
        ]
    },
    {
        title: "Partneri zhotovitelia",
        partners: [
            { name: "Zhotoviteľ 1", img: "/images/partners_full/zhotovitelia1.webp" },
            { name: "Zhotoviteľ 2", img: "/images/partners_full/zhotovitelia2.webp" },
            { name: "Zhotoviteľ 3", img: "/images/partners_full/zhotovitelia3.webp" },
            { name: "Zhotoviteľ 4", img: "/images/partners_full/zhotovitelia4.webp" },
            { name: "Zhotoviteľ 5", img: "/images/partners_full/zhotovitelia5.webp" },
            { name: "Zhotoviteľ 6", img: "/images/partners_full/zhotovitelia6.webp" },
            { name: "Zhotoviteľ 7", img: "/images/partners_full/zhotovitelia7.webp" }
        ]
    }
];

const certs = [
    { name: "Certifikát 1", img: "/images/cert-home-1.webp" },
    { name: "Certifikát 2", img: "/images/cert-home-2.webp" },
    { name: "Certifikát 3", img: "/images/cert-home-3.webp" },
    { name: "Certifikát 4", img: "/images/cert-home-4.webp" },
];

export default function Partneri() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[48vh] flex items-center justify-center overflow-hidden pt-24">
                <Image
                    src="/images/services/hero-subpage.webp"
                    alt="Partneri"
                    fill
                    className="object-cover brightness-[0.4]"
                />
                <div className="w-[90%] md:container mx-auto md:px-12 relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-4 drop-shadow-xl flex items-center justify-center gap-4">
                        Partneri
                    </h1>
                    <div className="w-24 h-1.5 bg-secondary mx-auto mb-8" />
                    <div className="flex items-center justify-center gap-2 text-sm uppercase tracking-widest opacity-80">
                        <a href="/" className="hover:text-secondary transition-colors">Domov</a>
                        <ChevronRight size={16} />
                        <span>Partneri</span>
                    </div>
                </div>
            </section>

            <section className="w-[90%] md:container mx-auto md:px-12 py-24 text-center">

                <div className="mb-20 max-w-3xl mx-auto">
                    <p className="text-xl md:text-2xl font-medium text-dark/80 italic mb-8">
                        &ldquo;Sme nesmierne vďační, že môžeme spolupracovať s našimi partnermi pri dozorovaní stavieb.&rdquo;
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-12">
                        <a href="https://sites.google.com/site/bctothmartin/home" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 hover:scale-105 transition-transform cursor-pointer">
                            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-4 border-white">
                                <Image src="/images/Martin-Toth-1-e1743341684988.jpg" alt="Ing. Martin Tóth" fill className="object-cover" />
                            </div>
                            <div className="font-bold text-lg md:text-xl text-dark">Ing. Martin Tóth</div>
                        </a>
                        <div className="hidden md:flex flex-col gap-2 opacity-30 mt-8">
                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                            <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-4 border-white">
                                <Image src="/images/skolnik.webp" alt="Ing. Marián Školník" fill className="object-cover" />
                            </div>
                            <div className="font-bold text-lg md:text-xl text-dark">Ing. Marián Školník</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-24 text-left">
                    {partnerCategories.map((category, idx) => (
                        <div key={idx} className="flex flex-col gap-8">
                            <h2 className="text-2xl border-l-4 border-secondary pl-4 font-bold text-primary uppercase">
                                {category.title}
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
                                {category.partners.map((p, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-white hover:shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 p-8 border border-gray-100 rounded-xl flex items-center justify-center min-h-[150px] relative"
                                    >
                                        {'href' in p && typeof p.href === 'string' ? (
                                            <a href={p.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center p-8">
                                                <Image src={p.img} alt={category.title} width={200} height={100} className="w-full h-auto object-contain max-h-[80px]" />
                                            </a>
                                        ) : (
                                            <Image src={p.img} alt={category.title} width={200} height={100} className="w-full h-auto object-contain max-h-[80px]" />
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            <section className="relative py-24 object-cover bg-center text-center w-full" style={{ backgroundImage: "url('/images/certifikaty.jpg')", backgroundSize: "cover" }}>
                <div className="absolute inset-0 bg-black/70 z-0" />
                <div className="w-[90%] md:container mx-auto md:px-12 relative z-10 text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold uppercase text-white mb-4 tracking-widest">Naše Osvedčenia</h2>
                    <div className="w-20 h-1.5 bg-secondary mx-auto" />
                </div>

                <div className="w-[90%] md:container mx-auto md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 pb-16">
                    {certs.map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`group relative overflow-hidden transition-all p-4 flex items-center justify-center hover:scale-110 ${(i === 1 || i === 3) ? 'lg:translate-y-[70px]' : ''}`}
                        >
                            <Image src={c.img} alt={c.name} width={400} height={600} className="w-full h-auto drop-shadow-lg" />
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
