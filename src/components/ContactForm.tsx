"use client";

import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setMessage(data.message || "Vaša správa bola úspešne odoslaná. Budeme Vás kontaktovať.");
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setStatus("error");
                setMessage(data.error || "Nepodarilo sa odoslať správu. Skúste to prosím neskôr.");
            }
        } catch (error) {
            setStatus("error");
            setMessage("Vyskytla sa chyba pri pripájaní k serveru.");
        }
    };

    if (status === "success") {
        return (
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-6 border-b-8 border-secondary w-full max-w-2xl mx-auto text-center min-vh-[400px]">
                <CheckCircle2 size={80} className="text-secondary mb-2" />
                <h3 className="text-3xl font-bold uppercase text-primary">Ďakujeme!</h3>
                <p className="text-dark/80 text-lg leading-relaxed">{message}</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all uppercase tracking-widest text-sm"
                >
                    Poslať ďalšiu správu
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 md:p-12 rounded-2xl shadow-xl flex flex-col gap-6 md:gap-8 border-b-8 border-secondary w-full max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold uppercase text-primary tracking-tight mb-4 text-center">Kontaktný formulár</h3>

            {status === "error" && (
                <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-lg flex items-center gap-3 text-sm">
                    <AlertCircle size={20} />
                    {message}
                </div>
            )}

            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2 flex-grow">
                    <label className="text-dark/60 font-bold text-xs uppercase tracking-widest">Meno a priezvisko</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Vaše meno"
                        className="bg-[#f8f9fa] border-none p-4 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                </div>
                <div className="flex flex-col gap-2 flex-grow">
                    <label className="text-dark/60 font-bold text-xs uppercase tracking-widest">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="vas@email.sk"
                        className="bg-[#f8f9fa] border-none p-4 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-dark/60 font-bold text-xs uppercase tracking-widest">Telefón</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+421 9XX XXX XXX"
                    className="bg-[#f8f9fa] border-none p-4 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-dark/60 font-bold text-xs uppercase tracking-widest">Vaša správa</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Sem napíšte Vašu správu..."
                    rows={6}
                    className="bg-[#f8f9fa] border-none p-4 rounded-lg focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                />
            </div>

            <button
                disabled={status === "loading"}
                className="bg-secondary text-white py-5 rounded-xl font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-secondary/90 transition-all text-lg shadow-lg hover:translate-y-[-2px] disabled:opacity-70 disabled:hover:translate-y-0"
            >
                {status === "loading" ? (
                    <>
                        ODOSIELAM...
                        <Loader2 size={22} className="animate-spin" />
                    </>
                ) : (
                    <>
                        ODOSIELŤ SPRÁVU
                        <Send size={22} />
                    </>
                )}
            </button>
        </form>
    );
}
