import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import { CheckCircle2, ChevronRight } from "lucide-react";

interface ServiceProps {
    title: string;
    description: string;
    points: string[];
    image: string;
}

export default function ServicePage({ title, description, points, image }: ServiceProps) {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Modern Hero for Service */}
            <section className="relative h-[48vh] flex items-center justify-center overflow-hidden pt-24">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover brightness-[0.4]"
                />
                <div className="container mx-auto px-6 md:px-12 relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest mb-4 drop-shadow-xl">{title}</h1>
                    <div className="w-24 h-1.5 bg-secondary mx-auto mb-8" />
                    <div className="flex items-center justify-center gap-2 text-sm uppercase tracking-widest opacity-80">
                        <a href="/" className="hover:text-secondary transition-colors">Domov</a>
                        <ChevronRight size={16} />
                        <a href="/#sluzby" className="hover:text-secondary transition-colors">Služby</a>
                        <ChevronRight size={16} />
                        <span className="text-secondary">{title}</span>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative w-full drop-shadow-2xl flex items-center justify-center">
                    <Image
                        src="/images/small+service.png"
                        alt="Notebook background"
                        width={700}
                        height={900}
                        className="w-full h-auto drop-shadow-lg"
                    />
                    <div className="absolute inset-0 pt-16 px-10 md:pt-24 md:px-20 flex flex-col gap-2 notebook-text font-handwritten text-[#0047AB] pointer-events-none">
                        <div className="absolute top-10 right-10 md:top-16 md:right-16 flex items-baseline gap-2">
                            <span className="text-[#558333] text-xl md:text-2xl" style={{ fontFamily: 'var(--font-boring)' }}>SAFI SK</span>
                            <span className="font-bold font-sans text-[10px] md:text-xs tracking-widest text-[#0047AB] uppercase">Stavebný dozor</span>
                        </div>
                        <h2 className="text-xl md:text-3xl lg:text-4xl pb-2 text-[#0047AB] border-b border-[#0047AB]/20 leading-tight mt-12 md:mt-8">
                            {title}
                        </h2>
                        <p className="text-xs md:text-sm lg:text-base leading-relaxed opacity-90 text-[#0047AB] font-semibold mt-2">
                            {description}
                        </p>
                        <div className="grid grid-cols-1 gap-y-2 mt-4">
                            {points.map((p, i) => (
                                <div key={i} className="flex items-start gap-2 text-[#0047AB]">
                                    <CheckCircle2 size={16} className="text-[#0047AB] shrink-0 mt-0.5" />
                                    <span className="font-bold text-xs md:text-sm leading-tight">{p}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex w-full justify-center">
                    <ContactForm />
                </div>
            </section>

            <Footer />
        </main>
    );
}
