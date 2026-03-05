"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-16 pb-8">
            <div className="w-[90%] md:container mx-auto md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 border-b border-white/10 pb-12">
                <div className="flex flex-col gap-6">
                    <Link href="/" className="flex flex-col items-start gap-0">
                        <div className="flex items-baseline gap-1 md:gap-2">
                            <span className="text-[#558333] text-3xl md:text-4xl" style={{ fontFamily: 'var(--font-boring)' }}>SAFI SK</span>
                            <span className="text-[#808080] text-xl md:text-2xl" style={{ fontFamily: 'var(--font-boring)' }}>s.r.o.</span>
                        </div>
                        <span className="text-white/60 font-medium text-[10px] md:text-xs uppercase tracking-[0.2em] font-sans -mt-1 md:-mt-2 ml-1">
                            Stavebný dozor
                        </span>
                    </Link>
                    <div className="flex gap-4 mt-2">
                        <Link href="https://www.facebook.com/people/SAFI-SK-sro-stavebn%C3%BD-dozor/61574890229909/?mibextid=wwXIfr&rdid=M9aA6XiAXlEYTGoQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Buy1fNfax%2F%3Fmibextid%3DwwXIfr" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-secondary transition-all">
                            <Facebook size={20} />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <h3 className="font-bold text-lg uppercase tracking-wider">NAVIGÁCIA</h3>
                    <nav className="flex flex-col gap-3">
                        <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm">Domov</Link>
                        <Link href="/#sluzby" className="text-white/60 hover:text-white transition-colors text-sm">Služby</Link>
                        <Link href="/realizacie" className="text-white/60 hover:text-white transition-colors text-sm">Referencie</Link>
                        <Link href="/partneri" className="text-white/60 hover:text-white transition-colors text-sm">Partneri</Link>
                    </nav>
                </div>

                <div className="flex flex-col gap-6">
                    <h3 className="font-bold text-lg uppercase tracking-wider">SLUŽBY</h3>
                    <nav className="flex flex-col gap-3">
                        <Link href="/vyhodnotenie-zavad-po-ukonceni-realizacii" className="text-white/60 hover:text-white transition-colors text-sm">Vyhodnotenie závad po ukončení realizácií</Link>
                        <Link href="/projektova-cinnost-stavebne-cenarstvo" className="text-white/60 hover:text-white transition-colors text-sm">Projekčná činnosť</Link>
                        <Link href="/stavebny-dozor" className="text-white/60 hover:text-white transition-colors text-sm">Stavebný dozor</Link>
                        <Link href="/inzinierska-cinnost-v-stavebnictve" className="text-white/60 hover:text-white transition-colors text-sm">Inžinierska činnosť v stavebníctve</Link>
                        <Link href="/management-v-stavebnictve" className="text-white/60 hover:text-white transition-colors text-sm">Management v stavebníctve</Link>
                    </nav>
                </div>

                <div className="flex flex-col gap-6">
                    <h3 className="font-bold text-lg uppercase tracking-wider">ADRESA</h3>
                    <div className="flex flex-col gap-2 text-white/60 text-sm">
                        <p>P. Pazmáňa 917,</p>
                        <p>927 05 Šaľa</p>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    <h3 className="font-bold text-lg uppercase tracking-wider">KONTAKT</h3>
                    <div className="flex flex-col gap-4 text-white/60 text-sm">
                        <div className="flex items-center gap-3">
                            <Mail size={18} className="text-secondary shrink-0" />
                            <a href="mailto:dozor.safi@gmail.com" className="hover:text-white transition-colors break-all">dozor.safi@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone size={18} className="text-secondary shrink-0" />
                            <a href="tel:+421918328940" className="hover:text-white transition-colors">+421 918 328 940</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone size={18} className="text-secondary shrink-0" />
                            <a href="tel:+421905234020" className="hover:text-white transition-colors">+421 905 234 020</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-[90%] md:container mx-auto md:px-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-[10px] md:text-xs">
                <p>© {new Date().getFullYear()} SAFI SK s.r.o. Všetky práva vyhradené.</p>
                <div className="flex gap-4">
                    <Link href="/ochrana-udajov" className="hover:text-white transition-colors">Ochrana osobných údajov</Link>
                    <button onClick={() => window.dispatchEvent(new Event('show-cookie-consent'))} className="hover:text-white transition-colors">Cookies</button>
                    <Link href="https://aebdigital.sk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Tvorba webu - AEB Digital</Link>
                </div>
            </div>
        </footer>
    );
}
