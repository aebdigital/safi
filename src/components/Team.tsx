"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const members = [
    {
        name: "Ing. Marián Antal",
        role: "Majiteľ",
        image: "/images/team-1.webp",
        activities: [
            "Stavebný dozor",
            "Bezpečnostný koordinátor",
            "Technický koordinátor"
        ],
        bio: "Stavbár telom aj dušou ako sa hovorí. Od počiatkov ako som začal študovať na SPŠ – stavebnej v Nitre som vedel, že stavbárina bude mojim poslaním. Posilnením vedomosti na STU stavebnej fakulte v Bratislave som aj keď nie hneď, ale dodnes pretrval v tomto obore. Po rokoch v realizácii som dospel k názoru, že sa treba posunúť o stupeň vyššie a preto v roku 2015 padlo rozhodnutie a začal som sa pripravovať na skúšky za stavebného dozora. Úspešne zvládnuté 10.3.2015. Od toho dátumu sa výlučne venujem dozorovaniu stavieb. Množstvo úspešne skolaudovaných stavieb hovorí za seba. Ďakujem všetkým našim klientom a investorom za priazeň a tiež príležitosť byť stále lepší v tom čo robím."
    },
    {
        name: "Mgr. Martina Antalová",
        role: "Konateľka, majiteľka",
        image: "/images/team-2.webp",
        activities: [
            "Povolenia",
            "Kolaudácie",
            "Inžiniering",
            "Spracovanie cenových ponúk"
        ],
        bio: "Labyrint úradov, štátnych inštitúcií, vyjadrení a zákonov sa stalo pre mňa vášňou, čo z ďaleka nerobia moju prácu stereotipnou. Orientovanie sa medzi spleťou rôznych typov stavieb, územných celkov a zmien zákonov mi dáva neustále priestor na pravidelné vzdelávanie. Vždy ma poteší prijatá správa o vydanom stavebnom povolení a ešte váčšmi o úspešnom skolaudovaní. Preto som aj touto cestou vďačná našim klientom za priazeň a v mnohých prípadoch aj za trpezlivosť pri zdĺhavých byrokratických procesoch."
    },
    {
        name: "Roland Jozefík",
        role: "Spolupracovník",
        image: "/images/team-3.webp",
        activities: [
            "Stavebný dozor",
            "Technický koordinátor"
        ],
        bio: "Mojim krédom v živote bolo robiť veci poctivo a čo najdokonalejšie. Môj zmysel pre detail som uplatňoval nielen v predchádzajúcich zamestnaniach, ale aj ako som začal pôsobiť v spoločnosti SAFI SK ako asistent stavebného dozora. Dá sa povedať, že technické riešenie detailov, ktoré v mnohých prípadoch absentujú v projektoch sa stalo mojim zmyslom života. Každodenným dopĺňaním informácií a poznatkov som dosiahol vo svojej kariére métu úspešného zvládnutia skúšky a od 6.12.2024 som stavebný dozor v odbore pozemné stavby."
    },
];

export default function Team() {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col items-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold uppercase text-primary tracking-widest mb-4"
                    >
                        Náš tím
                    </motion.h2>
                    <div className="w-20 h-1.5 bg-secondary" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {members.map((member, index) => (
                        <div
                            key={index}
                            className="group bg-white flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden border border-gray-100"
                        >
                            <div className="relative w-full h-[350px] overflow-hidden">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-100"
                                />
                            </div>

                            <div className="p-8 flex flex-col gap-3">
                                <h3 className="font-bold text-2xl text-dark tracking-tight uppercase">{member.name}</h3>
                                <h4 className="font-semibold text-secondary text-sm uppercase tracking-[0.2em]">{member.role}</h4>
                                <div className="w-10 h-0.5 bg-gray-200 mx-auto my-1" />

                                <div className="flex flex-col gap-1 items-center mb-2">
                                    <span className="text-primary text-xs uppercase font-bold tracking-widest">Činnosti</span>
                                    {member.activities.map((act, i) => (
                                        <span key={i} className="text-secondary text-sm font-semibold">{act}</span>
                                    ))}
                                </div>

                                <p className="text-gray-500 text-sm leading-relaxed mt-2 italic text-left px-2">
                                    "{member.bio}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
