import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Building2, HardHat, Ruler, FileSearch, ClipboardCheck } from "lucide-react";

const allServices = [
    {
        title: "MANAGEMENT V STAVEBNÍCTVE",
        icon: <Building2 className="w-12 h-12" />,
        bg: "/images/services/management-v-stavebnictve.webp",
        href: "/management-v-stavebnictve"
    },
    {
        title: "STAVEBNÝ DOZOR",
        icon: <HardHat className="w-12 h-12" />,
        bg: "/images/services/Stavebny-dozor.webp",
        href: "/stavebny-dozor"
    },
    {
        title: "INŽINIERSKA ČINNOSŤ V STAVEBNÍCTVE",
        icon: <Ruler className="w-12 h-12" />,
        bg: "/images/services/Inzinierska-cinnost.webp",
        href: "/inzinierska-cinnost-v-stavebnictve"
    },
    {
        title: "VYHODNOTENIE ZÁVAD PO UKONČENÍ",
        icon: <FileSearch className="w-12 h-12" />,
        bg: "/images/services/Vyhodnotenie-zavad.webp",
        href: "/vyhodnotenie-zavad-po-ukonceni-realizacii"
    },
    {
        title: "PROJEKČNÁ ČINNOSŤ",
        icon: <ClipboardCheck className="w-12 h-12" />,
        bg: "/images/services/Stavebny-dozor.webp",
        href: "/projektova-cinnost-stavebne-cenarstvo"
    },
];

interface ServiceProps {
    title: string;
    description: string;
    points: string[];
    image: string;
    currentHref: string;
}

export default function ServicePage({ title, description, points, image, currentHref }: ServiceProps) {
    const otherServices = allServices.filter(s => s.href !== currentHref);

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
                <div className="w-[90%] md:container mx-auto md:px-12 relative z-10 text-center text-white">
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
            <section className="w-[90%] md:container mx-auto md:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative w-full drop-shadow-2xl flex flex-col">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/images/small+service.png"
                            alt="Notebook background"
                            fill
                            className="object-fill md:object-contain drop-shadow-lg"
                        />
                    </div>
                    <div className="relative z-10 pt-16 px-10 pb-16 md:pt-24 md:px-20 md:pb-24 flex flex-col gap-2 notebook-text font-handwritten text-[#0047AB]">
                        <div className="absolute top-8 right-8 md:top-16 md:right-16 flex items-baseline gap-2">
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

            {/* Other Services Section */}
            <section className="bg-[#f8f9fa] py-24">
                <div className="w-[90%] md:container mx-auto md:px-12 text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase text-primary tracking-widest mb-4">
                        Ďalšie služby
                    </h2>
                    <div className="w-20 h-1.5 bg-secondary mx-auto" />
                </div>

                <div className="w-[90%] md:container mx-auto md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {otherServices.map((service, index) => (
                        <Link
                            key={index}
                            href={service.href}
                            className="group relative w-full h-[400px] rounded-lg overflow-hidden flex flex-col items-center justify-end p-8 text-center block"
                        >
                            <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
                                <Image
                                    src={service.bg}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500 z-10" />
                            </div>

                            <div className="relative z-20 flex flex-col items-center gap-6 text-white transition-colors duration-500">
                                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-full group-hover:bg-secondary/80 transition-all text-white">
                                    {service.icon}
                                </div>
                                <h3 className="font-bold text-xl uppercase tracking-tighter leading-[1.2]">
                                    {service.title}
                                </h3>
                                <span className="underline opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-sm font-bold uppercase tracking-widest inline-block">
                                    VIAC INFO
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
