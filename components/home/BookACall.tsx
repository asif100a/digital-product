import Image from 'next/image';
import React from 'react';

const BookACall = () => {
    return (
        <section className="bg-black text-white py-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Left Content */}
                <div className="md:w-1/2 space-y-6">
                    <button className="px-4 py-1.5 text-sm font-medium bg-gray-900 rounded-full shadow-md">
                        Book a call
                    </button>
                    <h2 className="text-4xl font-bold">
                        Book a 15 mins call to
                        <br />chat with us
                    </h2>
                    <p className="text-gray-400">
                        Schedule a quick call to discover how our team&apos;s blend of innovative design and cutting-edge technology can transform your business.
                    </p>
                    {/* Stats Grid */}
                    <div className="flex flex-wrap gap-6 mt-4">
                        <div>
                            <h3 className="text-3xl font-bold">90%</h3>
                            <p className="text-gray-400">Client retention</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold">100%</h3>
                            <p className="text-gray-400">Deadlines met</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold">150+</h3>
                            <p className="text-gray-400">Projects Delivered</p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 relative">
                    <div className="rounded-xl overflow-hidden shadow-lg border border-gray-800 bg-gray-900">
                        <div className="relative">
                            {/* Neon Glow Effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-green-500 blur-lg opacity-50"></div>
                            <Image
                                src="/your-image-path.jpg"
                                width={500}
                                height={800}
                                alt="Dashboard UI"
                                className="relative z-10 rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookACall;