import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inkfree = localFont({
  src: "../../public/fonts/Inkfree.ttf",
  variable: "--font-handwritten",
});

const boring = localFont({
  src: "../../public/fonts/BORing.ttf",
  variable: "--font-boring",
});

export const metadata: Metadata = {
  title: "SAFI SK | Stavebný dozor Šaľa",
  description: "Zabezpečíme komplexný servis pre Vaše stavby od roku 2015.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body className={`${poppins.variable} ${dmSans.variable} ${inkfree.variable} ${boring.variable} font-sans antialiased`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
