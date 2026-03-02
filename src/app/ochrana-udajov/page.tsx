"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function OchranaUdajov() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[48vh] flex items-center justify-center overflow-hidden pt-24">
                <Image
                    src="/images/services/hero-subpage.webp"
                    alt="Ochrana osobných údajov"
                    fill
                    className="object-cover brightness-[0.4]"
                />
                <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest mb-4 drop-shadow-xl flex items-center justify-center gap-4">
                        Ochrana osobných údajov
                    </h1>
                    <div className="w-24 h-1.5 bg-secondary mx-auto mb-8" />
                    <div className="flex items-center justify-center gap-2 text-sm uppercase tracking-widest opacity-80">
                        <a href="/" className="hover:text-secondary transition-colors">Domov</a>
                        <ChevronRight size={16} />
                        <span>Ochrana údajov</span>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 md:px-12 py-24">
                <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-primary prose-a:text-secondary overflow-hidden break-words text-[#222]">
                    <p className="font-bold text-lg mb-8">
                        SAFI SK, s.r.o.<br />
                        P. Pazmáňa 917, 927 05 Šaľa<br />
                        IČO: 48044288, DIČ: 2120034213<br />
                        E-mail: dozor.safi@gmail.com<br />
                        Tel.: +421 918 328 940
                    </p>

                    <p className="mb-8 font-medium">
                        Tieto Zásady ochrany osobných údajov (ďalej len „Zásady“) popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.
                    </p>

                    <hr className="my-8 border-gray-200" />

                    <h2>I. Kontaktný formulár</h2>
                    <p>
                        Na stránke www.safi.sk prevádzkujeme kontaktný formulár na dvoch samostatných stránkach, ktorého účelom je umožniť vám:
                    </p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Položiť otázku k našim produktom a službám</li>
                        <li>Požiadať o cenovú ponuku</li>
                    </ul>

                    <h3 className="text-xl font-bold mt-6 mb-2">Rozsah spracúvaných údajov:</h3>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Meno a priezvisko</li>
                        <li>E-mailová adresa</li>
                        <li>Telefónne číslo</li>
                    </ul>

                    <p><strong>Účel spracovania:</strong><br />
                        Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.</p>

                    <p><strong>Právny základ:</strong><br />
                        Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.</p>

                    <p className="mb-8"><strong>Doba uchovávania:</strong><br />
                        Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.</p>

                    <hr className="my-8 border-gray-200" />

                    <h2>II. Súbory cookies</h2>
                    <p>Na našej webovej stránke používame cookies výlučne na nasledujúce účely:</p>
                    <ul className="list-disc pl-6 mb-6">
                        <li><strong>Nevyhnutné cookies</strong> – zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie, nastavení prehliadača).</li>
                        <li><strong>Štatistické (analytické) cookies</strong> – pomáhajú nám pochopiť, ako návštevníci stránku používajú (nasadzujeme ich len so súhlasom používateľa).</li>
                    </ul>
                    <p className="mb-8"><strong>Správa súhlasov:</strong><br />
                        Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies prostredníctvom nastavení cookie lišty alebo priamo v prehliadači.</p>

                    <hr className="my-8 border-gray-200" />

                    <h2>III. Práva dotknutej osoby</h2>
                    <p>Podľa nariadenia GDPR máte nasledujúce práva:</p>
                    <ul className="list-disc pl-6 mb-6">
                        <li>Prístup k osobným údajom, ktoré spracúvame</li>
                        <li>Oprava nepresných alebo neúplných údajov</li>
                        <li>Vymazanie („právo zabudnutia“), ak na spracovanie už nie je právny základ</li>
                        <li>Obmedzenie spracovania</li>
                        <li>Prenosnosť údajov</li>
                        <li>Odvolanie súhlasu – stane sa účinným dňom odvolania</li>
                        <li>Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07 Bratislava, www.dataprotection.gov.sk)</li>
                    </ul>
                    <p className="mb-8">
                        V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na <a href="mailto:dozor.safi@gmail.com">dozor.safi@gmail.com</a> alebo telefónnom čísle <a href="tel:+421918328940">+421 918 328 940</a>.
                    </p>

                    <hr className="my-8 border-gray-200" />

                    <p className="font-medium text-sm text-gray-500">
                        Tieto Zásady nadobúdajú účinnosť dňom 16. 6. 2025.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
