import React from 'react';

const Hero = () => {
    return (
        <section className="bg-black text-white text-center py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <span className="bg-gray-900 text-sm text-green-400 px-4 py-1 rounded-full mb-4 inline-block">
                    🔵 2/5 spots available
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mt-2">
                    Web & Digital Product <br /> Design Agency
                </h1>
                <p className="text-gray-400 mt-4">
                    From Web Design to Product Development and Marketing, your One-Stop Shop for bringing your startup idea to life.
                </p>
                <div className="mt-6 flex justify-center space-x-4">
                    <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-300">
                        See our work
                    </button>
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
                        Services
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;