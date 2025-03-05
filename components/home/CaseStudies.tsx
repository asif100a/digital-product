import Image from "next/image";
import React from "react";

const CaseStudies: React.FC = () => {
    return (
        <section className="bg-black py-16 px-6 text-white text-center">
            <div className="max-w-5xl mx-auto">
                {/* Small Tag */}
                <button className="px-4 py-1.5 text-sm font-medium bg-gray-800 rounded-full shadow-md mb-4">
                    Case studies
                </button>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Showcasing Our Expertise</h2>

                {/* Description */}
                <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                    From intuitive web design to innovative product development and strategic marketing, we bring each client&apos;s vision to life.
                </p>

                {/* Case Study Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Case Study 1 */}
                    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-lg transition-transform transform hover:scale-105">
                        <div className="rounded-lg overflow-hidden border-4 border-teal-500 shadow-md">
                            <Image
                                src="/images/case-study-1.jpg"
                                width={500}
                                height={700}
                                alt="Bound Teal"
                                className="w-full"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mt-4">Bound Teal</h3>
                        <p className="text-gray-400">Website design and development, branding</p>
                        <button className="mt-4 px-4 py-2 text-sm font-medium bg-gray-800 hover:bg-gray-700 transition duration-300 rounded-lg border border-gray-700">
                            See case study
                        </button>
                    </div>

                    {/* Case Study 2 */}
                    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-lg transition-transform transform hover:scale-105">
                        <div className="rounded-lg overflow-hidden border-4 border-orange-500 shadow-md">
                            <Image
                                src="/images/case-study-2.jpg"
                                width={500}
                                height={700}
                                alt="Bound Orange"
                                className="w-full"
                            />
                        </div>
                        <h3 className="text-xl font-semibold mt-4">Bound Orange</h3>
                        <p className="text-gray-400">Website design and development, branding</p>
                        <button className="mt-4 px-4 py-2 text-sm font-medium bg-gray-800 hover:bg-gray-700 transition duration-300 rounded-lg border border-gray-700">
                            See case study
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
