"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const logos = [
    "/logo1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
];

const LogoMarquee = () => {
    return (
        <div className="relative w-full overflow-hidden bg-black py-10">
            {/* First Row - Top Diagonal */}
            <motion.div
                className="absolute -rotate-6 left-0 w-full flex space-x-8"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                }}
            >
                {[...logos, ...logos].map((logo, index) => (
                    <Image
                        key={index}
                        src={logo}
                        width={128}
                        height={128}
                        alt="Partner logo"
                        className="w-32 h-auto opacity-80"
                    />
                ))}
            </motion.div>

            {/* Second Row - Bottom Diagonal */}
            <motion.div
                className="absolute rotate-6 bottom-0 left-0 w-full flex space-x-8"
                animate={{ x: ["-100%", "0%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 10,
                    ease: "linear",
                }}
            >
                {[...logos, ...logos].map((logo, index) => (
                    <Image
                        key={index}
                        src={logo}
                        width={128}
                        height={128}
                        alt="Partner logo"
                        className="w-32 h-auto opacity-80"
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default LogoMarquee;
