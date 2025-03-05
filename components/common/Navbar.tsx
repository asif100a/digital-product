import React from 'react';

const Navbar = () => {
    return (
        <header className="bg-black text-white px-6 lg:px-20 py-4 flex justify-between items-center">
            <div className="text-xl font-bold flex items-center space-x-2">
                <span className="text-purple-400 text-2xl">⬤</span> {/* Logo Icon */}
                <span>Fluid</span>
            </div>
            <nav className="hidden md:flex space-x-8 text-gray-300">
                <a href="#" className="hover:text-white">Services</a>
                <a href="#" className="hover:text-white">Testimonials</a>
                <a href="#" className="hover:text-white">Pricing</a>
                <a href="#" className="hover:text-white">Case Studies</a>
                <a href="#" className="hover:text-white">FAQ</a>
            </nav>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md">
                Book a call
            </button>
        </header>
    );
};

export default Navbar;