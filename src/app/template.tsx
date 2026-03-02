"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";

export default function Template({ children }: { children: React.ReactNode }) {
    const lenis = useLenis();

    useEffect(() => {
        if (lenis) {
            // Any specific lenis logic if needed
        }
    }, [lenis]);

    return (
        <ReactLenis root>
            <AnimatePresence mode="wait">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </ReactLenis>
    );
}
