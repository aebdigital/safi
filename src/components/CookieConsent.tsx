"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [showManage, setShowManage] = useState(false);

    const [preferences, setPreferences] = useState({
        necessary: true,
        analytics: true,
        marketing: true,
    });

    useEffect(() => {
        // Obey show event
        const handleShow = () => {
            setShowManage(true);
        };
        window.addEventListener('show-cookie-consent', handleShow);

        // Check initial state
        const stored = localStorage.getItem("cookie_consent");
        if (!stored) {
            setIsVisible(true);
        }

        return () => window.removeEventListener('show-cookie-consent', handleShow);
    }, []);

    const handleAcceptAll = () => {
        setPreferences({ necessary: true, analytics: true, marketing: true });
        localStorage.setItem("cookie_consent", "all");
        setIsVisible(false);
        setShowManage(false);
    };

    const handleSavePreferences = () => {
        localStorage.setItem("cookie_consent", JSON.stringify(preferences));
        setIsVisible(false);
        setShowManage(false);
    };

    if (!isVisible && !showManage) return null;

    if (showManage) {
        return (
            <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
                <div className="bg-white text-black p-8 rounded-xl shadow-2xl max-w-lg w-full relative">
                    <button
                        onClick={() => setShowManage(false)}
                        className="absolute right-4 top-4 text-gray-500 hover:text-black transition-colors"
                    >
                        <X size={24} />
                    </button>
                    <h2 className="text-2xl font-bold mb-6">Nastavenie cookies</h2>

                    <div className="flex flex-col gap-6 mb-8">
                        {/* Necessary */}
                        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                            <div>
                                <h3 className="font-bold">Nevyhnutné cookies</h3>
                                <p className="text-sm text-gray-500">Zabezpečujú základnú funkčnosť stránky.</p>
                            </div>
                            <div className="relative inline-block w-12 h-6 rounded-full bg-primary/50 cursor-not-allowed">
                                <div className="absolute top-1 left-7 w-4 h-4 rounded-full bg-white transition-all"></div>
                            </div>
                        </div>

                        {/* Analytics */}
                        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                            <div>
                                <h3 className="font-bold">Štatistické cookies</h3>
                                <p className="text-sm text-gray-500">Pomáhajú nám pochopiť, ako návštevníci používajú stránku.</p>
                            </div>
                            <button
                                onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                                className={`relative inline-block w-12 h-6 rounded-full transition-colors ${preferences.analytics ? 'bg-primary' : 'bg-gray-300'}`}
                            >
                                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${preferences.analytics ? 'left-7' : 'left-1'}`}></div>
                            </button>
                        </div>

                        {/* Marketing */}
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-bold">Marketingové cookies</h3>
                                <p className="text-sm text-gray-500">Na prispôsobenie reklamy na iných stránkach.</p>
                            </div>
                            <button
                                onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                                className={`relative inline-block w-12 h-6 rounded-full transition-colors ${preferences.marketing ? 'bg-primary' : 'bg-gray-300'}`}
                            >
                                <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${preferences.marketing ? 'left-7' : 'left-1'}`}></div>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <button
                            onClick={handleSavePreferences}
                            className="w-full bg-primary text-white font-bold py-3 rounded-md hover:bg-primary/90 transition-colors"
                        >
                            ULOŽIŤ NASTAVENIA
                        </button>
                        <button
                            onClick={handleAcceptAll}
                            className="w-full bg-gray-200 text-black font-bold py-3 rounded-md hover:bg-gray-300 transition-colors"
                        >
                            PRIJAŤ VŠETKY
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-6 z-[90] shadow-2xl animate-in slide-in-from-bottom-5">
            <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-black text-sm md:text-base">
                    Tento web používa súbory cookies na poskytovanie služieb a analýzu návštevnosti.
                    Viac informácií nájdete v <Link href="/ochrana-udajov" className="underline hover:text-primary transition-colors">Zásadách ochrany osobných údajov</Link>.
                </div>
                <div className="flex items-center gap-4 shrink-0">
                    <button
                        onClick={() => setShowManage(true)}
                        className="px-5 py-2.5 text-black border border-gray-300 hover:bg-gray-100 font-medium rounded-md transition-colors whitespace-nowrap"
                    >
                        Spravovať
                    </button>
                    <button
                        onClick={handleAcceptAll}
                        className="px-6 py-2.5 text-white bg-black hover:bg-black/80 font-medium rounded-md transition-colors whitespace-nowrap"
                    >
                        Rozumiem a prijať
                    </button>
                </div>
            </div>
        </div>
    );
}
