"use client";

import { Send } from "lucide-react";

export default function ContactForm() {
    return (
        <form className="bg-white p-12 rounded-2xl shadow-xl flex flex-col gap-8 border-b-8 border-secondary w-full max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold uppercase text-primary tracking-tight mb-4 text-center">Kontaktný formulár</h3>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2 flex-grow">
                    <label className="text-dark/60 font-bold text-xs uppercase tracking-widest">Meno a priezvisko</label>
                    <input type="text" placeholder="Vaše meno" className="bg-[#f8f9fa] border-none p-4 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all" />
                </div>
                <div className="flex flex-col gap-2 flex-grow">
                    <label className="text-dark/60 font-bold text-xs uppercase tracking-widest">E-mail</label>
                    <input type="email" placeholder="vas@email.sk" className="bg-[#f8f9fa] border-none p-4 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all" />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-dark/60 font-bold text-xs uppercase tracking-widest">Telefón</label>
                <input type="tel" placeholder="+421 9XX XXX XXX" className="bg-[#f8f9fa] border-none p-4 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all" />
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-dark/60 font-bold text-xs uppercase tracking-widest">Vaša správa</label>
                <textarea placeholder="Sem napíšte Vašu správu..." rows={6} className="bg-[#f8f9fa] border-none p-4 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all resize-none" />
            </div>

            <button className="bg-secondary text-white py-5 rounded-xl font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-secondary/90 transition-all text-lg shadow-lg hover:translate-y-[-2px]">
                ODOSLAŤ SPRÁVU
                <Send size={22} />
            </button>
        </form>
    );
}
