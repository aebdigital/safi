"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Team from "@/components/Team";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const homeGallery = [
  "/images/gallery-home-1.webp",
  "/images/gallery-home-2.webp",
  "/images/gallery-home-3.webp",
  "/images/gallery-home-4.webp",
  "/images/gallery-home-5.webp",
  "/images/gallery-home-6.webp",
  "/images/gallery-home-7.webp",
];

const homeCerts = [
  "/images/cert-home-1.webp",
  "/images/cert-home-2.webp",
  "/images/cert-home-3.webp",
  "/images/cert-home-4.webp",
];

export default function Home() {
  const [certIndex, setCertIndex] = useState(-1);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <Team />
      <Services />

      {/* Certificates Section (Moved to homepage) */}
      <section className="relative py-24 object-cover bg-center" style={{ backgroundImage: "url('/images/certifikaty.jpg')", backgroundSize: "cover" }}>
        <div className="absolute inset-0 bg-black/70 z-0" />
        <div className="container mx-auto px-6 md:px-12 text-center mb-16 relative z-10">
          <h2 className="text-4xl font-bold uppercase text-white tracking-widest mb-4">Naše certifikáty</h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto" />
        </div>

        <div className="container mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative z-10 pb-16">
          {homeCerts.map((cert, i) => (
            <div key={i} className={`p-4 flex items-center justify-center transition-all hover:scale-105 cursor-pointer ${(i === 1 || i === 3) ? 'md:translate-y-[70px]' : ''}`} onClick={() => setCertIndex(i)}>
              <Image
                src={cert}
                alt={`Certifikát ${i}`}
                width={500}
                height={700}
                className="w-full h-auto object-contain max-h-[400px] drop-shadow-md"
              />
            </div>
          ))}
        </div>

        {/* Lightbox for Certificates */}
        <Lightbox
          open={certIndex >= 0}
          close={() => setCertIndex(-1)}
          index={certIndex}
          slides={homeCerts.map(src => ({ src }))}
        />
      </section>

      {/* Homepage Gallery Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 md:px-12 text-center mb-16">
          <h2 className="text-4xl font-bold uppercase text-primary tracking-widest mb-4">Referencie</h2>
          <div className="w-20 h-1.5 bg-secondary mx-auto" />
        </div>

        <div className="flex overflow-hidden pb-12 w-full relative group whitespace-nowrap">
          <motion.div
            className="flex gap-4 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {[...homeGallery, ...homeGallery].map((src, i) => (
              <Link href="/realizacie" key={i} className="w-[300px] md:w-[400px] h-[300px] relative rounded-lg overflow-hidden shadow-lg flex-shrink-0 group/img block">
                <Image
                  src={src}
                  alt={`Referencia ${i}`}
                  fill
                  className="object-cover group-hover/img:scale-110 transition-transform duration-700"
                />
              </Link>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center">
          <Link
            href="/realizacie"
            className="bg-secondary text-white px-12 py-4 rounded-md font-bold hover:bg-secondary/90 transition-all uppercase tracking-widest"
          >
            VŠETKY REFERENCIE
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
