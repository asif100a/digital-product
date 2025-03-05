import Image from "next/image";
import React from "react";

const Showcase = () => {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Transform Interactions with <br /> AI & Data-Driven Insights
        </h2>
      </div>

      {/* Showcase Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Dashboard Card */}
        <div className="bg-gray-900 p-4 rounded-xl border-4 border-green-500 shadow-lg">
          <div className="bg-black p-4 rounded-lg">
            <Image
              src="/dashboard-mockup.png" 
              width={800}
              height={500}
              alt="Dashboard Preview"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* AI Solution Card */}
        <div className="bg-gray-900 p-4 rounded-xl border-4 border-purple-500 shadow-lg">
          <div className="bg-black p-4 rounded-lg">
            <Image
              src="/ai-mockup.png" 
              width={800}
              height={500}
              alt="AI Solution Preview"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-10">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-md text-lg hover:bg-purple-700 transition">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default Showcase;