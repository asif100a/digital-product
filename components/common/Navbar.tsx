"use client";

import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [lastScrollY, setLastScrollY] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [lastScrollY]);

    return (
        <header className={`w-full h-auto px-6 lg:px-20 fixed top-0 left-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}>
            <nav className='container mx-auto bg-black text-white px-6 lg:px-0 py-4 flex justify-between items-center'>
                <div className="text-xl font-bold flex items-center space-x-2">
                    <span className="text-purple-400 text-2xl">⬤</span> {/* Logo Icon */}
                    <span>Fluid</span>
                </div>
                <ul className="hidden md:flex space-x-8 text-gray-300">
                    <li><a href="#" className="hover:text-white">Services</a></li>
                    <li><a href="#" className="hover:text-white">Testimonials</a></li>
                    <li><a href="#" className="hover:text-white">Pricing</a></li>
                    <li><a href="#" className="hover:text-white">Case Studies</a></li>
                    <li><a href="#" className="hover:text-white">FAQ</a></li>
                </ul>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md">
                    Book a call
                </button>
            </nav>
        </header>
    );
};

export default Navbar;