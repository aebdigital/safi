"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const servicesLinks = [
    { label: "Management v stavebníctve", href: "/management-v-stavebnictve" },
    { label: "Stavebný dozor", href: "/stavebny-dozor" },
    { label: "Inžinierska činnosť", href: "/inzinierska-cinnost-v-stavebnictve" },
    { label: "Vyhodnotenie závad", href: "/vyhodnotenie-zavad-po-ukonceni-realizacii" },
    { label: "Projektová činnosť", href: "/projektova-cinnost-stavebne-cenarstvo" }
];

const navLinks = [
    { label: "Domov", href: "/" },
    { label: "Služby", href: "/#sluzby", hasDropdown: true },
    { label: "Referencie", href: "/realizacie" },
    { label: "Partneri", href: "/partneri" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-3" : "bg-white/80 py-5"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link href="/" className="flex items-baseline gap-3 md:gap-5">
                    <div className="flex items-baseline gap-1 md:gap-3">
                        <span className="text-[#558333] text-5xl md:text-6xl lg:text-[5rem] leading-[0.8]" style={{ fontFamily: 'var(--font-boring)' }}>SAFI SK</span>
                        <span className="text-[#808080] text-3xl md:text-4xl lg:text-5xl leading-[0.8]" style={{ fontFamily: 'var(--font-boring)' }}>s.r.o.</span>
                    </div>
                    <span className="text-gray-500 font-bold mt-2 md:mt-0 text-[10px] md:text-sm lg:text-base uppercase tracking-[0.2em] font-sans">
                        Stavebný dozor
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div key={link.label} className="relative group" onMouseEnter={() => link.hasDropdown && setShowServicesDropdown(true)} onMouseLeave={() => link.hasDropdown && setShowServicesDropdown(false)}>
                            <Link
                                href={link.href}
                                className="text-dark font-medium hover:text-primary transition-colors uppercase text-sm tracking-widest flex items-center gap-1"
                            >
                                {link.label}
                                {link.hasDropdown && <Menu size={14} className="opacity-50" />}
                            </Link>

                            {/* Dropdown Menu */}
                            {link.hasDropdown && showServicesDropdown && (
                                <div className="absolute top-full left-0 pt-2 w-64 z-50">
                                    <div className="bg-white shadow-xl rounded-lg py-3 flex flex-col border border-gray-100">
                                        {servicesLinks.map((service) => (
                                            <Link
                                                key={service.href}
                                                href={service.href}
                                                className="px-5 py-3 text-sm text-dark hover:text-primary hover:bg-gray-50 transition-colors uppercase tracking-wider relative group"
                                            >
                                                <span className="relative z-10">{service.label}</span>
                                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-left"></div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <Link
                        href="/kontakt"
                        className="bg-secondary text-white px-8 py-3 rounded-md font-bold hover:bg-secondary/90 transition-colors uppercase text-sm tracking-widest"
                    >
                        KONTAKT
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-dark" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={`fixed inset-0 top-[80px] bg-white z-40 flex flex-col items-center py-10 gap-6 transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-dark text-xl font-medium uppercase tracking-widest"
                    >
                        {link.label}
                    </Link>
                ))}
                <Link
                    href="/kontakt"
                    onClick={() => setIsOpen(false)}
                    className="bg-secondary text-white px-10 py-4 rounded-md font-bold uppercase tracking-widest mt-4"
                >
                    KONTAKT
                </Link>
            </div>
        </nav>
    );
}
