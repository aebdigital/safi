"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="bg-[#f0f0f0] py-24 relative overflow-hidden">
            <div className="w-[90%] md:container mx-auto md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-around gap-16 md:gap-0">

                {/* Main Notebook */}
                <motion.div
                    initial={{ opacity: 0, rotate: -2, scale: 0.9 }}
                    whileInView={{ opacity: 1, rotate: -1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative w-[110%] -left-[5%] md:left-0 md:w-full md:max-w-[650px] drop-shadow-2xl flex flex-col"
                >
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/about.png"
                            alt="O nás notebook"
                            fill
                            className="object-fill md:object-contain drop-shadow-lg"
                        />
                    </div>
                    <div className="relative z-10 pt-10 px-14 pb-14 md:pt-28 md:px-24 md:pb-24 flex flex-col gap-4 notebook-text font-handwritten text-primary">
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-[#558333] text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-boring)' }}>SAFI SK</span>
                            <span className="font-bold font-sans text-[10px] md:text-xs tracking-widest text-[#222] uppercase">Stavebný dozor</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl pb-2 text-[#0047AB] font-handwritten">O nás</h2>
                        <p className="text-sm md:text-lg leading-relaxed opacity-90 mt-2 text-[#0047AB]">
                            Spoločnosť SAFI SK bola založená v roku 2015 ako rodinná firma manželov Ing. Mariána Antala a Mgr. Martiny Antalovej. Založením našej spoločnosti sme sa rozhodli zužitkovať naše dlhoročné skúsenosti v oblasti stavebníctva.
                        </p>
                        <p className="text-sm md:text-lg leading-relaxed opacity-90 mt-2 text-[#0047AB]">
                            Chceme poskytnúť zákazníkom uľahčenie procesu ešte pred samotnou realizáciou stavby, ktorý spočíva vo vybavení podkladov pre jednotlivé povolenia. Pripravíme potrebné dokumenty k stavbe a zariadime komunikáciu s príslušnými úradmi, čím ušetríme klientom množstvo času.
                        </p>
                        <p className="text-sm md:text-lg leading-relaxed opacity-90 mt-2 text-[#0047AB]">
                            Vydaním jednotlivých povolení pre nás práca pre klienta nekonči.
                        </p>
                    </div>
                </motion.div>

                {/* Side Notebook Cards */}
                <div className="flex flex-col gap-10 w-full max-w-[450px]">
                    <motion.div
                        initial={{ opacity: 0, x: 50, rotate: 5 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative drop-shadow-xl"
                    >
                        <div className="relative">
                            <Image
                                src="/images/small+service.png"
                                alt="Safi info card"
                                width={450}
                                height={350}
                                className="w-full h-auto drop-shadow-lg"
                            />
                            <div className="absolute inset-0 py-16 px-12 md:px-16 notebook-text font-handwritten text-[#222] pointer-events-none flex flex-col justify-center">
                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-[#558333] text-xl md:text-2xl" style={{ fontFamily: 'var(--font-boring)' }}>SAFI SK</span>
                                    <span className="font-bold font-sans text-[10px] md:text-[11px] tracking-widest uppercase">Stavebný dozor</span>
                                </div>
                                <p className="text-sm md:text-lg leading-relaxed opacity-90 text-primary">
                                    Okrem inžinierskej činnosti a stavebného dozoru tiež ponúkame odborné poradenstvo pri výbere materiálov-technických riešení až po kontakty a odporúčania na zhotoviteľov.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, rotate: -3 }}
                        whileInView={{ opacity: 1, x: 0, rotate: -2 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative drop-shadow-xl"
                    >
                        <div className="relative">
                            <Image
                                src="/images/small+service.png"
                                alt="Safi info card 2"
                                width={450}
                                height={350}
                                className="w-full h-auto drop-shadow-lg"
                            />
                            <div className="absolute inset-0 py-16 px-12 md:px-16 notebook-text font-handwritten text-[#222] pointer-events-none flex flex-col justify-center">
                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-[#558333] text-xl md:text-2xl" style={{ fontFamily: 'var(--font-boring)' }}>SAFI SK</span>
                                    <span className="font-bold font-sans text-[10px] md:text-[11px] tracking-widest uppercase">Stavebný dozor</span>
                                </div>
                                <p className="text-sm md:text-lg leading-relaxed opacity-90 text-primary">
                                    Ako stavebný dozor vykonávame kontrolu kvality realizovaných prác, a to najmä v prípade, ak sa klienti rozhodli pre realizáciu stavby svojpomocne.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
