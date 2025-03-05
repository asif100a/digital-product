import Image from 'next/image';
import React from 'react';

const Services = () => {
    return (
        <section>
            <div className="w-full flex justify-center">
                <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                    Services
                </button>
            </div>

            {/* Website Design & Development */}
            <div className="bg-black text-white py-16 px-6 md:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                    {/* Left Content */}
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-4xl font-bold">
                            Website Design & <br /> Development
                        </h2>
                        <p className="text-gray-400">
                            Our team specializes in creating customized solutions that meet your business objectives.
                        </p>

                        {/* Services List */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "Responsive Design",
                                "E-Commerce",
                                "Custom CMS",
                                "Web Apps",
                                "SEO",
                                "Maintenance",
                            ].map((service) => (
                                <button
                                    key={service}
                                    className="bg-gray-900 px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
                                >
                                    {service}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src="/website-mockup.png" // Change to actual image path
                                alt="Website Mockup"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                            <div className="absolute inset-0 bg-teal-500 opacity-20 blur-xl"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* UI/UX Design & Product Development */}
            <div className="bg-black text-white py-16 px-6 md:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-between">
                    {/* Left Content */}
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-4xl font-bold">
                            UI/UX Design & <br /> Product Development
                        </h2>
                        <p className="text-gray-400">
                            We focus on creating intuitive interfaces that drive successful interactions.
                        </p>

                        {/* Services List */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "UI Design",
                                "UX Design",
                                "User Research",
                                "Prototyping",
                                "Usability Testing",
                                "Interaction Design",
                            ].map((service) => (
                                <button
                                    key={service}
                                    className="bg-gray-900 px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
                                >
                                    {service}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src="/website-mockup.png" // Change to actual image path
                                alt="Website Mockup"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                            <div className="absolute inset-0 bg-teal-500 opacity-20 blur-xl"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Branding Strategy & Custom Content */}
            <div className="bg-black text-white py-16 px-6 md:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                    {/* Left Content */}
                    <div className="lg:w-1/2 space-y-6">
                        <h2 className="text-4xl font-bold">
                            Branding Strategy & <br /> Custom Content
                        </h2>
                        <p className="text-gray-400">
                            We focus on creating memorable brand identities and compelling content that differentiates you from competitors.
                        </p>

                        {/* Services List */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "Brand Identity",
                                "Brand Positioning",
                                "Content Strategy",
                                "Copywriting",
                                "Social Media",
                                "Brand Guidelines",
                            ].map((service) => (
                                <button
                                    key={service}
                                    className="bg-gray-900 px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
                                >
                                    {service}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
                        <div className="relative rounded-xl overflow-hidden">
                            <Image
                                src="/website-mockup.png" // Change to actual image path
                                alt="Website Mockup"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                            <div className="absolute inset-0 bg-teal-500 opacity-20 blur-xl"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* See our works and Book a call Buttons */}
            <div className="w-full flex justify-center gap-5">
                <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">See our works</button>
                <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">Book a call</button>
            </div>
        </section>
    );
};

export default Services;